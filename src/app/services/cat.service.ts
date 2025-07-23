import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatBreed } from '../models/cat-breed.model'; // 👈 Importar el modelo
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.catApiKey;

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<CatBreed[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<CatBreed[]>(this.apiUrl, { headers });
  }
}