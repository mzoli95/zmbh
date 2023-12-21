import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ZmbhService {
  constructor(private http: HttpClient) {}

  sendEmail(data: {
    email: string;
    name: string;
    message: string;
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/contact-us`, data).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error(error.message || 'Email küldési hiba')
        );
      })
    );
  }
}
