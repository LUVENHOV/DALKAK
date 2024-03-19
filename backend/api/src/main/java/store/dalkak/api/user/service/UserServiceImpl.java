package store.dalkak.api.user.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.dalkak.api.cocktail.Repository.CocktailRepository;
import store.dalkak.api.custom.domain.CustomRepository;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.user.domain.Heart;
import store.dalkak.api.user.dto.CocktailDto;
import store.dalkak.api.user.dto.request.UserCreateSurveyResultReqDto;
import store.dalkak.api.user.dto.request.UserHasNicknameReqDto;
import store.dalkak.api.user.dto.request.UserModifyProfileReqDto;
import store.dalkak.api.user.dto.response.UserLoadCustomRecipeListResDto;
import store.dalkak.api.user.dto.response.UserLoadHeartListResDto;
import store.dalkak.api.user.dto.response.UserLoadProfileResDto;
import store.dalkak.api.user.dto.response.UserLoadRecommendListResDto;
import store.dalkak.api.user.dto.response.UserRefreshResDto;
import store.dalkak.api.user.dto.MemberDto;
import store.dalkak.api.user.exception.UserErrorCode;
import store.dalkak.api.user.exception.UserException;
import store.dalkak.api.user.repository.HeartRepository;
import store.dalkak.api.user.repository.MemberRepository;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;
    private final HeartRepository heartRepository;
    private final CustomRepository customRepository;

    @Override
    public UserRefreshResDto refresh(MemberDto memberDto) {
        return null;
    }

    @Override
    public void deleteMember(MemberDto memberDto) {

    }

    @Override
    public void createSurveyResult(MemberDto memberDto,
        UserCreateSurveyResultReqDto userCreateSurveyResultReqDto) {

    }

    @Override
    public UserLoadProfileResDto loadProfile(MemberDto memberDto) {
        return null;
    }

    @Override
    public void modifyProfile(MemberDto memberDto,
        UserModifyProfileReqDto userModifyProfileReqDto) {

    }

    @Override
    public void hasNickname(MemberDto memberDto, UserHasNicknameReqDto userHasNicknameReqDto) {
        if(memberRepository.existsByNickname(userHasNicknameReqDto.getNickname())){
            throw new UserException(UserErrorCode.NICKNAME_EXISTS);
        }
    }

    @Override
    public UserLoadHeartListResDto loadHeartList(MemberDto memberDto) {

        return null;
    }

    @Override
    public UserLoadCustomRecipeListResDto loadCustomRecipeList(MemberDto memberDto) {

        return null;
    }

    @Override
    public UserLoadRecommendListResDto loadRecommendList(MemberDto memberDto) {
        List<Heart> cocktails=heartRepository.findHeartsByMember_Id(memberDto.getId());
        log.info("{}",cocktails);
        return null;
    }
}
