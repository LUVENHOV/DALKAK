package store.dalkak.api.custom.domain;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomRepository extends JpaRepository<Custom, Long>, CustomRepositoryCustom {
    Page<Custom> findAllByMember_Id(Long id, Pageable pageable);
    List<Custom> findTop5ByMember_IdOrderByIdDesc(Long member_id);
}
