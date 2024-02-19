import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit{
ngOnInit(): void {
  this.segundos=0;
  this.minutos=0;
  this.decimas=0;
  this.horas=0;
  setInterval(()=>{
this.decimas++;
this.contadorDecimas.emit({xxx:this.decimas});
if(this.decimas==10){
  this.decimas=0;
  this.segundos++;
  this.contadorSegundos.emit({yyy:this.segundos});
}
 if(this.segundos==59){
  this.minutos++;
  this.segundos=0;
  this.contadorMinutos.emit({zzz:this.minutos})
}
 if(this.minutos==59){
  this.horas++;
  this.minutos=0;
  this.contadorHoras.emit({hhh:this.horas});
}
  },100);
}
horas: number=0;
minutos: number=0;
segundos: number=0;
@Input() decimas:number=0;
@Output() contadorDecimas= new EventEmitter();
@Output() contadorSegundos= new EventEmitter();
@Output() contadorMinutos= new EventEmitter();
@Output() contadorHoras= new EventEmitter();
}
