package store.dalkak.api.user.domain;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.user.domain.embed.Provider;

@Entity
@Table(name="member")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name="member_nickname")
    private String nickname;

    @Column(name="member_birthdate")
    private LocalDate birthdate;

    @Column(name="member_gender")
    private String gender;

    @Column(name="member_oauth_sub")
    private String oauthSub;

    @Column(name="member_oauth_provider")
    private Provider oauthProvider;



}
