package store.dalkak.api.recommend.service;

import org.springframework.stereotype.Service;
import store.dalkak.api.recommend.dto.PreferRecommendResDto;
import store.dalkak.api.recommend.dto.SurveyRecommendResDto;
import store.dalkak.api.user.dto.MemberDto;

@Service
public interface RecommendService {
    SurveyRecommendResDto surveyRecommend(MemberDto memberDto);

    PreferRecommendResDto preferRecommend();
}
