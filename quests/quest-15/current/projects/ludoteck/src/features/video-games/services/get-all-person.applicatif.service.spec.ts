import { TestBed } from '@angular/core/testing';

import { GetAllPersonApplicatifService } from './get-all-person.applicatif.service';

describe('GetAllPersonApplicatifService', () => {
  let service: GetAllPersonApplicatifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPersonApplicatifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
