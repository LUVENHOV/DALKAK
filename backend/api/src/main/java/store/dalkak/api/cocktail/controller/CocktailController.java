package store.dalkak.api.cocktail.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.cocktail.dto.response.CocktailSearchResDto;
import store.dalkak.api.cocktail.service.CocktailService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/cocktails")
public class CocktailController {

    private final CocktailService cocktailService;

    //칵테일 상세보기
//    @GetMapping("/{originCocktailId}")
//    public ResponseEntity<?> cocktailDetail(@PathVariable Long originCocktailId) {
//        CocktailDetailResDto cocktail = cocktailService.findCocktail(originCocktailId);
//
//    }

    @GetMapping("/search")
    public ResponseEntity<?> searchCocktailByOption(
        @PageableDefault(value = 20) Pageable page,
        @RequestParam(required = false) String cocktailName,
        @RequestParam(required = false) List<String> Ingredients,
        @RequestParam(required = false) String base,
        @RequestParam(required = false) Integer alcoholContent,
        @RequestParam(required = false) String color,
        @RequestParam(required = false) Integer sweetness,
        @RequestParam(required = false) Integer difficulty,
        @RequestParam(required = false) String gender,
        @RequestParam(required = false, defaultValue = "1") Integer orderBy) {
        Page<CocktailSearchResDto> cocktailSearchResDtoPage = CocktailSearchResDto.toDtoList(
            cocktailService.getCocktailList(page, cocktailName, Ingredients, base, alcoholContent, color, sweetness, difficulty, gender, orderBy));
        return ResponseEntity.ok(cocktailSearchResDtoPage);
    }




}
