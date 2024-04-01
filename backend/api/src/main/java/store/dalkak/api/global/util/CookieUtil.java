package store.dalkak.api.global.util;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

@Slf4j
@Component //유틸이지만 @Value를 주입받기 위해 사용
public class CookieUtil {

    private static long staticAccessTokenExpireTime;
    private static long staticRefreshTokenExpireTime;
    private static String staticDomain;


    @Value("${jwt.access-token.expiretime}")
    private long accessTokenExpireTime;
    @Value("${jwt.refresh-token.expiretime}")
    private long refreshTokenExpireTime;
    @Value("${spring.api.url}")
    private String domain;

    @PostConstruct
    private void init() {
        CookieUtil.staticAccessTokenExpireTime = accessTokenExpireTime;
        CookieUtil.staticRefreshTokenExpireTime = refreshTokenExpireTime;
        CookieUtil.staticDomain = domain;
    }

    public static Map<String, String> getToken(HttpServletRequest httpServletRequest) {
        Cookie[] cookies = httpServletRequest.getCookies();
        String accessToken = null;
        String refreshToken = null;
        for (Cookie c : cookies) {
            if (c.getName().equals("Authorization")) {
                accessToken = c.getValue();
            } else if (c.getName().equals("X-Auth-Refresh-Token")) {
                refreshToken = c.getValue();
            }
        }
        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);
        return tokens;
    }

    private static void makeCookie(HttpServletResponse httpServletResponse, String name,
        String value, long maxAge) {
        httpServletResponse.addHeader(HttpHeaders.SET_COOKIE,
            ResponseCookie.from(name, value).httpOnly(true).secure(false).path("/")
                .domain(staticDomain).maxAge(maxAge).build().toString());
    }

    public static void createCookie(HttpServletResponse httpServletResponse, String accessToken,
        String refreshToken) {
        makeCookie(httpServletResponse, "Authorization", accessToken, staticAccessTokenExpireTime);
        makeCookie(httpServletResponse, "X-Auth-Refresh-Token", refreshToken,
            staticRefreshTokenExpireTime);
    }

    public static void modifyCookie(HttpServletResponse httpServletResponse, String value) {
        makeCookie(httpServletResponse, "Authorization", value, staticAccessTokenExpireTime);
    }

    public static void deleteCookie(HttpServletResponse httpServletResponse) {
        makeCookie(httpServletResponse, "Authorization", null, 0);
        makeCookie(httpServletResponse, "X-Auth-Refresh-Token", null, 0);

    }
}
