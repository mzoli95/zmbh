import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | undefined;
  // TODO
  private refreshTokenUrl = 'api/refresh/token';
  // TODO
  private logoutUrl = 'api/logout';

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return this.token || localStorage.getItem('token') || '';
  }

  refreshToken(): Observable<any> {
    return this.http.get(this.refreshTokenUrl).pipe(
      map((response: any) => {
        this.setToken(response.jwt);
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.token = '';

    this.http.post(this.logoutUrl, {}).subscribe();
  }
}
