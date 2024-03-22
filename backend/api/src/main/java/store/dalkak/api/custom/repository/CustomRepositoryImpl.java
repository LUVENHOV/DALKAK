package store.dalkak.api.custom.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import store.dalkak.api.custom.domain.QCustom;
import store.dalkak.api.custom.dto.CustomModifyDto;

@Repository
@RequiredArgsConstructor
public class CustomRepositoryImpl implements CustomRepositoryCustom {

    private final JPAQueryFactory queryFactory;
//
//    @Override
//    public void modifyCustomIngredients(Custom custom,
//        List<CustomIngredient> customIngredientList) {
//        QCustom qCustom = QCustom.custom;
//        queryFactory.update(qCustom).set(qCustom.customIngredients, customIngredientList)
//            .where(qCustom.eq(custom)).execute();
//    }

    @Override
    public void modifyCustomCocktail(Long customCocktailId, CustomModifyDto customModifyDto) {
        QCustom qCustom = QCustom.custom;
        queryFactory.update(qCustom).set(qCustom.name, customModifyDto.getCustomName())
            .set(qCustom.comment, customModifyDto.getCustomComment())
            .set(qCustom.recipe, customModifyDto.getCustomRecipe())
            .set(qCustom.summary, customModifyDto.getCustomSummary())
            .set(qCustom.open, customModifyDto.getOpen())
            .set(qCustom.image, customModifyDto.getImageUrl())
            .where(qCustom.id.eq(customCocktailId)).execute();
    }


}
