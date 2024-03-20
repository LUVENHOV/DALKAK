package store.dalkak.api.global.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@RestController
@Slf4j(topic = "ek-log")
public class LogConfig {

    @GetMapping("/log")
    public ResponseEntity<String> getTestLog() {
        log.info("test-log");
        return ResponseEntity.ok("ok");
    }
}
