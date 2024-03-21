package store.dalkak.api.user.domain;

import static jakarta.persistence.FetchType.LAZY;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.Base.Base;
import store.dalkak.api.cocktail.domain.Occasion;
@Entity
@Table(name="SURVEY")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    //회원아이디
    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "occasion_id")
    private Occasion occasion;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "base_id")
    private Base base;

    @Column(name="alcohol_content")
    private Integer alcoholContent;

    @Column(name="sweetness")
    private Integer sweetness;

    @Builder
    public Survey(Long id, Member member, Occasion occasion, Base base, Integer alcoholContent,
        Integer sweetness) {
        this.id = id;
        this.member = member;
        this.occasion = occasion;
        this.base = base;
        this.alcoholContent = alcoholContent;
        this.sweetness = sweetness;
    }
}
