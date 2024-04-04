package store.dalkak.api.refrigerator.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class RefrigeratorException extends DalkakException {

    public RefrigeratorException(ErrorCode errorCode) {
        super(errorCode);
    }
}
