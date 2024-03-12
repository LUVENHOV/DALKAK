package store.dalkak.api.custom.domain;

import static jakarta.persistence.FetchType.LAZY;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Ingredient.CocktailIngredient;
import store.dalkak.api.user.domain.User;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "custom_cocktail")
public class Custom {

    //커스텀칵테일아이디
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "custom_cocktail_id")
    private Long id;

    //원본칵테일아이디
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cocktail_id")
    private Cocktail cocktail;

    //회원아이디
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private User user;

    //커스텀칵테일재료
    @OneToMany(mappedBy = "cocktail", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "custom_cocktail_ingredients")
    private List<CocktailIngredient> cocktailIngredients;

    //커스텀칵테일 이름
    @Column(name = "custom_cocktail_name")
    private String name;

    //커스텀칵테일 이미지
    @Column(name = "custom_cocktail_image")
    private String image;

    //커스텀칵테일 요약
    @Column(name = "custom_cocktail_summary")
    private String summary;

    //커스텀칵테일 코멘트
    @Column(name = "custom_cocktail_comment")
    private String comment;

    //커스텀칵테일 레시피
    @Column(name = "custom_cocktail_recipe")
    private String recipe;

    //커스텀칵테일 이미지
    @Column(name = "open")
    private Boolean open;

    @Builder
    public Custom(Cocktail cocktail, User user, List<CocktailIngredient> cocktailIngredients,
        String name, String image, String summary, String comment, String recipe, Boolean open) {
        this.cocktail = cocktail;
        this.user = user;
        this.cocktailIngredients = cocktailIngredients;
        this.name = name;
        this.image = image;
        this.summary = summary;
        this.comment = comment;
        this.recipe = recipe;
        this.open = open;
    }
}
