package store.dalkak.api.cocktail.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCollection is a Querydsl query type for Collection
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCollection extends EntityPathBase<Collection> {

    private static final long serialVersionUID = -1115528467L;

    public static final QCollection collection = new QCollection("collection");

    public final ListPath<Cocktail, QCocktail> cocktails = this.<Cocktail, QCocktail>createList("cocktails", Cocktail.class, QCocktail.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QCollection(String variable) {
        super(Collection.class, forVariable(variable));
    }

    public QCollection(Path<? extends Collection> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCollection(PathMetadata metadata) {
        super(Collection.class, metadata);
    }

}

