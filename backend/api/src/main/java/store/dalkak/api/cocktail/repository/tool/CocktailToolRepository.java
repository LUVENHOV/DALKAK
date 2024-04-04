package store.dalkak.api.cocktail.repository.tool;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.tool.CocktailTool;

@Repository
public interface CocktailToolRepository extends JpaRepository<CocktailTool, Long> {

    List<CocktailTool> findAllByCocktail(Cocktail cocktail);

}