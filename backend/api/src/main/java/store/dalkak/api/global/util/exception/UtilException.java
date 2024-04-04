package store.dalkak.api.global.util.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class UtilException extends DalkakException {

    public UtilException(ErrorCode errorCode) {
        super(errorCode);
    }
}
