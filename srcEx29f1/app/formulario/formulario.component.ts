import { Component, OnInit } from '@angular/core';
import { ServicioParadorService } from '../servicio-parador.service';
import { Parador } from '../parador';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  paradores: Parador[] = [];
  paradorSeleccionado!:number;
  fechaSalida!:string;
  fechaEntrada!:string;
  nombreCliente:string='';

  constructor(private servicioParador: ServicioParadorService) {
    this.cargarParadores();
  }
  ngOnInit(): void {
    this.cargarParadores();
  }
  reservar(): void {

    if (this.formularioCompleto()) {
      const mensaje = `Reserva realizada:
      Nombre: ${this.nombreCliente}
      Parador Seleccionado: ${this.paradores.find(p => p.id === this.paradorSeleccionado)?.nombre}
      Fecha de Entrada: ${this.fechaEntrada}
      Fecha de Salida: ${this.fechaSalida}`;


    alert(mensaje);
    } else {
      console.warn('Completa todos los campos antes de reservar.');
    }
  }
  cargarParadores(): void {
    this.servicioParador.getParadores().subscribe(paradores => {
      this.paradores = paradores;
    });
  }

  formularioCompleto(): boolean {

    return (
      this.nombreCliente !== '' &&
      this.fechaEntrada !== null &&
      this.fechaSalida !== null

    );
  }

  resetearFormulario(): void {

    this.nombreCliente = '';
    this.fechaEntrada = '';
    this.fechaSalida = '';

    console.log('Formulario reseteado.');
  }
}
