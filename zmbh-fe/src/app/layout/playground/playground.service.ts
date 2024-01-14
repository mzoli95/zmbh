import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UpdatesFormState, UpdatesState } from './blog/+state/update.reducer';

@Injectable({
  providedIn: 'root',
})
export class PlaygroundService {
  constructor(private http: HttpClient) {}

  postUpdatesData(data:UpdatesFormState): Observable<any> {


// TODO change firebase to mysql and nodejs later
// Firebase without authorization:
// {
//   "rules": {
//     ".read": "true",
//     ".write": "true"
//   }
// }
console.log(data)
 return this.http.post('https://mzbh-api-default-rtdb.europe-west1.firebasedatabase.app/posts.json', data).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error(error.message || 'Valami hiba történt')
        );
      })
    );


// return this.http.get('https://mzbh-api-default-rtdb.europe-west1.firebasedatabase.app/posts.json').pipe(
//         catchError((error) => {
//           console.log(error);
//           return throwError(
//             () => new Error(error.message || 'Email küldési hiba')
//           );
//         })
//       );



  }
}
