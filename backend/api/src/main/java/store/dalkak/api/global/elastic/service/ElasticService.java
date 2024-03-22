package store.dalkak.api.global.elastic.service;

import java.util.List;
import store.dalkak.api.global.elastic.dto.CocktailDocument;
import store.dalkak.api.global.elastic.dto.ElasticViewReqDto;

public interface ElasticService {
    void createElasticLog(ElasticViewReqDto elasticViewReqDto);

    List<CocktailDocument> findAllElasticLog();
}
