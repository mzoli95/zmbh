import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from 'express';
interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

// TODO refactor later
export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}
  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | undefined;
  // TODO
  private refreshTokenUrl = 'api/refresh/token';
  // TODO
  private logoutUrl = 'api/logout';

  constructor(private http: HttpClient, private router: Router) {}

  user = new Subject<User>();

  logout(): void {
    localStorage.removeItem('token');
    this.token = '';

    this.http.post(this.logoutUrl, {}).subscribe();
  }

  registerUser(data: any): Observable<any> {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1YByXCAvsLXJXqZ0TQGbefVkLiKcLpw4`,
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(
            () => new Error(error.message || 'Email küldési hiba')
          );
        }),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
    // return this.http.post(`${environment.apiUrl}/api/register`, data).pipe(
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  loginUser(data: any): Observable<any> {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1YByXCAvsLXJXqZ0TQGbefVkLiKcLpw4`,
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(
            () => new Error(error.message || 'Email küldési hiba')
          );
        }),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
}
