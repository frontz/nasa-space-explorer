import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import {SpaceBackgroundComponent} from './shared/background-component/background-component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    RouterOutlet,
    MatButton,
    RouterLink,
    SpaceBackgroundComponent,
    MatDrawerContent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'nasa-space-explorer';
}
