package store.dalkak.api.custom.domain;

import static store.dalkak.api.custom.domain.QCustom.custom;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.dto.CocktailCustomDto;

@Repository
@RequiredArgsConstructor
public class CustomRepositoryImpl implements CustomRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<CocktailCustomDto> findAllByCocktailId(Long cocktailId) {
        return queryFactory.select(Projections.constructor
            (CocktailCustomDto.class, custom.id, custom.name, custom.summary, custom.member.id, custom.member.nickname))
            .from(custom)
            .where(custom.cocktail.id.eq(cocktailId))
            .fetch();
    }

    @Override
    public void modifyCustomIngredients(Custom custom,
        List<CustomIngredient> customIngredientList) {
        QCustom qCustom = QCustom.custom;
        queryFactory.update(qCustom).set(qCustom.customIngredients, customIngredientList)
            .where(qCustom.eq(custom)).execute();
    }
}
