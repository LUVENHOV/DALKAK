package store.dalkak.api.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.oauth.dto.request.OauthLoginReqDto;
import store.dalkak.api.global.oauth.dto.response.OauthLoginResDto;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.user.domain.response.UserRefreshResDto;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
//    @GetMapping("/refresh")
//    public ResponseEntity<ApiResponse<UserRefreshResDto>> refresh(@LoginUser MemberDto memberDto){
//        ApiResponse<UserRefreshResDto> apiResponse=ApiResponse.of(200,userService.refresh(memberDto));
//        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
//    }
//
//    @DeleteMapping()
//    public ResponseEntity<?> withdrawal(@LoginUser MemberDto memberDto ){
//        log.info(String.valueOf(memberDto.getId()));
//        return null;
//    }

}
