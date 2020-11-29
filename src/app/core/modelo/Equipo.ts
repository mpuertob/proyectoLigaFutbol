export class Equipo {
  private _nombre: String;
  private _puntos: number;
  private _golesFavor: number;
  private _golesContra: number;
  private _posicion: number;

  constructor() {}

  public get nombre() {
    return this._nombre;
  }
  public get puntos() {
    return this._puntos;
  }
  public set puntos(numero: number) {
    this._puntos += numero;
  }
  public get golesFavor() {
    return this._golesFavor;
  }
  public set golesFavor(numero: number) {
    this._golesFavor = numero;
  }
  public get golesContra() {
    return this._golesContra;
  }
  public set golesContra(numero: number) {
    this._golesContra = numero;
  }
  public get posicion() {
    return this._posicion;
  }
  public set posicion(numero: number) {
    this._posicion = numero;
  }
}
