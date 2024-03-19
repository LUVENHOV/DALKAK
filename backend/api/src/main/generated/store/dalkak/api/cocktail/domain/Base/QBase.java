package store.dalkak.api.cocktail.domain.Base;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBase is a Querydsl query type for Base
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBase extends EntityPathBase<Base> {

    private static final long serialVersionUID = -1842983489L;

    public static final QBase base = new QBase("base");

    public final ListPath<CocktailBase, QCocktailBase> cocktailBases = this.<CocktailBase, QCocktailBase>createList("cocktailBases", CocktailBase.class, QCocktailBase.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QBase(String variable) {
        super(Base.class, forVariable(variable));
    }

    public QBase(Path<? extends Base> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBase(PathMetadata metadata) {
        super(Base.class, metadata);
    }

}

