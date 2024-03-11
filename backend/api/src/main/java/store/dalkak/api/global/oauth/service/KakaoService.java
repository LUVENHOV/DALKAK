package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class KakaoService implements ProviderService{

    @Override
    public String userInfo(String token) {
        return null;
    }

    @Override
    public String userAuth(String code) {
        return null;
    }
}
