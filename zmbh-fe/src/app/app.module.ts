import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZmbhModule } from './layout/zmbh-portfolio/zmbh.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { PlaygroundModule } from './layout/playground/playground.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoadingService } from './layout/shared/loading.service';
import { LoadingComponent } from './layout/shared/animations/loading/loading.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ZmbhModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    AuthModule,
    PlaygroundModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LoadingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
