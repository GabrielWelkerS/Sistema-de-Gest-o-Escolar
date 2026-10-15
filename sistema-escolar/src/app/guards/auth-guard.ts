
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const logado = localStorage.getItem('logado');

  if (logado === 'true') {
    return true;
  }

  alert('Você precisa fazer login para acessar esta página!');
  return router.createUrlTree(['/login']);
};
