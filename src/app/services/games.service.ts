import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = 'https://api.rawg.io/api/games';
  private apiKey = '6b7629325f7944ab90456adf6b8bfcef'; 

  constructor(private http: HttpClient) {}

  
  getGames(
    page: number = 1, 
    pageSize: number = 10, 
    search: string = '', 
    ordering: string = '-released', 
    genres: string = ''
  ) {
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}&page=${page}&page_size=${pageSize}&search=${search}&ordering=${ordering}&genres=${genres}`);
  }
}
