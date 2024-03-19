package store.dalkak.api.custom.service;

import org.springframework.web.multipart.MultipartFile;
import store.dalkak.api.custom.dto.request.CustomCreateReqDto;

public interface CustomService {
    
    // 로그인 추가 후 Member 파라미터 추가
    void createCustomCocktail(MultipartFile image, CustomCreateReqDto customCreateReqDto);
}
