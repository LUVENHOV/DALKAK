package store.dalkak.api.user.service;

import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.dalkak.api.cocktail.Repository.CocktailRepository;
import store.dalkak.api.cocktail.Repository.ingredient.IngredientRepository;
import store.dalkak.api.cocktail.domain.Base.Base;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Ingredient.Ingredient;
import store.dalkak.api.cocktail.domain.Occasion;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.domain.CustomRepository;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.user.domain.Heart;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.domain.Recommended;
import store.dalkak.api.user.domain.Survey;
import store.dalkak.api.user.domain.SurveyCocktail;
import store.dalkak.api.user.domain.SurveyIngredient;
import store.dalkak.api.user.dto.CocktailDto;
import store.dalkak.api.user.dto.CustomCocktailDto;
import store.dalkak.api.user.dto.UserDto;
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
import store.dalkak.api.user.repository.BaseRepository;
import store.dalkak.api.user.repository.HeartRepository;
import store.dalkak.api.user.repository.MemberRepository;
import store.dalkak.api.user.repository.OccasionRepository;
import store.dalkak.api.user.repository.RecommendedRepository;
import store.dalkak.api.user.repository.SurveyCocktailRepository;
import store.dalkak.api.user.repository.SurveyIngredientRepository;
import store.dalkak.api.user.repository.SurveyRepository;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;
    private final HeartRepository heartRepository;
    private final CustomRepository customRepository;
    private final RecommendedRepository recommendedRepository;
    private final SurveyRepository surveyRepository;
    private final BaseRepository baseRepository;
    private final OccasionRepository occasionRepository;
    private final SurveyIngredientRepository surveyIngredientRepository;
    private final SurveyCocktailRepository surveyCocktailRepository;
    private final CocktailRepository cocktailRepository;
    private final IngredientRepository ingredientRepository;

    @Override
    public UserRefreshResDto refresh(MemberDto memberDto) {
        return null;
    }

    @Override
    public void deleteMember(MemberDto memberDto) {

    }

    @Override
    @Transactional
    public void createSurveyResult(MemberDto memberDto,
        UserCreateSurveyResultReqDto userCreateSurveyResultReqDto) {
        Member member=memberRepository.findById(memberDto.getId()).orElseThrow();
        Occasion occasion=occasionRepository.findById(userCreateSurveyResultReqDto.getOccasionId()).orElseThrow();
        Base base=baseRepository.findById(userCreateSurveyResultReqDto.getBaseId()).orElseThrow();

        Survey survey = surveyRepository.save(Survey.builder()
            .member(member)
            .occasion(occasion)
            .base(base)
            .alcoholContent(userCreateSurveyResultReqDto.getAlcoholContent())
            .sweetness(userCreateSurveyResultReqDto.getSweetness())
            .build());

        for(Long id:userCreateSurveyResultReqDto.getSurveyCocktails()){
            Cocktail cocktail=cocktailRepository.findById(id).orElseThrow();
            surveyCocktailRepository.save(SurveyCocktail.builder().cocktail(cocktail).survey(survey).build());
        }

        for(Long id:userCreateSurveyResultReqDto.getSurveyIngredients()){
            Ingredient ingredient=ingredientRepository.findById(id).orElseThrow();
            surveyIngredientRepository.save(SurveyIngredient.builder().ingredient(ingredient).survey(survey).build());
        }
    }

    @Override
    @Transactional
    public UserLoadProfileResDto loadProfile(MemberDto memberDto) {
        Member member=memberRepository.findById(memberDto.getId()).orElseThrow();
        List<Heart> hearts = heartRepository.findTop5ByMember_IdOrderByIdDesc(
            memberDto.getId());
        List<Custom> customs = customRepository.findTop5ByMember_IdOrderByIdDesc(
            memberDto.getId());
        return UserLoadProfileResDto.builder()
            .id(member.getId())
            .nickname(member.getNickname())
            .birthDate(member.getBirthdate())
            .gender(member.getGender())
            .heartCocktails(toHeartsCocktailDtoList(hearts))
            .customCocktails(toCustomCocktailDtoList(customs))
            .build();
    }

    @Override
    @Transactional
    public void modifyProfile(MemberDto memberDto,
        UserModifyProfileReqDto userModifyProfileReqDto) {
        Member member=memberRepository.findById(memberDto.getId()).orElseThrow();
        member.updateMember(userModifyProfileReqDto.getNickname(),userModifyProfileReqDto.getBirthDate(),userModifyProfileReqDto.getGender());
        log.info("{}",member);
        memberRepository.save(member);
    }

    @Override
    @Transactional
    public void hasNickname(MemberDto memberDto, UserHasNicknameReqDto userHasNicknameReqDto) {
        if(memberRepository.existsByNickname(userHasNicknameReqDto.getNickname())){
            throw new UserException(UserErrorCode.NICKNAME_EXISTS);
        }
    }

    @Override
    @Transactional
    public UserLoadHeartListResDto loadHeartList(MemberDto memberDto,Pageable pageable) {
        Page<Heart> page=heartRepository.findAllByMember_Id(memberDto.getId(),pageable);
        return UserLoadHeartListResDto.builder()
            .cocktails(toHeartsCocktailDtoList(page.getContent()))
            .currentPage(page.getPageable().getPageNumber()+1)
            .totalPage(page.getTotalPages())
            .totalCount(page.getTotalElements())
            .build();
    }

    @Override
    @Transactional
    public UserLoadCustomRecipeListResDto loadCustomRecipeList(MemberDto memberDto,Pageable pageable) {
        Page<Custom> page=customRepository.findAllByMember_Id(memberDto.getId(),pageable);
        return UserLoadCustomRecipeListResDto.builder()
            .customCocktails(toCustomCocktailDtoList(page.getContent()))
            .currentPage(page.getPageable().getPageNumber()+1)
            .totalPage(page.getTotalPages())
            .totalCount(page.getTotalElements())
            .build();
    }

    @Override
    @Transactional
    public UserLoadRecommendListResDto loadRecommendList(MemberDto memberDto,Pageable pageable) {
        Page<Recommended> page=recommendedRepository.findAllByMember_Id(memberDto.getId(),pageable);
        return UserLoadRecommendListResDto.builder()
            .cocktails(toRecommendCocktailDtoList(page.getContent()))
            .currentPage(page.getPageable().getPageNumber()+1)
            .totalPage(page.getTotalPages())
            .totalCount(page.getTotalElements())
            .build();
    }

    private List<CocktailDto> toHeartsCocktailDtoList(List<Heart> hearts){
        List<CocktailDto> cocktailDtoList=new ArrayList<>();
        for(Heart heart: hearts){
            cocktailDtoList
                .add(CocktailDto
                    .builder()
                    .id(heart.getCocktail().getId())
                    .name(heart.getCocktail().getName())
                    .koreanName(heart.getCocktail().getKrName())
                    .image(heart.getCocktail().getImage())
                    .heartCount(heart.getCocktail().getHeartCount())
                    .build());
        }
        return cocktailDtoList;
    }

    private List<CocktailDto> toRecommendCocktailDtoList(List<Recommended> recommends){
        List<CocktailDto> cocktailDtoList=new ArrayList<>();
        for(Recommended recommended: recommends){
            cocktailDtoList
                .add(CocktailDto
                    .builder()
                    .id(recommended.getCocktail().getId())
                    .name(recommended.getCocktail().getName())
                    .koreanName(recommended.getCocktail().getKrName())
                    .image(recommended.getCocktail().getImage())
                    .heartCount(recommended.getCocktail().getHeartCount())
                    .build());
        }
        return cocktailDtoList;
    }

    private List<CustomCocktailDto> toCustomCocktailDtoList(List<Custom> customs){
        List<CustomCocktailDto> customCocktailDtoList=new ArrayList<>();
        for(Custom custom:customs){
            customCocktailDtoList
                .add(CustomCocktailDto
                    .builder()
                    .id(custom.getId())
                    .image(custom.getCocktail().getImage())
                    .name(custom.getName())
                    .summary(custom.getSummary())
                    .user(UserDto.builder().id(custom.getMember().getId()).nickname(custom.getMember().getNickname()).build())
                    .build());
        }
        return customCocktailDtoList;
    }
}
