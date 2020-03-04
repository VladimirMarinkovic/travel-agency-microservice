package vlada.spring.turaresourceserver.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import vlada.spring.turaresourceserver.dto.PutnikDto;
import vlada.spring.turaresourceserver.model.Putnik;
import vlada.spring.turaresourceserver.model.TuraPutniciLista;

import java.util.Arrays;

@FeignClient(name = "putnici-resource-server", fallback = PutniciFallback.class)
public interface PutniciPodaciFeignClient {

    @GetMapping(value = "/putnicipodaci/proba")
    String proba();

    @GetMapping("/putnicipodaci/tura/{turaId}")
    TuraPutniciLista prikaziPutnikeTure(@PathVariable("turaId") String turaId);


    @PostMapping("/putnicipodaci/putnik/{turaId}")
    PutnikDto sacuvajPutnikaTure(@RequestBody PutnikDto putnikDto, @PathVariable("turaId") String turaId);
}



@Component
class PutniciFallback implements PutniciPodaciFeignClient {

    @Override
    public String proba() {
        return "Proba nije uspela!!";
    }

    @Override
    public TuraPutniciLista prikaziPutnikeTure(String turaId) {
        TuraPutniciLista turaPutniciLista = new TuraPutniciLista();
        turaPutniciLista.setListaPutnika(Arrays.asList(new Putnik("Nije pronadjeno ime putnika", "Nije pronadjeno prezime putnika", null, turaId)));
        return turaPutniciLista;
    }

    @Override
    public PutnikDto sacuvajPutnikaTure(PutnikDto putnikDto, String turaId) {
        return new PutnikDto("Nije moguce sacuvati putnika!", null, null, turaId);
    }
}

