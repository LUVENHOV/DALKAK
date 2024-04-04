package store.dalkak.api.cocktail.exception;

import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.exception.ErrorCode;

public class CocktailException extends DalkakException {

    public CocktailException(ErrorCode errorCode) {
        super(errorCode);
    }

}
