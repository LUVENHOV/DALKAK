package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class NaverService implements ProviderService {
    @Value("${google.auth_base_url}")
    private String authBaseUrl;
    @Value("${google.client_id}")
    private String clientId;
    @Value("${google.redirect_uri}")
    private String redirectUri;
    @Value("${google.client_secret}")
    private String clientSecret;
    @Override
    public String userInfo(String token) {
        return null;
    }

    @Override
    public String userAuth(String code) {
        return null;
    }
}
