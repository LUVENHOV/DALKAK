package store.dalkak.api.custom.repository;

import java.util.List;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.domain.CustomIngredient;
import store.dalkak.api.custom.dto.CustomModifyDto;

public interface CustomRepositoryCustom {
    void modifyCustomIngredients(Custom custom, List<CustomIngredient> customIngredientList);

    void modifyCustomCocktail(Long customCocktailId, CustomModifyDto customModifyDto);
}
