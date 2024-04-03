package store.dalkak.api.global.elastic.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.action.search.ClearScrollRequest;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchScrollRequest;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.Scroll;
import org.elasticsearch.search.SearchHit;
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
    public List<ElasticDto> findAllElasticLog(String type, String logType) {

        Long weekMili = type.equals("week") ? 604_800_000L : 86_400_000L;
        Long nowMili = System.currentTimeMillis();
        Long oneWeekAgo = nowMili - weekMili;
        List<ElasticDto> logList = new ArrayList<>();
        final Scroll scroll = new Scroll(TimeValue.timeValueMinutes(1L));
        String scrollId = null;
        try {
            SearchRequest searchRequest = new SearchRequest(logType);
            searchRequest.scroll(scroll);
            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

            searchSourceBuilder.query(
                QueryBuilders.boolQuery()
                    .must(QueryBuilders.matchQuery("log_name.keyword", logType))
                    .filter(QueryBuilders.rangeQuery("message_content")
                        .gte(oneWeekAgo)
                        .lte(nowMili)
                        .format("epoch_millis")) // 시간 형식 지정
            );
            searchSourceBuilder.size(100);
            searchRequest.source(searchSourceBuilder);

            SearchResponse searchResponse = client.search(searchRequest, RequestOptions.DEFAULT);
            scrollId = searchResponse.getScrollId();
            SearchHit[] searchHits = searchResponse.getHits().getHits();

            processSearchHits(searchHits, logList);
            while (searchHits != null && searchHits.length > 0) {
                SearchScrollRequest scrollRequest = new SearchScrollRequest(scrollId);
                scrollRequest.scroll(scroll);
                searchResponse = client.scroll(scrollRequest, RequestOptions.DEFAULT);
                scrollId = searchResponse.getScrollId();
                searchHits = searchResponse.getHits().getHits();
                // 다음 배치 처리
                processSearchHits(searchHits, logList);
            }

        } catch (IOException e) {
        } finally {
            // Scroll 컨텍스트 정리
            if (scrollId != null) {
                ClearScrollRequest clearScrollRequest = new ClearScrollRequest();
                clearScrollRequest.addScrollId(scrollId);
                try {
                    client.clearScroll(clearScrollRequest, RequestOptions.DEFAULT);
                } catch (IOException e) {
                }
            }
        }
        return logList;
    }

    private void processSearchHits(SearchHit[] searchHits, List<ElasticDto> logList) {
        ObjectMapper objectMapper = new ObjectMapper();
        for (SearchHit hit : searchHits) {
            try {
                // 히트의 소스를 JsonNode로 파싱
                JsonNode jsonNode = objectMapper.readTree(hit.getSourceAsString());
                // 필요한 필드 추출
                String logName = jsonNode.path("log_name").asText();
                Long cocktailId = Long.parseLong(jsonNode.path("cocktail_id").asText());

                logList.add(new ElasticDto(cocktailId, logName));
                // 추출한 값 로깅
            } catch (Exception e) {
            }
        }
    }
}
