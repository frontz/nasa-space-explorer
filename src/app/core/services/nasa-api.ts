import { Injectable } from '@angular/core';
import {environment} from '../../environments';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Apod} from '../models/apod.model';
import {GalleryItem} from '../models/gallery-item';

@Injectable({
  providedIn: 'root'
})
export class NasaApi {

  private apiKey = environment.nasaApiKey;

  constructor(private http: HttpClient) {}

  getApod(): Observable<Apod> {
     let url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
     return this.http.get<Apod>(url);
  }

  getGallery(query: string): Observable<GalleryItem[]> {
  return this.http.get<any>(`https://images-api.nasa.gov/search?q=${query}`)
    .pipe(
      map(response =>
        response.collection.items.map((item: any) => ({
          title: item.data[0].title,
          description: item.data[0].description,
          dateCreated: item.data[0].date_created,
          imageUrl: item.links?.[0]?.href || ''
        }))
      )
    );
  }

}
