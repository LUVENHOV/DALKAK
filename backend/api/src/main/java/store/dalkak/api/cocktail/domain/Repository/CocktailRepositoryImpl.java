package store.dalkak.api.cocktail.domain.Repository;

import static store.dalkak.api.cocktail.domain.QCocktail.cocktail;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;


@Transactional(readOnly = true)
@RequiredArgsConstructor
@Repository
public class CocktailRepositoryImpl implements CocktailRepositoryCustom{
    private JPAQueryFactory queryFactory;


    public Page<CocktailFindResDto> findCocktailsByOption(Pageable page, String cocktailName,
        List<Long> ingredients, Long base, Integer alcoholContent, Long color, Integer sweetness,
        Integer difficulty, Long gender, Integer orderBy) {
        QueryResults<CoctailFindResDto> coctailFindResDtoQueryResults = queryFactory
            .select(Projections.constructor(
                CocktailFindResDto.class,
                cocktail.id,
                cocktail.image,
                cocktail.name,
                cocktail.heartCount))
            .from(cocktail)
            .leftJoin()


        return null;
    }
}
