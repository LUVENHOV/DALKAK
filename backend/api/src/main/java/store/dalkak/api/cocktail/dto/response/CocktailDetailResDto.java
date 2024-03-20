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
import store.dalkak.api.cocktail.dto.CocktailCustomDto;

@Getter
@Builder
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CocktailDetailResDto {

    List<CocktailIngredientDto> cocktailIngredients;
    List<ToolDto> cocktailTools;
    List<CocktailCustomDto> customCocktails;
    private Long cocktailId;
    private String cocktailName;
    private String cocktailKrName;
    private String cocktailImage;
    private Integer heartCount;
    private Integer viewCount;
    private Integer alcoholContent;
    private Integer cocktailSweetness;
    private String cocktailRecipe;

    public static CocktailDetailResDto of(Cocktail cocktail,
        List<CocktailIngredientDto> ingredients, List<ToolDto> tools,
        List<CocktailCustomDto> customCocktails) {

        return CocktailDetailResDto.builder()
            .cocktailIngredients(ingredients)
            .cocktailTools(tools)
            .customCocktails(customCocktails)
            .cocktailId(cocktail.getId())
            .cocktailName(cocktail.getName())
            .cocktailKrName(cocktail.getKrName())
            .cocktailImage(cocktail.getImage())
            .heartCount(cocktail.getHeartCount())
            .viewCount(cocktail.getViewCount())
            .alcoholContent(cocktail.getAlcohol())
            .cocktailSweetness(cocktail.getSweetness())
            .cocktailRecipe(cocktail.getRecipe())
            .build();
    }
}


