package store.dalkak.api.global.elastic.dto;

import jakarta.persistence.Id;
import java.time.LocalDateTime;
import jdk.jfr.Timestamp;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import store.dalkak.api.cocktail.domain.Cocktail;

@Document(indexName = "view-log")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@ToString
public class CocktailDocument {

    @Timestamp
    @Field(name = "@timestamp", type = FieldType.Date, format = {}, pattern = "uuuu-MM-dd'T'HH:mm:ss.SSSSSS")
    private LocalDateTime timestamp;

    //로그아이디
    @Id
    @Field(type = FieldType.Text)
    private String id;

    @Field(type = FieldType.Long)
    private Long cocktailId;

    //원본칵테일 이름
    @Field(type = FieldType.Text)
    private String name;

    //원본칵테일 한글이름
    @Field(type = FieldType.Text)
    private String krName;

    //원본칵테일 이미지
    @Field(type = FieldType.Text)
    private String image;

    //원본칵테일 레시피
    @Field(type = FieldType.Text)
    private String recipe;

    //원본칵테일 도수
    @Field(type = FieldType.Integer)
    private Integer alcohol;

    //원본칵테일 당도
    @Field(type = FieldType.Integer)
    private Integer sweetness;

    //좋아요 수
    @Field(type = FieldType.Integer)
    private Integer heartCount;

    //조회수
    @Field(type = FieldType.Integer)
    private Integer viewCount;

    // 시간 밀리초변환
    @Field(type = FieldType.Long)
    private Long time_mili;

    @Builder
    public CocktailDocument(LocalDateTime timestamp, Long cocktailId, String name, String krName, String image, String recipe,
        Integer alcohol, Integer sweetness, Integer heartCount, Integer viewCount, Long time_mili) {
        this.timestamp = timestamp;
        this.cocktailId = cocktailId;
        this.name = name;
        this.krName = krName;
        this.image = image;
        this.recipe = recipe;
        this.alcohol = alcohol;
        this.sweetness = sweetness;
        this.heartCount = heartCount;
        this.viewCount = viewCount;
        this.time_mili = time_mili;
    }

}
