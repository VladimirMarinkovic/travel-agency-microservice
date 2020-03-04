package vlada.spring.vozaciresourceserver.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Vozilo {




    @Id
    @Column(unique = true, name = "br_tablica")
    String brTablica;
    @Column
    String markaVozila;
    @Column
    String brSedista;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "firma", referencedColumnName = "naziv_firme")
    Prevoznik prevoznik;

}
