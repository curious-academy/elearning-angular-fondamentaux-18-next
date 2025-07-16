import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Friend } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GetListFriendsService {
  getAll(): Observable<Friend[]> {
    const array: Friend[] = [
      {
        id: 1,
        name: 'Paul'
      },
      {
        id: 2,
        name: 'Pauline'
      }
    ]

    return of(array).pipe(delay(1000))
  }
}
