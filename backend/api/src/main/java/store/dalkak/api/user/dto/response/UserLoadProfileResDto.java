package store.dalkak.api.user.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.time.LocalDate;
import java.util.List;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.dto.CocktailDto;
import store.dalkak.api.custom.dto.CustomCocktailDto;
import store.dalkak.api.user.domain.embed.Gender;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class UserLoadProfileResDto {

    Long id;
    String nickname;
    LocalDate birthDate;
    Gender gender;
    List<CocktailDto> heartCocktails;
    List<CustomCocktailDto> customCocktails;

    @Builder
    public UserLoadProfileResDto(Long id, String nickname, LocalDate birthDate, Gender gender,
        List<CocktailDto> heartCocktails, List<CustomCocktailDto> customCocktails) {
        this.id = id;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.gender = gender;
        this.heartCocktails = heartCocktails;
        this.customCocktails = customCocktails;
    }
}
