package store.dalkak.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.Occasion;

@Repository
public interface OccasionRepository extends JpaRepository<Occasion, Long> {

}
