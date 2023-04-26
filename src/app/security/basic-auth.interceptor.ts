import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSessionService } from './services/user-session.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private userSessionService:UserSessionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes("register") && this.userSessionService.isLoggedIn) {
      console.log(1);
      console.log("log"+ this.userSessionService.getBasicAuthToken());


      request = request.clone({
        setHeaders: {
          'Authorization': `Basic ${this.userSessionService.getBasicAuthToken()}`,
        }
      });
    }
    return next.handle(request);
  }
}
