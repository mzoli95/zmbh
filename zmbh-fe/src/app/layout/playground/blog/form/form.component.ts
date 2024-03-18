import { Component, Inject, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SubscriptionManager } from '../../../shared/subscriptionManager';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as UpdatesSelectors from '../+state/update.selectors';
import * as UpdatesActions from '../+state/update.actions';

import { Observable, delay } from 'rxjs';
import { LoadingService } from '../../../shared/loading.service';

@Component({
  selector: 'app-mzbh-playground-update-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class UpdateFormComponent extends SubscriptionManager implements OnInit {
  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<UpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadingService: LoadingService

  ) {
    super();
  }

  isValid$: Observable<boolean> = this.store.select(
    UpdatesSelectors.selectIsValid
  );
  isEdit$: Observable<boolean> = this.store.select(
    UpdatesSelectors.selectIsEdit
  );
  isLoading$: Observable<boolean> = this.store.select(
    UpdatesSelectors.selectIsLoading
  );

  ngOnInit() {
    this.addSubscriptions(
      this.isLoading$.pipe(delay(3000)).subscribe((data) => {
        if (data) {
          this.dialogRef.close();
        }
      })
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendUpdatesPost() {
    this.loadingService.loadingOn();
    this.store.dispatch(UpdatesActions.postUpdatesForm());
  }
}
