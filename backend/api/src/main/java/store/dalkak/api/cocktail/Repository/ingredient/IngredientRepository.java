package store.dalkak.api.cocktail.Repository.ingredient;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Ingredient.Ingredient;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

}
