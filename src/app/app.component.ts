import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieGridComponent, MovieDetailsComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
