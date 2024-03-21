package store.dalkak.api.user.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;

@Getter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CocktailDto {
    Long id;
    String name;
    String koreanName;
    String image;
    Integer heartCount;

    @Builder
    public CocktailDto(Long id, String name, String koreanName, String image, Integer heartCount) {
        this.id = id;
        this.name = name;
        this.koreanName = koreanName;
        this.image = image;
        this.heartCount = heartCount;
    }
}
