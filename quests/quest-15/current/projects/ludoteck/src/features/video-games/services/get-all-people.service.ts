import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PeopleApiResult } from './models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root' // au début de l'application, donc singleton
})
export class GetAllPeopleService {
  private readonly http = inject(HttpClient)

  getAll(): Observable<PeopleApiResult> {
    // return new Observable(subscriber => {
    //   setTimeout(() => {
    //     const result: PeopleApiResult = {
    //       results: [{
    //         name: 'Test', uid: '1'
    //       },
    //       {
    //         name: 'Test 2', uid: '2'
    //       }]
    //     }
    //     subscriber.next(result)
    //   }, 1500);

    //   setTimeout(() => {
    //     const result: PeopleApiResult = {
    //       results: [{
    //         name: 'Test 10', uid: '10'
    //       },
    //       {
    //         name: 'Test 20', uid: '2'
    //       }]
    //     }
    //     subscriber.next(result)
    //   }, 2500);
    // })

    return this.http.get<PeopleApiResult>(environment.apis.person.url).pipe(
      tap(item => console.info(item))
    )
  }
}
