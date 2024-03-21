package store.dalkak.api.basket.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class BasketException extends DalkakException {

    public BasketException(ErrorCode errorCode) {
        super(errorCode);
    }
}
