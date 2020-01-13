import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(
    private http: HttpClient
  ) { 
    
  }

  ApiUrl = "http://localhost:5000/api/videogame/";

  getVideogames() {
    return this.http.get(this.ApiUrl + "videogames");
  }

  getVideogameImage(id) {
    return this.http.get(this.ApiUrl + "photo/" + id);
  }
}
