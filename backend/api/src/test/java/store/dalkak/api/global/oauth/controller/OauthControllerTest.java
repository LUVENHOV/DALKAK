package store.dalkak.api.global.oauth.controller;

import static org.junit.jupiter.api.Assertions.*;

import jakarta.servlet.http.Cookie;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class OauthControllerTest {
    private static final Cookie cookie = new Cookie("Authorization",
        "");

    @Autowired
    private MockMvc mockMvc;

    @Test
    void login() {
    }

    @Test
    void logout() {
    }

    @Test
    void loginResolverTest(){

    }
}