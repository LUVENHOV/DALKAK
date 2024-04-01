package store.dalkak.api.user.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import store.dalkak.api.user.dto.request.UserCreateSurveyResultReqDto;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class UserControllerTest {

    private static final Cookie cookie = new Cookie("Authorization",
        "");

    @Autowired
    private MockMvc mockMvc;

    @Test
    void deleteMember() {
    }

    @DisplayName("사용자의 설문을 받고 그 값을 저장한다.")
    @Test
    void createSurveyResult() throws Exception {
        //given
        UserCreateSurveyResultReqDto surveys = UserCreateSurveyResultReqDto.builder().build();

        //when

        //then
        mockMvc.perform(post("/users/survey")
                .content(new ObjectMapper().writeValueAsString(surveys))
                .cookie(cookie))
            .andDo(print());
    }

    @Test
    void loadProfile() {
    }

    @Test
    void modifyProfile() {
    }

    @Test
    void hasNickname() {
    }

    @Test
    void loadHeartList() {
    }

    @Test
    void loadCustomRecipeList() {
    }

    @Test
    void loadRecommendList() {
    }
}