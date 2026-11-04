import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.context.get(SKIP_TOKEN)){
    return next(req);
  }

  const token = sessionStorage.getItem('token');

  if(token) {
    const modReq = req.clone({
      setHeaders: {
        Authorization: "bearer " + token,
        withCredentials: "true"
      }
    })
    return next(modReq);
  }
  
  return next(req);
};
