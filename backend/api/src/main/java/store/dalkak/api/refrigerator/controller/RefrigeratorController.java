package store.dalkak.api.refrigerator.controller;

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
import store.dalkak.api.cocktail.dto.IngredientDto;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.refrigerator.repository.RefrigeratorRepository;
import store.dalkak.api.refrigerator.service.RefrigeratorService;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/refrigerator")
public class RefrigeratorController {

    private final RefrigeratorRepository refrigeratorRepository;
    private final RefrigeratorService refrigeratorService;

    //재료 추가
    @PostMapping
    public ResponseEntity<ApiResponse<String>> addToRef(@LoginUser MemberDto memberDto,
        @RequestBody Long ingredientId) {
        refrigeratorService.addRefrigerator(memberDto, ingredientId);
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(ApiResponse.of(201, "냉장고에 재료를 담았습니다."));
    }

    //재료 삭제
    @DeleteMapping("/{ingredientId}")
    public ResponseEntity<ApiResponse<String>> deleteFromRef(@LoginUser MemberDto memberDto,
        @PathVariable("ingredientId") Long ingredientId) {
        refrigeratorService.deleteRefrigerator(memberDto, ingredientId);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, "냉장고에서 재료를 제거했습니다."));
    }


    //냉장고 리스트
    @GetMapping
    public ResponseEntity<ApiResponse<List<IngredientDto>>> viewRefrigerator(
        @LoginUser MemberDto memberDto) {

        List<IngredientDto> ingredientDtoList = refrigeratorService.findRefrigerator(memberDto);

        ApiResponse<List<IngredientDto>> apiResponse = ApiResponse.of(200,
            ingredientDtoList);

        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }


}
