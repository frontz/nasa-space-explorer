import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {Apod} from '../../core/models/apod.model';
import {NasaApi} from '../../core/services/nasa-api';

@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  apod!: Apod;

  constructor(private nasaApi: NasaApi) {}

  ngOnInit() {
    this.nasaApi.getApod().subscribe(data => {
      this.apod = data;
    });
  }

}
