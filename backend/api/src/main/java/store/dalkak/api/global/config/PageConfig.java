package store.dalkak.api.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.data.web.config.PageableHandlerMethodArgumentResolverCustomizer;
import org.springframework.stereotype.Component;

@Component
public class PageConfig {

    @Bean
    public PageableHandlerMethodArgumentResolverCustomizer customizePageable() {
        return p -> {
            p.setOneIndexedParameters(true);    // 1부터 시작
            p.setMaxPageSize(20);        // size=20
        };
    }
}
