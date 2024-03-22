package store.dalkak.api.custom.service;

import org.springframework.web.multipart.MultipartFile;
import store.dalkak.api.custom.dto.request.CustomCreateReqDto;
import store.dalkak.api.user.dto.MemberDto;

public interface CustomService {

    void createCustomCocktail(MultipartFile image, CustomCreateReqDto customCreateReqDto, MemberDto memberDto);

    void deleteCustomCocktail(Long customCocktailId);

    void modifyCustomCocktail(Long customCocktailId, MultipartFile image, CustomCreateReqDto customCreateReqDto);
}
