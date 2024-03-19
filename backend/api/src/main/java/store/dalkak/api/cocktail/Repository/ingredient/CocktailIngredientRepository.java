package store.dalkak.api.cocktail.Repository.ingredient;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.ingredient.CocktailIngredient;

public interface CocktailIngredientRepository extends JpaRepository<CocktailIngredient, Long> {

    List<CocktailIngredient> findAllByCocktail(Cocktail cocktail);

}
