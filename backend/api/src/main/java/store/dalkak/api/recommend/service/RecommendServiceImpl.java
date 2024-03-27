package store.dalkak.api.recommend.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.cocktail.domain.HeartRank;
import store.dalkak.api.cocktail.repository.HeartRankRepository;
import store.dalkak.api.recommend.dto.PreferRecommendResDto;
import store.dalkak.api.recommend.dto.SurveyRecommendResDto;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService{

    private final HeartRankRepository heartRankRepository;

    @Override
    public SurveyRecommendResDto surveyRecommend(MemberDto memberDto) {
        WebClient webClient=WebClient.builder()
            .baseUrl("http://dalkak.store:3001/items/1?q=12")
            .build();
        String res=webClient.get().retrieve().bodyToMono(String.class).block();
        log.info(res);
        return null;
    }

    @Override
    public PreferRecommendResDto preferRecommend() {
        return new PreferRecommendResDto(heartRankRepository.findAll(Sort.by("id")));
    }
}
