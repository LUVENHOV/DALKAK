package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class KakaoService implements ProviderService{
    @Value("${kakao.client_id}")
    private String clientId;
    @Value("${kakao.redirect_uri}")
    private String redirectUri;
    @Value("${kakao.auth_base_url}")
    private String authBaseUrl;

    @Override
    public String userInfo(String token) {
        return null;
    }

    @Override
    public String userAuth(String code) {
        return null;
    }
}
