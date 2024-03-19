package store.dalkak.api.cocktail.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Cocktail;

public interface CocktailRepository extends JpaRepository<Cocktail, Long>, CocktailRepositoryCustom {
    Cocktail findCocktailById(Long cocktailId);
}
