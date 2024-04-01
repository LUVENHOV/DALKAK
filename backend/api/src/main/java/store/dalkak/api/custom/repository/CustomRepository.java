package store.dalkak.api.custom.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import store.dalkak.api.cocktail.domain.Cocktail;
import store.dalkak.api.custom.domain.Custom;

public interface CustomRepository extends JpaRepository<Custom, Long>, CustomRepositoryCustom {

    Custom findCustomById(Long customCocktailId);

    void deleteCustomById(Long customCocktailId);

    Page<Custom> findAllByMember_Id(Long id, Pageable pageable);

    List<Custom> findTop5ByMember_IdOrderByIdDesc(Long member_id);

    List<Custom> findAllByCocktailOrderByIdDesc(Cocktail cocktail);

//    Page<Custom> findAllByCocktailAndOpenIsTrueOrderByIdDesc(Cocktail cocktail, Pageable pageable);

}
