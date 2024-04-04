package store.dalkak.api.recommend.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class RecommendException extends DalkakException {

    public RecommendException(ErrorCode errorCode) {
        super(errorCode);
    }
}
