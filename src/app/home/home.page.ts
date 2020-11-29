import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Cronologia } from "../core/modelo/Cronologia";
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
  jornada: Jornada = new Jornada();
  resultado = this.jornada.generarJornada(
    this.numeroJornada,
    this.limiteDeJornadas
  );
  listaJornadas: Map<number, Jornada> = new Map<number, Jornada>();

  constructor(private aler: AlertController, private route: Router) {}

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
  }
  jornadaNuevaConfiguracion() {
    let nombresEquipoA = this.jornada.nombresEquipoA;
    let nombresEquipoB = this.jornada.nombresEquipoB;
    this.jornada = new Jornada();
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
}
