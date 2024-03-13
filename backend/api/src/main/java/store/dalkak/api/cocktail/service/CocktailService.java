package store.dalkak.api.cocktail.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Repository.CocktailRepository;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CocktailService {

    private final CocktailRepository cocktailRepository;

    public Page<Cocktail> getCocktailList(Pageable page, String cocktailName,
        List<Long> ingredients, Long base, Integer alcoholContent, Long color,
        Integer sweetness,
        Integer difficulty, Long gender, Integer orderBy) {

        return cocktailRepository.findCocktailsByOption(page, cocktailName, ingredients, base,
            alcoholContent, color, sweetness, difficulty, gender, orderBy);
    }
}
