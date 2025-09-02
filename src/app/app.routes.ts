import { Routes } from '@angular/router';
import { Gallery } from './features/gallery/gallery';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';
import {DetailsComponent} from './features/details-component/details-component';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'gallery', component: Gallery},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/apod' },
];
