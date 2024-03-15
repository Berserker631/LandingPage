import { Routes } from '@angular/router';
import { NotFoundComponent } from "../components/NotFound/NotFound.component";
import { HomeComponent } from '../components/home/home.component';
import { RivalsComponent } from '../components/content_over_events/rivals/rivals.component';
import { VoteQRComponent } from '../components/content_over_events/VoteQR/VoteQR.component';
import { ParticipantsListComponent } from '../components/content_over_events/participants-list/participants-list.component';
import { RegisterComponent } from '../components/content_over_events/register/register.component';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path: 'rivals', component: RivalsComponent },
  {path: 'vote', component: VoteQRComponent },
  {path: 'registration', component: RegisterComponent },
  {path: 'participants', component: ParticipantsListComponent },
  {path: '**', component: NotFoundComponent },
];
