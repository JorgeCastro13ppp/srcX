import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabla } from './tabla';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ServicioMensajesService {


  constructor( private httpCliente: HttpClient, @Inject(LOCALE_ID) public locale:string) { }

  anadirMensaje(msg: Tabla) {
    console.log(msg.mensaje,msg.usuario);
    msg.fecha= formatDate(Date.now(),"HH:mm:ss / dd-MM-yy",this.locale);
    return this.httpCliente.post<Tabla>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',msg);
   }

  obtenerMensajes() :Observable<Tabla[]>{
    return this.httpCliente.get<Tabla[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php'
    );

  }
}
