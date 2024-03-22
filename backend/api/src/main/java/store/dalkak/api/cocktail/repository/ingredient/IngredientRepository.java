package store.dalkak.api.cocktail.repository.ingredient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    Ingredient findIngredientById(Long ingredientId);
}
