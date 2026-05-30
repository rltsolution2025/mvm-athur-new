import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const adminUser = sessionStorage.getItem('adminUser');

  if (adminUser) {
    return true;
  }
  router.navigate(['/admin/login']);
  return false;
};
