package store.dalkak.api.custom.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCustomIngredient is a Querydsl query type for CustomIngredient
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCustomIngredient extends EntityPathBase<CustomIngredient> {

    private static final long serialVersionUID = 1747239230L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCustomIngredient customIngredient = new QCustomIngredient("customIngredient");

    public final NumberPath<Double> amount = createNumber("amount", Double.class);

    public final QCustom custom;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final store.dalkak.api.cocktail.domain.Ingredient.QIngredient ingredient;

    public final store.dalkak.api.cocktail.domain.Ingredient.QUnit unit;

    public QCustomIngredient(String variable) {
        this(CustomIngredient.class, forVariable(variable), INITS);
    }

    public QCustomIngredient(Path<? extends CustomIngredient> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCustomIngredient(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCustomIngredient(PathMetadata metadata, PathInits inits) {
        this(CustomIngredient.class, metadata, inits);
    }

    public QCustomIngredient(Class<? extends CustomIngredient> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.custom = inits.isInitialized("custom") ? new QCustom(forProperty("custom"), inits.get("custom")) : null;
        this.ingredient = inits.isInitialized("ingredient") ? new store.dalkak.api.cocktail.domain.Ingredient.QIngredient(forProperty("ingredient"), inits.get("ingredient")) : null;
        this.unit = inits.isInitialized("unit") ? new store.dalkak.api.cocktail.domain.Ingredient.QUnit(forProperty("unit")) : null;
    }

}

