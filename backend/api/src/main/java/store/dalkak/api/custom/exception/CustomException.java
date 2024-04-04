package store.dalkak.api.custom.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class CustomException extends DalkakException {

    public CustomException(ErrorCode errorCode) {
        super(errorCode);
    }

}
