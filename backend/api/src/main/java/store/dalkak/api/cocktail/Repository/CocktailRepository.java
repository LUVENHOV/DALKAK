package store.dalkak.api.cocktail.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.user.dto.CocktailDto;

public interface CocktailRepository extends JpaRepository<Cocktail, Long>, CocktailRepositoryCustom {
}
