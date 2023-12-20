import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map, tap, take } from 'rxjs/operators';
import * as ContactFormActions from './contact.actions';
import { ZmbhService } from '../../zmbh.service';
import { selectEmail } from './contact.selectors';
import { NotificationService } from '../../../shared/notification/notification.service';
import { NotificationType } from '../../../shared/mzbh.enums';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
      take(1),
      tap((success) => {
        const successMessage = success.success?.message;
        console.log(success.success);
        this.notificationService.openSnackBar(
          successMessage,
          NotificationType.Success
        );
      }),
      map(() => ContactFormActions.redirectToSuccess())
    )
  );

  //TODO majd kiszervezni szintén
  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ContactFormActions.redirectToSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
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
    private router: Router,
    private contactService: ZmbhService,
    private notificationService: NotificationService
  ) {}
}
