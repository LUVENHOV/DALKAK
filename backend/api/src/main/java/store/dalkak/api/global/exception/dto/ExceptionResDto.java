package store.dalkak.api.global.exception.dto;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ExceptionResDto {


    private final String message;

    public static ExceptionResDto from(String message) {
        return new ExceptionResDto(message);
    }

}
