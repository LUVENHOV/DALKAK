package store.dalkak.api.cocktail.repository.heart;

import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.heart.HeartRank;

public interface HeartRankRepository extends JpaRepository<HeartRank, Long> {

    List<HeartRank> findAll(Sort sort);
}
