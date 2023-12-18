import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZmbhService {

  constructor(private http: HttpClient) { }

  sendEmail(data: { email: string }): Observable<any> {
    return of(null) // this.http.post('/api/send-email', data);
  }
}