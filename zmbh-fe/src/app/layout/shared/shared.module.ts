import { NgModule } from '@angular/core';
import { PostButtonDirective } from './directive/post-button.directive';
import { DropdownDirective } from './directive/dropdown-close.directive';
import { NotificationService } from './notification/notification.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PostButtonDirective, DropdownDirective],
  exports: [PostButtonDirective, DropdownDirective],
  imports: [MatIconModule],
  providers: [NotificationService],
})
export class SharedModule {}
