package vlada.spring.walterauthservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import vlada.spring.walterauthservice.dto.RegistracijaZahtev;
import vlada.spring.walterauthservice.model.Korisnik;
import vlada.spring.walterauthservice.repository.KorisnikRepository;
import vlada.spring.walterauthservice.service.KorisnikService;


@SpringBootApplication
@EnableDiscoveryClient
@EnableAuthorizationServer
public class WalterAuthServiceApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(WalterAuthServiceApplication.class, args);
    }


    @Autowired
    KorisnikService korisnikService;
    @Autowired
    KorisnikRepository korisnikRepository;

    @Override
    public void run(String... args) throws Exception {

        Korisnik korisnik = korisnikRepository.findByKorisnickoIme("admin");
        if (korisnik == null) {
            korisnikService.sacuvajKorisnika(new RegistracijaZahtev("admin", "admin", "admin@mail.com"));
        }
    }
}