package store.dalkak.api.cocktail.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class UnitDto {

    private Long unitId;
    private String unitName;
    private String unitImage;

}
