package store.dalkak.api.user.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import store.dalkak.api.user.domain.embed.Provider;

@Builder
@AllArgsConstructor
public class MemberDto {
    private Long id;
    private String nickname;
    private LocalDate birthdate;
    private String gender;
    private String oauthSub;
    private Provider oauthProvider;
}
