package store.dalkak.api.custom.service;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import store.dalkak.api.custom.dto.request.CustomCreateReqDto;
import store.dalkak.api.custom.dto.request.CustomModifyReqDto;
import store.dalkak.api.custom.dto.response.CustomDetailResDto;
import store.dalkak.api.custom.dto.response.CustomIdListResDto;
import store.dalkak.api.custom.dto.response.CustomListResDto;
import store.dalkak.api.user.dto.MemberDto;

public interface CustomService {

    void createCustomCocktail(MultipartFile image, CustomCreateReqDto customCreateReqDto,
        MemberDto memberDto);

    void deleteCustomCocktail(Long userId, Long customCocktailId);

    void modifyCustomCocktail(Long userId, Long customCocktailId, MultipartFile image,
        CustomModifyReqDto customModifyReqDto);

    CustomListResDto getCustomList(Long cocktailId, Pageable page);

    CustomDetailResDto findCustom(Long customCocktailId);

    CustomIdListResDto findAllCustomIdList();
}
