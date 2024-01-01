import { NgModule } from '@angular/core';
import { PostButtonDirective } from './directive/post-button.directive';

@NgModule({
  declarations: [PostButtonDirective],
  exports: [PostButtonDirective]
})
export class SharedModule { }