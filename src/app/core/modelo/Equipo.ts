export class Equipo {
  private _puntos: number = 0;
  private _golesFavor: number = 0;
  private _golesContra: number = 0;
  private _posicion: number = 0;
  constructor(private _nombre: String) {}

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

  public get golesContra() {
    return this._golesContra;
  }

  public get posicion() {
    return this._posicion;
  }
  public set posicion(numero: number) {
    this._posicion = numero;
  }
  public aumentarGolesFavor(goles) {
    this._golesFavor += goles;
  }
  public aumentarGolesContra(goles) {
    this._golesContra += goles;
  }
}
