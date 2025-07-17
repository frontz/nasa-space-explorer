import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Apod} from './features/apod/apod';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Apod, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nasa-space-explorer';
}
