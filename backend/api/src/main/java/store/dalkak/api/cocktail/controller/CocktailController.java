package store.dalkak.api.cocktail.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.dto.response.CocktailPageResDto;
import store.dalkak.api.cocktail.service.CocktailService;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/cocktails")
public class CocktailController {

    private final Logger heartLogger = LoggerFactory.getLogger("heart-log");

    private final Logger viewLogger = LoggerFactory.getLogger("view-log");

    private final CocktailService cocktailService;

    //칵테일 상세보기
    @GetMapping("/{cocktailId}")
    public ResponseEntity<ApiResponse<CocktailDetailResDto>> cocktailDetail(
        @LoginUser MemberDto memberDto, @PathVariable("cocktailId") Long originCocktailId) {
        CocktailDetailResDto cocktail = cocktailService.findCocktail(originCocktailId);
        ApiResponse<CocktailDetailResDto> apiResponse = ApiResponse.of(200,
            cocktail);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    // 칵테일 조회 로그 생성
    @GetMapping("/{cocktailId}/log")
    public ResponseEntity<ApiResponse<String>> createLog(@PathVariable("cocktailId") Long originCocktailId) {
        viewLogger.info("view-log {} {}", originCocktailId, System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, "로그 생성이 완료되었습니다."));
    }

    //칵테일 검색
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<CocktailPageResDto>> searchCocktailByOption(
        @PageableDefault(value = 20) Pageable page,
        @RequestParam(value = "cocktail-name", required = false) String cocktailName,
        @RequestParam(value = "ingredients", required = false) List<Long> ingredients,
        @RequestParam(value = "base", required = false) Long base,
        @RequestParam(value = "min-alcohol", required = false) Integer minAlcoholContent,
        @RequestParam(value = "max-alcohol", required = false) Integer maxAlcoholContent,
        @RequestParam(value = "color", required = false) Long color,
        @RequestParam(value = "sweetness", required = false) Integer sweetness,
        @RequestParam(value = "orderBy", required = false) Integer orderBy) {

        CocktailPageResDto cocktailPageResDto = cocktailService.getCocktailList(page,
            cocktailName, ingredients, base, minAlcoholContent, maxAlcoholContent, color, sweetness,
            orderBy);

        ApiResponse<CocktailPageResDto> apiResponse = ApiResponse.of(200,
            cocktailPageResDto);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    @GetMapping("/ingredients")
    public ResponseEntity<ApiResponse<List<IngredientDto>>> searchIngredients(
        @LoginUser MemberDto memberDto,
        @RequestParam(value = "ingredient-name", required = false) String ingredientName) {

        List<IngredientDto> ingredients = cocktailService.findIngredient(ingredientName);

        ApiResponse<List<IngredientDto>> apiResponse = ApiResponse.of(200, ingredients);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    @GetMapping("/{cocktailId}/like")
    public ResponseEntity<ApiResponse<String>> createHeart(@LoginUser MemberDto memberDto,
        @PathVariable("cocktailId") Long cocktailId) {
        cocktailService.createHeart(memberDto, cocktailId);
        heartLogger.info("heart-log {} {}", cocktailId, System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, "좋아요가 완료되었습니다."));
    }

    @GetMapping("/{cocktailId}/dislike")
    public ResponseEntity<ApiResponse<String>> deleteHeart(@LoginUser MemberDto memberDto,
        @PathVariable("cocktailId") Long cocktailId) {
        cocktailService.deleteHeart(memberDto, cocktailId);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, "좋아요가 취소되었습니다."));
    }

}
