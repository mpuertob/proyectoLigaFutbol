import { Equipo } from "./Equipo";
import { EquiposFutbolService } from "./equipos/equipos-futbol.service";

export class Clasificacion {
  listaEquipos: Map<Number, Equipo>;
  listaEquiposArray: Equipo[] = [];
  constructor(private equiposFutbol: EquiposFutbolService) {
    this.listaEquipos = this.equiposFutbol.listaEquipos;
    this.rellenarArrayEquipos();
    this.ordenarEquipos();
    this.establecerPosicionesEquipos();
  }
  private rellenarArrayEquipos() {
    for (let i = 1; i <= this.listaEquipos.size; i++) {
      let equipo = this.listaEquipos.get(i);
      this.listaEquiposArray.push(equipo);
    }
  }
  private ordenarEquipos() {
    this.listaEquiposArray = this.listaEquiposArray.sort(function (a, b) {
      if (b.puntos == a.puntos) {
        return b.golesFavor - a.golesFavor;
      }
      if (b.puntos == a.puntos && b.golesFavor == a.golesFavor) {
        return a.golesContra - b.golesContra;
      }
      return b.puntos - a.puntos;
    });
  }

  private establecerPosicionesEquipos() {
    for (let i = 0; i < this.listaEquiposArray.length; i++) {
      this.listaEquiposArray[i].posicion = i + 1;
    }
  }
}
