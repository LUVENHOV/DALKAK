package store.dalkak.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import store.dalkak.api.user.domain.SurveyIngredient;

@Repository
public interface SurveyIngredientRepository extends JpaRepository<SurveyIngredient, Long> {

}
