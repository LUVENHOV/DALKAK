package store.dalkak.api.global.oauth.service;

import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;

public interface OauthService {

    String login(OauthLoginReqDto oauthLoginReqDto);
    String sub(OauthLoginReqDto oauthLoginReqDto);
}
