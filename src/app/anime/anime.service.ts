import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  //getAnimes() {
  //  throw new Error('Method not implemented.');
  //}
  private apiUrl: string = environment.baseUrl + 'animes';

  constructor(private http: HttpClient) { }
  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);

}}
