package vlada.spring.turaresourceserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vlada.spring.turaresourceserver.feignclient.VozaciTuraFeignClient;
import vlada.spring.turaresourceserver.dto.VozacDto;
import vlada.spring.turaresourceserver.model.Vozac;
import vlada.spring.turaresourceserver.model.VozaciTuraLista;


@Service
public class VozaciTuraService {


    @Autowired
    VozaciTuraFeignClient vozaciTuraFeignClient;



    public VozaciTuraLista prikaziVozaceTure(String turaId) {
        return vozaciTuraFeignClient.prikaziVozaceTure(turaId);
    }

    public VozacDto sacuvajVozacaZaTuru(VozacDto vozacDto, String turaId) {
        return vozaciTuraFeignClient.sacuvajVozacaZaTuru(vozacDto, turaId);
    }



    public VozacDto mapVozacUVozacDtoDto(Vozac vozac) {
        return VozacDto.builder()
               .ime(vozac.getIme())
                .prezime(vozac.getPrezime())
                .brTelefona(vozac.getBrTelefona())
                .nazivFirme(vozac.getNazivFirme())
                .build();

    }

}


