package store.dalkak.api.global.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

public class CookieUtil {
    @Value("${jwt.access-token.expiretime}")
    private static long accessTokenExpireTime;
    @Value("${jwt.refresh-token.expiretime}")
    private static long refreshTokenExpireTime;

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

    public static ResponseCookie makeCookie(String name, String value,int status) {
        long maxAge=0L;
        if(status==1){
            maxAge=name.equals("Authorization")?accessTokenExpireTime:refreshTokenExpireTime;
        }
        return ResponseCookie.from(name, value).httpOnly(true).secure(true).path("/")
            .domain("127.0.0.1").maxAge(maxAge).build();
    }

    public static void modifyCookie(HttpServletResponse httpServletResponse, String value) {
        httpServletResponse.setHeader(HttpHeaders.SET_COOKIE,
            makeCookie("Authorization", value,1).toString());
    }

    public static void deleteCookie(HttpServletResponse httpServletResponse) {
        httpServletResponse.setHeader(HttpHeaders.SET_COOKIE,
            makeCookie("Authorization", null, 0).toString());
        httpServletResponse.addHeader(HttpHeaders.SET_COOKIE,
            makeCookie("X-Auth-Refresh-Token", null, 0).toString());

    }
}
