package store.dalkak.api.custom.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import store.dalkak.api.custom.domain.QCustomIngredient;
import store.dalkak.api.custom.dto.CustomIngredientModifyDto;

@Repository
@RequiredArgsConstructor
public class CustomIngredientRepositoryImpl implements CustomIngredientCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public void ModifyCustomIngredient(CustomIngredientModifyDto customIngredientModifyDto) {
        QCustomIngredient qCustomIngredient = QCustomIngredient.customIngredient;
        queryFactory.update(qCustomIngredient)
            .set(qCustomIngredient.amount, customIngredientModifyDto.getAmount())
            .set(qCustomIngredient.unit, customIngredientModifyDto.getUnit())
            .where(qCustomIngredient.custom.id.eq(customIngredientModifyDto.getCustomCocktailId())).execute();
    }
}
