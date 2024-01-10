import { Component } from '@angular/core';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
Modificar() {
}
Eliminar() {
}
  title = 'crudFruta';
  frutas!:Fruta[];
  constructor(private httpCliente:ServicioFService){
    this.httpCliente.leerProductos().subscribe(result=>this.frutas=result);
  }

}
