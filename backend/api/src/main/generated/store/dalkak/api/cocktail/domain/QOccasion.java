package store.dalkak.api.cocktail.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QOccasion is a Querydsl query type for Occasion
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOccasion extends EntityPathBase<Occasion> {

    private static final long serialVersionUID = -194812170L;

    public static final QOccasion occasion = new QOccasion("occasion");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QOccasion(String variable) {
        super(Occasion.class, forVariable(variable));
    }

    public QOccasion(Path<? extends Occasion> path) {
        super(path.getType(), path.getMetadata());
    }

    public QOccasion(PathMetadata metadata) {
        super(Occasion.class, metadata);
    }

}

