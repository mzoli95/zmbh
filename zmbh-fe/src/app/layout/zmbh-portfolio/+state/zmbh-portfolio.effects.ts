import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as MzbhPortfolioActions from './zmbh-portfolio.actions';

@Injectable()
export class ZmbhPortfolioEffects {
  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MzbhPortfolioActions.redirectToHome),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
