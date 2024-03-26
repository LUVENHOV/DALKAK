package store.dalkak.api.cocktail.repository.heart;

import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class HeartRedisRepositoryImpl implements HeartRedisRepository {
    private final RedisTemplate<String, ?> redisTemplate;
    public Map<String, Map<Object, Object>> findAllCocktailHashes(String prefix) {
        Map<String, Map<Object, Object>> cocktailHashes = new HashMap<>();
        String redisPrefix = prefix+"*";
        try (Cursor cursor = (Cursor) redisTemplate.getConnectionFactory().getConnection().scan(
            ScanOptions.scanOptions().match(redisPrefix).build())) {
            while (cursor.hasNext()) {
                String key = String.valueOf(cursor.next());
                Map<Object, Object> hashEntries = redisTemplate.opsForHash().entries(key);
                cocktailHashes.put(key, hashEntries);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return cocktailHashes;
    }
}
