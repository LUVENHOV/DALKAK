package store.dalkak.api.global.elastic.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ElasticViewReqDto {
    private Long cocktailId;
    private String name;
    private String krName;
    private String image;
    private String recipe;
    private Integer alcohol;
    private Integer sweetness;
    private Integer heartCount;
    private Integer viewCount;
}
