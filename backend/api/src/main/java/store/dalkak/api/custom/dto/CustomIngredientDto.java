package store.dalkak.api.custom.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomIngredientDto {
    Long id;
    Double amount;
    Long unit_id;
}
