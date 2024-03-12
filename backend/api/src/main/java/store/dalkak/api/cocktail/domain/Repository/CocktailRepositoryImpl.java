package store.dalkak.api.cocktail.domain.Repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.dalkak.api.cocktail.domain.Base.QCocktailBase;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.QCocktail;

@Slf4j
public class CocktailRepositoryImpl implements CocktailRepositoryCustom{

    private JPAQueryFactory queryFactory;

    @PersistenceContext
    private EntityManager em;

    @PostConstruct
    public void init() {this.queryFactory = new JPAQueryFactory(em);}

    private BooleanExpression cocktailNameContains(String cocktailName) {

        return Optional.ofNullable(cocktailName)
            .filter(n -> !n.isEmpty())
            .map(QCocktail.cocktail.name::containsIgnoreCase)
            .orElse(null);
    }

//    private BooleanExpression cocktailIngredientContains(List<String> cocktailIngredients) {
//
//        return Optional.ofNullable(cocktailIngredients)
//            .filter(i -> !i.isEmpty())
//            .map(QCocktail.cocktail.cocktailIngredients.get().ingredient)
//            .orElse(null);
//    }


    private BooleanExpression cocktailBaseContains(Long base) {

        return Optional.ofNullable(base)
            .filter(num -> num > 0)
            .map(QCocktailBase.cocktailBase::)
            .orElse(null);
    }


    @Override
    public Page<Cocktail> searchCocktailsByOption(Pageable page, String cocktailName,
        List<Long> ingredients, Long base, Integer alcoholContent, Long color, Integer sweetness,
        Integer difficulty, Long gender, Integer orderBy) {
        return null;
    }
}
