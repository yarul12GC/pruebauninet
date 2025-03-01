import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-detalils',
  standalone: true,
  templateUrl: './detalils.component.html',
  styleUrls: ['./detalils.component.css'],
  providers: [SwapiService], 
  imports: [CommonModule, HttpClientModule],
})
export default class DetalilsComponent implements OnInit {
  pelicula: any; // Variable para almacenar la película
  isLoading: boolean = true; // Para controlar la carga de datos
  errorMessage: string = ''; // Mensaje de error, si ocurre

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    // Obtener el índice de la película desde la URL
    const index = this.route.snapshot.paramMap.get('id');
    
    if (index !== null) {
      // Llamar al servicio para obtener los detalles de la película
      this.swapiService.getDetails(Number(index)).subscribe(
        (data) => {
          // Almacenar los detalles de la película
          this.pelicula = data;
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = 'Error al obtener los detalles de la película.';
          this.isLoading = false;
        }
      );
    }
  }
}