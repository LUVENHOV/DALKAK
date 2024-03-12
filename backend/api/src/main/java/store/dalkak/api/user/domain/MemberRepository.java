package store.dalkak.api.user.domain;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.user.domain.embed.Provider;

public interface MemberRepository extends JpaRepository<Member,Long> {
    Optional<Member> findBySubAndProvider(String sub, Provider provider);
}
