import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // 192.168.1.1 - thirrje ne db

  private url = 'https://ghibliapi.vercel.app/films';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url);
  }

  getMovieById(id: string) {
    // 'https://ghibliapi.vercel.app/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c'
    return this.http.get(this.url + '/' + id);
  }

}
