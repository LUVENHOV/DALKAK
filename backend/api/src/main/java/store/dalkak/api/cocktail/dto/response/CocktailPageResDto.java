package store.dalkak.api.cocktail.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CocktailPageResDto {

    private List<CocktailFindResDto> cocktails;
    private Long totalElements;
    private Integer totalPage;
    private Integer currentPage;

}
