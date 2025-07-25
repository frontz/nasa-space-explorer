import { Injectable } from '@angular/core';
import {environment} from '../../environments';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apod} from '../models/apod.model';

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

}
