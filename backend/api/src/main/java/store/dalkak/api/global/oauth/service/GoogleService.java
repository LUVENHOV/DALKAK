package store.dalkak.api.global.oauth.service;

import static store.dalkak.api.global.util.DecodeUtil.payloadDecoder;
import static store.dalkak.api.global.util.DecodeUtil.urlDecoder;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.global.exception.DalkakErrorCode;
import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.oauth.dto.GoogleUserAuthDto;

@Service
@Slf4j
@RequiredArgsConstructor
public class GoogleService implements ProviderService {

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
        String jwtPayload = token.split("\\.")[1];
        return payloadDecoder(jwtPayload);
    }

    @Override
    public String userAuth(String code) {

        // webclient로 통신해서 access token, refresh token받아오기
        WebClient webClient = WebClient.builder()
            .baseUrl(authBaseUrl)
            .build();

        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("grant_type", "authorization_code");
        formData.add("client_id", clientId);
        formData.add("redirect_uri", redirectUri);
        formData.add("client_secret", clientSecret);
        formData.add("code", urlDecoder(code));

        try {
            GoogleUserAuthDto googleUserAuthDto = webClient
                .post()
                .bodyValue(formData)
                .retrieve()
                .bodyToMono(GoogleUserAuthDto.class)
                .block();
            return googleUserAuthDto.getIdToken();
        } catch (Exception e) {
            throw new DalkakException(DalkakErrorCode.INTERNAL_SERVER_ERROR);
        }
    }
}
