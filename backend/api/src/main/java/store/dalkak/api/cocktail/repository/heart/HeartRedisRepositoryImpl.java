package store.dalkak.api.cocktail.repository.heart;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.heart.HeartCount;

@Repository
@Slf4j
public class HeartRedisRepositoryImpl implements HeartRedisRepository {

    private RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, Object> hashOperations;

    public HeartRedisRepositoryImpl(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
        this.hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public List<String> findAllRedisList(String prefix) {
        // ScanOptions 객체를 생성하여 스캔할 때 사용할 패턴 설정
        ScanOptions options = ScanOptions.scanOptions().match(prefix).build();

        // Redis 콜백을 사용하여 SCAN 실행
        List<String> keyList = new ArrayList<>();
        redisTemplate.execute((RedisCallback<Void>) connection -> {
            Cursor<byte[]> cursor = connection.scan(options);
            while (cursor.hasNext()) {
                keyList.add(new String(cursor.next()));
            }
            return null;
        });

        return keyList;
    }

}
