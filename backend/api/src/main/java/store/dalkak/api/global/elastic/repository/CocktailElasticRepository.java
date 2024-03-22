package store.dalkak.api.global.elastic.repository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import store.dalkak.api.global.elastic.dto.CocktailDocument;

public interface CocktailElasticRepository extends ElasticsearchRepository<CocktailDocument, String>, CocktailElasticRepositoryCustom {

}
