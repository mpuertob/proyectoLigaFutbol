import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Clasificacion } from "../core/modelo/Clasificacion";
import { Cronologia } from "../core/modelo/Cronologia";
import { EquiposFutbolService } from "../core/modelo/equipos/equipos-futbol.service";
import { FechaService } from "../core/modelo/Fecha/fecha.service";
import { Jornada } from "../core/modelo/Jornada";
import { Partido } from "../core/modelo/Partido";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  visible: boolean = true;
  numeroJornada: number = 1;
  limiteDeJornadas = 18;
  cronologia: Cronologia;
  jornada: Jornada;
  resultado;
  listaJornadas: Map<number, Jornada> = new Map<number, Jornada>();
  clasificacion: Clasificacion;
  constructor(
    private aler: AlertController,
    private route: Router,
    private servidorFecha: FechaService,
    private equiposFutbol: EquiposFutbolService
  ) {
    this.jornada = new Jornada(this.servidorFecha, this.equiposFutbol);
    this.clasificacion = new Clasificacion(this.equiposFutbol);
    this.resultado = this.jornada.generarJornada(
      this.numeroJornada,
      this.limiteDeJornadas
    );
  }

  jornadaSiguiente() {
    this.listaJornadas.set(this.numeroJornada, this.jornada);
    if (this.numeroJornada < this.limiteDeJornadas) {
      this.numeroJornada++;
      if (this.listaJornadas.get(this.numeroJornada) == undefined) {
        this.jornadaNuevaConfiguracion();
        this.listaJornadas.set(this.numeroJornada, this.jornada);
      } else {
        this.jornada = this.listaJornadas.get(this.numeroJornada);
        this.resultado = this.jornada.listaPartidos;
      }
    }
    this.cambiarClasificacion();
  }
  jornadaNuevaConfiguracion() {
    let nombresEquipoA = this.jornada.nombresEquipoA;
    let nombresEquipoB = this.jornada.nombresEquipoB;
    this.jornada = new Jornada(this.servidorFecha, this.equiposFutbol);
    this.clasificacion = new Clasificacion(this.equiposFutbol);
    this.jornada.nombresEquipoA = nombresEquipoA;
    this.jornada.nombresEquipoB = nombresEquipoB;
    this.resultado = this.jornada.generarJornada(
      this.numeroJornada,
      this.limiteDeJornadas
    );
  }
  jornadaAnterior() {
    if (this.numeroJornada > 1) {
      this.numeroJornada--;
      this.resultado = this.listaJornadas.get(this.numeroJornada).listaPartidos;
    } else {
      this.resultado = this.listaJornadas.get(this.numeroJornada).listaPartidos;
    }
    this.cambiarClasificacion();
  }
  async mostrarCronologiaDatos(evento: Partido) {
    this.cronologia = new Cronologia(evento);
    let extrasDeNavegacion: NavigationExtras = {
      state: {
        cronologia: this.cronologia,
      },
    };
    this.route.navigate(["cronologia"], extrasDeNavegacion);
  }
  obtenerFechaConcreta() {
    return this.jornada.obtenerFecha(this.numeroJornada - 1).toString();
  }
  cambiarClasificacion() {
    this.clasificacion = new Clasificacion(this.equiposFutbol);
  }
}
