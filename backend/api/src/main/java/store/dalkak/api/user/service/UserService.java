package store.dalkak.api.user.service;

import org.springframework.stereotype.Service;
import store.dalkak.api.user.domain.response.UserRefreshResDto;
import store.dalkak.api.user.dto.MemberDto;

@Service
public interface UserService {

    UserRefreshResDto refresh(MemberDto memberDto);
}
