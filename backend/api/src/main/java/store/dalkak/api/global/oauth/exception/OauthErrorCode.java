package store.dalkak.api.global.oauth.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;
@Getter
@AllArgsConstructor
public enum OauthErrorCode implements ErrorCode {
    FAIL_TO_GET_INFO(400,"OAUTH_01","유효하지 사용자입니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;

}
