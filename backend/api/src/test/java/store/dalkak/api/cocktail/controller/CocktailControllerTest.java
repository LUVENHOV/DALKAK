package store.dalkak.api.cocktail.controller;

import static org.springframework.test.util.AssertionErrors.assertEquals;

import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.repository.CocktailRepository;
import store.dalkak.api.cocktail.service.CocktailService;


@SpringBootTest
@Transactional
@Rollback(false)
class CocktailControllerTest {


    @Autowired
    CocktailService cocktailService;

    @Autowired
    CocktailRepository cocktailRepository;

    @Autowired
    EntityManager em;

    @Test
    @DisplayName("Cocktail 조회 테스트")
    void getCocktailTest() throws Exception {

        long cocktailId = 1L;

        CocktailDetailResDto cocktailDetailResDto = cocktailService.findCocktail(cocktailId);
        assertEquals("칵테일 이름이 동일합니다", "Espresso Martini", cocktailDetailResDto.getName());

    }



}
