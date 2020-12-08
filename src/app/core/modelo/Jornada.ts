import { Equipo } from "./Equipo";
import { EquiposFutbolService } from "./equipos/equipos-futbol.service";
import { Fecha } from "./Fecha";
import { FechaService } from "./Fecha/fecha.service";
import { Partido } from "./Partido";

export class Jornada {
  private _listaPartidos: Array<Partido> = [];
  private _nombresEquipoA: Array<String> = [];
  private numeroPartidos = 5;
  private _nombresEquipoB: Array<String> = [];
  private _listaEquipos: Map<Number, Equipo> = new Map<Number, Equipo>();
  public fechas: Array<Fecha>;
  constructor(
    private servidorFecha: FechaService,
    private equiposFutbol: EquiposFutbolService
  ) {
    this.fechas = servidorFecha.fechas;
    this._nombresEquipoA = this.equiposFutbol._nombresEquipoA;
    this._nombresEquipoB = this.equiposFutbol._nombresEquipoB;
    this._listaEquipos = this.equiposFutbol.listaEquipos;
  }
  public generarJornada(
    numeroJornada: number,
    limiteDeJornadas: number
  ): Array<Partido> {
    if (numeroJornada > limiteDeJornadas / 2) {
      for (let i = 1; i <= this.numeroPartidos; i++) {
        let partido: Partido = this.generarPartido(i);
        this._listaPartidos.push(partido);
      }
    } else {
      for (let i = 1; i <= this.numeroPartidos; i++) {
        let partido: Partido = this.generarPartido(i);
        this._listaPartidos.push(partido);
      }
    }
    this.cuadrarSiguienteJornada();
    return this._listaPartidos;
  }
  private cuadrarSiguienteJornada() {
    let primerEquipoA = this._nombresEquipoA[0];
    let ultimoEquipoB = this._nombresEquipoB[this._nombresEquipoB.length - 1];
    this._nombresEquipoA.shift();
    this._nombresEquipoB.pop();
    this._nombresEquipoA.push(ultimoEquipoB);
    this._nombresEquipoB.unshift(primerEquipoA);
    this.equiposFutbol.changeNames(this._nombresEquipoA, this._nombresEquipoB);
  }
  private generarNumeroAleatorio(maximo: number, minimo: number): number {
    let aleatorio: number = Number.parseInt(
      (Math.random() * (maximo - minimo) + minimo).toFixed(0)
    );
    return aleatorio;
  }
  private generarMinutosAleatorios(veces: number): Array<number> {
    let minutos: Array<number> = [];
    for (let i = 0; i < veces; i++) {
      minutos.push(this.generarNumeroAleatorio(0, 91));
    }

    return minutos.sort((a, b) => a - b);
  }
  public get listaPartidos() {
    return this._listaPartidos;
  }
  private generarPartido(indice: number): Partido {
    let equipoLocal: Equipo = this.equiposFutbol.listaEquipos.get(indice);
    let equipoVisitante: Equipo = this.equiposFutbol.listaEquipos.get(
      indice + this._nombresEquipoA.length
    );
    let golesLocal: number = this.generarNumeroAleatorio(0, 7);
    equipoLocal.aumentarGolesFavor(golesLocal);
    equipoVisitante.aumentarGolesContra(golesLocal);
    let minutosGolesLocal: Array<number> = this.generarMinutosAleatorios(
      golesLocal
    );
    let golesVisitante: number = this.generarNumeroAleatorio(0, 7);
    equipoLocal.aumentarGolesContra(golesVisitante);
    equipoVisitante.aumentarGolesFavor(golesVisitante);
    this.establecerPuntuacion(
      golesLocal,
      golesVisitante,
      equipoLocal,
      equipoVisitante
    );
    let minutosGolesVisitante: Array<number> = this.generarMinutosAleatorios(
      golesVisitante
    );
    let partido: Partido = new Partido(
      equipoLocal,
      equipoVisitante,
      golesLocal,
      golesVisitante,
      minutosGolesLocal,
      minutosGolesVisitante
    );
    return partido;
  }
  private establecerPuntuacion(
    golesLocal: number,
    golesVisitante: number,
    equipoLocal: Equipo,
    equipoVisitante: Equipo
  ) {
    if (golesLocal > golesVisitante) {
      equipoLocal.aumentarPuntos(3);
    } else if (golesLocal == golesVisitante) {
      equipoLocal.aumentarPuntos(1);
      equipoVisitante.aumentarPuntos(1);
    } else if (golesVisitante > golesLocal) {
      equipoVisitante.aumentarPuntos(3);
    }
  }
  public get nombresEquipoA() {
    return this._nombresEquipoA;
  }
  public set nombresEquipoA(nombres: Array<String>) {
    this._nombresEquipoA = nombres;
  }
  public get nombresEquipoB() {
    return this._nombresEquipoB;
  }
  public set nombresEquipoB(nombres: Array<String>) {
    this._nombresEquipoB = nombres;
  }
  public obtenerFecha(numero: number): Fecha {
    return this.fechas[numero];
  }
  public get listaEquipos() {
    return this._listaEquipos;
  }
}
