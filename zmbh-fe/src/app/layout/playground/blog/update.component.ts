import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateFormComponent } from './form/form.component';
import { Store } from '@ngrx/store';
import * as UpdatesActions from './+state/update.actions';

@Component({
  selector: 'app-mzbh-playground-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class PGUpdateComponent implements OnInit {
  constructor(public dialog: MatDialog, public store: Store) {}

  ngOnInit(): void {
     this.store.dispatch(UpdatesActions.getUpdateArray());
  }

  newPost(): void {
    this.store.dispatch(UpdatesActions.isEdit({ isEdit: false }));
    const dialogRef = this.dialog.open(UpdateFormComponent, {
      width: '60%',
      height: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
