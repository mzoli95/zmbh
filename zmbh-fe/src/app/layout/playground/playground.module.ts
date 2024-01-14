import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UPDATES_FEATURE_KEY, updatesFormInitialState, updatesFormReducer } from './blog/+state/update.reducer';
import { PGUpdateComponent } from './blog/update.component';
import { UpdateListComponent } from './blog/list/list.component';
import { UpdateFormComponent } from './blog/form/form.component';
import { CreateComponent } from './blog/create/create.component';
import { CommonModule } from '@angular/common';
import { PlaygroundService } from './playground.service';
import { UpdatesEffects } from './blog/+state/update.effects';


@NgModule({
  declarations: [PGUpdateComponent,UpdateListComponent, UpdateFormComponent,CreateComponent],
  exports: [PGUpdateComponent,UpdateListComponent,UpdateFormComponent, CreateComponent],
  imports: [MatCardModule, SharedModule,CommonModule,
    EffectsModule.forFeature([UpdatesEffects]),

    StoreModule.forFeature(UPDATES_FEATURE_KEY, updatesFormReducer, {
        initialState: updatesFormInitialState,
      }),
],
  providers: [PlaygroundService],
})
export class PlaygroundModule {}
