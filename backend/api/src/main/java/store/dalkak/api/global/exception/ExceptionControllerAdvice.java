package store.dalkak.api.global.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import store.dalkak.api.global.exception.dto.ExceptionResDto;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(DalkakException.class)
    public ResponseEntity<ExceptionResDto> handleException(DalkakException e) {
        int statusCode = e.getStatusCode();
        ExceptionResDto response = ExceptionResDto.from(e.getMessage());

        return ResponseEntity.status(statusCode).body(response);
    }

}
