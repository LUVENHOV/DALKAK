package store.dalkak.api.recommend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum RecommendErrorCode implements ErrorCode {
    EXAMPLE_ERROR(500,"RECOMMEND_01","에러메세지");
    private final int statusCode;
    private final String errorCode;
    private final String message;

}
