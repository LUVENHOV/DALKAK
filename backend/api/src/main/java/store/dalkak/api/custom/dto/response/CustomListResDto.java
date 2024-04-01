package store.dalkak.api.custom.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import store.dalkak.api.custom.dto.CustomCocktailDto;

@Getter
@Builder
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CustomListResDto {

    private String cocktailName;
    List<CustomCocktailDto> customCocktails;
    private Integer currentPage;
    private Integer totalPage;
    private Long totalElements;
}
