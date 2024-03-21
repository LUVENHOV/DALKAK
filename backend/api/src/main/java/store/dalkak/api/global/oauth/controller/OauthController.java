package store.dalkak.api.global.oauth.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;
import store.dalkak.api.global.oauth.service.OauthService;
import store.dalkak.api.global.response.ApiResponse;

@Slf4j
@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
public class OauthController {
    private final OauthService oauthService;
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<OauthLoginResDto>> login(@RequestBody OauthLoginReqDto oauthLoginReqDto){
        ApiResponse<OauthLoginResDto> apiResponse=ApiResponse.of(200,oauthService.login(oauthLoginReqDto));
        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }
}
