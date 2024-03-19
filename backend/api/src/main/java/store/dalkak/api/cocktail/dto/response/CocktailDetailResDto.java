package store.dalkak.api.cocktail.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.dto.ToolDto;
import store.dalkak.api.custom.dto.CocktailCustomDto;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class CocktailDetailResDto {

    private Long cocktailId;
    private String cocktailName;
    private String cocktailKrName;
    private String cocktailImage;
    private Integer heartCount;
    private Integer viewCount;
    private Integer alcoholContent;
    private Integer cocktailSweetness;
    private String cocktailRecipe;
    List<IngredientDto> cocktailIngredients;
    List<ToolDto> cocktailTools;
    List<CocktailCustomDto> customCocktails;
}


