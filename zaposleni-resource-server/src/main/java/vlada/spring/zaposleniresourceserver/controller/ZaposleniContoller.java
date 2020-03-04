package vlada.spring.zaposleniresourceserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vlada.spring.zaposleniresourceserver.dto.ZaposleniDto;
import vlada.spring.zaposleniresourceserver.repository.ZaposleniRepository;
import vlada.spring.zaposleniresourceserver.service.ZaposleniService;


import java.util.List;

@RestController
@RequestMapping("/zaposleni")
public class ZaposleniContoller {

    @Autowired
    ZaposleniService zaposleniService;
    @Autowired
    ZaposleniRepository zaposleniRepository;

    @GetMapping("/svi-zaposleni")
    public ResponseEntity<List<ZaposleniDto>> prikaziSveZaposlene() {
        return new ResponseEntity<>(zaposleniService.nadjiSveZaposlene(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ZaposleniDto> prikaziZaposlenog(@PathVariable Long id) {
        return new ResponseEntity<>(zaposleniService.nadjiZaposlenog(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ZaposleniDto> izmeniZaposlenog(@PathVariable Long id,  @RequestBody ZaposleniDto zaposleniDto) {
        return new ResponseEntity<ZaposleniDto>(zaposleniService.izmeniZaposlenog(id, zaposleniDto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void obrisiZaposlenog(@PathVariable Long id) {
        zaposleniService.obrisiZaposlenogZaId(id);
    }


    @PostMapping("/registruj-zaposlenog")
    public ResponseEntity registracija(@RequestBody ZaposleniDto zaposleniDto) {
        zaposleniService.sacuvajZaposlenog(zaposleniDto);
        return new ResponseEntity(HttpStatus.OK);
    }
}
