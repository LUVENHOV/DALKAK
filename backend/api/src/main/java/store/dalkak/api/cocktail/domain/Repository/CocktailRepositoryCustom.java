package store.dalkak.api.cocktail.domain.Repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.dalkak.api.cocktail.domain.Cocktail;

public interface CocktailRepositoryCustom {

    Page<Cocktail> searchCocktailsByOption(
        Pageable page, String cocktailName, List<Long> ingredients, Long base, Integer alcoholContent, Long color, Integer sweetness,
        Integer difficulty, Long gender, Integer orderBy);
}
