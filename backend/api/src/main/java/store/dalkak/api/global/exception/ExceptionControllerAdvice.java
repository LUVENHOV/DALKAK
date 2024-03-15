package store.dalkak.api.global.exception;

import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import store.dalkak.api.global.exception.dto.ExceptionResDto;
import store.dalkak.api.global.response.ApiResponse;

@Slf4j
@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(DalkakException.class)
    public ResponseEntity<ApiResponse<?>> handleException(DalkakException e) {
        List<String> errors = new ArrayList<>();
        errors.add(e.getMessage());
        ExceptionResDto response = ExceptionResDto.from(e.getMessage());
        ApiResponse<?> ErrorResponse = ApiResponse.fail(e.getStatusCode(), errors);
        return ResponseEntity.status(e.getStatusCode()).body(ErrorResponse);
    }

    //@Valid 예외
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<?>> handleException(MethodArgumentNotValidException e){
        List<String> errors = new ArrayList<>();
        e.getBindingResult().getFieldErrors().forEach(error -> {
            errors.add(error.getDefaultMessage());
        });
        ApiResponse<?> ErrorResponse = ApiResponse.fail(HttpStatus.BAD_REQUEST,errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorResponse);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiResponse<?>> handleException(HttpRequestMethodNotSupportedException e){
        List<String> errors = new ArrayList<>();
        errors.add(e.getMessage());
        ApiResponse<?> ErrorResponse = ApiResponse.fail(HttpStatus.METHOD_NOT_ALLOWED,errors);
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(ErrorResponse);
    }


}
