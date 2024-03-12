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
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.cocktail.domain.Ingredient.Ingredient;
import store.dalkak.api.cocktail.domain.Ingredient.Unit;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "custom_cocktail_ingredient")
public class CustomIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "custom_cocktail_ingredient_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "custom_cocktail_id")
    private Custom custom;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @Column(name = "origin_cocktail_ingredient_amount")
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Unit unit;

}
