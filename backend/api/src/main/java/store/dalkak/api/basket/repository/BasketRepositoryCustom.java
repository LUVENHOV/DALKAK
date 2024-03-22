package store.dalkak.api.basket.repository;

import java.util.List;
import store.dalkak.api.cocktail.dto.IngredientDto;

public interface BasketRepositoryCustom {

    List<IngredientDto> findBasketIngredients(Long memberId);

}
