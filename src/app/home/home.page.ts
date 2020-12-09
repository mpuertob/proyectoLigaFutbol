import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Clasificacion } from "../core/modelo/Clasificacion";
import { Cronologia } from "../core/modelo/Cronologia";
import { EquiposFutbolService } from "../core/modelo/equipos/equipos-futbol.service";
import { FechaService } from "../core/modelo/Fecha/fecha.service";
import { Jornada } from "../core/modelo/Jornada";
import { Liga } from "../core/modelo/Liga";
import { Partido } from "../core/modelo/Partido";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  visible: boolean = true;
  cronologia: Cronologia;
  liga: Liga;
  constructor(
    private aler: AlertController,
    private route: Router,
    private servidorFecha: FechaService,
    private equiposFutbol: EquiposFutbolService
  ) {
    this.liga = new Liga(aler, route, servidorFecha, equiposFutbol);
  }

  jornadaSiguiente() {
    this.liga.jornadaSiguiente();
  }
  jornadaNuevaConfiguracion() {
    this.liga.jornadaNuevaConfiguracion();
  }
  jornadaAnterior() {
    this.liga.jornadaAnterior();
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
    return this.liga.obtenerFechaConcreta();
  }
  cambiarClasificacion() {
    this.liga.cambiarClasificacion();
  }
  isJornadaFinal() {
    this.liga.isJornadaFinal();
  }
}
