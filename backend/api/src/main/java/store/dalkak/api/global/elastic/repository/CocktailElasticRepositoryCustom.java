package store.dalkak.api.global.elastic.repository;

import java.util.List;
import store.dalkak.api.global.elastic.dto.CocktailDocument;

public interface CocktailElasticRepositoryCustom {
    List<CocktailDocument> findAllByDate(Long nowMili, Long oneWeekAgo);
}
