package store.dalkak.api.cocktail.domain.Base;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCocktailBase is a Querydsl query type for CocktailBase
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCocktailBase extends EntityPathBase<CocktailBase> {

    private static final long serialVersionUID = 2018646531L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCocktailBase cocktailBase = new QCocktailBase("cocktailBase");

    public final QBase base;

    public final store.dalkak.api.cocktail.domain.QCocktail cocktail;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QCocktailBase(String variable) {
        this(CocktailBase.class, forVariable(variable), INITS);
    }

    public QCocktailBase(Path<? extends CocktailBase> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCocktailBase(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCocktailBase(PathMetadata metadata, PathInits inits) {
        this(CocktailBase.class, metadata, inits);
    }

    public QCocktailBase(Class<? extends CocktailBase> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.base = inits.isInitialized("base") ? new QBase(forProperty("base")) : null;
        this.cocktail = inits.isInitialized("cocktail") ? new store.dalkak.api.cocktail.domain.QCocktail(forProperty("cocktail"), inits.get("cocktail")) : null;
    }

}

