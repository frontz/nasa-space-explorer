import { Component } from '@angular/core';
import {NasaApi} from '../../core/services/nasa-api';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {GalleryItem} from '../../core/models/gallery-item';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {DatePipe} from '@angular/common';
import {TruncatePipe} from '../../shared/truncate-pipe';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    DatePipe,
    TruncatePipe,
    RouterLink,
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  query: string = '';
  items: GalleryItem[] = [];

  constructor(private nasaApi: NasaApi) {}

  getImages() {
    this.nasaApi.getGallery(this.query).subscribe(data => {
      this.items = data;
      console.log(this.items);
    })
  }

}
