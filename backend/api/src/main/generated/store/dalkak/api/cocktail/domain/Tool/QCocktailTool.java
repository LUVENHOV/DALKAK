package store.dalkak.api.cocktail.domain.Tool;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCocktailTool is a Querydsl query type for CocktailTool
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCocktailTool extends EntityPathBase<CocktailTool> {

    private static final long serialVersionUID = 1072239971L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCocktailTool cocktailTool = new QCocktailTool("cocktailTool");

    public final store.dalkak.api.cocktail.domain.QCocktail cocktail;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QTool tool;

    public QCocktailTool(String variable) {
        this(CocktailTool.class, forVariable(variable), INITS);
    }

    public QCocktailTool(Path<? extends CocktailTool> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCocktailTool(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCocktailTool(PathMetadata metadata, PathInits inits) {
        this(CocktailTool.class, metadata, inits);
    }

    public QCocktailTool(Class<? extends CocktailTool> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cocktail = inits.isInitialized("cocktail") ? new store.dalkak.api.cocktail.domain.QCocktail(forProperty("cocktail"), inits.get("cocktail")) : null;
        this.tool = inits.isInitialized("tool") ? new QTool(forProperty("tool")) : null;
    }

}

