import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularP8';

  disminuir(){
    this.ancho-=10;
  }
  aumentar(){
    this.ancho+=10;
  }
  siguiente(){
    this.indiceImagenSeleccionada++
    if(this.indiceImagenSeleccionada==this.imagenes.length){ //Circular, quitar para no hacer circular
      this.indiceImagenSeleccionada=0;
    }
    this.imagen=this.imagenes[this.indiceImagenSeleccionada];
  }
  anterior(){
    this.indiceImagenSeleccionada--;
    if(this.indiceImagenSeleccionada==this.imagenes.length){
      this.indiceImagenSeleccionada=this.imagenes.length-1;
    }
    this.imagen=this.imagenes[this.indiceImagenSeleccionada];
  }

  imagenes = [ 'https://randomuser.me/api/portraits/women/40.jpg', 'https://randomuser.me/api/portraits/women/41.jpg', 'https://randomuser.me/api/portraits/women/42.jpg', 'https://randomuser.me/api/portraits/women/43.jpg', 'https://randomuser.me/api/portraits/women/44.jpg', 'https://randomuser.me/api/portraits/men/40.jpg', 'https://randomuser.me/api/portraits/men/41.jpg', 'https://randomuser.me/api/portraits/men/42.jpg', 'https://randomuser.me/api/portraits/men/43.jpg', 'https://randomuser.me/api/portraits/men/44.jpg'];
  indiceImagenSeleccionada:number=0;
  imagen:string="";
  ancho:number=0;
  auto:boolean=false;
  constructor(){
    this.indiceImagenSeleccionada=0;
    this.ancho=300;
    this.auto=false;
    this.imagen=this.imagenes[this.indiceImagenSeleccionada];
  }
}
