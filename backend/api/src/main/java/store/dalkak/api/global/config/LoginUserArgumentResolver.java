package store.dalkak.api.global.config;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.jwt.Exception.JwtErrorCode;
import store.dalkak.api.global.jwt.Exception.JwtException;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.repository.MemberRepository;

@Slf4j
@Component
@RequiredArgsConstructor
public class LoginUserArgumentResolver implements HandlerMethodArgumentResolver {

    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean isLoginUserAnnotation = parameter.hasParameterAnnotation(LoginUser.class);
        boolean isUserClass = MemberDto.class.equals(parameter.getParameterType());

        return isLoginUserAnnotation && isUserClass;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
        NativeWebRequest webRequest, WebDataBinderFactory binderFactory) {
        HttpServletRequest httpServletRequest = webRequest.getNativeRequest(
            HttpServletRequest.class);
        if (httpServletRequest != null) {
            String token = httpServletRequest.getHeader("Authorization");
            if (token != null && !token.isEmpty()) {
                token = token.split(" ")[1]; //Bearer token
                if (jwtProvider.validateToken(token)) {
                    long memberId = jwtProvider.getMemberPrimaryKeyId(token);
                    Member member = memberRepository.findById(memberId).orElseThrow(
                        () -> new JwtException(JwtErrorCode.INVALID_TOKEN)
                    );
                    return MemberDto.builder()
                        .id(member.getId())
                        .nickname(member.getNickname())
                        .birthdate(member.getBirthdate())
                        .gender(member.getGender())
                        .build();
                }
            }
        }
        throw new JwtException(JwtErrorCode.INVALID_TOKEN);
    }
}
