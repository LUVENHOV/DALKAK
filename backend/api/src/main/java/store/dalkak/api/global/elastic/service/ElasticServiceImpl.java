package store.dalkak.api.global.elastic.service;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.global.elastic.dto.CocktailDocument;
import store.dalkak.api.global.elastic.dto.ElasticViewReqDto;
import store.dalkak.api.global.elastic.repository.CocktailElasticRepository;

@Service
@RequiredArgsConstructor
@Transactional
public class ElasticServiceImpl implements ElasticService {

    private final CocktailElasticRepository cocktailElasticRepository;

    private final CocktailRepository cocktailRepository;

    @Override
    public void createElasticLog(ElasticViewReqDto elasticViewReqDto) {
        CocktailDocument cocktailDocument = CocktailDocument.builder()
            .timestamp(LocalDateTime.now()).cocktailId(elasticViewReqDto.getCocktailId())
            .name(elasticViewReqDto.getName()).krName(elasticViewReqDto.getKrName())
            .viewCount(elasticViewReqDto.getViewCount())
            .heartCount(elasticViewReqDto.getHeartCount()).image(
                elasticViewReqDto.getImage()).recipe(elasticViewReqDto.getRecipe()).alcohol(
                elasticViewReqDto.getAlcohol()).sweetness(elasticViewReqDto.getSweetness())
            .time_mili(System.currentTimeMillis())
            .build();
        cocktailElasticRepository.save(cocktailDocument);
    }

    @Override
    public List<CocktailDocument> findAllElasticLog() {
        Long weekMili = 604_800_000L;
        Long nowMili = System.currentTimeMillis();
        Long oneWeekAgo = nowMili - weekMili;
        return cocktailElasticRepository.findAllByDate(nowMili, oneWeekAgo);
    }
}
