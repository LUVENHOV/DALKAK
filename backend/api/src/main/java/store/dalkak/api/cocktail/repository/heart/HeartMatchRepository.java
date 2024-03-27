package store.dalkak.api.cocktail.repository.heart;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import store.dalkak.api.cocktail.domain.heart.HeartMatch;

public interface HeartMatchRepository extends CrudRepository<HeartMatch,String> {

    @Override
    List<HeartMatch> findAll();

}
