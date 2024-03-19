package store.dalkak.api.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.dalkak.api.global.jwt.JwtProvider;
import store.dalkak.api.user.domain.response.UserRefreshResDto;
import store.dalkak.api.user.dto.MemberDto;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final JwtProvider jwtProvider;
    @Override
    public UserRefreshResDto refresh(MemberDto memberDto) {
        return null;
    }
}
