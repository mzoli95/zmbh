import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/zmbh-portfolio/home/home.component';
import { AboutComponent } from './layout/zmbh-portfolio/about/about.component';
import { ContactComponent } from './layout/zmbh-portfolio/contact/contact.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'about', component: AboutComponent },
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
