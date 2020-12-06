import { Equipo } from "./Equipo";

export class Partido {
  constructor(
    private _equipoLocal: Equipo,
    private _equipoVisitante: Equipo,
    private _golesLocal: number,
    private _golesVisitante: number,
    private _minutosGolesLocal: Array<number>,
    private _minutosGolesVisitante: Array<number>
  ) {}
  public get local() {
    return this._equipoLocal.nombre;
  }
  public get visitante() {
    return this._equipoVisitante.nombre;
  }

  public get golesLocal() {
    return this._golesLocal;
  }

  public get golesVisitante() {
    return this._golesVisitante;
  }
  public set golesLocal(goles) {
    this._golesLocal = goles;
  }

  public set golesVisitante(goles) {
    this._golesVisitante = goles;
  }
  public get minutosGolesLocal() {
    return this._minutosGolesLocal;
  }
  public set minutosGolesLocal(minutos: Array<number>) {
    this._minutosGolesLocal = minutos;
  }
  public get minutosGolesVisitante() {
    return this._minutosGolesVisitante;
  }
  public set minutosGolesVisitante(minutos: Array<number>) {
    this._minutosGolesVisitante = minutos;
  }
}
