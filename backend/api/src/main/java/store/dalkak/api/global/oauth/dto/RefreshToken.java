package store.dalkak.api.global.oauth.dto;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.redis.core.RedisHash;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value = "refreshToken", timeToLive = 60 * 60 * 24 * 30) //한달
@ToString
public class RefreshToken {

    @Id
    private Long id;
    private String value;

    @Builder
    public RefreshToken(Long id, String value) {
        this.id = id;
        this.value = value;
    }
}

