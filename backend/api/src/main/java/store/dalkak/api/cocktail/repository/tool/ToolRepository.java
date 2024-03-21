package store.dalkak.api.cocktail.repository.tool;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;

@Repository
public interface ToolRepository extends JpaRepository<Ingredient, Long> {

}
