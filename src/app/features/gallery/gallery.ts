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
import {MatPaginator, PageEvent} from '@angular/material/paginator';

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
    MatPaginator,
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  query: string = '';
  items: GalleryItem[] = [];
  pagedItems: GalleryItem[] = [];
  pageSize = 12;
  pageIndex = 0;

  constructor(private nasaApi: NasaApi) {}

  getImages() {
    this.nasaApi.getGallery(this.query).subscribe(data => {
      this.items = data;
      this.pageIndex = 0;
      this.updatePagedItems();
      console.log(this.items);
    })
  }

  updatePagedItems() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.pagedItems = this.items.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedItems();
  }

}
