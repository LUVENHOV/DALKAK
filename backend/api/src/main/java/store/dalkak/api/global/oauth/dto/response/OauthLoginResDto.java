package store.dalkak.api.global.oauth.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class OauthLoginResDto {
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpiresIn;
    private Long refreshTokenExpiresIn;
    private String nickname;
    private Long id;
    private Boolean survey_completion;


    @Builder
    public OauthLoginResDto(String accessToken, String refreshToken, Long accessTokenExpiresIn, Long refreshTokenExpiresIn, String nickname, Long id, Boolean survey_completion) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
        this.refreshTokenExpiresIn = refreshTokenExpiresIn;
        this.nickname = nickname;
        this.id = id;
        this.survey_completion=survey_completion;
    }

}

