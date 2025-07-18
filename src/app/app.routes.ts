import { Routes } from '@angular/router';
import { Apod } from './features/apod/apod';
import { Gallery } from './features/gallery/gallery';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'apod', component: Apod},
  { path: 'gallery', component: Gallery},
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/apod' },
];
