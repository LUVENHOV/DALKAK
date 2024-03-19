package store.dalkak.api.global.oauth.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class OauthException extends DalkakException {

    public OauthException(ErrorCode errorCode) {
        super(errorCode);
    }
}
