import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, mergeMap, map, tap, take } from 'rxjs/operators';
import * as ContactFormActions from './contact.actions';
import * as MzbhPortfolioActions from '../../+state/zmbh-portfolio.actions';
import { ZmbhService } from '../../zmbh.service';
import { selectEmail } from './contact.selectors';
import { NotificationService } from '../../../shared/notification/notification.service';
import { NotificationType } from '../../../shared/mzbh.enums';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class ContactFormEffects {
  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactFormActions.submitEmail),
      concatLatestFrom(() => this.store.select(selectEmail)),
      mergeMap(([_, data]) =>
        this.contactService.sendEmail(data).pipe(
          map((successMessage) => {
            console.log(successMessage);
            return ContactFormActions.submitEmailSuccess({
              success: successMessage,
            });
          }),
          catchError((errorMessage) => {
            return of(
              ContactFormActions.submitEmailError({ error: errorMessage })
            );
          })
        )
      )
    )
  );

  successNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactFormActions.submitEmailSuccess),
      tap((success) => {
        const successMessage = success.success?.message;
        this.notificationService.openSnackBar(
          successMessage,
          NotificationType.Success
        );
      }),
      map(() => MzbhPortfolioActions.redirectToHome())
    )
  );

  errorNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactFormActions.submitEmailError),
      tap((error) => {
        const errorMessage: string =
          error.error?.error?.message ||
          `Hiba történt: ${error.error?.message}`;
        this.notificationService.openSnackBar(
          errorMessage,
          NotificationType.Error
        );
      })
    )
  ).subscribe();

  constructor(
    private actions$: Actions,
    private store: Store,
    private contactService: ZmbhService,
    private notificationService: NotificationService
  ) {}
}
