package store.dalkak.api.custom.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.custom.domain.Custom;
import store.dalkak.api.custom.dto.CustomModifyDto;
import store.dalkak.api.user.dto.MemberDto;

public interface CustomRepositoryCustom {

    void modifyCustomCocktail(Long customCocktailId, CustomModifyDto customModifyDto);

    Page<Custom> findAllCustom(MemberDto memberDto, Cocktail targetCocktail, Pageable pageable);

}
