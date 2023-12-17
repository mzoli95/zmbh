import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ConnectComponent } from './about/connect/connect.component';
import { TeamComponent } from './about/team/team.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, AboutUsComponent, ConnectComponent,TeamComponent],
  imports: [MatCardModule,MatTabsModule],
})
export class ZmbhModule {}
