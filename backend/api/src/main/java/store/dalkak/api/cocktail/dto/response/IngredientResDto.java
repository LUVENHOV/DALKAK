package store.dalkak.api.cocktail.dto.response;

import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.Ingredient.Unit;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IngredientResDto {
    private Long ingredientId;
    private String ingredientName;
    private String ingredientImage;
    private Double ingredientAmount;
    private List<Unit> ingredientUnit;
}
