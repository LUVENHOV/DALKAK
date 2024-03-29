package store.dalkak.api.recommend.service;

import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.dto.CocktailDto;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.cocktail.repository.heart.HeartRankRepository;
import store.dalkak.api.recommend.dto.FastDto;
import store.dalkak.api.recommend.dto.response.HeartRankRecommendResDto;
import store.dalkak.api.recommend.dto.response.PreferRecommendResDto;
import store.dalkak.api.recommend.dto.response.RefrigeratorRecommendResDto;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService {

    private final HeartRankRepository heartRankRepository;
    private final CocktailRepository cocktailRepository;

    @Value("${spring.fast.url}")
    private String FastUrl;

    @Override
    public PreferRecommendResDto preferRecommend(MemberDto memberDto) {
        return new PreferRecommendResDto(
            fastRecommend(memberDto.getId(), "prefer-recommend"));
    }

    @Override
    public RefrigeratorRecommendResDto refrigeratorRecommend(MemberDto memberDto) {
        return new RefrigeratorRecommendResDto(
            fastRecommend(memberDto.getId(), "refrigerator-recommend"));
    }

    private List<CocktailDto> fastRecommend(Long memberId, String recommend) {
        WebClient webClient = WebClient.builder()
            .baseUrl(FastUrl)
            .build();
        FastDto fastDto = webClient.get()
            .uri("/{recommend}/{m_id}", recommend, memberId).retrieve()
            .bodyToMono(FastDto.class).block();
        List<CocktailDto> recommendCocktails = new ArrayList<>();
        for (Long id : fastDto.getResult()) {
            Cocktail cocktail = cocktailRepository.findCocktailById(id);
            recommendCocktails.add(
                CocktailDto.builder().id(cocktail.getId()).name(cocktail.getName())
                    .koreanName(cocktail.getKrName()).image(cocktail.getImage())
                    .heartCount(cocktail.getHeartCount())
                    .build());
        }
        return recommendCocktails;
    }

    @Override
    public HeartRankRecommendResDto heartRankRecommend() {
        return new HeartRankRecommendResDto(heartRankRepository.findAll(Sort.by("id")));
    }
}
