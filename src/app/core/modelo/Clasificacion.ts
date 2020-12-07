import { Equipo } from "./Equipo";
import { EquiposFutbolService } from "./equipos/equipos-futbol.service";

export class Clasificacion {
  listaEquipos: Map<Number, Equipo>;
  listaEquiposArray: Equipo[] = [];
  constructor(private equiposFutbol: EquiposFutbolService) {
    this.listaEquipos = this.equiposFutbol.listaEquipos;
    this.rellenarArrayEquipos();
    this.ordenarPorPuntos();
  }
  rellenarArrayEquipos() {
    for (let i = 1; i <= this.listaEquipos.size; i++) {
      let equipo = this.listaEquipos.get(i);
      this.listaEquiposArray.push(equipo);
    }
  }
  ordenarPorPuntos() {
    let listaPuntos: number[] = [];
    for (let i = 0; i < this.listaEquiposArray.length; i++) {
      listaPuntos.push(this.listaEquiposArray[i].puntos);
    }

    listaPuntos = listaPuntos.sort((a, b) => a - b);
    listaPuntos = listaPuntos.reverse();

    console.log("Descendente: " + listaPuntos);
    let listaEquiposOrdenado: Equipo[] = [];

    console.log("Longitud: " + listaEquiposOrdenado.length);
  }
}
