package store.dalkak.api.global.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;


    @Retention(RetentionPolicy.RUNTIME)
    @Target(ElementType.METHOD)
    public @interface UserPermission {
        String userId() default "userId";
        String customCocktailId() default "customCocktailId";

    }