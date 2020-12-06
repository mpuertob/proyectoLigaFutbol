import { Injectable } from "@angular/core";
import { Equipo } from "../Equipo";

@Injectable({
  providedIn: "root",
})
export class EquiposFutbolService {
  listaEquipos: Map<Number, Equipo> = new Map<Number, Equipo>();
  numero: number = 0;
  public nombresEquipoA: Array<String> = [
    "Victorianos",
    "Villa Arriba",
    "Villanos",
    "Chiclanos",
    "Castellanos",
  ];
  public nombresEquipoB: Array<String> = [
    "Perderianos",
    "Villa Abajo",
    "Tiranos",
    "Rotulianos",
    "Francesanos",
  ];
  constructor() {
    for (let i = 1; i <= this.nombresEquipoA.length; i++) {
      this.listaEquipos.set(i, new Equipo(this.nombresEquipoA[i - 1]));
      this.numero = i;
    }
    for (let i = 1; i <= this.nombresEquipoB.length; i++) {
      this.numero += 1;
      this.listaEquipos.set(
        this.numero,
        new Equipo(this.nombresEquipoB[i - 1])
      );
    }
  }
}
