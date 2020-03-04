package vlada.spring.zaposleniresourceserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vlada.spring.zaposleniresourceserver.dto.ZaposleniDto;
import vlada.spring.zaposleniresourceserver.exception.ZaposleniNijePronadjenException;
import vlada.spring.zaposleniresourceserver.mapper.ZaposleniMapper;
import vlada.spring.zaposleniresourceserver.model.Zaposleni;
import vlada.spring.zaposleniresourceserver.repository.ZaposleniRepository;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ZaposleniService {


    @Autowired
    private ZaposleniRepository zaposleniRepository;
    @Autowired
    ZaposleniMapper zaposleniMapper;



    public List<ZaposleniDto> nadjiSveZaposlene() {
        List<Zaposleni> zaposleni = zaposleniRepository.findAll();
        return zaposleni.stream().map(zaposleniMapper::zaposleniUZaposleniDto).collect(Collectors.toList());
    }


    public ZaposleniDto nadjiZaposlenog(Long id) {
        Optional<Zaposleni> optionalZaposleni = zaposleniRepository.findById(id);
        Zaposleni zaposleni = optionalZaposleni.orElseThrow(()-> new ZaposleniNijePronadjenException("Nije pronadjen zaposleni za id: " +id));
        return zaposleniMapper.zaposleniUZaposleniDto(zaposleni);
    }

    public ZaposleniDto izmeniZaposlenog(Long id, ZaposleniDto zaposleniDto) {
        Zaposleni zaposleni = zaposleniRepository.findById(id).orElseThrow(()-> new ZaposleniNijePronadjenException("Nije pronadjen zaposleni za izmenu sa id: "+id));
        zaposleni.setIme(zaposleniDto.getIme());
        zaposleni.setPrezime(zaposleniDto.getPrezime());
        zaposleni.setEmail(zaposleniDto.getEmail());
        zaposleni.setRadnoMesto(zaposleniDto.getRadnoMesto());
        zaposleniRepository.save(zaposleni);
        return zaposleniMapper.zaposleniUZaposleniDto(zaposleni);

    }

    public void obrisiZaposlenogZaId(Long id) {
        Zaposleni zaposleni = zaposleniRepository.findById(id).orElseThrow(()-> new ZaposleniNijePronadjenException("Nije pronadjen zaposlkeni za brisanje sa id: "+id));
        zaposleniRepository.delete(zaposleni);
    }

    public void  sacuvajZaposlenog(ZaposleniDto zaposleniDto) {
        Zaposleni zaposleni = new Zaposleni();
        zaposleni.setIme(zaposleniDto.getIme());
        zaposleni.setPrezime(zaposleniDto.getPrezime());
        zaposleni.setEmail(zaposleniDto.getEmail());
        zaposleni.setRadnoMesto(zaposleniDto.getRadnoMesto());

        zaposleniRepository.save(zaposleni);
    }





}
