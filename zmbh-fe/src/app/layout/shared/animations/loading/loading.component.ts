import { Component, OnInit } from "@angular/core";
import { LoadingService } from "../../loading.service";
import { SubscriptionManager } from "../../subscriptionManager";


@Component({
  selector: 'app-mzbh-animations-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent extends SubscriptionManager implements OnInit {


  constructor(
    public loadingService : LoadingService

  ) {
    super();

  }



  ngOnInit() {
    this.addSubscriptions(

    );
  }



}
