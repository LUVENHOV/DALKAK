package store.dalkak.api.custom.repository;

import java.util.List;
import store.dalkak.api.custom.domain.CustomIngredient;
import store.dalkak.api.custom.dto.CustomIngredientModifyDto;

public interface CustomIngredientCustom {

    void ModifyCustomIngredient(CustomIngredientModifyDto customIngredientModifyDto);

    void deleteCustomIngredeintsByCustomId(Long customCocktailId);
}
