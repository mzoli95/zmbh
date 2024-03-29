import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
  HttpParams,
} from '@angular/common/http';
import {
  Observable,
  throwError,
  BehaviorSubject,
  switchMap,
  catchError,
  filter,
  take,
  tap,
  exhaustMap,
} from 'rxjs';
import { AuthService, User } from './auth.service';
import { NotificationService } from '../layout/shared/notification/notification.service';
import { NotificationType } from '../layout/shared/mzbh.enums';
import { AuthFormState } from './+state/auth.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    public authService: AuthService,
    private notificationService: NotificationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user: User | null) => {
        console.log(user);
        if (user?.token !== null && user?.token) {
          const modifiedReq = req.clone({
            params: new HttpParams().set('auth', user.token),
          });
          return next.handle(modifiedReq);
        } else {
          return next.handle(req);
        }
      })
    );
    // return next.handle(req).pipe(
    //   tap((event) => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Response) {
    //       console.log('Reponse arrived');
    //     }
    //   })
    // );

    //   if (this.authService.getToken()) {
    //     const getToken = this.authService.getToken();

    //     if (getToken !== '') {
    //       req = this.addToken(req, getToken);
    //     }
    //   }

    //   return next.handle(req).pipe(
    //     catchError((error) => {
    //       if (error instanceof HttpErrorResponse && error.status === 401) {
    //         return this.handle401Error(req, next);
    //       } else if (error instanceof HttpErrorResponse && error.status === 0) {
    //         this.notificationService.openSnackBar(
    //           'Name: ' + error.statusText + ' - Code: ' + error.status,
    //           NotificationType.Error
    //         );
    //         return throwError(() => error);
    //       } else {
    //         return throwError(() => error);
    //       }
    //     })
    //   );
    // }

    // private addToken(request: HttpRequest<any>, token: string) {
    //   return request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    // }

    // private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    //   if (!this.isRefreshing) {
    //     this.isRefreshing = true;
    //     this.refreshTokenSubject.next(null);

    //     return this.authService.refreshToken().pipe(
    //       switchMap((token: any) => {
    //         this.isRefreshing = false;
    //         this.refreshTokenSubject.next(token.jwt);
    //         return next.handle(this.addToken(request, token.jwt));
    //       }),
    //       catchError((err) => {
    //         this.isRefreshing = false;
    //         this.authService.logout();
    //         return throwError(() => err);
    //       })
    //     );
    //   } else {
    //     return this.refreshTokenSubject.pipe(
    //       filter((token) => token != null),
    //       take(1),
    //       switchMap((jwt) => {
    //         return next.handle(this.addToken(request, jwt));
    //       })
    //     );
    //   }
  }
}
