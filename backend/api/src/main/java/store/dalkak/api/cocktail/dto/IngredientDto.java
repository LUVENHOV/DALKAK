package store.dalkak.api.cocktail.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.ingredient.Unit;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IngredientDto {
    private Long ingredientId;
    private String ingredientName;
    private String ingredientImage;
    private Double ingredientAmount;
    private Unit ingredientUnit;
}
