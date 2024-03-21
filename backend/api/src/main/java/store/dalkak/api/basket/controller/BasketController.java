package store.dalkak.api.basket.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.basket.repository.BasketRepository;
import store.dalkak.api.basket.service.BasketService;
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/basket")
public class BasketController {

    private final BasketRepository basketRepository;
    private final BasketService basketService;

    //재료 추가
    @PostMapping
    public ResponseEntity<ApiResponse<String>> addToRef(@LoginUser MemberDto memberDto,
        @RequestBody Long ingredientId) {
        basketService.addBasket(memberDto, ingredientId);
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(ApiResponse.of(201, "냉장고에 재료를 담았습니다."));
    }

    //재료 삭제
    @DeleteMapping("/{ingredientId}")
    public ResponseEntity<ApiResponse<String>> deleteFromRef(@LoginUser MemberDto memberDto,
        @PathVariable("ingredientId") Long ingredientId) {
        basketService.deleteBasket(memberDto, ingredientId);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, "냉장고에서 재료를 제거했습니다."));
    }


    //위시리스트 리스트
    @GetMapping
    public ResponseEntity<ApiResponse<List<IngredientDto>>> viewBasket(
        @LoginUser MemberDto memberDto) {

        List<IngredientDto> ingredientDtoList = basketService.findBasket(memberDto);

        ApiResponse<List<IngredientDto>> apiResponse = ApiResponse.of(200,
            ingredientDtoList);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }


}
