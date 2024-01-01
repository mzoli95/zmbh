import { NgModule } from '@angular/core';
import { PostButtonDirective } from './directive/post-button.directive';
import { DropdownDirective } from './directive/dropdown-close.directive';
import { NotificationService } from './notification/notification.service';

@NgModule({
  declarations: [PostButtonDirective, DropdownDirective],
  exports: [PostButtonDirective, DropdownDirective],

  providers: [NotificationService],
})
export class SharedModule {}
