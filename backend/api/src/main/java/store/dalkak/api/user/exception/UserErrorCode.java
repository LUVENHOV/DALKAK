package store.dalkak.api.user.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum UserErrorCode implements ErrorCode {
    NICKNAME_EXISTS(409,"JWT_01","존재하는 닉네임 입니다."); //example
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
