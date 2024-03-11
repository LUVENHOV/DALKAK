package store.dalkak.api.global.exception.dto;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ExceptionResponse {


    private final String message;

    public static ExceptionResponse from(String message) {
        return new ExceptionResponse(message);
    }

}
