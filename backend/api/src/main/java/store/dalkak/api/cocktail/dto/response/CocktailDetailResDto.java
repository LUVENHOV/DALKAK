package store.dalkak.api.cocktail.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import store.dalkak.api.custom.dto.response.CustomDetailResDto;

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
    private Integer alcoholContent;
    private Integer cocktailSweetness;
    private String cocktailRecipe;
    List<IngredientResDto> cocktailIngredients;
    List<ToolResDto> cocktailTools;
    List<CustomDetailResDto> customCocktails;

}
