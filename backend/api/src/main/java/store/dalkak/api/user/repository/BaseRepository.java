package store.dalkak.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.Base.Base;
@Repository
public interface BaseRepository extends JpaRepository<Base,Long> {

}
