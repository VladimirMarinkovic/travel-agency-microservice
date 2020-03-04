package vlada.spring.zaposleniresourceserver.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ZaposleniDto {

    private Long id;
    private String ime;
    private String prezime;
    private String email;
    private String radnoMesto;

}
