import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cronologia } from "../core/modelo/Cronologia";

@Component({
  selector: "app-cronologia",
  templateUrl: "./cronologia.page.html",
  styleUrls: ["./cronologia.page.scss"],
})
export class CronologiaPage implements OnInit {
  cronologia: Cronologia;
  constructor(public route: Router, private rutaActivada: ActivatedRoute) {
    this.rutaActivada.queryParams.subscribe(() => {
      this.cronologia = this.route.getCurrentNavigation().extras.state.cronologia;
    });
  }

  volver() {
    this.route.navigate([".."]);
  }
  ngOnInit() {}
}
