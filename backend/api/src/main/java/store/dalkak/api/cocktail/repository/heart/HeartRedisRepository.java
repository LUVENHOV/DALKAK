package store.dalkak.api.cocktail.repository.heart;

import java.util.Map;

public interface HeartRedisRepository {
    Map<String, Map<Object, Object>> findAllCocktailHashes(String prefix);
}
