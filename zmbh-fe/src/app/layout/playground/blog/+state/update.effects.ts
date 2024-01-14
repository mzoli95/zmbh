import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UpdatesSelectors from '../+state/update.selectors';
import * as UpdatesActions from '../+state/update.actions';
import { Store } from '@ngrx/store';
import { NotificationService } from '../../../shared/notification/notification.service';
import { PlaygroundService } from '../../playground.service';

@Injectable()
export class UpdatesEffects {
  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdatesActions.postUpdatesForm),
      concatLatestFrom(() => this.store.select(UpdatesSelectors.selectUpdatesForm)),
      mergeMap(([_, data]) =>
        this.playgroundService.postUpdatesData(data).pipe(
          map((successMessage) => {
            console.log(successMessage);
            return UpdatesActions.postUpdatesFormSuccess()
            //     {
            //   success: successMessage,
            // });
          }),
          catchError((error) => {
            console.error('Hiba történt: ', error);
            return of(UpdatesActions.postUpdatesFormError({ error: error }));
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
    private playgroundService: PlaygroundService,
    private notificationService: NotificationService
  ) {}
}
