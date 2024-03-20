import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SubscriptionManager } from '../../../shared/subscriptionManager';
import { Observable } from 'rxjs';
import * as UpdatesSelectors from '../+state/update.selectors';
import * as UpdatesActions from '../+state/update.actions';

import { UpdatesState } from '../+state/update.reducer';
import { LoadingService } from '../../../shared/loading.service';

@Component({
  selector: 'app-mzbh-playground-update-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class UpdateListComponent extends SubscriptionManager implements OnInit {
  constructor(private store: Store, private loadingService: LoadingService) {
    super();
  }

  updatesArray$: Observable<UpdatesState[]> = this.store.select(
    UpdatesSelectors.selectUpdatesArray
  );
  displayedColumns: string[] = [
    'id',
    'name',
    'content',
    'posted',
    'created',
    'actions',
  ];

  ngOnInit(): void {
    // this.addSubscriptions(
    //   this.store
    //     .select(UpdatesSelectors.selectUpdatesArray)
    //     .subscribe((asd) => {
    //       console.log(asd);
    //     })
    // );
  }

  deleteById(updateId: string): void {
    this.loadingService.loadingOn();

    this.store.dispatch(UpdatesActions.deleteByIdFromDb({ id: updateId }));
  }
}
