package store.dalkak.api.custom.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomModifyDto {
    String customName;
    String customSummary;
    String customComment;
    String customRecipe;
    String imageUrl;
    Boolean open;
}
