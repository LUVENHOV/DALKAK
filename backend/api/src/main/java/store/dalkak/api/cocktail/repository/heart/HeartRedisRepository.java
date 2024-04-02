package store.dalkak.api.cocktail.repository.heart;

import java.util.List;
import store.dalkak.api.cocktail.dto.HeartCountDto;
import store.dalkak.api.cocktail.dto.HeartMatchDto;

public interface HeartRedisRepository {

    List<String> findAllRedisList(String prefix);

    HeartCountDto findHeartCountById(String id);

    HeartMatchDto findHeartMatchById(String id);

    void deleteHeartMatchById(String id);
}
