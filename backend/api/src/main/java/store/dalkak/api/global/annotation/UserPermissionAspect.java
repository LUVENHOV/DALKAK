package store.dalkak.api.global.annotation;

import java.util.Objects;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.repository.CustomRepository;
import store.dalkak.api.user.exception.UserErrorCode;
import store.dalkak.api.user.exception.UserException;

@Aspect
@Component
public class UserPermissionAspect {

    @Autowired
    private CustomRepository customRepository;

    @Around("@annotation(UserPermission)")
    public Object checkPermission(ProceedingJoinPoint joinPoint) throws Throwable {
        Object[] args = joinPoint.getArgs();
        Long userId = (Long) args[0];
        Long customCocktailId = (Long) args[1];

        Custom custom = customRepository.findCustomById(customCocktailId);
        if (!Objects.equals(userId, custom.getMember().getId())) {
            throw new UserException(UserErrorCode.FORBIDDEN);
        }

        return joinPoint.proceed();
    }

}
