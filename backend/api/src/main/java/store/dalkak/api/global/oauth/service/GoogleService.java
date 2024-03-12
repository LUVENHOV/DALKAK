package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class GoogleService implements ProviderService{

    @Value("${naver.client_id}")
    private String clientId;
    @Value("${naver.redirect_uri}")
    private String redirectUri;
    @Value("${naver.client_secret}")
    private String clientSecret;
    @Value("${naver.state}")
    private String state;
    @Value("${naver.auth_base_url}")
    private String authBaseUrl;
    @Value("${naver.info_base_url}")
    private String infoBaseUrl;
    @Override
    public String userInfo(String token) {
        return null;
    }

    @Override
    public String userAuth(String code) {
        return null;
    }
}
