package vlada.spring.vozaciresourceserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vlada.spring.vozaciresourceserver.model.Prevoznik;
import vlada.spring.vozaciresourceserver.model.Vozac;

import java.util.List;

@Repository
public interface PrevoznikRepository extends JpaRepository<Prevoznik, String> {


}
