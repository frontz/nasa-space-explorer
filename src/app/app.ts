import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Apod } from './features/apod/apod';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Apod, MatSidenavModule, MatMenu, MatMenuTrigger, MatButton, MatMenuItem, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nasa-space-explorer';
}
