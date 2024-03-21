package store.dalkak.api.user.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class UserException extends DalkakException {

    public UserException(ErrorCode errorCode) {
        super(errorCode);
    }
}
