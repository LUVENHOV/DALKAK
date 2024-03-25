package store.dalkak.api.recommend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.recommend.dto.SurveyRecommendResDto;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService{

    @Override
    public SurveyRecommendResDto surveyRecommend(MemberDto memberDto) {
        WebClient webClient=WebClient.builder()
            .baseUrl("http://dalkak.store:3001/items/1?q=12")
            .build();
        String res=webClient.get().retrieve().bodyToMono(String.class).block();
        log.info(res);
        return null;
    }
}
