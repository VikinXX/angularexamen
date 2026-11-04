import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from 'ngx-yet-another-toast-library';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      toastService.error(err.message)
      console.log(err.status);
      console.log(err.message);
      
      return throwError(() => err);
    })
  );
};
