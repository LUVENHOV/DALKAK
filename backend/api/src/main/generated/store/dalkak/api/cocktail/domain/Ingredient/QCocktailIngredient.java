package store.dalkak.api.cocktail.domain.Ingredient;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCocktailIngredient is a Querydsl query type for CocktailIngredient
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCocktailIngredient extends EntityPathBase<CocktailIngredient> {

    private static final long serialVersionUID = -1337951293L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCocktailIngredient cocktailIngredient = new QCocktailIngredient("cocktailIngredient");

    public final NumberPath<Double> amount = createNumber("amount", Double.class);

    public final store.dalkak.api.cocktail.domain.QCocktail cocktail;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QIngredient ingredient;

    public final QUnit unit;

    public QCocktailIngredient(String variable) {
        this(CocktailIngredient.class, forVariable(variable), INITS);
    }

    public QCocktailIngredient(Path<? extends CocktailIngredient> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCocktailIngredient(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCocktailIngredient(PathMetadata metadata, PathInits inits) {
        this(CocktailIngredient.class, metadata, inits);
    }

    public QCocktailIngredient(Class<? extends CocktailIngredient> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cocktail = inits.isInitialized("cocktail") ? new store.dalkak.api.cocktail.domain.QCocktail(forProperty("cocktail"), inits.get("cocktail")) : null;
        this.ingredient = inits.isInitialized("ingredient") ? new QIngredient(forProperty("ingredient"), inits.get("ingredient")) : null;
        this.unit = inits.isInitialized("unit") ? new QUnit(forProperty("unit")) : null;
    }

}

