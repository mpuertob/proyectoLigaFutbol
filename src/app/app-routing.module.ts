import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { EquiposFutbolService } from "./core/modelo/equipos/equipos-futbol.service";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "cronologia",
    loadChildren: () =>
      import("./cronologia/cronologia.module").then(
        (m) => m.CronologiaPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [EquiposFutbolService],
})
export class AppRoutingModule {}
