package store.dalkak.api.global.jwt.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum JwtErrorCode implements ErrorCode {
    INVALID_TOKEN(401, "JWT_01", "유효하지 않은 토큰입니다."),
    TOKEN_TIMEOUT(401, "JWT_02", "토큰의 유효기간이 지났습니다"),
    LOGOUT(401, "JWT_03", "로그아웃 되었습니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

}
