package vlada.spring.turaresourceserver.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import vlada.spring.turaresourceserver.dto.VozacDto;
import vlada.spring.turaresourceserver.model.*;

import java.util.Arrays;

@FeignClient(name = "vozaci-resource-server", fallback = VozaciFallback.class)
public interface VozaciTuraFeignClient {



    @GetMapping(value = "/vozac/proba")
    String proba();



    @GetMapping("/vozac/tura/{turaId}")
    VozaciTuraLista prikaziVozaceTure(@PathVariable("turaId") String turaId);

    @PostMapping("/vozac/tura/{turaId}")
    VozacDto sacuvajVozacaZaTuru(@RequestBody VozacDto vozacDto, @PathVariable("turaId") String turaId);


}

@Component
class VozaciFallback implements VozaciTuraFeignClient {

    @Override
    public String proba() {
        return "Proba NIJE USPELA";
    }

    @Override
    public VozaciTuraLista prikaziVozaceTure(String turaId) {
        VozaciTuraLista vozaciTuraLista = new VozaciTuraLista();
        vozaciTuraLista.setVozaciTureLista(Arrays.asList(new Vozac("Nije pronadjeno ime vozaca", "Nije pronadjeno prezime vozaca", null, null, turaId)));
        return vozaciTuraLista;
    }

    @Override
    public VozacDto sacuvajVozacaZaTuru(VozacDto vozacDto, String turaId) {
        return new VozacDto("Nije uspelo upisivanjei  vozaca!", null,null,null,null);
    }
}




