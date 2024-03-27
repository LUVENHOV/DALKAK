package store.dalkak.api.cocktail.repository.heart;

import java.util.List;

public interface HeartRedisRepository {
    List<String> findAllRedisList(String prefix);
}
