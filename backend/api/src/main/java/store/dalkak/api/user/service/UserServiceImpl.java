package store.dalkak.api.user.service;

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

        //TODO: 외래키 에러 해결
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
    public UserLoadHeartListResDto loadHeartList(MemberDto memberDto,Pageable pageable) {
        Page<Heart> page=heartRepository.findAllByMember_Id(memberDto.getId(),pageable);

        List<CocktailDto> cocktailDtoList=new ArrayList<>();
        for(Heart heart:page.getContent()){
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
        return UserLoadHeartListResDto.builder()
            .cocktails(cocktailDtoList)
            .currentPage(page.getPageable().getPageNumber()+1)
            .totalPage(page.getTotalPages())
            .totalCount(page.getTotalElements())
            .build();
    }

    @Override
    public UserLoadCustomRecipeListResDto loadCustomRecipeList(MemberDto memberDto,Pageable pageable) {
        Page<Custom> page=customRepository.findAllByMember_Id(memberDto.getId(),pageable);

        List<CustomCocktailDto> customCocktailDtoList=new ArrayList<>();
        for(Custom custom:page.getContent()){
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
        return UserLoadCustomRecipeListResDto.builder()
            .customCocktails(customCocktailDtoList)
            .currentPage(page.getPageable().getPageNumber()+1)
            .totalPage(page.getTotalPages())
            .totalCount(page.getTotalElements())
            .build();
    }

    @Override
    public UserLoadRecommendListResDto loadRecommendList(MemberDto memberDto,Pageable pageable) {
        Page<Recommended> page=recommendedRepository.findAllByMember_Id(memberDto.getId(),pageable);

        List<CocktailDto> cocktailDtoList=new ArrayList<>();
        for(Recommended recommended:page.getContent()){
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
        return UserLoadRecommendListResDto.builder()
            .cocktails(cocktailDtoList)
            .currentPage(page.getPageable().getPageNumber()+1)
            .totalPage(page.getTotalPages())
            .totalCount(page.getTotalElements())
            .build();
    }
}
