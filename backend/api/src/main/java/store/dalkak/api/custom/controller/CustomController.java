package store.dalkak.api.custom.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import store.dalkak.api.custom.dto.request.CustomCreateReqDto;
import store.dalkak.api.custom.service.CustomService;
import store.dalkak.api.global.response.ApiResponse;

@RestController
@RequiredArgsConstructor
@RequestMapping("/customs")
@Slf4j
public class CustomController {

    private final CustomService customService;

    // 로그인한 Member 추가
//    @PostMapping
//    public ResponseEntity<ApiResponse<String>> createCustomCocktail(
//        @RequestPart("image") MultipartFile image,
//        @RequestPart("CustomCreateReqDto") CustomCreateReqDto customCreateReqDto) {
//        customService.createCustomCocktail(image, customCreateReqDto);
//        return ResponseEntity.status(HttpStatus.CREATED)
//            .body(ApiResponse.successWithData("이미지가 생성되었습니다."));
//    }
}
