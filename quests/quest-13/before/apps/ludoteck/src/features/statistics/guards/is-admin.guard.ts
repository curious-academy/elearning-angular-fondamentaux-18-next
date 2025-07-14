import { CanActivateFn } from '@angular/router';
import { of } from 'rxjs';

export const isAdminGuard: CanActivateFn = (route, state) => {
  console.info('guard ?')
  return of(true);
};
