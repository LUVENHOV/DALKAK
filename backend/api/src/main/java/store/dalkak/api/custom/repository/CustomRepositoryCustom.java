package store.dalkak.api.custom.repository;

import store.dalkak.api.custom.dto.CustomModifyDto;

public interface CustomRepositoryCustom {

//    void modifyCustomIngredients(Custom custom, List<CustomIngredient> customIngredientList);

    void modifyCustomCocktail(Long customCocktailId, CustomModifyDto customModifyDto);


}
