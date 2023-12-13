import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [MatCardModule],
})
export class ZmbhModule {}
