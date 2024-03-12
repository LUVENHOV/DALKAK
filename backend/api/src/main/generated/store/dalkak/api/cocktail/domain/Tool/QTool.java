package store.dalkak.api.cocktail.domain.Tool;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTool is a Querydsl query type for Tool
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTool extends EntityPathBase<Tool> {

    private static final long serialVersionUID = -441978337L;

    public static final QTool tool = new QTool("tool");

    public final ListPath<CocktailTool, QCocktailTool> cocktailTools = this.<CocktailTool, QCocktailTool>createList("cocktailTools", CocktailTool.class, QCocktailTool.class, PathInits.DIRECT2);

    public final StringPath detail = createString("detail");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QTool(String variable) {
        super(Tool.class, forVariable(variable));
    }

    public QTool(Path<? extends Tool> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTool(PathMetadata metadata) {
        super(Tool.class, metadata);
    }

}

