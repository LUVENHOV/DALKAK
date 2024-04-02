package store.dalkak.api.global.util;

import com.auth0.jwk.*;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import store.dalkak.api.global.util.exception.UtilErrorCode;
import store.dalkak.api.global.util.exception.UtilException;

import java.net.URL;
import java.security.interfaces.RSAPublicKey;
import java.util.concurrent.TimeUnit;

import static store.dalkak.api.global.util.DecodeUtil.payloadDecoder;

@Slf4j
@Component //유틸이지만 @Value를 주입받기 위해 사용
public class VerifyUtil {

    private static String staticKakaoIss;
    private static String staticKakaoAud;
    private static JwkProvider staticKakaoJwkProvider;

    private static String staticGoogleIss1;
    private static String staticGoogleIss2;
    private static String staticGoogleAud;
    private static JwkProvider staticGoogleJwkProvider;

    @Value("${kakao.iss}")
    private String kakaoIss;
    @Value("${kakao.client_id}")
    private String kakaoAud;

    @Value("${google.iss1}")
    private String googleIss1;
    @Value("${google.iss2}")
    private String googleIss2;
    @Value("${google.client_id}")
    private String googleAud;
    @Value("${google.jwks}")
    private String googleJwks;


    @PostConstruct
    private void init() {
        try {
            staticKakaoIss = kakaoIss;
            staticKakaoAud = kakaoAud;
            staticGoogleIss1 = googleIss1;
            staticGoogleIss2 = googleIss2;
            staticGoogleAud = googleAud;

            staticKakaoJwkProvider = new JwkProviderBuilder(kakaoIss)
                .cached(10, 30, TimeUnit.DAYS) // 30일간 최대 10개 캐시
                .build();

            staticGoogleJwkProvider = new JwkProviderBuilder(new URL(googleJwks))
                .cached(10, 30, TimeUnit.DAYS) // 30일간 최대 10개 캐시
                .build();
        } catch (Exception e) {

        }
    }

    public static String kakaoIdTokenVerify(String idToken) {
        try {
            DecodedJWT decodedJWT = JWT.decode(idToken);
            Jwk jwk = staticKakaoJwkProvider.get(decodedJWT.getKeyId()); //kid로 가져오기
            //TODO: nonce값으로 검증하기-프론트에서도 url변경 nonce=dalkak?? 이런식으로(원래는 각자 기기 id같은거 보내야하나..?)
            log.info("{}", payloadDecoder(decodedJWT.getPayload()).getNonce());
            Algorithm algorithm = Algorithm.RSA256((RSAPublicKey) jwk.getPublicKey(), null);
            JWTVerifier verifier = JWT.require(algorithm).withIssuer(staticKakaoIss)
                .withAudience(staticKakaoAud).build();
            DecodedJWT jwt = verifier.verify(idToken);
            return jwt.getSubject();
        } catch (JwkException je) {
            throw new UtilException(UtilErrorCode.ID_TOKEN_FAIL_VERIFY);
        }
    }

    public static String googleIdTokenVerify(String idToken) {
        try {
            DecodedJWT decodedJWT = JWT.decode(idToken);
            String iss = payloadDecoder(decodedJWT.getPayload()).getIss();
            if (!iss.equals(staticGoogleIss1) && !iss.equals(staticGoogleIss2)) {
                throw new UtilException(UtilErrorCode.ID_TOKEN_FAIL_VERIFY);
            }
            Jwk jwk = staticGoogleJwkProvider.get(decodedJWT.getKeyId()); //kid로 가져오기
            //TODO: nonce값으로 검증하기-프론트에서도 url변경 nonce=dalkak?? 이런식으로(원래는 각자 기기 id같은거 보내야하나..?)
            Algorithm algorithm = Algorithm.RSA256((RSAPublicKey) jwk.getPublicKey(), null);
            JWTVerifier verifier = JWT.require(algorithm).withAudience(staticGoogleAud).build();
            DecodedJWT jwt = verifier.verify(idToken);
            return jwt.getSubject();
        } catch (JwkException je) {
            throw new UtilException(UtilErrorCode.ID_TOKEN_FAIL_VERIFY);
        }
    }
}
