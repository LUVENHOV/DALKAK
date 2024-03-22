package store.dalkak.api.custom.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum CustomErrorCode implements ErrorCode {
    FAIL_TO_FIND_CUSTOM(404,"COCKTAIL_01","커스텀 레시피가 존재하지 않습니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;

}