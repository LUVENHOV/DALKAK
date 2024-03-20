package store.dalkak.api.cocktail.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;
import store.dalkak.api.cocktail.domain.Cocktail;

@Getter
@Builder
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CocktailFindResDto {

    private Long cocktailId;
    private String cocktailName;
    private String cocktailKrName;
    private String cocktailImage;
    private Integer heartCount;

}
