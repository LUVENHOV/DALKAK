package store.dalkak.api.global.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import store.dalkak.api.global.exception.dto.ExceptionResponse;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(DalkakException.class)
    public ResponseEntity<ExceptionResponse> handleException(DalkakException e) {
        int statusCode = e.getStatusCode();
        ExceptionResponse response = ExceptionResponse.from(e.getMessage());

        return ResponseEntity.status(statusCode).body(response);
    }

}
