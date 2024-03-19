package store.dalkak.api.global.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum DalkakErrorCode implements ErrorCode{
    INTERNAL_SERVER_ERROR(500,"GLOBAL_500","서버 에러"); //example
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
