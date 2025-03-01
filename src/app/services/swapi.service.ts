import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private urlApi = 'https://swapi.dev/api/';

  constructor() { }


//se obtienen todas la peliculas
  public async getMovies(): Promise<any> {
    try {
      const response = await fetch(`${this.urlApi}films/`);
      if (!response.ok) throw new Error('Error al obtener las películas');
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }


  //se obtienen los detalles de las peliculas
  public async getDetails(id: number): Promise<any> {
    try {
      const response = await fetch(`${this.urlApi}films/${id}/`);
      if (!response.ok) throw new Error('Error al obtener los detalles');
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
