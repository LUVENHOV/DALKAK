package store.dalkak.api.cocktail.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum CocktailErrorCode implements ErrorCode {
    FAIL_TO_FIND_COCKTAIL(400,"COCKTAIL_01","검색결과가 존재하지 않습니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;


}
