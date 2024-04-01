package store.dalkak.api.custom.repository;

import static store.dalkak.api.custom.domain.QCustom.custom;

import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.domain.QCustom;
import store.dalkak.api.custom.dto.CustomModifyDto;
import store.dalkak.api.user.dto.MemberDto;

@Repository
@RequiredArgsConstructor
public class CustomRepositoryImpl implements CustomRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public void modifyCustomCocktail(Long customCocktailId, CustomModifyDto customModifyDto) {
        QCustom qCustom = custom;
        queryFactory.update(qCustom).set(qCustom.name, customModifyDto.getCustomName())
            .set(qCustom.comment, customModifyDto.getCustomComment())
            .set(qCustom.recipe, customModifyDto.getCustomRecipe())
            .set(qCustom.summary, customModifyDto.getCustomSummary())
            .set(qCustom.open, customModifyDto.getOpen())
            .set(qCustom.image, customModifyDto.getImageUrl())
            .where(qCustom.id.eq(customCocktailId)).execute();
    }

    @Override
    public Page<Custom> findAllCustom(MemberDto memberDto, Cocktail targetCocktail,
        Pageable pageable) {
        // 조회 조건에 맞는 데이터 목록 조회
        List<Custom> customList = queryFactory
            .selectFrom(custom)
            .where(custom.cocktail.id.eq(targetCocktail.getId())
                .and(custom.open.isTrue())
                .or(
                    custom.cocktail.id.eq(targetCocktail.getId())
                        .and(custom.member.id.eq(memberDto.getId()))
                )
            )
            .orderBy(custom.id.desc())
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        Long totalCount = queryFactory
            .select(custom.count())
            .from(custom)
            .where(custom.cocktail.id.eq(targetCocktail.getId())
                .and(custom.open.isTrue())
                .or(custom.member.id.eq(memberDto.getId())))
            .fetchOne();

        long total = totalCount != null ? totalCount : 0;

        return new PageImpl<>(customList, pageable, total);
    }


}
