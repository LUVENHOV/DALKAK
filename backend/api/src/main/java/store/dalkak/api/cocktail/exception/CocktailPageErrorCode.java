package store.dalkak.api.cocktail.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum CocktailPageErrorCode implements ErrorCode {
    FAIL_TO_FIND_PAGE(400,"COCKTAIL_02","해당 페이지가 존재하지 않습니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;


}
