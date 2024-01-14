import { Component, Inject, OnInit, Type } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UpdatesFormActions from '../+state/update.actions';
import { SubscriptionManager } from '../../../shared/subscriptionManager';
import { CommentsState, UpdatesState } from '../+state/update.reducer';
import { MyErrorStateMatcher } from '../../../shared/errorStateMatcher';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

type UpdatesForm = Record<keyof UpdatesState, FormControl>;
type CommentForm = Record<keyof CommentsState, FormControl>;

@Component({
  selector: 'app-mzbh-playground-update-create-form',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent extends SubscriptionManager implements OnInit {


  constructor(
    private store: Store,
  ) {
    super();

  }


  matcher = new MyErrorStateMatcher();

  //Todo implements into comments as an array, now it's not important, we just wanna show the updates without comments
  commentControls: CommentForm = {
    commentText:new FormControl(null),
    date: new FormControl(null),
    name: new FormControl(null)
  }
  updatesFormControls: UpdatesForm = {
    updateId: new FormControl(null),
    comments: new FormControl(null),
    date: new FormControl(null),
    postedBy: new FormControl(null),
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    content: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  };
  form = new FormGroup(this.updatesFormControls);

  ngOnInit() {
    this.addSubscriptions(
        this.form.valueChanges.subscribe((values) => {
          this.store.dispatch(UpdatesFormActions.updateUpdatesFormField({ value: values, isValidForm: this.form.valid }));
        })
    );
  }


}
