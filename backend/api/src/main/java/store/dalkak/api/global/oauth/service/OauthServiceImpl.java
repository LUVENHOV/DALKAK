package store.dalkak.api.global.oauth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;
import store.dalkak.api.user.domain.MemberRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class OauthServiceImpl implements OauthService{
    private ProviderService providerService;
    private MemberRepository memberRepository;

    @Override
    public OauthLoginResDto login(OauthLoginReqDto oauthLoginReqDto) {
        String sub=sub(oauthLoginReqDto);
        //TODO: optional로 받아서 null이면 회원가입 진행
        memberRepository.findBySubAndProvider(sub,oauthLoginReqDto.getProvider());
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
