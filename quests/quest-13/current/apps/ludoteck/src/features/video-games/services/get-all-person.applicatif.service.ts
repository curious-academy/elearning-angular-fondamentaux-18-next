import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from '../models/person';
import { GetAllPeopleService } from './get-all-people.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllPersonApplicatif {
  private readonly infra = inject(GetAllPeopleService)

  getAll(): Observable<Person[]> {
    return this.infra.getAll().pipe(
      map(result => result.results.map(item => ({ id: parseInt(item.uid), surname: item.name, age: 10 }))) // operator :appelé à chaque next dans l'Observable
    )
  }
}
