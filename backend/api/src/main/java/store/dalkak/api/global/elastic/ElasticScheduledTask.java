package store.dalkak.api.global.elastic;

import java.time.LocalDate;
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
import store.dalkak.api.user.domain.embed.Gender;
import store.dalkak.api.user.domain.embed.Provider;
import store.dalkak.api.user.dto.MemberDto;

@Component
@RequiredArgsConstructor
@Slf4j
public class ElasticScheduledTask {

    private final CocktailService cocktailService;

    private final ElasticService elasticService;

    private final Logger heartLogger = LoggerFactory.getLogger("heart-log");

    private final Logger viewLogger = LoggerFactory.getLogger("view-log");

    // dump
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

    @Scheduled(cron = "0 * * * * *") // 매 1분마다 실행 (초, 분, 시, 일, 월, 요일)
    public void executeTask() {
        List<ElasticDto> viewLogList = elasticService.findAllElasticLog("view-log");
        List<ElasticDto> heartLogList = elasticService.findAllElasticLog("heart-log");
        log.info("viewLogList size: {}", viewLogList.size());
        log.info("heartLogList size: {}", heartLogList.size());
        cocktailService.modifyRank(viewLogList, heartLogList);
    }
}
