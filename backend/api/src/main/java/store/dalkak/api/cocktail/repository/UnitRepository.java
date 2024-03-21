package store.dalkak.api.cocktail.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.ingredient.Unit;

public interface UnitRepository extends JpaRepository<Unit, Long> {
    Unit findUnitById(Long unitId);
}
