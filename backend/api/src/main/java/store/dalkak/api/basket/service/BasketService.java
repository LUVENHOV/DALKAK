package store.dalkak.api.basket.service;

import java.util.List;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.user.dto.MemberDto;


public interface BasketService {

    void addBasket(MemberDto memberDto, Long ingredientId);

    void deleteBasket(MemberDto memberDto, Long ingredientId);

    List<IngredientDto> findBasket(MemberDto memberDto);
}
