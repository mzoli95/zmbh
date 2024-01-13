import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from '../+state/auth.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthEffects {

  submitRegisterForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      mergeMap((data) =>
        this.service.registerUser(data).pipe(
          map((successMessage) => {
            console.log(successMessage);
            return AuthActions.registerUserSuccess();
          }),
          catchError((error) => {
            return of(AuthActions.registerUserError({ error: error }));
          })
        )
      )
    )
  );


//   successNotification$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ContactFormActions.submitEmailSuccess),
//       tap((success) => {
//         const successMessage = success.success?.message;
//         this.notificationService.openSnackBar(
//           successMessage,
//           NotificationType.Success
//         );
//       }),
//       map(() => MzbhPortfolioActions.redirectToHome()) // Nem kell subscribe, a createEffect(()) lekezeli, viszont visszatérés nélkül végtelen ciklusba fut
//     )
//   );

//   errorNotification$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ContactFormActions.submitEmailError),
//       tap((error) => {
//         console.log(error);
//         const errorMessage: string =
//           error.error?.error?.message ||
//           `Hiba történt: ${error.error?.message}`;
//         this.notificationService.openSnackBar(
//           errorMessage,
//           NotificationType.Error
//         );
//       }),
//       map(() => ContactFormActions.error()) // Nem kell subscribe, a createEffect(()) lekezeli, viszont visszatérés nélkül végtelen ciklusba fut
//     )
//   );

  constructor(
    private actions$: Actions,
    private store: Store,
    private service: AuthService
    // private notificationService: NotificationService
  ) {}
}
