package store.dalkak.api.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.user.dto.response.UserLoadProfileResDto;
import store.dalkak.api.user.dto.response.UserRefreshResDto;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.dto.response.UserLoadCustomRecipeListResDto;
import store.dalkak.api.user.dto.response.UserLoadHeartListResDto;
import store.dalkak.api.user.dto.response.UserLoadRecommendListResDto;
import store.dalkak.api.user.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    @GetMapping("/refresh")
    public ResponseEntity<ApiResponse<UserRefreshResDto>> refresh(@LoginUser MemberDto memberDto){
        ApiResponse<UserRefreshResDto> apiResponse=ApiResponse.of(200,userService.refresh(memberDto));
        return null;
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteMember(@LoginUser MemberDto memberDto ){
        log.info(String.valueOf(memberDto.getId()));
        return null;
    }

    @PostMapping("/survey")
    public ResponseEntity<?> createSurveyResult(@LoginUser MemberDto memberDto){
        return null;
    }

    @GetMapping("/profile")
    public ResponseEntity<UserLoadProfileResDto> loadProfile(@LoginUser MemberDto memberDto){
        return null;
    }

    @PatchMapping("/profile")
    public ResponseEntity<?> modifyProfile(@LoginUser MemberDto memberDto){
        return null;
    }

    @PostMapping("/profile/dupcheck")
    public ResponseEntity<ApiResponse<?>> hasNickname(@LoginUser MemberDto memberDto){
        return null;
    }

    @GetMapping("/profile/heart-list")
    public ResponseEntity<ApiResponse<UserLoadHeartListResDto>> loadHeartList(@LoginUser MemberDto memberDto){
        return null;
    }

    @GetMapping("/profile/custom-recipe=list")
    public ResponseEntity<ApiResponse<UserLoadCustomRecipeListResDto>> loadCustomRecipeList(@LoginUser MemberDto memberDto){
        return null;
    }

    @GetMapping("/profile/recommend-list")
    public ResponseEntity<ApiResponse<UserLoadRecommendListResDto>> loadRecommendList(@LoginUser MemberDto memberDto){
        return null;
    }

}
