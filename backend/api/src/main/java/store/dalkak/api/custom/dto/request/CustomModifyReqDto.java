package store.dalkak.api.custom.dto.request;


import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.custom.dto.CustomIngredientDto;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomModifyReqDto {
    String customName;
    String customSummary;
    String customComment;
    String customRecipe;
    Boolean open;
    List<CustomIngredientDto> customIngredientList;
}
