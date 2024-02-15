import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

constructor(){
  this.numero1=Math.round(Math.random()*100);
    this.numero2=Math.round(Math.random()*100);
}

resultadoSuma:number=0;
resultadoResta:number=0;
resultadoProducto:number=0;
resultadoDivision:number=0;

dividir(event: any) {
  this.resultadoDivision=event.resultDivision;
}
restar(event: any) {
  this.resultadoResta=event.resultResta;
}
multiplicar(event: any) {
  this.resultadoProducto=event.resultProducto;
}
sumar(event: any) {
  this.resultadoSuma=event.resultSuma;
}

  numero1!:number;
  numero2!:number;
  generar(){
    window.location.reload();

  }
}
