import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioHotelService {

  private apiUrl = 'http://moralo.atwebpages.com/paradores/obtenerParadores.php';

  constructor(private http: HttpClient) {}

  getHoteles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
