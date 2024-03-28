package store.dalkak.api.refrigerator.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
import store.dalkak.api.refrigerator.domain.Refrigerator;
import store.dalkak.api.user.domain.Member;

@Repository
@Transactional(readOnly = true)
public interface RefrigeratorRepository extends JpaRepository<Refrigerator, Long>,
    RefrigeratorRepositoryCustom {

    Optional<Refrigerator> findByMemberAndIngredient(Member member, Ingredient ingredient);

}
