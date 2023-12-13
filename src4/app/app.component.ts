import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto4';
  numero:number= 0;

  sumarUno(num:number){
    this.numero++;
  }
  restarUno(num:number){
    this.numero--;
  }
}
