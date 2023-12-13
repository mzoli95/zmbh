import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZmbhModule } from './layout/zmbh-portfolio/zmbh.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotificationService } from './layout/shared/notification/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ZmbhModule,
    MatSnackBarModule,
  ],
  providers: [provideClientHydration(), NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
