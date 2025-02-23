import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.getGames(1, 20, 'Halo', '-rating', 'action')
      .subscribe((data: any) => {
        this.games = data.results;
      });
  }
}
