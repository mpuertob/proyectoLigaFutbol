export class Partido {
  constructor(
    private _local: String,
    private _visitante: String,
    private _golesLocal: number,
    private _minutosGolesLocal: Array<number>,
    private _golesVisitante: number,
    private _minutosGolesVisitante: Array<number>
  ) {}
  public get local() {
    return this._local;
  }
  public set local(local) {
    this.local = local;
  }
  public get visitante() {
    return this._visitante;
  }
  public set visitante(visitanteNuevo) {
    this._visitante = visitanteNuevo;
  }
  public get golesLocal() {
    return this._golesLocal;
  }
  public set aumentarGolesLocal(goles) {
    this._golesLocal += goles;
  }
  public get golesVisitante() {
    return this._golesVisitante;
  }
  public set aumentarGolesVisitante(goles) {
    this._golesVisitante += goles;
  }
  public get minutosGolesLocal() {
    return this._minutosGolesLocal;
  }
  public get minutosGolesVisitante() {
    return this._minutosGolesVisitante;
  }

  public nuevoGolLocal(minuto: number) {
    this.aumentarGolesLocal(1);
    this.minutosGolesLocal.push(minuto);
  }
  public nuevoGolVisitante(minuto: number) {
    this.aumentarGolesVisitante(1);
    this.minutosGolesVisitante.push(minuto);
  }
}
