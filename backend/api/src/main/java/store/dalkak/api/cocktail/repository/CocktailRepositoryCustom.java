package store.dalkak.api.cocktail.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.dto.CocktailDto;
@Repository
public interface CocktailRepositoryCustom {

    Page<CocktailDto> findCocktailsByOption(
        Pageable page, String cocktailName, List<Long> ingredients, Long base,
        Integer minAlcoholContent, Integer maxAlcoholContent, Long color, Integer sweetness,
        Integer orderBy);

    void modifyHeartCount(Long cocktailId, int count);

    void modifyViewCount(Long cocktailId, int count);
}
