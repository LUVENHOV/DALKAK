package store.dalkak.api.custom.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.dalkak.api.cocktail.Repository.CocktailRepository;
import store.dalkak.api.cocktail.Repository.ingredient.IngredientRepository;
//import store.dalkak.api.cocktail.Repository.UnitRepository;
import store.dalkak.api.custom.domain.CustomIngredientRepository;
import store.dalkak.api.custom.domain.CustomRepository;
import store.dalkak.api.custom.dto.request.CustomCreateReqDto;
import store.dalkak.api.global.config.ImageConfig;
//import store.dalkak.api.user.domain.UserRepository;

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

//    private final UserRepository userRepository;

    // 로그인 기능 구현 시 변경
//    @Override
//    @Transactional
//    public void createCustomCocktail(MultipartFile image, CustomCreateReqDto customCreateReqDto,
//        Member member) {
//        String imageUrl = imageConfig.uploadImage(image);
//        Cocktail cocktail = cocktailRepository.findCocktailById(customCreateReqDto.getCocktailId());
//
//        Custom custom = customRepository.save(Custom.builder().member(member).cocktail(cocktail)
//            .name(customCreateReqDto.getCustomName()).comment(customCreateReqDto.getCustomComment())
//            .recipe(customCreateReqDto.getCustomRecipe())
//            .summary(customCreateReqDto.getCustomSummary()).open(customCreateReqDto.getOpen())
//            .image(imageUrl).build());
//
//        List<CustomIngredient> customIngredientList = customCreateReqDto.getCustomIngredientList()
//            .stream().map(customIngredientDto -> {
//                Unit unit = unitRepository.findUnitById(customIngredientDto.getUnit_id());
//                Ingredient ingredient = ingredientRepository.findIngredientById(
//                    customIngredientDto.getId());
//                return customIngredientRepository.save(CustomIngredient.builder().custom(custom)
//                    .amount(customIngredientDto.getAmount()).ingredient(ingredient).unit(unit)
//                    .build());
//            }).toList();
//
////        customRepository.modifyCustomIngredients(custom, customIngredientList);
//    }
    @Override
    @Transactional
    public void createCustomCocktail(MultipartFile image, CustomCreateReqDto customCreateReqDto) {
////        String imageUrl = imageConfig.uploadImage(image);
//        String imageUrl = "111";
////        Cocktail cocktail = cocktailRepository.findCocktailById(customCreateReqDto.getCocktailId());
////        Member member = userRepository.findMemberById(1L);
////        log.info(member.toString());
//        Custom custom = customRepository.save(Custom.builder().member(member).cocktail(cocktail)
//            .name(customCreateReqDto.getCustomName()).comment(customCreateReqDto.getCustomComment())
//            .recipe(customCreateReqDto.getCustomRecipe())
//            .summary(customCreateReqDto.getCustomSummary()).open(customCreateReqDto.getOpen())
//            .image(imageUrl).build());
//
//        List<CustomIngredient> customIngredientList = customCreateReqDto.getCustomIngredientList()
//            .stream().map(customIngredientDto -> {
//                Unit unit = unitRepository.findUnitById(customIngredientDto.getUnit_id());
//                Ingredient ingredient = ingredientRepository.findIngredientById(
//                    customIngredientDto.getId());
//                return customIngredientRepository.save(CustomIngredient.builder().custom(custom)
//                    .amount(customIngredientDto.getAmount()).ingredient(ingredient).unit(unit)
//                    .build());
//            }).toList();

//        customRepository.modifyCustomIngredients(custom, customIngredientList);
    }
}
