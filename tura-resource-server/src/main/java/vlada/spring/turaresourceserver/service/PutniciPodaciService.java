package vlada.spring.turaresourceserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.stereotype.Service;

import vlada.spring.turaresourceserver.feignclient.PutniciPodaciFeignClient;
import vlada.spring.turaresourceserver.dto.PutnikDto;
import vlada.spring.turaresourceserver.model.Putnik;
import vlada.spring.turaresourceserver.model.TuraPutniciLista;



@Service
public class PutniciPodaciService {


    @Autowired
    OAuth2RestTemplate oAuth2RestTemplate;

    @Autowired
    PutniciPodaciFeignClient putniciPodaciFeignClient;




    public TuraPutniciLista prikaziPutnikeTure(String turaId) {
        return putniciPodaciFeignClient.prikaziPutnikeTure(turaId);
    }


    public PutnikDto sacuvajPutnikaTure(PutnikDto putnikDto, String turaId) {
        return putniciPodaciFeignClient.sacuvajPutnikaTure(putnikDto, turaId);
    }



    public PutnikDto mapPutnikUPutnikDto(Putnik putnik) {
        return PutnikDto.builder()
                .ime(putnik.getIme())
                .prezime(putnik.getPrezime())
                .brPasosa(putnik.getBrPasosa())
                .turaId(putnik.getTuraId())
                .build();
    }




}
