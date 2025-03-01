import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';

interface MenuItem {
  link: string;
}

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [SwapiService], 
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export default class PeliculasComponent implements OnInit {
  data: any[] = [];
  isLoading = true; 

  constructor(private swapiService: SwapiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.swapiService.getMovies().subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);
        this.data = response.results;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
        this.isLoading = false;
      }
    );
  }
  menuItems: MenuItem =
    {
      link: '/detalils',
    }

}
