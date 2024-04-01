package store.dalkak.api.global.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.global.jwt.dto.TokenDto;
import store.dalkak.api.global.jwt.exception.JwtErrorCode;
import store.dalkak.api.global.jwt.exception.JwtException;
import store.dalkak.api.global.oauth.dto.RefreshToken;
import store.dalkak.api.global.oauth.dto.RefreshTokenRepository;
import store.dalkak.api.global.util.CookieUtil;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.repository.MemberRepository;

@Slf4j
@Component
@RequiredArgsConstructor
public class LoginUserArgumentResolver implements HandlerMethodArgumentResolver {

    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean isLoginUserAnnotation = parameter.hasParameterAnnotation(LoginUser.class);
        boolean isUserClass = MemberDto.class.equals(parameter.getParameterType());

        return isLoginUserAnnotation && isUserClass;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
        NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        log.info("----token ");
        HttpServletRequest httpServletRequest = webRequest.getNativeRequest(
            HttpServletRequest.class);
        HttpServletResponse httpServletResponse = webRequest.getNativeResponse(
            HttpServletResponse.class);
        if (httpServletRequest != null) {
//            String token = httpServletRequest.getHeader("Authorization");
            Map<String, String> tokens = CookieUtil.getToken(httpServletRequest);
            String accessToken = tokens.get("accessToken");
            String refreshToken = tokens.get("refreshToken");
            log.info("들어온 토큰: {} {}", accessToken, refreshToken);
            if (tokens.get("accessToken") != null && !tokens.get("accessToken").isEmpty()) {
//                token = token.split(" ")[1]; //Bearer token
                int status = jwtProvider.validateToken(accessToken);
                if (status == 1) {
                    Long memberId = jwtProvider.getMemberPrimaryKeyId(accessToken);
                    Member member = memberRepository.findById(memberId).orElseThrow(
                        () -> new JwtException(JwtErrorCode.INVALID_TOKEN)
                    );
                    return MemberDto.builder()
                        .id(member.getId())
                        .nickname(member.getNickname())
                        .birthdate(member.getBirthdate())
                        .gender(member.getGender())
                        .build();
                } else if (status == 0) { // access token의 시간이 끝남
                    //refresh token의 시간이 남아있다면
                    if (jwtProvider.validateToken(refreshToken) == 1) { //refresh token의 시간이 남아있음
                        Long memberId = jwtProvider.getMemberPrimaryKeyId(refreshToken);
                        RefreshToken redisRefreshToken = refreshTokenRepository.findById(memberId)
                            .orElseThrow(() -> new JwtException(JwtErrorCode.INVALID_TOKEN));
                        if (refreshToken.equals(redisRefreshToken.getValue())) {
                            TokenDto newAccessToken = jwtProvider.createAccessToken(memberId);
                            CookieUtil.modifyCookie(httpServletResponse, newAccessToken.getToken());
                        }
                        Member member = memberRepository.findById(memberId).orElseThrow(
                            () -> new JwtException(JwtErrorCode.INVALID_TOKEN)
                        );
                        return MemberDto.builder()
                            .id(member.getId())
                            .nickname(member.getNickname())
                            .birthdate(member.getBirthdate())
                            .gender(member.getGender())
                            .build();

                    } else {
                        CookieUtil.deleteCookie(httpServletResponse);
                        log.info("logout----");
                        throw new JwtException(JwtErrorCode.LOGOUT);
                    }
                }
            }
        }
        throw new JwtException(JwtErrorCode.INVALID_TOKEN);
    }
}
