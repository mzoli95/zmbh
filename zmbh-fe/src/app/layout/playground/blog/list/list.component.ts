import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SubscriptionManager } from '../../../shared/subscriptionManager';
import { Observable } from 'rxjs';
import * as UpdatesSelectors from '../+state/update.selectors';
import { UpdatesState } from '../+state/update.reducer';

@Component({
  selector: 'app-mzbh-playground-update-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class UpdateListComponent extends SubscriptionManager implements OnInit {
  constructor(private store: Store) {
    super();
  }

  updatesArray$: Observable<UpdatesState[]> = this.store.select(
    UpdatesSelectors.selectUpdatesArray
  );

  ngOnInit(): void {
    // this.addSubscriptions(
    //   this.store
    //     .select(UpdatesSelectors.selectUpdatesArray)
    //     .subscribe((asd) => {
    //       console.log(asd);
    //     })
    // );
  }
}
