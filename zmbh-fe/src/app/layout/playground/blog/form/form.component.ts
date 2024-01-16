import { Component, Inject, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SubscriptionManager } from '../../../shared/subscriptionManager';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as UpdatesSelectors from '../+state/update.selectors';
import * as UpdatesActions from '../+state/update.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-mzbh-playground-update-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class UpdateFormComponent extends SubscriptionManager implements OnInit {
  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<UpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super();
  }

  isValid$: Observable<boolean> = this.store.select(
    UpdatesSelectors.selectIsValid
  );
  isEdit$: Observable<boolean> = this.store.select(
    UpdatesSelectors.selectIsEdit
  );

  ngOnInit() {
    //     this.header = this.isEdit$ ? 'Poszt módosítása' : 'Poszt létrehozása';
    // this.addSubscriptions(
    //     this.store.select(UpdatesSelectors.selectUpdatesForm).subscribe((data)=>{
    //       console.log(data);
    //       this.isEdit = data.isEdit;
    //       this.header =
    //     })
    // );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendUpdatesPost() {
    this.store.dispatch(UpdatesActions.postUpdatesForm());
    this.dialogRef.close();
  }
}
