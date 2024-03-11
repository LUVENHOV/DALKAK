package store.dalkak.api.global.oauth.service;

import org.springframework.stereotype.Service;

@Service
public interface ProviderService {
    String userInfo(String token);
    String userAuth(String code);
}
