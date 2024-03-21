package store.dalkak.api.basket.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.basket.domain.Basket;
import store.dalkak.api.basket.exception.BasketErrorCode;
import store.dalkak.api.basket.exception.BasketException;
import store.dalkak.api.basket.exception.BasketIngredientAddErrorCode;
import store.dalkak.api.basket.repository.BasketRepository;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.exception.CocktailException;
import store.dalkak.api.cocktail.exception.IngredientSearchErrorCode;
import store.dalkak.api.cocktail.repository.ingredient.IngredientRepository;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.domain.MemberRepository;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.exception.UserErrorCode;
import store.dalkak.api.user.exception.UserException;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class BasketServiceImpl implements BasketService {

    private final IngredientRepository ingredientRepository;
    private final MemberRepository memberRepository;
    private final BasketRepository basketRepository;

    //추가
    @Override
    public void addBasket(MemberDto memberDto, Long ingredientId) {

        Member member = memberRepository.findById(memberDto.getId()).orElseThrow();
        Ingredient ingredient = ingredientRepository.findById(ingredientId).orElseThrow();
        if (!isNotAlreadyAdded(member, ingredient)) {
            throw new CocktailException(BasketIngredientAddErrorCode.ALREADY_BASKET_ADDED_ERROR_CODE);
        }
        basketRepository.save(new Basket(member, ingredient));
    }

    //이미 담긴 재료인지 확인
    private boolean isNotAlreadyAdded(Member member, Ingredient ingredient) {
        return basketRepository.findByMemberAndIngredient(member, ingredient).isEmpty();
    }

    //삭제
    @Override
    public void deleteBasket(MemberDto memberDto, Long ingredientId) {
        Member member = memberRepository.findById(memberDto.getId())
            .orElseThrow(() -> new UserException(
                UserErrorCode.INVALID_TOKEN));
        Ingredient ingredient = ingredientRepository.findById(ingredientId)
            .orElseThrow(() -> new CocktailException(
                IngredientSearchErrorCode.FAIL_TO_FIND_INGREDIENT));
        Basket basket = basketRepository.findByMemberAndIngredient(member,
                ingredient)
            .orElseThrow(() -> new BasketException(BasketErrorCode.REFRIGERATOR_ERROR_CODE));
        basketRepository.delete(basket);
    }

    @Override
    public List<IngredientDto> findBasket(MemberDto memberDto) {

        return basketRepository.findBasketIngredients(
            memberDto.getId());
    }


}
