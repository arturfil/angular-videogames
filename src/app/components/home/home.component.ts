import { Component, OnInit } from '@angular/core';
import { VideogamesService } from 'src/app/services/videogames.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videogames:any = [];
  image:any = [];

  constructor(
    private videogameService: VideogamesService
  ) { }

  ngOnInit() {
    this.getVideoGames();
  }

  getVideoGames() {
    this.videogameService.getVideogames().subscribe(response => {
      this.videogames = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  getVideoGameImage(id) {
    this.videogameService.getVideogameImage(id).subscribe(response => {
      this.image = response;
    })
  }

}
