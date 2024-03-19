package store.dalkak.api.cocktail.domain.Repository.ingredient;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient;
import store.dalkak.api.cocktail.service.CocktailIngredientService;

public interface CocktailIngredientRepository extends JpaRepository<CocktailIngredient, Long> {

    List<CocktailIngredient> findAllByCocktail(Cocktail cocktail);

}
