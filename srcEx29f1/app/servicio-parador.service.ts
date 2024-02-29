import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parador } from './parador';
@Injectable({
  providedIn: 'root'
})
export class ServicioParadorService {

  private apiUrl = 'http://moralo.atwebpages.com/paradores/obtenerParadores.php';

  constructor(private http: HttpClient) {}

  getParadores(): Observable<Parador[]> {
    return this.http.get<Parador[]>(this.apiUrl);
  }
}
