package vlada.spring.zaposleniresourceserver.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import vlada.spring.zaposleniresourceserver.dto.ZaposleniDto;
import vlada.spring.zaposleniresourceserver.model.Zaposleni;


@Mapper(componentModel = "spring")
public interface ZaposleniMapper {


    @Mapping(source = "id", target = "id")
    ZaposleniDto zaposleniUZaposleniDto(Zaposleni zaposleni);

    @Mapping(source = "id", target = "id")
    Zaposleni zaposleniDtoUZaposleni(ZaposleniDto zaposleniDto);

}
