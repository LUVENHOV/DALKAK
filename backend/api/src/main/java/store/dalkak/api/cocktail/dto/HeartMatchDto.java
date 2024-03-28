package store.dalkak.api.cocktail.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HeartMatchDto {

    String id;
    String cocktailId;
    String memberId;
}
