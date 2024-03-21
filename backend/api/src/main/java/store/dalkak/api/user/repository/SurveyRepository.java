package store.dalkak.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.user.domain.Survey;

public interface SurveyRepository extends JpaRepository<Survey, Long> {

}
