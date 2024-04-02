package store.dalkak.api.global.oauth.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.global.jwt.dto.TokenDto;
import store.dalkak.api.global.oauth.dto.RefreshToken;
import store.dalkak.api.global.oauth.dto.RefreshTokenRepository;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;
import store.dalkak.api.global.oauth.exception.OauthErrorCode;
import store.dalkak.api.global.oauth.exception.OauthException;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.exception.UserErrorCode;
import store.dalkak.api.user.exception.UserException;
import store.dalkak.api.user.repository.MemberRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class OauthServiceImpl implements OauthService {

    private final GoogleService googleService;
    private final NaverService naverService;
    private final KakaoService kakaoService;
    private final MemberRepository memberRepository;
    private final JwtProvider jwtProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    @Transactional
    public OauthLoginResDto login(OauthLoginReqDto oauthLoginReqDto) {
        String sub = sub(oauthLoginReqDto);
        // 없으면 회원가입
        if (!memberRepository.existsByOauthSubAndOauthProvider(sub,
            oauthLoginReqDto.getProvider())) {
            memberRepository.save(
                Member.builder().oauthSub(sub).oauthProvider(oauthLoginReqDto.getProvider())
                    .build());
        }

        Member member = memberRepository.findByOauthSubAndOauthProvider(sub,
                oauthLoginReqDto.getProvider())
            .orElseThrow(() -> new OauthException(OauthErrorCode.FAIL_TO_GET_INFO));
        return generateOauthLoginResDto(member.getId());
    }

    @Override
    public void logout(MemberDto memberDto) {
        refreshTokenRepository.deleteById(memberDto.getId());
    }

    @Override
    public String sub(OauthLoginReqDto oauthLoginReqDto) {
        String sub = null;
        switch (oauthLoginReqDto.getProvider()) {
            case KAKAO -> {
                String accessToken = kakaoService.userAuth(oauthLoginReqDto.getCode());
                sub = kakaoService.userInfo(accessToken);
            }
            case NAVER -> {
                String accessToken = naverService.userAuth(oauthLoginReqDto.getCode());
                sub = naverService.userInfo(accessToken);
            }
            case GOOGLE -> {
                String accessToken = googleService.userAuth(oauthLoginReqDto.getCode());
                sub = googleService.userInfo(accessToken);
            }
        }
        if (sub == null) {
            throw new OauthException(OauthErrorCode.FAIL_TO_GET_INFO);
        }
        return sub;
    }

    //AccessToken, RefreshToken을 생성
    //AccessToken, RefreshToken, AccessTokenExpireTime 정보 전달
    private OauthLoginResDto generateOauthLoginResDto(long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new UserException(
            UserErrorCode.INVALID_USER));
        String nickname = member.getNickname();

        TokenDto accessToken = jwtProvider.createAccessToken(id);
        TokenDto refreshToken = jwtProvider.createRefreshToken(id);

        //redis에 저장
        refreshTokenRepository.save(RefreshToken.builder()
            .id(id)
            .value(refreshToken.getToken())
            .build());
        log.info("------------------refresh token {}",
            refreshTokenRepository.findById(id).toString());
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
