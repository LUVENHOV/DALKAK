package store.dalkak.api.cocktail.repository.heart;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import store.dalkak.api.cocktail.domain.heart.HeartMember;

public interface HeartMemberRepository extends CrudRepository<HeartMember,String> {

    @Override
    List<HeartMember> findAll();

}
