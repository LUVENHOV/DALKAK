package store.dalkak.api.cocktail.repository.tool;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;

public interface ToolRepository extends JpaRepository<Ingredient, Long> {

}
