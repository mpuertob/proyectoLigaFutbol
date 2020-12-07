import { Equipo } from "./Equipo";
import { EquiposFutbolService } from "./equipos/equipos-futbol.service";
import { Jornada } from "./Jornada";

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
    let listaPuntosAscendente: number[] = [];
    let listaPuntosDescendente: number[] = [];
    for (let i = 0; i < this.listaEquiposArray.length; i++) {
      console.log(this.listaEquiposArray[i].nombre);
      console.log("Puntos de este equipo: " + this.listaEquiposArray[i].puntos);
      listaPuntosAscendente.push(this.listaEquiposArray[i].puntos);
    }
    listaPuntosAscendente = listaPuntosAscendente.sort((a, b) => a - b);
    for (let i = listaPuntosAscendente.length - 1; i >= 0; i--) {
      listaPuntosDescendente.push(listaPuntosAscendente[i]);
    }
    console.log("Ascendente: " + listaPuntosAscendente);
    console.log("Descendente: " + listaPuntosDescendente);
    // let listaEquiposOrdenados: Equipo[] = [];
    // let bandera = true;
    // do {
    //   for (let i = 1; i <= listaPuntos.length; i++) {
    //     console.log("ListaPuntos[i] " + listaPuntos[i]);
    //     console.log("listaEquiposArray[i] " + this.listaEquiposArray[i].puntos);
    //     if (listaPuntos[i] != this.listaEquiposArray[i].puntos) {
    //       for (let j = 0; j < this.listaEquiposArray.length; j++) {
    //         if (listaPuntos[i] == this.listaEquiposArray[j].puntos) {
    //           listaEquiposOrdenados.push(this.listaEquiposArray[j]);
    //         }
    //       }
    //       bandera = false;
    //     } else {
    //       bandera = true;
    //     }
    //   }
    // } while (!bandera);
    // this.listaEquiposArray = listaEquiposOrdenados;
  }
}
