package store.dalkak.api.cocktail.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;
import store.dalkak.api.cocktail.domain.Cocktail;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class CocktailFindResDto {

    private Long cocktailId;
    private String cocktailName;
    private String cocktailImage;
    private Integer heartCount;

    public static Page<CocktailFindResDto> toDtoList(Page<Cocktail> cocktails) {
        return cocktails.map(m ->
            CocktailFindResDto.builder()
                .cocktailId(m.getId())
                .cocktailName(m.getName())
                .cocktailImage(m.getImage())
                .heartCount(m.getHeartCount())
                .build());
    }

}
