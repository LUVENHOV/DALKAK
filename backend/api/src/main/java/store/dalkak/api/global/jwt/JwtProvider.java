package store.dalkak.api.global.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import store.dalkak.api.global.jwt.Exception.JwtErrorCode;
import store.dalkak.api.global.jwt.Exception.JwtException;
import store.dalkak.api.global.jwt.dto.TokenDto;

@Slf4j
@Component
public class JwtProvider {
    @Value("${jwt.salt}")
    private String salt;
    @Value("${jwt.access-token.expiretime}")
    private long accessTokenExpireTime;
    @Value("${jwt.refresh-token.expiretime}")
    private long refreshTokenExpireTime;

    private long accessTokenExpiresIn;
    private long refreshTokenExpiresIn;

    public TokenDto createAccessToken(long id){
        String token=create(id,"access-token",accessTokenExpireTime);
        return TokenDto.builder()
            .token(token)
            .expired(this.accessTokenExpiresIn)
            .build();
    }
    public TokenDto createRefreshToken(long id){
        String token=create(id,"refresh-token",refreshTokenExpireTime);
        return TokenDto.builder()
            .token(token)
            .expired(this.refreshTokenExpiresIn)
            .build();
    }

    private String create(long id,String subject, long expireTime){
        Date expTime = new Date(System.currentTimeMillis() + expireTime);
        if(subject.equals("access-token")){
            this.accessTokenExpiresIn = expTime.getTime()/1000;
        }
        else{
            this.refreshTokenExpiresIn = expTime.getTime()/1000;
        }
        Claims claims = Jwts.claims()
            .setSubject(subject) // 토큰 제목
            .setIssuedAt(new Date()) // 생성일
            .setExpiration(expTime); // 만료일

        claims.put("id", id); // 사용자 id

        String jwt = Jwts.builder()
            .setHeaderParam("typ","JWT") // Header 설정 : 토큰의 타입, 해쉬 알고리즘 정보 세팅
            .setClaims(claims)
            .signWith(SignatureAlgorithm.HS256, this.generateKey()) // Signature 설정 : secret key를 활용한 암호화
            .compact(); // 직렬화 처리

        return jwt;
    }
    private byte[] generateKey(){
        byte[] key = null;
        try{
            key = salt.getBytes("UTF-8");
        } catch(UnsupportedEncodingException e){
            if(log.isInfoEnabled()){
                e.printStackTrace();
            } else{
                log.error("Making JWT Key Error {}", e.getMessage());
            }
        }
        return key;
    }

    //토큰 검증
    public boolean validateToken(String token){
        try{
            Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(token);
            return new Date(System.currentTimeMillis()).getTime() <= claims.getBody()
                .getExpiration().getTime();
        } catch(Exception e){
            return false;
        }
    }

    // 토큰에서 사용자 id값 가져오기
    public Long getMemberPrimaryKeyId(String token){
        Jws<Claims> claims = null;
        try{
            claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(token);
        } catch(Exception e){
            throw new JwtException(JwtErrorCode.INVALID_TOKEN);
        }

        assert claims != null;
        Map<String, Object> value = claims.getBody();
        log.info("value : {}", value);


        return ((Number)value.get("id")).longValue();
    }

}

