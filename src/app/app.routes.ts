import { Routes } from '@angular/router';
import { NotFoundComponent } from "../components/NotFound/NotFound.component";
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path: '**', component: NotFoundComponent },
];
