import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';

interface MenuItem {
  link: string;
}

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [SwapiService], 
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export default class PeliculasComponent implements OnInit {
  data: any[] = [];
  isLoading = true; 

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  async obtenerPeliculas(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.swapiService.getMovies();
      console.log('Respuesta de la API:', response);
      this.data = response.results || [];
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    } finally {
      this.isLoading = false;
    }
  }

  menuItems: MenuItem = {
    link: '/details',
  };
}
