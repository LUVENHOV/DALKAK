package store.dalkak.api.global.response;

import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ApiResponse<T> {

    private int code;
    private List<String> messages;
    private T data;

    public ApiResponse(int code, List<String> message) {
        this.code = code;
        this.messages = message;
    }

    public static <T> ApiResponse<T> of(int code, T data) {
        return new ApiResponse<>(code, List.of("요청 성공"), data);
    }

    public static <T> ApiResponse<T> of(int code, List<String> messages) {
        return new ApiResponse<>(code, messages);
    }

    public static <T> ApiResponse<T> of(HttpStatus code, T data) {
        return new ApiResponse<>(code.value(), null, data);
    }

    public static <T> ApiResponse<T> of(HttpStatus code, List<String> messages, T data) {
        return new ApiResponse<>(code.value(), messages, data);
    }

    public static ApiResponse<?> fail(int code, List<String> messages) {
        return new ApiResponse<>(code, messages);
    }

    public static ApiResponse<?> fail(HttpStatus code, List<String> messages) {
        return new ApiResponse<>(code.value(), messages);
    }
}
