package store.dalkak.api.user.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.user.domain.Heart;

public interface HeartRepository extends JpaRepository<Heart,Long> {
    Page<Heart> findAllByMember_Id(Long id, Pageable pageable);
    List<Heart> findTop5ByMember_IdOrderByIdDesc(Long member_id);
}
