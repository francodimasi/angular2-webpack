
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ProfileComponent } from './profile';


import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**',    component: HomeComponent }

];
