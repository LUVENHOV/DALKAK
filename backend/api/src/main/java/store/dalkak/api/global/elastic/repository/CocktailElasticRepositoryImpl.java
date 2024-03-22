package store.dalkak.api.global.elastic.repository;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Criteria;
import org.springframework.data.elasticsearch.core.query.CriteriaQuery;
import org.springframework.stereotype.Repository;
import store.dalkak.api.global.elastic.dto.CocktailDocument;

@Repository
@RequiredArgsConstructor
public class CocktailElasticRepositoryImpl implements CocktailElasticRepositoryCustom {

    private final ElasticsearchOperations elasticsearchOperations;
    @Override
    public List<CocktailDocument> findAllByDate(Long nowMili, Long oneWeekAgo) {

        Criteria criteria = new Criteria("time_mili")
            .greaterThanEqual(oneWeekAgo)
            .lessThanEqual(nowMili);
        CriteriaQuery query = new CriteriaQuery(criteria);

        Sort sort = Sort.by(Sort.Direction.ASC, "time_mili");

        query.addSort(sort);

        return elasticsearchOperations
            .search(query, CocktailDocument.class)
            .stream()
            .map(SearchHit::getContent)
            .toList();
    }
}
