package store.dalkak.api.global.jwt.repository;

import java.time.Duration;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
@Slf4j
public class RefreshTokenRedisRepository {
    private final RedisTemplate<String, String> redisTemplate;

    public RefreshTokenRedisRepository(
        RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void makeRefreshToken(String key, String value) {
        redisTemplate.opsForValue().set(key, value, Duration.ofHours(3));
    }

    public String findRefreshToken(String token) {
        return redisTemplate.opsForValue().get(token);
    }

    public Boolean deleteToken(String token) {
        return redisTemplate.delete(token);
    }
}
