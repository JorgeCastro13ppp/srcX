import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temporizadorph';

  decimasT:number=0;
  segundosT:number=0;
  minutosT:number=0;

  actualizarS(event:any){
    this.segundosT= 0;
  }
  actualizarM(event:any){
    this.minutosT= 0;
  }
  actualizarD(event:any){
    this.decimasT= 0;
  }
}
