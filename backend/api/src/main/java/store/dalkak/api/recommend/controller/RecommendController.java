package store.dalkak.api.recommend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.global.annotation.LoginUser;
import store.dalkak.api.global.response.ApiResponse;
import store.dalkak.api.recommend.dto.response.HeartRankRecommendResDto;
import store.dalkak.api.recommend.dto.response.RefrigeratorRecommendResDto;
import store.dalkak.api.recommend.dto.response.PreferRecommendResDto;
import store.dalkak.api.recommend.service.RecommendService;
import store.dalkak.api.user.dto.MemberDto;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/recommends")
public class RecommendController {

    private final RecommendService recommendService;

    @GetMapping("/prefer")
    public ResponseEntity<ApiResponse<PreferRecommendResDto>> preferRecommend(
        @LoginUser MemberDto memberDto) {
        return ResponseEntity.status(HttpStatus.OK)
            .body(ApiResponse.of(200, recommendService.preferRecommend(memberDto)));
    }

    @GetMapping("/refrigerator")
    public ResponseEntity<ApiResponse<RefrigeratorRecommendResDto>> refrigeratorRecommend(
        @LoginUser MemberDto memberDto) {
        return ResponseEntity.status(HttpStatus.OK)
            .body(ApiResponse.of(200, recommendService.refrigeratorRecommend(memberDto)));
    }

    @GetMapping("/heart-rank")
    public ResponseEntity<ApiResponse<HeartRankRecommendResDto>> heartRankRecommend() {
        HeartRankRecommendResDto heartRankRecommendResDto = recommendService.heartRankRecommend();
        return ResponseEntity.status(HttpStatus.OK)
            .body(ApiResponse.of(200, heartRankRecommendResDto));
    }

}
