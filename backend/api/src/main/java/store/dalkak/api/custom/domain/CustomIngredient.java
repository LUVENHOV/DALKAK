package store.dalkak.api.custom.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.ingredient.Ingredient;
import store.dalkak.api.cocktail.domain.ingredient.Unit;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CUSTOM_COCKTAIL_INGREDIENT")
public class CustomIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "custom_cocktail_id")
    private Custom custom;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @Column(name = "amount")
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Unit unit;

    @Builder
    public CustomIngredient(Custom custom, Ingredient ingredient, Double amount, Unit unit) {
        this.custom = custom;
        this.ingredient = ingredient;
        this.amount = amount;
        this.unit = unit;
    }

}
