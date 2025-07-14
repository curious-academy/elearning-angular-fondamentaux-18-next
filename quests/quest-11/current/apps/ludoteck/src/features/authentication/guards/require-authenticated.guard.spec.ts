import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { requireAuthenticatedGuard } from './require-authenticated.guard';

describe('requireAuthenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => requireAuthenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
