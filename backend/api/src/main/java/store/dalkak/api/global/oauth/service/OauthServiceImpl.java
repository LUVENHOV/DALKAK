package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;

@Service
@Slf4j
@RequiredArgsConstructor
public class OauthServiceImpl implements OauthService{
    private ProviderService providerService;

    @Override
    public String login(OauthLoginReqDto oauthLoginReqDto) {
        return null;
    }

    @Override
    public String sub(OauthLoginReqDto oauthLoginReqDto) {
        switch(oauthLoginReqDto.getProvider()){
            case KAKAO -> providerService=new KakaoService();
            case NAVER -> providerService=new NaverService();
            case GOOGLE -> providerService=new GoogleService();
        }
        String accessToken=providerService.userAuth(oauthLoginReqDto.getCode());
        return providerService.userInfo(accessToken);
    }
}
