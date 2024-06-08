import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie;
  movieId!: string | null;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieService.getMovieById(this.movieId!)
    .subscribe((response: any) => {
      this.movie = response;
    });
  }
}
