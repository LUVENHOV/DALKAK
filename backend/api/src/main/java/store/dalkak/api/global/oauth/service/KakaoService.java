package store.dalkak.api.global.oauth.service;

import static store.dalkak.api.global.util.VerifyUtil.kakaoIdTokenVerify;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.global.exception.DalkakErrorCode;
import store.dalkak.api.global.exception.DalkakException;
import store.dalkak.api.global.oauth.dto.KakaoUserAuthDto;

@Service
@Slf4j
@RequiredArgsConstructor
public class KakaoService implements ProviderService {

    @Value("${kakao.client_id}")
    private String clientId;
    @Value("${kakao.redirect_uri}")
    private String redirectUri;
    @Value("${kakao.auth_base_url}")
    private String authBaseUrl;

    @Override
    public String userInfo(String token) {
        return kakaoIdTokenVerify(token);
    }

    @Override
    public String userAuth(String code) {
        WebClient webClient = WebClient.builder()
            .baseUrl(authBaseUrl)
            .defaultHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
            .build();

        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("grant_type", "authorization_code");
        formData.add("client_id", clientId);
        formData.add("redirect_uri", redirectUri);
        formData.add("code", code);
        try {
            KakaoUserAuthDto kakaoUserAuthDto = webClient
                .post()
                .bodyValue(formData)
                .retrieve()
                .bodyToMono(KakaoUserAuthDto.class)
                .block();

            return kakaoUserAuthDto.getIdToken();
        } catch (Exception e) {
            log.info(e.getMessage());
            e.printStackTrace();
            throw new DalkakException(DalkakErrorCode.INTERNAL_SERVER_ERROR);
        }

    }
}
