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
import store.dalkak.api.cocktail.domain.heart.HeartRank;
import store.dalkak.api.cocktail.dto.CocktailDto;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.cocktail.repository.heart.HeartRankRepository;
import store.dalkak.api.recommend.dto.FastPreferDto;
import store.dalkak.api.recommend.dto.FastRefrigeratorDto;
import store.dalkak.api.recommend.dto.HeartRankDto;
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
        WebClient webClient = WebClient.builder()
            .baseUrl(FastUrl)
            .build();
        FastPreferDto fastPreferDto = webClient.get()
            .uri("/prefer-recommend/{m_id}", memberDto.getId()).retrieve()
            .bodyToMono(FastPreferDto.class).block();
        return PreferRecommendResDto.builder().cocktails(toCocktailList(fastPreferDto.getResult()))
            .build();
    }

    @Override
    public RefrigeratorRecommendResDto refrigeratorRecommend(MemberDto memberDto) {
        WebClient webClient = WebClient.builder()
            .baseUrl(FastUrl)
            .build();
        FastRefrigeratorDto fastRefrigeratorDto = webClient.get()
            .uri("/refrigerator-recommend/{m_id}", memberDto.getId()).retrieve()
            .bodyToMono(FastRefrigeratorDto.class).block();

        return RefrigeratorRecommendResDto.builder()
            .zero(toCocktailList(fastRefrigeratorDto.getResult().get(0)))
            .nonZero(toCocktailList(fastRefrigeratorDto.getResult().get(1))).build();
    }

    private List<CocktailDto> toCocktailList(List<Long> ids) {
        List<CocktailDto> recommendCocktails = new ArrayList<>();
        for (Long id : ids) {
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
        List<HeartRank> heartRanks = heartRankRepository.findAll(Sort.by("id"));
        List<HeartRankDto> heartRankDtos = new ArrayList<>();
        for (HeartRank heartRank : heartRanks) {
            heartRankDtos.add(HeartRankDto.builder().cocktailId(heartRank.getCocktail().getId())
                .cocktailKoreanName(heartRank.getCocktail()
                    .getKrName()).build());
        }
        return HeartRankRecommendResDto.builder().heartRankList(heartRankDtos).build();
    }
}
