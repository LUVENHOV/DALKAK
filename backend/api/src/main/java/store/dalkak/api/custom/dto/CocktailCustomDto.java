package store.dalkak.api.custom.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import store.dalkak.api.user.dto.MemberSumDto;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class CocktailCustomDto {
    private Long customId;
    private String customName;
    private String customSummary;
    private MemberSumDto member;
}
