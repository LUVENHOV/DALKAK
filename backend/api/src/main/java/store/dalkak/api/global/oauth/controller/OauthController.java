package store.dalkak.api.global.oauth.controller;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;
import store.dalkak.api.global.oauth.service.OauthService;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.global.util.CookieUtil;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
public class OauthController {

    private final OauthService oauthService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<OauthLoginResDto>> login(
        HttpServletResponse httpServletResponse,
        @RequestBody OauthLoginReqDto oauthLoginReqDto) {
        log.info("------로그인 컨트롤러");
        OauthLoginResDto oauthLoginResDto = oauthService.login(oauthLoginReqDto);
        CookieUtil.createCookie(httpServletResponse, oauthLoginResDto.getAccessToken(),
            oauthLoginResDto.getRefreshToken());
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, oauthLoginResDto));
    }

    @GetMapping("/logout")
    public ResponseEntity<ApiResponse<OauthLoginResDto>> logout(
        HttpServletResponse httpServletResponse, @LoginUser MemberDto memberDto) {
        oauthService.logout(memberDto);
        CookieUtil.deleteCookie(httpServletResponse);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200, null));
    }
}
