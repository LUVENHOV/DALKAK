package store.dalkak.api.cocktail.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCocktail is a Querydsl query type for Cocktail
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCocktail extends EntityPathBase<Cocktail> {

    private static final long serialVersionUID = -1859300301L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCocktail cocktail = new QCocktail("cocktail");

    public final NumberPath<Integer> alcohol = createNumber("alcohol", Integer.class);

    public final ListPath<store.dalkak.api.cocktail.domain.Base.CocktailBase, store.dalkak.api.cocktail.domain.Base.QCocktailBase> cocktailBases = this.<store.dalkak.api.cocktail.domain.Base.CocktailBase, store.dalkak.api.cocktail.domain.Base.QCocktailBase>createList("cocktailBases", store.dalkak.api.cocktail.domain.Base.CocktailBase.class, store.dalkak.api.cocktail.domain.Base.QCocktailBase.class, PathInits.DIRECT2);

    public final ListPath<store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient, store.dalkak.api.cocktail.domain.Ingredient.QCocktailIngredient> cocktailIngredients = this.<store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient, store.dalkak.api.cocktail.domain.Ingredient.QCocktailIngredient>createList("cocktailIngredients", store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient.class, store.dalkak.api.cocktail.domain.Ingredient.QCocktailIngredient.class, PathInits.DIRECT2);

    public final QCollection collection;

    public final QColor color;

    public final QGlass glass;

    public final NumberPath<Integer> heartCount = createNumber("heartCount", Integer.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath image = createString("image");

    public final StringPath krName = createString("krName");

    public final StringPath name = createString("name");

    public final QOccasion occasion;

    public final StringPath recipe = createString("recipe");

    public final NumberPath<Integer> sweetness = createNumber("sweetness", Integer.class);

    public final ListPath<store.dalkak.api.cocktail.domain.Tool.CocktailTool, store.dalkak.api.cocktail.domain.Tool.QCocktailTool> tools = this.<store.dalkak.api.cocktail.domain.Tool.CocktailTool, store.dalkak.api.cocktail.domain.Tool.QCocktailTool>createList("tools", store.dalkak.api.cocktail.domain.Tool.CocktailTool.class, store.dalkak.api.cocktail.domain.Tool.QCocktailTool.class, PathInits.DIRECT2);

    public final NumberPath<Integer> viewCount = createNumber("viewCount", Integer.class);

    public QCocktail(String variable) {
        this(Cocktail.class, forVariable(variable), INITS);
    }

    public QCocktail(Path<? extends Cocktail> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCocktail(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCocktail(PathMetadata metadata, PathInits inits) {
        this(Cocktail.class, metadata, inits);
    }

    public QCocktail(Class<? extends Cocktail> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.collection = inits.isInitialized("collection") ? new QCollection(forProperty("collection")) : null;
        this.color = inits.isInitialized("color") ? new QColor(forProperty("color")) : null;
        this.glass = inits.isInitialized("glass") ? new QGlass(forProperty("glass")) : null;
        this.occasion = inits.isInitialized("occasion") ? new QOccasion(forProperty("occasion")) : null;
    }

}

