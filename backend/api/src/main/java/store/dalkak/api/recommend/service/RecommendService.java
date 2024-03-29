package store.dalkak.api.recommend.service;

import org.springframework.stereotype.Service;
import store.dalkak.api.recommend.dto.response.HeartRankRecommendResDto;
import store.dalkak.api.recommend.dto.response.PreferRecommendResDto;
import store.dalkak.api.recommend.dto.response.RefrigeratorRecommendResDto;
import store.dalkak.api.user.dto.MemberDto;

@Service
public interface RecommendService {

    PreferRecommendResDto preferRecommend(MemberDto memberDto);

    RefrigeratorRecommendResDto refrigeratorRecommend(MemberDto memberDto);

    HeartRankRecommendResDto heartRankRecommend();
}
