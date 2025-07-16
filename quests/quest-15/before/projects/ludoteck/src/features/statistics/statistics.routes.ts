import { Routes } from "@angular/router";
import { ListStatsComponent } from "./components/list-stats/list-stats.component";
import { OneStatComponent } from "./components/one-stat/one-stat.component";
import { isAdminGuard } from "./guards/is-admin.guard";

export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStatsComponent,
    canActivate: [isAdminGuard]
  },
  {
    path: 'one',
    component: OneStatComponent
  }
]
