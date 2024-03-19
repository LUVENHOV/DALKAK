package store.dalkak.api.cocktail.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;

public interface CocktailRepositoryCustom {

    Page<CocktailFindResDto> findCocktailsByOption(
        Pageable page, String cocktailName, List<Long> ingredients, Long base, Integer alcoholContent, Long color, Integer sweetness,
        Integer orderBy);
}
