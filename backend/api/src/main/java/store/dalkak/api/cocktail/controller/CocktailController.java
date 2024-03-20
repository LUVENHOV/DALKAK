package store.dalkak.api.cocktail.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
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
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;
import store.dalkak.api.cocktail.dto.response.CocktailPageResDto;
import store.dalkak.api.cocktail.exception.CocktailSearchErrorCode;
import store.dalkak.api.cocktail.exception.CocktailException;
import store.dalkak.api.cocktail.service.CocktailService;
import store.dalkak.api.global.response.ApiResponse;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/cocktails")
public class CocktailController {

    private final CocktailService cocktailService;

    //칵테일 상세보기
    @GetMapping("/{cocktailId}")
    public ResponseEntity<ApiResponse<CocktailDetailResDto>> cocktailDetail(@PathVariable("cocktailId") Long originCocktailId) {
        CocktailDetailResDto cocktail = cocktailService.findCocktail(originCocktailId);

        ApiResponse<CocktailDetailResDto> apiResponse = ApiResponse.of(200,
            cocktail);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
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
        @RequestParam(value = "ingredient-name") String ingredientName){

        List<IngredientDto> ingredients = cocktailService.findIngredient(ingredientName);

        ApiResponse<List<IngredientDto>> apiResponse = ApiResponse.of(200, ingredients);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

}
