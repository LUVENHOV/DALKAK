package store.dalkak.api.cocktail.domain;

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
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import store.dalkak.api.cocktail.domain.base.CocktailBase;
import store.dalkak.api.cocktail.domain.ingredient.CocktailIngredient;
import store.dalkak.api.cocktail.domain.tool.CocktailTool;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "COCKTAIL")
public class Cocktail {

    //칵테일아이디
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    //칵테일글라스
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "glass_id", nullable = false)
    private Glass glass;

    //칵테일색상
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "color_id", nullable = false)
    private Color color;

    //칵테일시기
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "occasion_id")
    private Occasion occasion;

    //칵테일도구
    @OneToMany(mappedBy = "cocktail", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "cocktail_tools")
    private List<CocktailTool> tools;

    //칵테일재료
    @OneToMany(mappedBy = "cocktail", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "cocktail_ingredients")
    private List<CocktailIngredient> cocktailIngredients;

    //칵테일베이스
    @OneToMany(mappedBy = "cocktail", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "cocktail_bases")
    private List<CocktailBase> cocktailBases;

    //칵테일특집
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "collection_id")
    private Collection collection;

    //원본칵테일 이름
    @Column(name = "name", nullable = false)
    private String name;

    //원본칵테일 한글이름
    @Column(name = "korean_name")
    private String krName;

    //원본칵테일 이미지
    @Column(name = "image", nullable = false)
    private String image;

    //원본칵테일 레시피
    @Column(name = "recipe", nullable = false)
    private String recipe;

    //원본칵테일 도수
    @Column(name = "alcohol_content", nullable = false)
    private Integer alcohol;

    //원본칵테일 당도
    @Column(name = "sweetness", nullable = false)
    private Integer sweetness;

    //좋아요
//    @OneToMany(mappedBy = "cocktail", cascade = CascadeType.ALL)
//    Set<Heart> hearts = new HashSet<>();

    //좋아요 수
    @ColumnDefault("0")
    @Column(name = "heart_count", nullable = false)
    private Integer heartCount;

    //조회수
    @ColumnDefault("0")
    @Column(name = "view_count", nullable = false)
    private Integer viewCount;

    public void updateCocktailHeart(Integer heartCount) {
        this.heartCount = heartCount;
    }

    public void updateCocktailView(Integer viewCount) {
        this.viewCount = viewCount;
    }
}
