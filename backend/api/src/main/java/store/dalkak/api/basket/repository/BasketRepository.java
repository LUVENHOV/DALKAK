package store.dalkak.api.basket.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.basket.domain.Basket;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
import store.dalkak.api.user.domain.Member;

@Repository
@Transactional(readOnly = true)
public interface BasketRepository extends JpaRepository<Basket, Long>,
    BasketRepositoryCustom {

    Optional<Basket> findByMemberAndIngredient(Member member, Ingredient ingredient);

}
