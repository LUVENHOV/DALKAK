package store.dalkak.api.user.domain;

import static jakarta.persistence.FetchType.LAZY;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.Cocktail;

@Entity
@Table(name = "RECOMMENDED")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Recommended {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    //원본칵테일아이디
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cocktail_id")
    private Cocktail cocktail;

    //회원아이디
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
}
