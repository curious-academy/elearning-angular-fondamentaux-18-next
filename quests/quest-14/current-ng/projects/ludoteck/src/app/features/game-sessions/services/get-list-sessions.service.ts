import { Injectable } from '@angular/core';
import { GameSession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GetListSessionsService {
  getAll(): Promise<GameSession[]> {
    return new Promise<GameSession[]>(resolve => {
      setTimeout(() => {
        const array: GameSession[] = [
          {
            videoGame: {
              id: 1,
              label: 'The Legend of Zelda',
              year: 1986
            },
            beginDate: new Date('2023-01-01T00:00:00'),
            endDate: new Date('2023-01-02T00:00:00'),
            players: [{ name: 'Paul', id: 1}],
            status: 'completed'
          },
          {
            videoGame: {
              id: 2,
              label: 'The Witcher 3: Wild Hunt',
              year: 2015
            },
            beginDate: new Date('2025-01-03T00:00:00'),
            endDate: new Date('2025-01-04T00:00:00'),
            players: [{ name: 'Paul', id: 1}, { name: 'Pauline', id: 1}],
            status: 'in-progress'
          }
        ]

        resolve(array)
      }, 1000);
    })
  }
}
