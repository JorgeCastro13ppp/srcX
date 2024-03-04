import { Component } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component {
  horas: number=0;
  minutos: number=0;
  segundos: number=0;
  decimas: number=0;
  actualizarHoras(event: any) {
     this.horas=event.hhh;
  }
  actualizarMinutos(event: any) {
    this.minutos=event.zzz;
  }
  actualizarSegundos(event: any) {
    console.log("devolución segundos"+event.yyy)

    this.segundos=event.yyy;
  }
  actualizarDecimas(event: any) {
    this.decimas=event.xxx;
  }

}
