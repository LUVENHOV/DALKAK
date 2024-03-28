package store.dalkak.api.recommend.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.dto.CocktailDto;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RefrigeratorRecommendResDto {

    List<CocktailDto> refrigeratorRecommendCocktails;
}
