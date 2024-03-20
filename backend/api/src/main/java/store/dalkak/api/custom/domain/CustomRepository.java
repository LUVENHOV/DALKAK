package store.dalkak.api.custom.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomRepository extends JpaRepository<Custom, Long>, CustomRepositoryCustom {
    Page<Custom> findAllByMember_Id(Long id, Pageable pageable);
}
