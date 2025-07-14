import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VideoGame } from '../models/video-game';

@Injectable({
  providedIn: 'root'
})
export class GetOneVideoGameService {
  getOne(id: number): Observable<VideoGame> {
    return of({ id: id, label: 'Test Game', year: 2023 }).pipe(delay(500));
  }
}
