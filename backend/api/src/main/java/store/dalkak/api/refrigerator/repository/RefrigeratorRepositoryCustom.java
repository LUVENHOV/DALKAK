package store.dalkak.api.refrigerator.repository;

import java.util.List;
import store.dalkak.api.cocktail.dto.IngredientDto;

public interface RefrigeratorRepositoryCustom {

    List<IngredientDto> findRefIngredients(Long memberId);

}
