import { Partido } from "./Partido";

export class Cronologia {
  private _golesCasa: number;
  private _minutosCasa: Array<number>;
  private _golesFuera: number;
  private _minutosFuera: Array<number>;

  constructor(private partido: Partido) {
    this._golesCasa = this.partido.golesLocal;
    this._minutosCasa = this.partido.minutosGolesLocal;
    this._golesFuera = this.partido.golesVisitante;
    this._minutosFuera = this.partido.minutosGolesVisitante;
  }
  public get golesCasa() {
    return this._golesCasa;
  }
  public get minutosCasa() {
    return this._minutosCasa;
  }
  public get golesFuera() {
    return this._golesFuera;
  }
  public get minutosFuera() {
    return this._minutosFuera;
  }
}
