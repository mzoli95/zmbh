import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  of } from 'rxjs';
import {  catchError, mergeMap, map, tap } from 'rxjs/operators';
import * as ContactFormActions from './contact.actions';
import { ZmbhService } from '../../zmbh.service';
import { selectEmail } from './contact.selectors';
import { NotificationService } from '../../../shared/notification/notification.service';
import { NotificationType } from '../../../shared/mzbh.enums';

@Injectable()
export class ContactFormEffects {
    submitForm$ = createEffect(() =>
     this.actions$.pipe(
      ofType(ContactFormActions.submitEmail),
      concatLatestFrom(() => this.store.select(selectEmail)),
      mergeMap(([_, data]) => this.contactService.sendEmail({ email: data.email }).pipe(
        map(() => ContactFormActions.submitEmailSuccess()),
        catchError((error) => {
          return of(ContactFormActions.submitEmailError({ error }));
        })
      ))
    )
  );

  successNotification$ = createEffect(()=>
    this.actions$.pipe(
        ofType(ContactFormActions.submitEmailSuccess)
    ,
    tap(()=>{
        this.notificationService.openSnackBar('Ez egy success üzenet!', NotificationType.Success);
    }),
    map(()=> ContactFormActions.redirectToSuccess())
    )
  );

  errorNotification$ = createEffect(()=>
  this.actions$.pipe(
      ofType(ContactFormActions.submitEmailError)
  ,
  tap(()=>{
      this.notificationService.openSnackBar('Ez egy error üzenet!', NotificationType.Error);
  })
  )
);


  constructor(
    private actions$: Actions,
    private store: Store,
    private contactService: ZmbhService,
    private notificationService: NotificationService
  ) {}
}
