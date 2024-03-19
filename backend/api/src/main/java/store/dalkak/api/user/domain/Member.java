package store.dalkak.api.user.domain;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.user.domain.embed.Gender;
import store.dalkak.api.user.domain.embed.Provider;

@Entity
@Table(name="MEMBER")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="nickname")
    private String nickname;

    @Column(name="birth_date")
    private LocalDate birthdate;

    @Column(name="gender")
    private Gender gender;

    @Column(name="oauth_sub")
    private String oauthSub;

    @Column(name="oauth_provider")
    @Enumerated(EnumType.STRING)
    private Provider oauthProvider;

    @Column(name="survey_completion")
    private Boolean surveyCompletion;

    @Builder
    public Member(String nickname,LocalDate birthdate, Gender gender,String oauthSub,Provider oauthProvider,Boolean surveyCompletion){
        this.nickname=nickname;
        this.birthdate=birthdate;
        this.gender=gender;
        this.oauthSub=oauthSub;
        this.oauthProvider=oauthProvider;
        this.surveyCompletion=surveyCompletion;
    }
}
