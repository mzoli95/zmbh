import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/zmbh-portfolio/home/home.component';
import { AboutComponent } from './layout/zmbh-portfolio/about/about.component';
import { ContactComponent } from './layout/zmbh-portfolio/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'about', component: AboutComponent },
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
