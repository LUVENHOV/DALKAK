package store.dalkak.api.global.oauth.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.global.jwt.dto.TokenDto;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.domain.MemberRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class OauthServiceImpl implements OauthService{

    private final GoogleService googleService;
    private final NaverService naverService;
    private final KakaoService kakaoService;
    private final MemberRepository memberRepository;
    private final JwtProvider jwtProvider;

    @Override
    public OauthLoginResDto login(OauthLoginReqDto oauthLoginReqDto) {
        System.out.println(oauthLoginReqDto.getProvider());
        String sub=sub(oauthLoginReqDto);

        // 없으면 회원가입
        if(!memberRepository.existsByOauthSubAndOauthProvider(sub,oauthLoginReqDto.getProvider())){
            memberRepository.save(Member.builder().oauthSub(sub).oauthProvider(oauthLoginReqDto.getProvider()).build());
        }
        log.info(sub);
        Member member=memberRepository.findByOauthSubAndOauthProvider(sub,oauthLoginReqDto.getProvider()).orElseThrow();
        //TODO: jwt 토큰 생성
        return generateOauthLoginResDto(member.getId());
    }

    @Override
    public String sub(OauthLoginReqDto oauthLoginReqDto) {
        String sub=null;
        switch(oauthLoginReqDto.getProvider()){
            case KAKAO -> {
                String accessToken=kakaoService.userAuth(oauthLoginReqDto.getCode());
                sub=kakaoService.userInfo(accessToken);
            }
            case NAVER -> {
                String accessToken=naverService.userAuth(oauthLoginReqDto.getCode());
                sub=naverService.userInfo(accessToken);
            }
            case GOOGLE -> {
                String accessToken=googleService.userAuth(oauthLoginReqDto.getCode());
                sub=googleService.userInfo(accessToken);
            }
        }
//        if(sub==null) {
//            throw new OAuthException(OAuthErrorCode.FAIL_TO_GET_INFO);
//        }
        return sub;
    }

    private OauthLoginResDto generateOauthLoginResDto(long id){
        Member member = memberRepository.findById(id).orElseThrow();
        String nickname = member.getNickname();

        //generateVerifyTokenResponse 메서드는
        //AccessToken, RefreshToken을 생성한 후
        //AccessToken, RefreshToken, AccessTokenExpireTime에 대한 정보를 담아서 넘겨준다.
        TokenDto accessToken = jwtProvider.createAccessToken(id);
        TokenDto refreshToken = jwtProvider.createRefreshToken(id);

        //redis 에 저장
//    refreshTokenRepository.save(RefreshToken.builder()
//        .id(id)
//        .value(refreshToken.getToken())
//        .build());
        return OauthLoginResDto.builder()
            .accessToken(accessToken.getToken())
            .accessTokenExpiresIn(accessToken.getExpired())
            .refreshToken(refreshToken.getToken())
            .refreshTokenExpiresIn(refreshToken.getExpired())
            .nickname(nickname)
            .id(id)
            .build();
    }
}
