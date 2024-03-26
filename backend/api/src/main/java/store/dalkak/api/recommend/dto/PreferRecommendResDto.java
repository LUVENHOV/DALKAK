package store.dalkak.api.recommend.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.heart.HeartRank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PreferRecommendResDto {
    List<HeartRank> heartRankList;
}
