package store.dalkak.api.user.domain.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserRefreshResDto {
    private String accessToken;
    private Long accessTokenExpiresIn;
    private Long id;

    @Builder
    public UserRefreshResDto(String accessToken, Long accessTokenExpiresIn, Long id) {
        this.accessToken = accessToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
        this.id = id;
    }
}