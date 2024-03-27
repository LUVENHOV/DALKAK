package store.dalkak.api.cocktail.service;

import static store.dalkak.api.cocktail.domain.ingredient.QIngredient.ingredient;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import io.micrometer.common.util.StringUtils;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.heart.HeartCount;
import store.dalkak.api.cocktail.domain.heart.HeartMatch;
import store.dalkak.api.cocktail.domain.heart.HeartRank;
import store.dalkak.api.cocktail.domain.ingredient.CocktailIngredient;
import store.dalkak.api.cocktail.domain.tool.CocktailTool;
import store.dalkak.api.cocktail.dto.CocktailDto;
import store.dalkak.api.cocktail.dto.CocktailIngredientDto;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.dto.ToolDto;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.dto.response.CocktailPageResDto;
import store.dalkak.api.cocktail.exception.CocktailErrorCode;
import store.dalkak.api.cocktail.exception.CocktailException;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.cocktail.repository.heart.HeartCountRepository;
import store.dalkak.api.cocktail.repository.heart.HeartMatchRepository;
import store.dalkak.api.cocktail.repository.heart.HeartRankRepository;
import store.dalkak.api.cocktail.repository.heart.HeartRedisRepository;
import store.dalkak.api.cocktail.repository.ingredient.CocktailIngredientRepository;
import store.dalkak.api.cocktail.repository.tool.CocktailToolRepository;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.dto.CustomCocktailDto;
import store.dalkak.api.custom.repository.CustomRepository;
import store.dalkak.api.global.elastic.dto.ElasticDto;
import store.dalkak.api.user.domain.Heart;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.dto.UserDto;
import store.dalkak.api.user.repository.HeartRepository;
import store.dalkak.api.user.repository.MemberRepository;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CocktailServiceImpl implements CocktailService {

    private final CocktailRepository cocktailRepository;
    private final CocktailIngredientRepository cocktailIngredientRepository;
    private final CocktailToolRepository cocktailToolRepository;
    private final CustomRepository customRepository;
    private final MemberRepository memberRepository;
    private final HeartRepository heartRepository;
    private final HeartRankRepository heartRankRepository;
    private final HeartMatchRepository heartMatchRepository;
    private final HeartCountRepository heartCountRepository;
    private final HeartRedisRepository heartRedisRepository;
    private final JPAQueryFactory queryFactory;
    private final Double VIEW_WEIGHT = 0.314;
    private final Double HEART_WEIGHT = 0.807;

    @Value("${spring.data.redis.count.prefix}")
    private String redisCountPrefix;

    @Value("${spring.data.redis.match.prefix}")
    private String redisMatchPrefix;

    public CocktailPageResDto getCocktailList(Pageable page, String cocktailName,
        List<Long> ingredients, Long base, Integer minAlcoholContent, Integer maxAlcoholContent,
        Long color,
        Integer sweetness, Integer orderBy) {

        Page<CocktailDto> cocktailFindResDtoPage = cocktailRepository.findCocktailsByOption(page,
            cocktailName, ingredients, base,
            minAlcoholContent, maxAlcoholContent, color, sweetness, orderBy);

        return new CocktailPageResDto(
            cocktailFindResDtoPage.getContent(), cocktailFindResDtoPage.getTotalElements(),
            cocktailFindResDtoPage.getTotalPages(),
            cocktailFindResDtoPage.getPageable().getPageNumber() + 1);
    }

    public CocktailDetailResDto findCocktail(Long originCocktailId) {
        Cocktail targetCocktail = cocktailRepository.findById(originCocktailId)
            .orElseThrow(
                () -> new CocktailException(CocktailErrorCode.FAIL_TO_FIND_COCKTAIL));
        //재료 리스트
        List<CocktailIngredient> cocktailIngredients = cocktailIngredientRepository.findAllByCocktail(
            targetCocktail);
        List<CocktailIngredientDto> cocktailIngredientDtoList = new ArrayList<>();
        for (CocktailIngredient cocktailIngredient : cocktailIngredients) {
            cocktailIngredientDtoList.add(new CocktailIngredientDto(
                cocktailIngredient.getIngredient().getId(),
                cocktailIngredient.getIngredient().getName(),
                cocktailIngredient.getIngredient().getImage(),
                cocktailIngredient.getIngredient().getCategory().getId(),
                cocktailIngredient.getAmount(),
                cocktailIngredient.getUnit()
            ));
        }
        //도구 리스트
        List<CocktailTool> cocktailTools = cocktailToolRepository.findAllByCocktail(targetCocktail);
        List<ToolDto> toolDtoList = new ArrayList<>();
        for (CocktailTool cocktailTool : cocktailTools) {
            toolDtoList.add(new ToolDto(
                cocktailTool.getTool().getId(),
                cocktailTool.getTool().getName(),
                cocktailTool.getTool().getImage()
            ));
        }
        //커스텀 레시피 리스트
        List<Custom> customCocktails = customRepository.findAllByCocktailOrderByIdDesc(
            targetCocktail);
        List<CustomCocktailDto> customCocktailDtoList = new ArrayList<>();
        for (Custom custom : customCocktails) {
            customCocktailDtoList
                .add(CustomCocktailDto
                    .builder()
                    .id(custom.getId())
                    .image(custom.getCocktail().getImage())
                    .name(custom.getName())
                    .summary(custom.getSummary())
                    .user(UserDto.builder().id(custom.getMember().getId())
                        .nickname(custom.getMember().getNickname()).build())
                    .build());
        }

        return CocktailDetailResDto.of(targetCocktail, cocktailIngredientDtoList, toolDtoList,
            customCocktailDtoList);
    }

    public List<IngredientDto> findIngredient(String ingredientName) {

        List<IngredientDto> ingredientDtoList = queryFactory.select(
                Projections.constructor(IngredientDto.class, ingredient.id, ingredient.name,
                    ingredient.image, ingredient.category))
            .from(ingredient)
            .where(this.searchKeyword(ingredientName))
            .fetch();

        if (ingredientDtoList.isEmpty()) {
            throw new CocktailException(CocktailErrorCode.FAIL_TO_FIND_COCKTAIL);
        }

        return ingredientDtoList;
    }

    private BooleanExpression searchKeyword(String keyword) {
        if (StringUtils.isBlank(keyword)) {
            return null;
        }
        return Expressions.numberTemplate(Double.class,
            "function('match', {0}, {1})", ingredient.name, keyword).gt(0);
    }

    @Override
    public void createHeart(MemberDto memberDto, Long cocktailId) {
        // [Member]사용자 id : 칵테일 => Heart
        // [Cocktail]칵테일 id : 좋아요 수
        // 두 가지 형태가 저장되어야 함
        String cocktailKey = "[" + redisCountPrefix + "]" + cocktailId;
        String memberKey = "[" + redisMatchPrefix + "]" + memberDto.getId() + "_" + cocktailId;
        try {
            HeartCount cocktailHeartCount = heartCountRepository.findById(cocktailKey)
                .orElseThrow();
            heartCountRepository.save(HeartCount.builder().id(cocktailKey).cocktailId(cocktailId)
                .count(cocktailHeartCount.getCount() + 1).build());
        } catch (Exception e) {
            Cocktail cocktail = cocktailRepository.findById(cocktailId).orElseThrow();
            heartRepository.save(Heart.builder().build());
            heartCountRepository.save(HeartCount.builder().id(cocktailKey).cocktailId(cocktailId)
                .count(cocktail.getHeartCount() + 1).build());
        } finally {
            heartMatchRepository.save(
                HeartMatch.builder().id(memberKey).cocktailId(cocktailId)
                    .memberId(memberDto.getId()).build());
        }
    }

    @Override
    public void deleteHeart(MemberDto memberDto, Long cocktailId) {

        String memberKey = "[" + redisMatchPrefix + "]" + memberDto.getId() + "_" + cocktailId;
        String cocktailKey = "[" + redisCountPrefix + "]" + cocktailId;
        try {
            // 만약 캐싱된 데이터가 있을 경우 => redis
            HeartMatch cocktailHeartMatch = heartMatchRepository.findById(memberKey)
                .orElseThrow();
            HeartCount cocktailHeartCount = heartCountRepository.findById(cocktailKey)
                .orElseThrow();
            heartCountRepository.save(HeartCount.builder().id(cocktailKey).cocktailId(cocktailId)
                .count(cocktailHeartCount.getCount() - 1).build());
            heartMatchRepository.delete(cocktailHeartMatch);
        } catch (Exception e) {
            // 없을 경우 => database
            Cocktail cocktail = cocktailRepository.findById(cocktailId).orElseThrow();
            Member member = memberRepository.findMemberById(memberDto.getId());
            cocktailRepository.modifyHeartCount(cocktailId, cocktail.getHeartCount() - 1);
            heartCountRepository.save(HeartCount.builder().id(cocktailKey).cocktailId(cocktailId)
                .count(cocktail.getHeartCount() - 1).build());
            heartRepository.deleteHeartByCocktailAndMember(cocktail, member);
        }
    }

    @Override
    // 50분마다 레디스에서 데이터베이스로 옮기는 작업
    public void migrateHeart() {
        List<String> countKeyList = heartRedisRepository.findAllRedisList("*" + redisCountPrefix +"*");
        for(String cocktailKey : countKeyList) {
            HeartCount heartCount = heartCountRepository.findById(cocktailKey.substring(11)).orElseThrow();
            cocktailRepository.modifyHeartCount(heartCount.getCocktailId(), heartCount.getCount());
        }

        List<String> matchKeyList = heartRedisRepository.findAllRedisList("*" + redisMatchPrefix +"*");
        for(String matchKey : matchKeyList) {
            HeartMatch heartMatch = heartMatchRepository.findById(matchKey.substring(11)).orElseThrow();
            Cocktail cocktail = cocktailRepository.findCocktailById(heartMatch.getCocktailId());
            Member member = memberRepository.findMemberById(heartMatch.getMemberId());
            Heart heart = heartRepository.findHeartByCocktailAndMember(cocktail, member);
            if(heart == null) {
                heartRepository.save(Heart.builder().cocktail(cocktail).member(member).build());
            }
        }
    }

    @Override
    public void migrateView(List<ElasticDto> viewLogList) {
        Map<Long, Integer> cocktailMap = new ConcurrentHashMap<>();
        for(ElasticDto elasticDto : viewLogList) {
            cocktailMap.put(elasticDto.getCocktailId(), cocktailMap.getOrDefault(elasticDto.getCocktailId(), 0)+1);
        }
        for(Entry<Long, Integer> entry : cocktailMap.entrySet()) {
            Cocktail cocktail = cocktailRepository.findCocktailById(entry.getKey());
            cocktailRepository.modifyViewCount(entry.getKey(), cocktail.getHeartCount() + entry.getValue());
        }
    }

    @Override
    public void modifyRank(List<ElasticDto> viewLogList, List<ElasticDto> heartLogList) {
        Map<Long, Double> resultMap = new ConcurrentHashMap<>();
        for (ElasticDto elasticDto : viewLogList) {
            resultMap.put(elasticDto.getCocktailId(),
                resultMap.getOrDefault(elasticDto.getCocktailId(), 0.0) + VIEW_WEIGHT);
        }
        for (ElasticDto elasticDto : heartLogList) {
            resultMap.put(elasticDto.getCocktailId(),
                resultMap.getOrDefault(elasticDto.getCocktailId(), 0.0) + HEART_WEIGHT);
        }

        // map의 값을 기준으로 오름차순 정렬
        Map<Long, Double> sortedMap = resultMap.entrySet().stream()
            .sorted(Map.Entry.<Long, Double>comparingByValue().reversed()) // 값(Value)을 기준으로 오름차순 정렬
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                Map.Entry::getValue,
                (oldValue, newValue) -> oldValue, // 중복 키가 있을 경우 어떻게 처리할지 정의 (이 경우는 생략 가능)
                LinkedHashMap::new)); // 정렬된 순서를 유지하는 LinkedHashMap에 결과 수집

        // 테이블 비우기
        heartRankRepository.deleteAll();

        int cocktailCount = 0;
        for (Map.Entry<Long, Double> entry : sortedMap.entrySet()) {
            if (cocktailCount++ == 10) {
                break;
            }
            heartRankRepository.save(HeartRank.builder().cocktailId(entry.getKey()).build());
        }
    }

}
