import { TestBed } from '@angular/core/testing';

import { GetAllPeopleService } from './get-all-people.service';

describe('GetAllPeopleService', () => {
  let service: GetAllPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
