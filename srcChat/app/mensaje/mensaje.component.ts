import { Component } from '@angular/core';
import { Tabla } from '../tabla';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
seleccionMensaje: Tabla ={
  id: 0,
  fecha: '',
  usuario: '',
  mensaje: '',
};

}
