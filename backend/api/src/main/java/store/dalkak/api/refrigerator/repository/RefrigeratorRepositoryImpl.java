package store.dalkak.api.refrigerator.repository;

import static store.dalkak.api.cocktail.domain.ingredient.QIngredient.ingredient;
import static store.dalkak.api.refrigerator.domain.QRefrigerator.refrigerator;
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
public class RefrigeratorRepositoryImpl implements RefrigeratorRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<IngredientDto> findRefIngredients(Long memberId) {
        return queryFactory
            .select(Projections.constructor(
                IngredientDto.class,
                ingredient.id,
                ingredient.name,
                ingredient.image,
                ingredient.category))
            .from(refrigerator)
            .leftJoin(refrigerator.ingredient, ingredient)
            .leftJoin(refrigerator.member, member)
            .where(member.id.eq(memberId))
            .orderBy(ingredient.id.asc())
            .fetch();
    }
}
