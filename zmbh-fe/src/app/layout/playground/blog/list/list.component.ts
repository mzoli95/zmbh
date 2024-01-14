import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SubscriptionManager } from '../../../shared/subscriptionManager';


@Component({
  selector: 'app-mzbh-playground-update-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class UpdateListComponent extends SubscriptionManager implements OnInit {
  constructor(private store: Store) {
    super();
  }



  ngOnInit() {
    this.addSubscriptions(
        // this.form.valueChanges.subscribe((values) => {
        //   this.store.dispatch(BlogFormActions.updateBlogFormField({ value: values }));
        // })
    );
  }

 
}
