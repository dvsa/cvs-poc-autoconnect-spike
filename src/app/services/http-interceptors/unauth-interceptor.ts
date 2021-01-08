import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';
import { tap } from 'rxjs/operators';

@Injectable()
export class UnauthInterceptor implements HttpInterceptor {
  constructor(private navController: NavController) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            // this.navController.navigateRoot('/login');
            this.navController.setRoot('/login');
          }
        }
      )
    );
  }
}
