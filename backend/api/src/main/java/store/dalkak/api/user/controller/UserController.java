package store.dalkak.api.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.user.dto.request.UserCreateSurveyResultReqDto;
import store.dalkak.api.user.dto.request.UserHasNicknameReqDto;
import store.dalkak.api.user.dto.request.UserModifyProfileReqDto;
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
    public ResponseEntity<ApiResponse<UserRefreshResDto>> refresh(@RequestHeader("Authorization") String accessToken,@RequestHeader("X-Auth-Refresh-Token") String refreshToken){
        ApiResponse<UserRefreshResDto> apiResponse=ApiResponse.of(200,userService.refresh(accessToken,refreshToken));
        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteMember(@LoginUser MemberDto memberDto ){
        log.info(String.valueOf(memberDto.getId()));
        userService.deleteMember(memberDto);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200,null));
    }

    @PostMapping("/survey")
    public ResponseEntity<?> createSurveyResult(@LoginUser MemberDto memberDto,@RequestBody UserCreateSurveyResultReqDto userCreateSurveyResultReqDto){
        userService.createSurveyResult(memberDto, userCreateSurveyResultReqDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.of(201,null));
    }

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<UserLoadProfileResDto>> loadProfile(@LoginUser MemberDto memberDto){
        ApiResponse<UserLoadProfileResDto> apiResponse=ApiResponse.of(200,userService.loadProfile(memberDto));
        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    @PatchMapping("/profile")
    public ResponseEntity<?> modifyProfile(@LoginUser MemberDto memberDto, @RequestBody UserModifyProfileReqDto userModifyProfileReqDto){
        userService.modifyProfile(memberDto, userModifyProfileReqDto);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200,null));
    }

    @PostMapping("/profile/dupcheck")
    public ResponseEntity<ApiResponse<?>> hasNickname(@LoginUser MemberDto memberDto,@RequestBody
        UserHasNicknameReqDto userHasNicknameReqDto){
        userService.hasNickname(memberDto,userHasNicknameReqDto);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.of(200,null));

    }

    @GetMapping("/profile/heart-list")
    public ResponseEntity<ApiResponse<UserLoadHeartListResDto>> loadHeartList(@LoginUser MemberDto memberDto,@PageableDefault Pageable pageable){
        UserLoadHeartListResDto userLoadHeartListResDto=userService.loadHeartList(memberDto,pageable);
        ApiResponse<UserLoadHeartListResDto> apiResponse=ApiResponse.of(200,userLoadHeartListResDto);
        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    @GetMapping("/profile/custom-recipe-list")
    public ResponseEntity<ApiResponse<UserLoadCustomRecipeListResDto>> loadCustomRecipeList(@LoginUser MemberDto memberDto,@PageableDefault Pageable pageable){
        UserLoadCustomRecipeListResDto userLoadCustomRecipeListResDto=userService.loadCustomRecipeList(memberDto,pageable);
        ApiResponse<UserLoadCustomRecipeListResDto> apiResponse=ApiResponse.of(200,userLoadCustomRecipeListResDto);
        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

    @GetMapping("/profile/recommend-list")
    public ResponseEntity<ApiResponse<UserLoadRecommendListResDto>> loadRecommendList(@LoginUser MemberDto memberDto,Pageable pageable){
        UserLoadRecommendListResDto userLoadRecommendListResDto=userService.loadRecommendList(memberDto,pageable);
        ApiResponse<UserLoadRecommendListResDto> apiResponse=ApiResponse.of(200,userLoadRecommendListResDto);
        return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
    }

}
