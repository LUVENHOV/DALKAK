package store.dalkak.api.cocktail.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum CocktailErrorCode implements ErrorCode {
    FAIL_TO_FIND_COCKTAIL(404,"COCKTAIL_01","검색 결과가 존재하지 않습니다."),
//    FAIL_TO_FIND_PAGE(400,"COCKTAIL_02","해당 페이지가 존재하지 않습니다."),
    FAIL_TO_FIND_INGREDIENT(404,"INGREDIENT_01","검색한 재료가 존재하지 않습니다.");
//    FAIL_TO_FIND_HEART_MEMBER(404, "HEART_MEMBER_01", "좋아요한 사용자가 존재하지 않습니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;


}
