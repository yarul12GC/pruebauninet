import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private urlApi = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}films/`);
  }

  public getDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}films/${id}/`);
  }
}
