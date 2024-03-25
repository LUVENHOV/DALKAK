package store.dalkak.api.custom.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import store.dalkak.api.cocktail.dto.CocktailDto;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.dto.CustomIngredientDetailDto;
import store.dalkak.api.custom.dto.CustomIngredientDto;
import store.dalkak.api.user.dto.UserDto;

@Getter
@Builder
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CustomDetailResDto {

    List<CustomIngredientDetailDto> customIngredients;
    private UserDto user;
    private CocktailDto originCocktail;
    private Long id;
    private String name;
    private String image;
    private String recipe;
    private String summary;
    private String comment;
    private Boolean open;

    public static CustomDetailResDto of(Custom custom, UserDto userDto, CocktailDto cocktail, List<CustomIngredientDetailDto> ingredients) {

        return CustomDetailResDto.builder()
            .user(userDto)
            .originCocktail(cocktail)
            .id(custom.getId())
            .name(custom.getName())
            .image(custom.getImage())
            .recipe(custom.getRecipe())
            .summary(custom.getSummary())
            .comment(custom.getComment())
            .open(custom.getOpen())
            .customIngredients(ingredients)
            .build();
    }
}


