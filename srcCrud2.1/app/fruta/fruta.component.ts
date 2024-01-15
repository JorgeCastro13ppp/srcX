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

  constructor(private httpCliente:ServicioFService){
    this.httpCliente.leerProductos().subscribe(result => this.frutas = result);
  }

  crearProducto(form: { value: Fruta; }){
    this.httpCliente.createProduct(form.value).subscribe((producto:Fruta)=>{this.prod = producto});
  }
  actualizarProductos() {
    this.httpCliente.updateProduct(this.fruta).subscribe((producto:Fruta)=>{this.prod=producto});
  }
  // crearProducto(form: {value:Fruta;}) {
  //   console.log("Fruta a añadir: "+ form.value);
  //   this.httpCliente.agregarFruta(form.value).subscribe(response => {
  //     console.log('Respuesta del servidor:', response);
  //     this.actualizarProductos(); // Llamar a la actualización después de agregar
  //   });
  // }
  resetearFormulario(form: NgForm) {
    form.resetForm(); // Limpiar el formulario después de agregar la fruta
  }
  seleccionar(f:Fruta) {
    this.fruta=f;
  }
  eliminar(id:string) {
    this.httpCliente.deleteProduct(id).subscribe((producto:Fruta)=>{this.prod=producto});
  }

  title = 'crudFruta';
  frutas!:Fruta[];
  prod!:Fruta;
  fruta:Fruta = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: ''
  };


}
