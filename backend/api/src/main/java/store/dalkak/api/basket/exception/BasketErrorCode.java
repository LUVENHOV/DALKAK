package store.dalkak.api.basket.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum BasketErrorCode implements ErrorCode {
    REFRIGERATOR_ERROR_CODE(400,"Ref_01","저장되지 않은 재료입니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
