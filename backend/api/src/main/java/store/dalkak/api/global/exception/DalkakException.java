package store.dalkak.api.global.exception;

import lombok.Getter;

@Getter
public class DalkakException extends RuntimeException{
    private final int statusCode;
    private final String errorCode;
    private final String message;

    public DalkakException(ErrorCode code){
        this.statusCode=code.getStatusCode();
        this.errorCode=code.getErrorCode();
        this.message=code.getMessage();
    }
}
