import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit{
  decimas:number=0;
  segundos:number=0;
  minutos:number=0;
  @Input() inicio:number=0;
  @Output() contarDecimas = new EventEmitter();
  @Output() contarSegundos = new EventEmitter();
  @Output() contarMinutos = new EventEmitter();

  ngOnInit(): void {
    this.decimas=this.inicio;
    this.segundos=this.inicio;
    this.minutos=this.inicio;
    setInterval(()=>{
      this.contarDecimas.emit({dec:this.decimas});
      this.decimas++;
      if(this.decimas %10==0){
        this.segundos++;
        this.decimas=0;
        this.contarSegundos.emit({seg:this.segundos});
      }
      if(this.segundos ==59){
        this.minutos++;
        this.segundos=0;
        this.contarMinutos.emit({min:this.minutos});
      }
    },100);
  }

}
