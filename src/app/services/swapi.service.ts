import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private urlApi = 'https://swapi.dev/api/';

  constructor() { }

  // Método para obtener las películas
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

  // Método para obtener detalles de una película por ID
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
