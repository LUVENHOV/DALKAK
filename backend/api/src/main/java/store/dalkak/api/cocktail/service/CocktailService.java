package store.dalkak.api.cocktail.service;

import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient;
import store.dalkak.api.cocktail.Repository.CocktailRepository;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;
import store.dalkak.api.cocktail.dto.response.IngredientResDto;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CocktailService {

    private final CocktailRepository cocktailRepository;
    private final CocktailIngredientService cocktailIngredientService;

    public Page<CocktailFindResDto> getCocktailList(Pageable page, String cocktailName,
        List<Long> ingredients, Long base, Integer alcoholContent, Long color,
        Integer sweetness, Integer orderBy) {

        return cocktailRepository.findCocktailsByOption(page, cocktailName, ingredients, base,
            alcoholContent, color, sweetness, orderBy);
    }

    public CocktailDetailResDto findCocktail(Long originCocktailId) {
        Cocktail targetCocktail = cocktailRepository.findById(originCocktailId).orElseThrow(RuntimeException::new);
        List<CocktailIngredient> cocktailIngredients = cocktailIngredientService.findIngredientListByCocktail(targetCocktail);
        List<IngredientResDto> ingredientResDtoList = new ArrayList<>();
//        for(CocktailIngredient cocktailIngredient : cocktailIngredients) {
//            ingredientResDtoList.add(new IngredientResDto(cocktailIngredient.getId(), cocktailIngredient.))
//        }

            return null;
    }
}
