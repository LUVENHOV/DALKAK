package store.dalkak.api.global.jwt.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class TokenDto {
    private String token;
    private long expired;
}
