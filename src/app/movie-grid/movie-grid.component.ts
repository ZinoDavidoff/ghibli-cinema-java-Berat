import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  director: string;
  release_date: string;
  original_title: string;
  rt_score: string;
}

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [NgFor, RouterLink, NavbarComponent],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.css'
})
export class MovieGridComponent implements OnInit {

  title: string = '';
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.title = 'Ghibli-cinema';
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((response: any) => {
      this.movies = response;
      this.filterMovies('');
    });
  }

  filterMovies(searchTerm: string) {
   this.filteredMovies = this.movies.filter((movie) => {
    // i kthejme te dyja edhe titullin edhe searchTerm ne shkronja te vogla
    // ne menyre qe te filtrojme edhe kur useri te vendose CASTLE ose castle
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
   });
  }
}
