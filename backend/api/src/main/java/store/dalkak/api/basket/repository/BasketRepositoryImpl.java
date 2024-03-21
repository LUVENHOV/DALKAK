package store.dalkak.api.basket.repository;

import static store.dalkak.api.basket.domain.QBasket.basket;
import static store.dalkak.api.cocktail.domain.ingredient.QIngredient.ingredient;
import static store.dalkak.api.user.domain.QMember.member;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.dto.IngredientDto;

@Repository
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BasketRepositoryImpl implements BasketRepositoryCustom {

    private final JPAQueryFactory queryFactory;
    @Override
    public List<IngredientDto> findBasketIngredients(Long memberId) {
        return queryFactory
            .select(Projections.constructor(
                IngredientDto.class,
                ingredient.id,
                ingredient.name,
                ingredient.image,
                ingredient.category))
            .from(basket)
            .leftJoin(basket.ingredient, ingredient)
            .leftJoin(basket.member, member)
            .where(member.id.eq(memberId))
            .orderBy(ingredient.id.asc())
            .fetch();
    }
}
