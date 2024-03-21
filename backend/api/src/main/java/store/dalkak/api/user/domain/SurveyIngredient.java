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
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;

@Entity
@Table(name="SURVEY_INGREDIENT")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SurveyIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @Builder
    public SurveyIngredient(Long id, Survey survey, Ingredient ingredient) {
        this.id = id;
        this.survey = survey;
        this.ingredient = ingredient;
    }
}
