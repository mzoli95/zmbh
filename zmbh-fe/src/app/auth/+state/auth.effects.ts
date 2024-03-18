import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from '../+state/auth.actions';
import * as AuthSelectors from '../+state/auth.selectors';

import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthService } from "../auth.service";



@Injectable()
export class AuthEffects {

  submitRegisterForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      // withLatestFrom(selector here) // Az előző verzióját tudjuk pl lekérni
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
            return of(AuthActions.registerUserError({ error: error })); // az of() observablera alaktítja, ha valamit nem lehetne
          })
        )
      )
    ), {dispatch: false} // Ne adjon ki többet, ezért kell
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
