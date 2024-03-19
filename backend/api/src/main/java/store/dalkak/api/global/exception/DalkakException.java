package store.dalkak.api.global.exception;

import lombok.Getter;

@Getter
public class DalkakException extends RuntimeException{
    private final int statusCode;
    private final String errorCode;
    private final String message;

    public DalkakException(ErrorCode errorCode){
        this.statusCode=errorCode.getStatusCode();
        this.errorCode=errorCode.getErrorCode();
        this.message=errorCode.getMessage();
    }
}
