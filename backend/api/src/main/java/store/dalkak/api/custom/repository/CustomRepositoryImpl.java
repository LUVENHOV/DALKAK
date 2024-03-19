package store.dalkak.api.custom.domain;

import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CustomRepositoryImpl implements CustomRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public void modifyCustomIngredients(Custom custom,
        List<CustomIngredient> customIngredientList) {
        QCustom qCustom = QCustom.custom;
        queryFactory.update(qCustom).set(qCustom.customIngredients, customIngredientList)
            .where(qCustom.eq(custom)).execute();
    }
}
