package store.dalkak.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.user.domain.SurveyCocktail;

@Repository
public interface SurveyCocktailRepository extends JpaRepository<SurveyCocktail,Long> {

}
