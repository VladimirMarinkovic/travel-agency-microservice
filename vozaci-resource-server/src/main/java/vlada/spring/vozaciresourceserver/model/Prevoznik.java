package vlada.spring.vozaciresourceserver.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Prevoznik {




    @Id
    @Column(unique = true, name = "naziv_firme")
    private String nazivFirme;
    @Column
    private String adresaFirme;
    @Column
    private String pibFirme;


    @OneToMany(mappedBy = "prevoznik",cascade = CascadeType.ALL)
    private List<Vozilo> vozilaLista;


}
