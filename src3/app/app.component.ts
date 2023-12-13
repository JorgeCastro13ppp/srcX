import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular3';
  ciclo:string="DAW";
  nombreUsuario:string="";
  cambiarNombre(){
    this.ciclo="Desarrollo de Aplicaciones Web";
  }
  retornarNombre(){
    this.ciclo="DAW";
  }
  cargarNombreUsuario(nombre:string){
    this.nombreUsuario=nombre.toUpperCase();
  }
}
