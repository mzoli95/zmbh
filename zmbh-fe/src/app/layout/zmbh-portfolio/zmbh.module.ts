import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { GoalComponent } from './about/goal/goal.component';
import { TeamComponent } from './about/team/team.component';
import { ZmbhRoutingModule } from './zmbh-routing.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, AboutUsComponent, GoalComponent,TeamComponent],
  imports: [MatCardModule,MatTabsModule,ZmbhRoutingModule],
})
export class ZmbhModule {}
