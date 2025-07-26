import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { ApodComponent } from './features/apod/apod.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [ApodComponent, RouterOutlet, MatSidenavModule, MatButton,  RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nasa-space-explorer';
}
