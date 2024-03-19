package store.dalkak.api.user.dto.response;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.util.List;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.user.dto.CustomCocktailDto;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class UserLoadCustomRecipeListResDto {
    List<CustomCocktailDto> custom_cocktails;
    Integer totalCount;
    Integer totalPage;
    Integer currentPage;

    @Builder
    public UserLoadCustomRecipeListResDto(List<CustomCocktailDto> custom_cocktails,
        Integer totalCount,
        Integer totalPage, Integer currentPage) {
        this.custom_cocktails = custom_cocktails;
        this.totalCount = totalCount;
        this.totalPage = totalPage;
        this.currentPage = currentPage;
    }
}
