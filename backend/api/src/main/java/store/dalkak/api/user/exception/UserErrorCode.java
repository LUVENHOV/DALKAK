package store.dalkak.api.user.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum UserErrorCode implements ErrorCode {
    INVALID_TOKEN(409,"JWT_01","유효하지 않은 토큰입니다."); //example
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
