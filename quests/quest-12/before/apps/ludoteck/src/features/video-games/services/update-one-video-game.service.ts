import { Injectable } from '@angular/core';
import { VideoGame } from '../models/video-game';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateOneVideoGameService {
  updateOne(item: VideoGame): Observable<VideoGame> {
    return of(item).pipe(delay(500))
  }
}
