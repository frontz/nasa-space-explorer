import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {GalleryItem} from '../../core/models/gallery-item';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NasaApi} from '../../core/services/nasa-api';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-details-component',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    DatePipe,
    MatCardSubtitle
  ],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css'
})
export class DetailsComponent implements OnInit {

  item: GalleryItem | undefined;

  constructor(private route: ActivatedRoute, private nasaApi: NasaApi) {}

  ngOnInit() {
    const nasaId = this.route.snapshot.paramMap.get('id');
    if (nasaId) {
      this.nasaApi.getImageDetails(nasaId).subscribe(data => {
        this.item = data;
      });
    }
  }

}
