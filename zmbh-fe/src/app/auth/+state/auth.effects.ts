import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from '../+state/auth.actions';
import * as AuthSelectors from '../+state/auth.selectors';

import { catchError, map, mergeMap, of } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthService } from "../auth.service";



@Injectable()
export class AuthEffects {

  submitRegisterForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      concatLatestFrom(() =>
      this.store.select(AuthSelectors.selectRegisterFormState)
    ),
      mergeMap(([_,data]) =>
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



  submitLoginForm$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.loginUser),
    concatLatestFrom(() =>
    this.store.select(AuthSelectors.selectLoginInitState)
  ),
    mergeMap(([_,data]) =>
      this.service.loginUser(data).pipe(
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



  constructor(
    private actions$: Actions,
    private store: Store,
    private service: AuthService
  ) {}
}
