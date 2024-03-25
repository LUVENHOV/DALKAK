package store.dalkak.api.user.service;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.dalkak.api.user.dto.request.UserCreateSurveyResultReqDto;
import store.dalkak.api.user.dto.request.UserHasNicknameReqDto;
import store.dalkak.api.user.dto.request.UserModifyProfileReqDto;
import store.dalkak.api.user.dto.response.UserLoadCustomRecipeListResDto;
import store.dalkak.api.user.dto.response.UserLoadHeartListResDto;
import store.dalkak.api.user.dto.response.UserLoadProfileResDto;
import store.dalkak.api.user.dto.response.UserLoadRecommendListResDto;
import store.dalkak.api.user.dto.response.UserRefreshResDto;
import store.dalkak.api.user.dto.MemberDto;

@Service
public interface UserService {

    UserRefreshResDto refresh(String accessToken, String refreshToken);
    void deleteMember(MemberDto memberDto);
    void createSurveyResult(MemberDto memberDto, UserCreateSurveyResultReqDto userCreateSurveyResultReqDto);
    UserLoadProfileResDto loadProfile(MemberDto memberDto);
    void modifyProfile(MemberDto memberDto, UserModifyProfileReqDto userModifyProfileReqDto);
    void hasNickname(MemberDto memberDto, UserHasNicknameReqDto userHasNicknameReqDto);
    UserLoadHeartListResDto loadHeartList(MemberDto memberDto, Pageable pageable);
    UserLoadCustomRecipeListResDto loadCustomRecipeList(MemberDto memberDto,Pageable pageable);
    UserLoadRecommendListResDto loadRecommendList(MemberDto memberDto,Pageable pageable);

}
