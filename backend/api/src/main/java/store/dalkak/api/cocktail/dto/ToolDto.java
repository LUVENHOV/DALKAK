package store.dalkak.api.cocktail.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class ToolDto {

    private Long toolId;
    private String toolName;
    private String toolImage;
}
