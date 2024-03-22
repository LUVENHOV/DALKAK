package store.dalkak.api.basket.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum BasketIngredientAddErrorCode implements ErrorCode {
    ALREADY_BASKET_ADDED_ERROR_CODE(400,"Basket_02","이미 위시리스트에 담겨있는 재료입니다."); //example
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
