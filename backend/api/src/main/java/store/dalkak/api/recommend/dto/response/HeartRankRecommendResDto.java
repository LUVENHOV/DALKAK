package store.dalkak.api.recommend.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.dalkak.api.cocktail.domain.heart.HeartRank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class HeartRankRecommendResDto {

    List<HeartRank> heartRankList;
}
