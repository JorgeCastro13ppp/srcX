import { Component } from '@angular/core';
import { Tabla } from '../tabla';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
seleccionMensaje: Tabla ={
  id: 0,
  fecha: '',
  usuario: '',
  mensaje: '',
};

}
