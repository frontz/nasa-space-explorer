import {Component, OnInit} from '@angular/core';
import {NasaApi} from '../../core/services/nasa-api';
import { Apod } from '../../core/models/apod.model';

@Component({
  selector: 'app-apod',
  imports: [],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css'
})
export class ApodComponent implements OnInit {

  apod!: Apod;

  constructor(private nasaApi: NasaApi) {}

  ngOnInit() {
    this.nasaApi.getApod().subscribe(data => {
      this.apod = data;
    });
  }

}
