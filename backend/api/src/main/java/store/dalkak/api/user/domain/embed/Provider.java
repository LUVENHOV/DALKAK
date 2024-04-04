package store.dalkak.api.user.domain.embed;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Provider {
    NAVER("NAVER"), KAKAO("KAKAO"), GOOGLE("GOOGLE"), NONE("NONE");

    private final String value;

    Provider(String value) {
        this.value = value;
    }

    @JsonCreator
    public static Provider from(String value) {
        for (Provider provider : Provider.values()) {
            if (provider.getValue().equals(value)) {
                return provider;
            }
        }
        return null;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}


