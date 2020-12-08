import { Equipo } from "./Equipo";
import { EquiposFutbolService } from "./equipos/equipos-futbol.service";

export class Clasificacion {
  private _listaEquipos: Map<Number, Equipo>;
  private _listaEquiposArray: Equipo[] = [];
  constructor(private equiposFutbol: EquiposFutbolService) {
    this._listaEquipos = this.equiposFutbol.listaEquipos;
    this.rellenarArrayEquipos();
    this.ordenarEquipos();
    this.establecerPosicionesEquipos();
  }
  public configurarClasificacion() {
    this.ordenarEquipos();
    this.establecerPosicionesEquipos();
  }
  private rellenarArrayEquipos() {
    for (let i = 1; i <= this._listaEquipos.size; i++) {
      let equipo = this._listaEquipos.get(i);
      this._listaEquiposArray.push(equipo);
    }
  }
  private ordenarEquipos() {
    this._listaEquiposArray = this._listaEquiposArray.sort(function (a, b) {
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
    for (let i = 0; i < this._listaEquiposArray.length; i++) {
      this._listaEquiposArray[i].posicion = i + 1;
    }
  }
  public get listaEquiposArray() {
    return this._listaEquiposArray;
  }
  public get listaEquipos() {
    return this._listaEquipos;
  }
}
