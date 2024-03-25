package store.dalkak.api.custom.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.domain.CustomIngredient;

public interface CustomIngredientRepository extends JpaRepository<CustomIngredient, Long>, CustomIngredientCustom {
    void deleteCustomIngredientById(Long customIngredientId);

    List<CustomIngredient> findAllByCustom(Custom targetCustom);
}
