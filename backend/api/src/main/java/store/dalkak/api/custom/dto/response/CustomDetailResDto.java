package store.dalkak.api.custom.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class CustomDetailResDto {
    private Long customId;
    private String customName;
    private String customSummary;
//    private List<UserDto> users;
}
