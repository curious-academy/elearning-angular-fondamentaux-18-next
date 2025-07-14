import { HttpEvent, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const loggerInterceptor: (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>> =
  (req, next) => {
    console.info('info', req)
    return next(req)
  }

  export const loggerWarnInterceptor: (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>> =
  (req, next) => {
    console.info('warn', req.url)
    return next(req)
  }

  export const authInterceptor: (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>> =
    (req, next) => {
      const token = localStorage.getItem('token'); // ou votre méthode de récupération du token

      if (token) {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next(authReq);
      }

      return next(req);
    }
