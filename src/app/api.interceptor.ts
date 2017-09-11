import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService){ }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenReq = req.clone({
      headers: req.headers.set('X-XSRF-TOKEN', this.cookieService.get('XSRF-TOKEN'))
    });
    return next.handle(tokenReq);
  }
}
