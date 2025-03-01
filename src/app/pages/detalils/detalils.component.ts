import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-detalils',
  standalone: true,
  templateUrl: './detalils.component.html',
  styleUrls: ['./detalils.component.css'],
  providers: [SwapiService], 
  imports: [CommonModule],
})
export default class DetalilsComponent implements OnInit {
  pelicula: any = null; 
  isLoading: boolean = true; 
  errorMessage: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    
    if (index !== null) {
      this.obtenerDetalles(Number(index)); 
    } else {
      this.errorMessage = 'ID de película no encontrado.';
      this.isLoading = false;
    }
  }

  async obtenerDetalles(id: number): Promise<void> {
    this.isLoading = true;
    try {
      this.pelicula = await this.swapiService.getDetails(id);
      console.log('Detalles de la película:', this.pelicula);

      const { characters, planets, starships} = this.pelicula;
      
      const fetchData = async (urls: string[]) => 
        await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
      
      const [charactersData, planetsData, starshipsData,] = await Promise.all([
        fetchData(characters),
        fetchData(planets),
        fetchData(starships)
      ]);

      const sortByName = (arr: any[]) => arr.sort((a, b) => a.name.localeCompare(b.name));

      this.pelicula = {
        ...this.pelicula,
        characters: sortByName(charactersData),
        planets: sortByName(planetsData),
        starships: sortByName(starshipsData),
      
      };
    } catch (error) {
      this.errorMessage = 'Error al obtener los detalles de la película.';
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}
