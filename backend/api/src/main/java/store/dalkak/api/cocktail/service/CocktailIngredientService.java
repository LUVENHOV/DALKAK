package store.dalkak.api.cocktail.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient;
import store.dalkak.api.cocktail.Repository.ingredient.CocktailIngredientRepository;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CocktailIngredientService {

    private final CocktailIngredientRepository cocktailIngredientRepository;

    public List<CocktailIngredient> findIngredientListByCocktail(Cocktail cocktail) {

        return cocktailIngredientRepository.findAllByCocktail(cocktail);

    }
}
