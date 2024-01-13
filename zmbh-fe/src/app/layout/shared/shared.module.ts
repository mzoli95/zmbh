import { NgModule } from '@angular/core';
import { PostButtonDirective } from './directive/post-button.directive';
import { DropdownDirective } from './directive/dropdown-close.directive';
import { NotificationService } from './notification/notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MakeitShortPipe } from './pipe/makeItShort.pipe';
import { FilterByPipe } from './pipe/filterBy.pipe';

@NgModule({
  declarations: [PostButtonDirective, DropdownDirective,MakeitShortPipe,FilterByPipe],
  exports: [PostButtonDirective, DropdownDirective,MakeitShortPipe,FilterByPipe],
  imports: [MatIconModule],
  providers: [NotificationService],
})
export class SharedModule {}
