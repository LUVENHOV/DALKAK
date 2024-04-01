package store.dalkak.api.custom.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.custom.domain.CustomIngredient;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CustomModifyDto {

    String customName;
    String customSummary;
    String customComment;
    String customRecipe;
    String imageUrl;
    Boolean open;
}
