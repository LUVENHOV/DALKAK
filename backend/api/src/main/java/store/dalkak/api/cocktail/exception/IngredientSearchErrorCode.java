package store.dalkak.api.cocktail.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum IngredientSearchErrorCode implements ErrorCode {
    FAIL_TO_FIND_INGREDIENT(400,"INGREDIENT_01","검색한 재료가 존재하지 않습니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;


}
