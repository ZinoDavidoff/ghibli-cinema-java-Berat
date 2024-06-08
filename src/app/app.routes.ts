import { Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieGridComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent } // gjithmone te jete i fundit
];
