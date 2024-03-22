package store.dalkak.api.cocktail.service;

import java.util.List;
import org.springframework.data.domain.Pageable;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.dto.response.CocktailPageResDto;
import store.dalkak.api.user.dto.MemberDto;


public interface CocktailService {


    CocktailPageResDto getCocktailList(Pageable page, String cocktailName, List<Long> ingredients,
        Long base, Integer minAlcoholContent, Integer maxAlcoholContent, Long color,
        Integer sweetness,
        Integer orderBy);

    CocktailDetailResDto findCocktail(Long originCocktailId);

    List<IngredientDto> findIngredient(String ingredientName);

    void createHeart(MemberDto memberDto, Long cocktailId);

    void deleteHeart(MemberDto memberDto, Long cocktailId);
}
