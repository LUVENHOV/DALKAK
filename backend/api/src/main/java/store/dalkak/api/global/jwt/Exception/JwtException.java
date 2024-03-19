package store.dalkak.api.global.jwt.Exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class JwtException extends DalkakException{

    public JwtException(ErrorCode errorCode) {
        super(errorCode);
    }
}
