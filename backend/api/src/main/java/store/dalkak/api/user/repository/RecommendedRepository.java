package store.dalkak.api.user.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.user.domain.Recommended;

public interface RecommendedRepository extends JpaRepository<Recommended, Long> {

    Page<Recommended> findAllByMember_Id(Long id, Pageable pageable);
}
