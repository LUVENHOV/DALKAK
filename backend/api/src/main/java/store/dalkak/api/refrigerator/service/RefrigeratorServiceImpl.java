package store.dalkak.api.refrigerator.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.exception.CocktailErrorCode;
import store.dalkak.api.cocktail.exception.CocktailException;
import store.dalkak.api.cocktail.repository.ingredient.IngredientRepository;
import store.dalkak.api.refrigerator.domain.Refrigerator;
import store.dalkak.api.refrigerator.exception.RefrigeratorErrorCode;
import store.dalkak.api.refrigerator.exception.RefrigeratorException;
import store.dalkak.api.refrigerator.repository.RefrigeratorRepository;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.exception.UserErrorCode;
import store.dalkak.api.user.exception.UserException;
import store.dalkak.api.user.repository.MemberRepository;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class RefrigeratorServiceImpl implements RefrigeratorService {

    private final IngredientRepository ingredientRepository;
    private final MemberRepository memberRepository;
    private final RefrigeratorRepository refrigeratorRepository;

    //추가
    @Override
    public void addRefrigerator(MemberDto memberDto, Long ingredientId) {

        Member member = memberRepository.findById(memberDto.getId()).orElseThrow();
        Ingredient ingredient = ingredientRepository.findById(ingredientId).orElseThrow();
        if (!isNotAlreadyAdded(member, ingredient)) {
            throw new CocktailException(RefrigeratorErrorCode.REF_ALREADY_ADDED_ERROR_CODE);
        }
        refrigeratorRepository.save(new Refrigerator(member, ingredient));
    }

    //이미 담긴 재료인지 확인
    private boolean isNotAlreadyAdded(Member member, Ingredient ingredient) {
        return refrigeratorRepository.findByMemberAndIngredient(member, ingredient).isEmpty();
    }

    //삭제
    @Override
    public void deleteRefrigerator(MemberDto memberDto, Long ingredientId) {
        Member member = memberRepository.findById(memberDto.getId())
            .orElseThrow(() -> new UserException(
                UserErrorCode.INVALID_USER));
        Ingredient ingredient = ingredientRepository.findById(ingredientId)
            .orElseThrow(() -> new CocktailException(
                CocktailErrorCode.FAIL_TO_FIND_INGREDIENT));
        Refrigerator refrigerator = refrigeratorRepository.findByMemberAndIngredient(member,
            ingredient).orElseThrow(
            () -> new RefrigeratorException(RefrigeratorErrorCode.REFRIGERATOR_ERROR_CODE));
        refrigeratorRepository.delete(refrigerator);
    }

    @Override
    public List<IngredientDto> findRefrigerator(MemberDto memberDto) {

        List<IngredientDto> refrigeratorList = refrigeratorRepository.findRefIngredients(
            memberDto.getId());

        return refrigeratorList;
    }


}
