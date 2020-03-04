package vlada.spring.vozaciresourceserver.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vlada.spring.vozaciresourceserver.model.Prevoznik;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VozacDto {

    String ime;
    String prezime;
    String brTelefona;
    String turaId;
    String nazivFirme;
}
