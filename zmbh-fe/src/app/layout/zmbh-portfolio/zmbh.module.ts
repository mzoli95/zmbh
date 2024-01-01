import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { GoalComponent } from './about/goal/goal.component';
import { TeamComponent } from './about/team/team.component';
import { ZmbhRoutingModule } from './zmbh-routing.component';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactFormComponent } from './contact/form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZmbhService } from './zmbh.service';
import {
  CONTACT_FORM_FEATURE_KEY,
  contactFormInitialState,
  contactFormReducer,
} from './contact/+state/contact.reducer';
import { ContactFormEffects } from './contact/+state/contact.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ZmbhPortfolioEffects } from './+state/zmbh-portfolio.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AboutUsComponent,
    GoalComponent,
    TeamComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    MatCardModule,
    MatTabsModule,
    ZmbhRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SharedModule,
    EffectsModule.forFeature([ContactFormEffects]),
    EffectsModule.forFeature([ZmbhPortfolioEffects]),
    StoreModule.forFeature(CONTACT_FORM_FEATURE_KEY, contactFormReducer, {
      initialState: contactFormInitialState,
    }),
  ],
  providers: [ZmbhService],
})
export class ZmbhModule {}
