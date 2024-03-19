package store.dalkak.api.custom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.custom.domain.Custom;

public interface CustomRepository extends JpaRepository<Custom, Long>, CustomRepositoryCustom {
    Custom findCustomById(Long customCocktailId);

    void deleteCustomById(Long customCocktailId);
}
