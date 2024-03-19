package store.dalkak.api.custom.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.ingredient.Unit;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomIngredientModifyDto {
    Long customCocktailId;
    Double amount;
    Unit unit;
}
