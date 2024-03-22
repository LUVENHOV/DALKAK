package store.dalkak.api.refrigerator.service;

import java.util.List;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.user.dto.MemberDto;


public interface RefrigeratorService {
    void addRefrigerator(MemberDto memberDto, Long ingredientId);

    void deleteRefrigerator(MemberDto memberDto, Long ingredientId);

    List<IngredientDto> findRefrigerator(MemberDto memberDto);
}
