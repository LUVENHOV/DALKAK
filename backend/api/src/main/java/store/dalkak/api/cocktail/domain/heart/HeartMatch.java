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
@RedisHash(value="heartMatch", timeToLive = 60*60*2) //2시간
@ToString
public class HeartMatch {
    @Id
    String id;

    Long memberId;

    Long cocktailId;

    @Builder
    public HeartMatch(String id, Long memberId, Long cocktailId) {
        this.id = id;
        this.memberId = memberId;
        this.cocktailId = cocktailId;
    }
}
