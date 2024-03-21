package store.dalkak.api.custom.domain;

import java.util.List;

public interface CustomRepositoryCustom {
    void modifyCustomIngredients(Custom custom, List<CustomIngredient> customIngredientList);
}
