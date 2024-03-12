package store.dalkak.api.global.oauth.service;

import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;

public interface OauthService {

    OauthLoginResDto login(OauthLoginReqDto oauthLoginReqDto);
    String sub(OauthLoginReqDto oauthLoginReqDto);
}
