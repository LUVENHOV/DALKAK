package store.dalkak.api.global.elastic.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.global.elastic.dto.ElasticDto;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ElasticServiceImpl implements ElasticService {

    private final RestHighLevelClient client;

    @Override
    public List<ElasticDto> findAllElasticLog() {
        ObjectMapper objectMapper = new ObjectMapper();

        Long weekMili = 604_800_000L;
        Long nowMili = System.currentTimeMillis();
        Long oneWeekAgo = nowMili - weekMili;
        List<ElasticDto> viewLogList = new ArrayList<>();
        try {
            SearchRequest searchRequest = new SearchRequest("view-log");
            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

            searchSourceBuilder.query(
                QueryBuilders.boolQuery()
                    .must(QueryBuilders.matchQuery("log_name", "view-log"))
                    .filter(QueryBuilders.rangeQuery("message_content")
                        .gt(oneWeekAgo).lt(nowMili))
            );
            searchRequest.source(searchSourceBuilder);
            SearchResponse searchResponse = client.search(searchRequest, RequestOptions.DEFAULT);

            // 검색 결과 처리
            Arrays.stream(searchResponse.getHits().getHits())
                .forEach(hit -> {
                    try {
                        // 히트의 소스를 JsonNode로 파싱
                        JsonNode jsonNode = objectMapper.readTree(hit.getSourceAsString());
                        // 필요한 필드 추출
                        String logName = jsonNode.path("log_name").asText();
                        Long cocktailId = Long.parseLong(jsonNode.path("cocktail_id").asText());

                        viewLogList.add(new ElasticDto(cocktailId, logName));
                        // 추출한 값 로깅
                    } catch (Exception e) {
                        log.error("Error parsing hit source", e);
                    }
                });
        } catch (IOException e) {
            log.error("Error find hit source", e);
        }
        return viewLogList;
    }
}
