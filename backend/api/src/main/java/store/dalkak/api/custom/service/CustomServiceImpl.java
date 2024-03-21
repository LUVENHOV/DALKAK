package store.dalkak.api.custom.service;

import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
import store.dalkak.api.cocktail.domain.ingredient.Unit;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.cocktail.repository.UnitRepository;
import store.dalkak.api.cocktail.repository.ingredient.IngredientRepository;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.domain.CustomIngredient;
import store.dalkak.api.custom.dto.CustomIngredientDto;
import store.dalkak.api.custom.dto.CustomIngredientModifyDto;
import store.dalkak.api.custom.dto.CustomModifyDto;
import store.dalkak.api.custom.dto.request.CustomCreateReqDto;
import store.dalkak.api.custom.repository.CustomIngredientRepository;
import store.dalkak.api.custom.repository.CustomRepository;
import store.dalkak.api.global.config.ImageConfig;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.domain.MemberRepository;
import store.dalkak.api.user.dto.MemberDto;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomServiceImpl implements CustomService {

    private final ImageConfig imageConfig;

    private final CocktailRepository cocktailRepository;

//    private final UnitRepository unitRepository;

    private final IngredientRepository ingredientRepository;

    private final CustomRepository customRepository;

    private final CustomIngredientRepository customIngredientRepository;

    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void createCustomCocktail(MultipartFile image, CustomCreateReqDto customCreateReqDto,
        MemberDto memberDto) {
        String imageUrl = imageConfig.uploadImage(image);
        Cocktail cocktail = cocktailRepository.findCocktailById(customCreateReqDto.getCocktailId());
        Member member = memberRepository.findMemberById(memberDto.getId());
        Custom custom = customRepository.save(Custom.builder().member(member).cocktail(cocktail)
            .name(customCreateReqDto.getCustomName()).comment(customCreateReqDto.getCustomComment())
            .recipe(customCreateReqDto.getCustomRecipe())
            .summary(customCreateReqDto.getCustomSummary()).open(customCreateReqDto.getOpen())
            .image(imageUrl).build());

        for (CustomIngredientDto customIngredientDto : customCreateReqDto.getCustomIngredientList()) {
            Unit unit = unitRepository.findUnitById(customIngredientDto.getUnitId());
            Ingredient ingredient = ingredientRepository.findIngredientById(
                customIngredientDto.getId());
            customIngredientRepository.save(CustomIngredient.builder().custom(custom)
                .amount(customIngredientDto.getAmount()).ingredient(ingredient).unit(unit)
                .build());
        }

    }

    @Override
    @Transactional
    public void deleteCustomCocktail(Long customCocktailId) {
        Custom custom = customRepository.findCustomById(customCocktailId);
        // 이미지 삭제
        imageConfig.deleteImage(custom.getImage());

        // 재료 삭제
        for (CustomIngredient customIngredient : custom.getCustomIngredients()) {
            customIngredientRepository.deleteCustomIngredientById(customIngredient.getId());
        }

        // 커스텀 칵테일 삭제
        customRepository.deleteCustomById(customCocktailId);
    }

    @Override
    @Transactional
    public void modifyCustomCocktail(Long customCocktailId, MultipartFile image,
        CustomCreateReqDto customCreateReqDto) {
        Custom custom = customRepository.findCustomById(customCocktailId);

        // 현재 커스텀 칵테일이 저장하고 있는 커스텀 재료 아이디를 리스트에 저장
        List<Long> customIngredientIdList = new ArrayList<>();
        for (CustomIngredient customIngredient : custom.getCustomIngredients()) {
            customIngredientIdList.add(customIngredient.getId());
        }

        // 현재 가지고 있는 아이디 리스트와 비교해서 만약 존재한다면 update, 존재하지 않는다면 save
        for (CustomIngredientDto customIngredientDto : customCreateReqDto.getCustomIngredientList()) {
            Unit unit = unitRepository.findUnitById(customIngredientDto.getUnitId());
            if (customIngredientIdList.contains(customIngredientDto.getId())) {
                customIngredientRepository.ModifyCustomIngredient(
                    new CustomIngredientModifyDto(customCocktailId, customIngredientDto.getAmount(),
                        unit));
            } else {
                Ingredient ingredient = ingredientRepository.findIngredientById(
                    customIngredientDto.getId());
                customIngredientRepository.save(
                    CustomIngredient.builder().unit(unit).ingredient(ingredient).custom(custom)
                        .build());
            }
        }

        String imageUrl;
        // 만약 이미지를 변경했다면
        if(image != null) {
            imageConfig.deleteImage(custom.getImage());
            imageUrl = imageConfig.uploadImage(image);
        } else {
            imageUrl = custom.getImage();
        }

        CustomModifyDto customModifyDto = new CustomModifyDto(customCreateReqDto.getCustomName(),
            customCreateReqDto.getCustomSummary(), customCreateReqDto.getCustomComment(),
            customCreateReqDto.getCustomRecipe(), imageUrl, customCreateReqDto.getOpen());

        customRepository.modifyCustomCocktail(customCocktailId, customModifyDto);
    }
}
