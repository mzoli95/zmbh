import { NgModule } from '@angular/core';
import { PostButtonDirective } from './directive/post-button.directive';
import { DropdownDirective } from './directive/dropdown-close.directive';
import { NotificationService } from './notification/notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MakeitShortPipe } from './pipe/makeItShort.pipe';
import { FilterByPipe } from './pipe/filterBy.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    PostButtonDirective,
    DropdownDirective,
    MakeitShortPipe,
    FilterByPipe,
  ],
  exports: [
    PostButtonDirective,
    DropdownDirective,
    MakeitShortPipe,
    FilterByPipe,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [NotificationService],
})
export class SharedModule {}
