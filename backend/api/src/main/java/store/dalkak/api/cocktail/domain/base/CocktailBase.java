package store.dalkak.api.cocktail.domain.base;

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

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "COCKTAIL_BASE")
public class CocktailBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cocktail_id")
    private Cocktail cocktail;

    @ManyToOne
    @JoinColumn(name = "base_id")
    private Base base;

}
