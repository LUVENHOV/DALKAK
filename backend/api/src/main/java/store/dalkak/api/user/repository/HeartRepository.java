package store.dalkak.api.user.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.user.domain.Heart;

public interface HeartRepository extends JpaRepository<Heart,Long> {

    List<Heart> findHeartsByMember_Id(Long memberId);
}
