import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Clasificacion } from "./Clasificacion";
import { Cronologia } from "./Cronologia";
import { EquiposFutbolService } from "./equipos/equipos-futbol.service";
import { FechaService } from "./Fecha/fecha.service";
import { Jornada } from "./Jornada";

export class Liga {
  _numeroJornada: number = 1;
  _limiteDeJornadas = 18;
  _jornada: Jornada;
  _resultado;
  _listaJornadas: Map<number, Jornada> = new Map<number, Jornada>();
  _clasificacion: Clasificacion;
  constructor(
    private aler: AlertController,
    private route: Router,
    private servidorFecha: FechaService,
    private equiposFutbol: EquiposFutbolService
  ) {
    this._jornada = new Jornada(this.servidorFecha, this.equiposFutbol);
    this._resultado = this._jornada.generarJornada(
      this._numeroJornada,
      this._limiteDeJornadas
    );
    this._clasificacion = new Clasificacion(this.equiposFutbol);
    this._clasificacion.configurarClasificacion();
  }

  jornadaSiguiente() {
    this._listaJornadas.set(this._numeroJornada, this._jornada);
    if (this._numeroJornada < this._limiteDeJornadas) {
      this._numeroJornada++;
      if (this._listaJornadas.get(this._numeroJornada) == undefined) {
        this.jornadaNuevaConfiguracion();
        this._listaJornadas.set(this._numeroJornada, this._jornada);
      } else {
        this._jornada = this._listaJornadas.get(this._numeroJornada);
        this._resultado = this._jornada.listaPartidos;
      }
    }
    this.cambiarClasificacion();
  }
  jornadaNuevaConfiguracion() {
    let nombresEquipoA = this._jornada.nombresEquipoA;
    let nombresEquipoB = this._jornada.nombresEquipoB;
    this._jornada = new Jornada(this.servidorFecha, this.equiposFutbol);
    this._clasificacion = new Clasificacion(this.equiposFutbol);
    this._jornada.nombresEquipoA = nombresEquipoA;
    this._jornada.nombresEquipoB = nombresEquipoB;
    this._resultado = this._jornada.generarJornada(
      this._numeroJornada,
      this._limiteDeJornadas
    );
  }
  jornadaAnterior() {
    if (this._numeroJornada > 1) {
      this._numeroJornada--;
      this._resultado = this._listaJornadas.get(
        this._numeroJornada
      ).listaPartidos;
    } else {
      this._resultado = this._listaJornadas.get(
        this._numeroJornada
      ).listaPartidos;
    }
    this.cambiarClasificacion();
  }
  obtenerFechaConcreta() {
    return this._jornada.obtenerFecha(this._numeroJornada - 1).toString();
  }
  cambiarClasificacion() {
    this._clasificacion = new Clasificacion(this.equiposFutbol);
  }
  isJornadaFinal() {
    if (this._numeroJornada == this._limiteDeJornadas) {
      return true;
    }
    return false;
  }

  public get numeroJornada() {
    return this._numeroJornada;
  }
  public get limiteDeJornadas() {
    return this._limiteDeJornadas;
  }

  public get jornada() {
    return this._jornada;
  }
  public get resultado() {
    return this._resultado;
  }
  public get listaJornadas() {
    return this._listaJornadas;
  }
  public get clasificacion() {
    return this._clasificacion;
  }
}
