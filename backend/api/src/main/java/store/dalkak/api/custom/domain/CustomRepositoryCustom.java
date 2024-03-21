package store.dalkak.api.custom.domain;

import java.util.List;
import store.dalkak.api.cocktail.dto.CocktailCustomDto;

public interface CustomRepositoryCustom {

    List<CocktailCustomDto> findAllByCocktailId(Long cocktailId);

    void modifyCustomIngredients(Custom custom, List<CustomIngredient> customIngredientList);
}
