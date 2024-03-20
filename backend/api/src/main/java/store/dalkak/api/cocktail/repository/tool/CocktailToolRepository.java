package store.dalkak.api.cocktail.repository.tool;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.tool.CocktailTool;

public interface CocktailToolRepository extends JpaRepository<CocktailTool, Long> {

    List<CocktailTool> findAllByCocktail(Cocktail cocktail);

}