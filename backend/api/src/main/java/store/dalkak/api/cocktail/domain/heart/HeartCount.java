package store.dalkak.api.cocktail.domain.heart;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.redis.core.RedisHash;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value = "heartCount", timeToLive = 60 * 60 * 2) //2시간
@ToString
public class HeartCount {

    @Id
    String id;

    Long cocktailId;

    Integer count;

    @Builder
    public HeartCount(String id, Long cocktailId, Integer count) {
        this.id = id;
        this.cocktailId = cocktailId;
        this.count = count;
    }

}
