package store.dalkak.api.custom.repository;

import store.dalkak.api.custom.dto.CustomIngredientModifyDto;

public interface CustomIngredientCustom {

    void ModifyCustomIngredient(CustomIngredientModifyDto customIngredientModifyDto);

    void deleteCustomIngredeintsByCustomId(Long customCocktailId);
}
