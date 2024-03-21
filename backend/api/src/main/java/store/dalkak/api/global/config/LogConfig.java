package store.dalkak.api.global.config;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@RestController
@RequiredArgsConstructor
//@Slf4j
public class LogConfig {
    private final Logger logger = LoggerFactory.getLogger("dalkak-log");

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/ek-log")
    public ResponseEntity<String> getElkTestLog() {
        logger.info("test-log");
        return ResponseEntity.ok("ok");
    }

}
