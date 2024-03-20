package store.dalkak.api.cocktail.service;

import static store.dalkak.api.cocktail.domain.ingredient.QIngredient.ingredient;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import io.micrometer.common.util.StringUtils;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.dto.response.CocktailPageResDto;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.cocktail.repository.ingredient.CocktailIngredientRepository;
import store.dalkak.api.cocktail.repository.tool.CocktailToolRepository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.ingredient.CocktailIngredient;
import store.dalkak.api.cocktail.domain.tool.CocktailTool;
import store.dalkak.api.cocktail.dto.CocktailCustomDto;
import store.dalkak.api.cocktail.dto.CocktailIngredientDto;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.dto.ToolDto;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;
import store.dalkak.api.cocktail.exception.CocktailException;
import store.dalkak.api.cocktail.exception.CocktailSearchErrorCode;
import store.dalkak.api.custom.domain.CustomRepository;


@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CocktailService {

    private final CocktailRepository cocktailRepository;
    private final CocktailIngredientRepository cocktailIngredientRepository;
    private final CocktailToolRepository cocktailToolRepository;
    private final CustomRepository customRepository;
    private final JPAQueryFactory queryFactory;

    public CocktailPageResDto getCocktailList(Pageable page, String cocktailName,
        List<Long> ingredients, Long base, Integer minAlcoholContent, Integer maxAlcoholContent,
        Long color,
        Integer sweetness, Integer orderBy) {

        Page<CocktailFindResDto> cocktailFindResDtoList = cocktailRepository.findCocktailsByOption(page, cocktailName, ingredients, base,
            minAlcoholContent, maxAlcoholContent, color, sweetness, orderBy);

        CocktailPageResDto cocktailPageResDto = new CocktailPageResDto(
            cocktailFindResDtoList.getContent(), cocktailFindResDtoList.getTotalElements(),
            cocktailFindResDtoList.getTotalPages(), cocktailFindResDtoList.getPageable().getPageNumber()+ 1);

        if (cocktailPageResDto.getTotalElements() == 0) {
            throw new CocktailException(CocktailSearchErrorCode.FAIL_TO_FIND_COCKTAIL);
        }

        return cocktailPageResDto;
    }

    public CocktailDetailResDto findCocktail(Long originCocktailId) {
        Cocktail targetCocktail = cocktailRepository.findById(originCocktailId)
            .orElseThrow(
                () -> new CocktailException(CocktailSearchErrorCode.FAIL_TO_FIND_COCKTAIL));
        //재료 리스트
        List<CocktailIngredient> cocktailIngredients = cocktailIngredientRepository.findAllByCocktail(
            targetCocktail);
        List<CocktailIngredientDto> cocktailIngredientDtoList = new ArrayList<>();
        for (CocktailIngredient cocktailIngredient : cocktailIngredients) {
            cocktailIngredientDtoList.add(new CocktailIngredientDto(
                cocktailIngredient.getIngredient().getId(),
                cocktailIngredient.getIngredient().getName(),
                cocktailIngredient.getIngredient().getImage(),
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
        List<CocktailCustomDto> customs = customRepository.findAllByCocktailId(originCocktailId);
        List<CocktailCustomDto> cocktailCustomDtoList = customs.stream()
            .sorted(Comparator.comparing(CocktailCustomDto::getCustomId).reversed())
            .limit(4)
            .toList();

        return CocktailDetailResDto.of(targetCocktail, cocktailIngredientDtoList, toolDtoList,
            cocktailCustomDtoList);
    }

    public List<IngredientDto> findIngredient(String ingredientName) {

        List<IngredientDto> ingredientDtoList = queryFactory.select(
                Projections.constructor(IngredientDto.class, ingredient.id, ingredient.name))
            .from(ingredient)
            .where(this.searchKeyword(ingredientName))
            .fetch();

        if(ingredientDtoList.isEmpty()) throw new CocktailException(CocktailSearchErrorCode.FAIL_TO_FIND_COCKTAIL);

        return ingredientDtoList;
    }

    private BooleanExpression searchKeyword(String keyword) {
        if (StringUtils.isBlank(keyword)) {
            return null;
        }
        return Expressions.numberTemplate(Double.class,
            "function('match', {0}, {1})", ingredient.name, keyword).gt(0);
    }

}
