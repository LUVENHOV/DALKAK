package store.dalkak.api.cocktail.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.dto.CocktailIngredientDto;
import store.dalkak.api.cocktail.dto.ToolDto;
import store.dalkak.api.custom.dto.CustomCocktailDto;

@Getter
@Builder
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CocktailDetailResDto {

    private Long id;
    private String name;
    private String koreanName;
    private String image;
    private Integer heartCount;
    private Integer viewCount;
    private Integer alcoholContent;
    private Integer sweetness;
    private String recipe;
    private Boolean heart;
    List<CocktailIngredientDto> cocktailIngredients;
    List<ToolDto> cocktailTools;
    List<CustomCocktailDto> customCocktails;

    public static CocktailDetailResDto of(Cocktail cocktail,
        List<CocktailIngredientDto> ingredients, List<ToolDto> tools,
        List<CustomCocktailDto> customCocktails, Boolean heart) {

        return CocktailDetailResDto.builder()
            .id(cocktail.getId())
            .name(cocktail.getName())
            .koreanName(cocktail.getKrName())
            .image(cocktail.getImage())
            .heartCount(cocktail.getHeartCount())
            .viewCount(cocktail.getViewCount())
            .alcoholContent(cocktail.getAlcohol())
            .sweetness(cocktail.getSweetness())
            .recipe(cocktail.getRecipe())
            .cocktailIngredients(ingredients)
            .cocktailTools(tools)
            .customCocktails(customCocktails)
            .heart(heart)
            .build();
    }
}


