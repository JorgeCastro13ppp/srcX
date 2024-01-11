import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
actualizarProductos() {
  this.httpCliente.leerProductos().subscribe(result => this.frutas = result);
  console.log('Actualizados');
}
crearProducto(form:NgForm) {

  this.httpCliente.agregarFruta(this.fruta).subscribe(response => {
    console.log('Respuesta del servidor:', response);
    form.resetForm(); // Limpiar el formulario después de agregar la fruta
    this.actualizarProductos(); // Llamar a la actualización después de agregar
  });

  console.log('crear');
}
Modificar() {
}
Eliminar() {
}
  title = 'crudFruta';
  frutas!:Fruta[];
  fruta: Fruta = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: ''
  };
  constructor(private httpCliente:ServicioFService){
    this.actualizarProductos();
  }

}
