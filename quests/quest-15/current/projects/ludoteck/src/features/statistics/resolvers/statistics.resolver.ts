import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { StatList } from "../models";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

export const statsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatList | RedirectCommand> => {
    const fakeData: StatList = [ {  year: 2023, nbSuccess: 100, nbFailures: 50 }, { year: 2022, nbSuccess: 80, nbFailures: 60}]
    // TODO: 14/07/2025 replace with real data from the backend (call service and http client)
    return of(fakeData)
  }

// @Injectable({
//   providedIn: 'root'
// })
// export class StatisticsResolver implements Resolve<StatList> {

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatList | RedirectCommand> {
//     const fakeData: StatList = [ {  year: 2023, nbSuccess: 100, nbFailures: 50 }, { year: 2022, nbSuccess: 80, nbFailures: 60}]
//     // TODO: 14/07/2025 replace with real data from the backend (call service and http client)
//     return of(fakeData)
//   }

// }
