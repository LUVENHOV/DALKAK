package store.dalkak.api.user.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.user.domain.Member;
import store.dalkak.api.user.domain.embed.Provider;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {

    Boolean existsByNickname(String nickname);
    Optional<Member> findByOauthSubAndOauthProvider(String sub, Provider provider);
    Boolean existsByOauthSubAndOauthProvider(String sub, Provider provider);

    Member findMemberById(Long memberId);
}
