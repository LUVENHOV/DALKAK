package store.dalkak.api.user.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CustomCocktailDto {
    Long id;
    String image;
    String name;
    String summary;
    UserDto user;

    @Builder
    public CustomCocktailDto(Long id, String image, String name, String summary, UserDto user) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.summary = summary;
        this.user = user;
    }
}
