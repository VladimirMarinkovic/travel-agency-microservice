package vlada.spring.zaposleniresourceserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vlada.spring.zaposleniresourceserver.model.Zaposleni;

import java.util.Optional;

@Repository
public interface ZaposleniRepository extends JpaRepository<Zaposleni, Long> {

    Optional<Zaposleni> findByEmail(String email);
}