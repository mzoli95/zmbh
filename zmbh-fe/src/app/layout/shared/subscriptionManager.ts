import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export abstract class SubscriptionManager implements OnDestroy {
  private subscriptions = new Subscription();

  protected addSubscriptions(...subs: Subscription[]) {
    subs.forEach(sub => this.subscriptions.add(sub));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
