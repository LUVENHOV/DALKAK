package store.dalkak.api.user.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import store.dalkak.api.user.domain.embed.Gender;
import store.dalkak.api.user.domain.embed.Provider;

@Getter
@Builder
@AllArgsConstructor
public class MemberDto {
    private Long id;
    private String nickname;
    private LocalDate birthdate;
    private Gender gender;
    private String oauthSub;
    private Provider oauthProvider;
    private Boolean surveyCompletion;
}
