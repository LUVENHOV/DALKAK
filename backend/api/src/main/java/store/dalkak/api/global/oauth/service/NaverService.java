package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.global.exception.DalkakErrorCode;
import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.oauth.dto.NaverUserAuthDto;
import store.dalkak.api.global.oauth.dto.NaverUserInfoDto;

@Service
@Slf4j
@RequiredArgsConstructor
public class NaverService implements ProviderService {

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
        WebClient webClient = WebClient.builder()
            .baseUrl(infoBaseUrl)
            .defaultHeader("Authorization", "Bearer " + token)
            .build();
        NaverUserInfoDto naverUserInfoDto = webClient.get().retrieve()
            .bodyToMono(NaverUserInfoDto.class).block();
        return naverUserInfoDto.getResponse().getId();

    }

    @Override
    public String userAuth(String code) {
        WebClient webClient = WebClient.builder()
            .baseUrl(authBaseUrl)
            .build();

        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("grant_type", "authorization_code");
        formData.add("client_id", clientId);
        formData.add("redirect_uri", redirectUri);
        formData.add("client_secret", clientSecret);
        formData.add("state", state);
        formData.add("code", code);
        try {
            NaverUserAuthDto naverUserAuthDto = webClient
                .post()
                .bodyValue(formData)
                .retrieve()
                .bodyToMono(NaverUserAuthDto.class)
                .block();
            return naverUserAuthDto.getAccessToken();
        } catch (Exception e) {
            log.info("{}",e.getMessage());
            e.printStackTrace();
            throw new DalkakException(DalkakErrorCode.INTERNAL_SERVER_ERROR);
        }
    }
}
