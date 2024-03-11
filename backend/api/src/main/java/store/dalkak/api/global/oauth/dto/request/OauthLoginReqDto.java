package store.dalkak.api.global.oauth.dto.request;

import lombok.Getter;
import store.dalkak.api.user.domain.embed.Provider;

@Getter
public class OauthLoginReqDto {
    String code;
    String state;
    Provider provider;
}
