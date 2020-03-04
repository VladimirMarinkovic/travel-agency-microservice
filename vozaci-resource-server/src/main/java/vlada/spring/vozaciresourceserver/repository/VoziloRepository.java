package vlada.spring.vozaciresourceserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vlada.spring.vozaciresourceserver.model.Vozilo;

@Repository
public interface VoziloRepository extends JpaRepository<Vozilo, String> {
}
