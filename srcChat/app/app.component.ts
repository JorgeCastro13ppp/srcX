import { Component } from '@angular/core';
import { ServicioMensajesService } from './servicio-mensajes.service';
import { Tabla } from './tabla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  ListaMensajes!: Tabla;
  mensaje!: Tabla;
  seleccionMensaje: Tabla ={
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
  };
  ListaMensaje!: Tabla[];

  constructor(private servicio: ServicioMensajesService){}

  anadirMensaje(form : { value: Tabla}){
    this.servicio.anadirMensaje(form.value).subscribe((msg:Tabla)=>(this.mensaje = msg));
    this.leerMensajes();
    this.seleccionMensaje.mensaje="";
  }

  leerMensajes(){

  }
}
