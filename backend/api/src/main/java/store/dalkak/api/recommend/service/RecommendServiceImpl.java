package store.dalkak.api.recommend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.cocktail.repository.heart.HeartRankRepository;
import store.dalkak.api.recommend.dto.response.HeartRankRecommendResDto;
import store.dalkak.api.recommend.dto.response.PreferRecommendResDto;
import store.dalkak.api.recommend.dto.response.RefrigeratorRecommendResDto;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService {

    private final HeartRankRepository heartRankRepository;

    @Value("${spring.fast.url}")
    private String FastUrl;

    @Override
    public PreferRecommendResDto preferRecommend(MemberDto memberDto) {
        WebClient webClient = WebClient.builder()
            .baseUrl("http://dalkak.store:3001/items/1?q=12")
            .build();
        String res = webClient.get().retrieve().bodyToMono(String.class).block();
        log.info(res);
        return null;
    }

    @Override
    public RefrigeratorRecommendResDto refrigeratorRecommend(MemberDto memberDto) {
        WebClient webClient = WebClient.builder()
            .baseUrl("http://dalkak.store:3001/items/1?q=12")
            .build();
        return null;
    }

    @Override
    public HeartRankRecommendResDto heartRankRecommend() {
        return new HeartRankRecommendResDto(heartRankRepository.findAll(Sort.by("id")));
    }
}
