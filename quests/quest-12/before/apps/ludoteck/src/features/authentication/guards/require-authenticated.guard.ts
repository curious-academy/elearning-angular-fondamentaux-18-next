import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateUserService } from '../services/authenticate-user.service';
import { inject } from '@angular/core';

export const requireAuthenticatedGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthenticateUserService)
  const router = inject(Router)

  if(! service.isAuthenticated) {
    router.navigate(['/login'])
    return false
  }

  return true
};
