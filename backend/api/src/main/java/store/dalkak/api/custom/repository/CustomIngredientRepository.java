package store.dalkak.api.custom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.domain.CustomIngredient;
import store.dalkak.api.custom.dto.CustomIngredientDto;

public interface CustomIngredientRepository extends JpaRepository<CustomIngredient, Long>, CustomIngredientCustom {
    void deleteCustomIngredientById(Long customIngredientId);
}
