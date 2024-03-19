package store.dalkak.api.cocktail.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QGlass is a Querydsl query type for Glass
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QGlass extends EntityPathBase<Glass> {

    private static final long serialVersionUID = 626499021L;

    public static final QGlass glass = new QGlass("glass");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QGlass(String variable) {
        super(Glass.class, forVariable(variable));
    }

    public QGlass(Path<? extends Glass> path) {
        super(path.getType(), path.getMetadata());
    }

    public QGlass(PathMetadata metadata) {
        super(Glass.class, metadata);
    }

}

