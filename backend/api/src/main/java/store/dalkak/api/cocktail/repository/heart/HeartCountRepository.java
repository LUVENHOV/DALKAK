package store.dalkak.api.cocktail.repository.heart;

import org.springframework.data.repository.CrudRepository;
import store.dalkak.api.cocktail.domain.heart.HeartCount;

public interface HeartCountRepository extends CrudRepository<HeartCount,String> {

}
