import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UpdatesSelectors from '../+state/update.selectors';
import * as UpdatesActions from '../+state/update.actions';
import { Store } from '@ngrx/store';
import { NotificationService } from '../../../shared/notification/notification.service';
import { PlaygroundService } from '../../playground.service';
import { UpdatesFormState } from './update.reducer';

@Injectable()
export class UpdatesEffects {
  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdatesActions.postUpdatesForm),
      concatLatestFrom(() =>
        this.store.select(UpdatesSelectors.selectUpdatesForm)
      ),
      mergeMap(([_, data]) =>
        this.playgroundService.postUpdatesData(data).pipe(
          map((successMessage) => {
            console.log(successMessage);
            return UpdatesActions.postUpdatesFormSuccess();
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

  // TODO after success postUpdate, the state needs to be empty
  getUpdatesArray$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UpdatesActions.getUpdateArray,
        UpdatesActions.postUpdatesFormSuccess
      ),
      mergeMap((_) =>
        this.playgroundService.getUpdatesArray().pipe(
          map((data) => {
            const updatesFormArray = Object.entries(data).map(
              ([key, item]: any) => ({
                ...item.currentUpdatesForm,
                updateId: key,
              })
            );
            return UpdatesActions.loadUpdateArray({ data: updatesFormArray });
          }),

          catchError((error) => {
            console.error('Hiba történt: ', error);
            return of(UpdatesActions.postUpdatesFormError({ error: error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private playgroundService: PlaygroundService,
    private notificationService: NotificationService
  ) {}
}
