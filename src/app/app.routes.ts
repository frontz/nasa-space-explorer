import { Routes } from '@angular/router';
import { ApodComponent } from './features/apod/apod.component';
import { Gallery } from './features/gallery/gallery';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'apod', component: ApodComponent},
  { path: 'gallery', component: Gallery},
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/apod' },
];
