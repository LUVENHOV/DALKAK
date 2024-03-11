package store.dalkak.api.global.jwt.dto;

import lombok.Builder;

@Builder
public class TokenDto {
    private String token;
    private long expired;
}
