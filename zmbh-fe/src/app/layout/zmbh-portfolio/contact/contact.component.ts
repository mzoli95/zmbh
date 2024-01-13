import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/notification/notification.service';

import { NotificationType } from '../../shared/mzbh.enums';
import {  Subscription, interval } from 'rxjs';
import { SubscriptionManager } from '../../shared/subscriptionManager';

@Component({
  selector: 'app-mzbh-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent extends SubscriptionManager implements OnInit {

  constructor() {
    super();
  }
  notificationTypeEnum = NotificationType;

  ngOnInit(){
    // TODO remove it later, just here for test the subscription manager
    this.addSubscriptions(
      interval(1000).subscribe((data)=>{
        console.log(data)
      })
    )
  }

}
