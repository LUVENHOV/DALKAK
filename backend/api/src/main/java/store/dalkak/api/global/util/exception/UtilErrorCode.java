package store.dalkak.api.global.util.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum UtilErrorCode implements ErrorCode {
    DECODE_ERROR(500, "UTIL_01", "디코딩 과정에서 오류가 발생했습니다."),
    ID_TOKEN_FAIL_VERIFY(500, "UTIL_02", "아이디 토큰 인증과정에서 오류가 있습니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
