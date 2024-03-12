package store.dalkak.api.custom.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCustom is a Querydsl query type for Custom
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCustom extends EntityPathBase<Custom> {

    private static final long serialVersionUID = -1991458931L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCustom custom = new QCustom("custom");

    public final store.dalkak.api.cocktail.domain.QCocktail cocktail;

    public final StringPath comment = createString("comment");

    public final ListPath<CustomIngredient, QCustomIngredient> customIngredients = this.<CustomIngredient, QCustomIngredient>createList("customIngredients", CustomIngredient.class, QCustomIngredient.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath image = createString("image");

    public final StringPath name = createString("name");

    public final BooleanPath open = createBoolean("open");

    public final StringPath recipe = createString("recipe");

    public final StringPath summary = createString("summary");

    public QCustom(String variable) {
        this(Custom.class, forVariable(variable), INITS);
    }

    public QCustom(Path<? extends Custom> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCustom(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCustom(PathMetadata metadata, PathInits inits) {
        this(Custom.class, metadata, inits);
    }

    public QCustom(Class<? extends Custom> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cocktail = inits.isInitialized("cocktail") ? new store.dalkak.api.cocktail.domain.QCocktail(forProperty("cocktail"), inits.get("cocktail")) : null;
    }

}

