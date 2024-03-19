package store.dalkak.api.cocktail.dto.response;

import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CocktailFindListResDto {

    private List<CocktailFindResDto> cocktailFindResDtoList;
    private Long nextCursor;

    public CocktailFindListResDto(List<CocktailFindResDto> cocktailFindResDtoList, Long nextCursor) {
        this.cocktailFindResDtoList = cocktailFindResDtoList;
        this.nextCursor = nextCursor;
    }

}
