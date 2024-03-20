import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, finalize, map, mergeMap, of } from 'rxjs';
import * as UpdatesSelectors from '../+state/update.selectors';
import * as UpdatesActions from '../+state/update.actions';
import { Store } from '@ngrx/store';
import { NotificationService } from '../../../shared/notification/notification.service';
import { PlaygroundService } from '../../playground.service';
import { LoadingService } from '../../../shared/loading.service';

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
          delay(3000),
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

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdatesActions.deleteByIdFromDb),

      mergeMap((data) =>
        this.playgroundService.deletePost(data.id).pipe(
          map(() => {
            return UpdatesActions.deleteByIdFromDbSuccess();
          }),
          catchError((error) => {
            console.error('Hiba történt: ', error);
            return of(UpdatesActions.deleteByIdFromDbError({ error: error }));
          })
        )
      )
    )
  );

  // TODO Do a table insted of mat cards
  getUpdatesArray$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UpdatesActions.getUpdateArray,
        UpdatesActions.postUpdatesFormSuccess,
        UpdatesActions.deleteByIdFromDbSuccess
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
          }),finalize(()=>{
            this.loadingService.loadingOff();
          
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
    private notificationService: NotificationService,
    private loadingService : LoadingService
  ) {}
}
