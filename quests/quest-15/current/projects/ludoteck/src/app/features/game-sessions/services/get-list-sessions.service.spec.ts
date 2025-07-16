import { TestBed } from '@angular/core/testing';

import { GetListSessionsService } from './get-list-sessions.service';

describe('GetListSessionsService', () => {
  let service: GetListSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
