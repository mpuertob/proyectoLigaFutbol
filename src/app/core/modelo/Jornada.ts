import { Fecha } from "./Fecha";
import { FechaService } from "./Fecha/fecha.service";
import { Partido } from "./Partido";

export class Jornada {
  private numeroPartidos = 5;
  private _listaPartidos: Array<Partido> = [];
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
  public fechas: Array<Fecha>;
  constructor(private servidorFecha: FechaService) {
    this.servidorFecha = new FechaService();
    this.fechas = servidorFecha.fechas;
  }
  public generarJornada(
    numeroJornada: number,
    limiteDeJornadas: number
  ): Array<Partido> {
    if (numeroJornada > limiteDeJornadas / 2) {
      for (let i = 0; i < this.numeroPartidos; i++) {
        let partido: Partido = this.generarPartido(
          this._nombresEquipoB,
          this._nombresEquipoA,
          i
        );
        this._listaPartidos.push(partido);
      }
    } else {
      for (let i = 0; i < this.numeroPartidos; i++) {
        let partido: Partido = this.generarPartido(
          this._nombresEquipoA,
          this._nombresEquipoB,
          i
        );
        this._listaPartidos.push(partido);
      }
    }
    this.cuadrarSiguienteJornada();
    return this._listaPartidos;
  }
  public cuadrarSiguienteJornada() {
    let primerEquipoA = this._nombresEquipoA[0];
    let ultimoEquipoB = this._nombresEquipoB[this._nombresEquipoB.length - 1];
    this._nombresEquipoA.shift();
    this._nombresEquipoB.pop();
    this._nombresEquipoA.push(ultimoEquipoB);
    this._nombresEquipoB.unshift(primerEquipoA);
  }
  public generarNumeroAleatorio(maximo: number, minimo: number): number {
    let aleatorio: number = Number.parseInt(
      Number(Math.random() * (maximo - minimo) + minimo).toFixed(0)
    );
    return aleatorio;
  }
  public generarMinutosAleatorios(veces: number): Array<number> {
    let minutos: Array<number> = [];
    for (let i = 0; i < veces; i++) {
      minutos.push(this.generarNumeroAleatorio(0, 91));
    }
    return minutos.sort();
  }
  public get listaPartidos() {
    return this._listaPartidos;
  }
  private generarPartido(
    local: String[],
    visitante: String[],
    indice: number
  ): Partido {
    let nombreLocal: String = local[indice];
    let nombreVisitante: String = visitante[indice];
    let golesLocal: number = this.generarNumeroAleatorio(0, 7);
    let minutosGolesLocal: Array<number> = this.generarMinutosAleatorios(
      golesLocal
    );
    let golesVisitante: number = this.generarNumeroAleatorio(0, 7);
    let minutosGolesVisitante: Array<number> = this.generarMinutosAleatorios(
      golesVisitante
    );
    return new Partido(
      nombreLocal,
      nombreVisitante,
      golesLocal,
      minutosGolesLocal,
      golesVisitante,
      minutosGolesVisitante
    );
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
}
