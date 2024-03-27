package store.dalkak.api.global.config;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import store.dalkak.api.cocktail.service.CocktailService;
import store.dalkak.api.global.elastic.dto.ElasticDto;
import store.dalkak.api.global.elastic.service.ElasticService;

@Component
@RequiredArgsConstructor
@Slf4j
public class SchedulingConfig {

    private final CocktailService cocktailService;

    private final ElasticService elasticService;

    private final Logger heartLogger = LoggerFactory.getLogger("heart-log");

    private final Logger viewLogger = LoggerFactory.getLogger("view-log");

    // dump 입력
//    @Scheduled(cron = "0 * * * * *")
//    public void takeViewAndHeart() {
//        for (int i = 0; i < 100; i++) {
//            int randomNumber = ThreadLocalRandom.current().nextInt(1, 3163);
//            viewLogger.info("view-log {} {}", randomNumber, System.currentTimeMillis());
//        }
//        for (int i = 0; i < 100; i++) {
//            int randomNumber = ThreadLocalRandom.current().nextInt(1, 3163);
//            heartLogger.info("heart-log {} {}", randomNumber, System.currentTimeMillis());
//        }
//    }

    // 현재 인기있는 칵테일 순위
    @Scheduled(cron = "0 0 */6 * * *") // 매 6시간마다 실행 (초, 분, 시, 일, 월, 요일)
    public void executeTask() {
        List<ElasticDto> viewLogList = elasticService.findAllElasticLog("week", "view-log");
        List<ElasticDto> heartLogList = elasticService.findAllElasticLog("week", "heart-log");
        log.info("viewLogList size: {}", viewLogList.size());
        log.info("heartLogList size: {}", heartLogList.size());
        cocktailService.modifyRank(viewLogList, heartLogList);
    }

    // 좋아요 Count, Match를 Database에 입력
    @Scheduled(cron = "0 0 * * * *") // 정각마다
    public void migrateHeartToDatabase() {
        cocktailService.migrateHeart();
    }

    // 조회수 Count를 Database에 입력
    @Scheduled(cron = "0 0 * * * *") // 정각마다
    public void migrateViewToDatabase() {
        List<ElasticDto> viewLogList = elasticService.findAllElasticLog("day", "view-log");
        cocktailService.migrateView(viewLogList);
    }

}
