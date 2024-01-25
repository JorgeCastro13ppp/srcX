import { Component } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

usuario:Usuario = new Usuario();


registro() {
throw new Error('Method not implemented.');
}
logear() {
let usObtenido:Usuario = new Usuario();
this.servicio.logear().subscribe
}

}
