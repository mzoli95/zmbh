import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    console.log(data);
    return this.http.post(`${environment.apiUrl}/api/contact-us`, data);
  }
}
