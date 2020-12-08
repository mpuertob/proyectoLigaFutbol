import { Injectable } from "@angular/core";
import { Equipo } from "../Equipo";

@Injectable({
  providedIn: "root",
})
export class EquiposFutbolService {
  listaEquipos: Map<Number, Equipo> = new Map<Number, Equipo>();
  numero: number = 0;
  public _nombresEquipoA: Array<String> = [
    "Victorianos",
    "Villa Arriba",
    "Villanos",
    "Chiclanos",
    "Castellanos",
  ];
  public _nombresEquipoB: Array<String> = [
    "Perderianos",
    "Villa Abajo",
    "Tiranos",
    "Rotulianos",
    "Francesanos",
  ];

  constructor() {
    this.init();
  }

  changeNames(valueA: Array<String>, valueB: Array<String>) {
    this._nombresEquipoA = valueA;
    this._nombresEquipoB = valueB;
    this.listaEquipos;
    this.init();
  }

  private init() {
    for (let i = 1; i <= this._nombresEquipoA.length; i++) {
      this.listaEquipos.set(i, new Equipo(this._nombresEquipoA[i - 1]));
      this.numero = i;
    }
    for (let i = 1; i <= this._nombresEquipoB.length; i++) {
      this.numero += 1;
      this.listaEquipos.set(
        this.numero,
        new Equipo(this._nombresEquipoB[i - 1])
      );
    }
  }
}
