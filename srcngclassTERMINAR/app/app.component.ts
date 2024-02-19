import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

cargarClasePrincipal(event: any) {
this.claseRecibida=event.ordenHijo ;
}

  title = 'ngclass';
  clase:string="";
  claseRecibida:string="";
}
