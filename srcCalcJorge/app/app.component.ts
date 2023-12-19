import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  visor:string="";
 operador:number=0;
 guardar:number=0;
 arrastra:boolean=false;
   operar(valor:string){
     if (Number(valor)>=0){
          this.visor+=valor;
     }else
     {
       switch(valor){
        case "-1":{
          // Dividir
          if (this.arrastra) {
            this.guardar /= Number(this.visor);
            this.visor = String(this.guardar);
          } else {
            this.guardar = Number(this.visor);
            this.visor = "";
          }
          this.arrastra=false;
          this.operador = -1;
          break;
        }
        case "-2":{
          // Multiplicar
          if (this.arrastra) {
            this.guardar *= Number(this.visor);
            this.visor = String(this.guardar);
          } else {
            this.guardar = Number(this.visor);
            this.visor = "";
          }
          this.arrastra=false;
          this.operador = -2;
          break;
        }
        case "-3":{
          // Sumar
            if (this.arrastra) {
              this.guardar += Number(this.visor);
              this.visor = String(this.guardar);
            } else {
              this.guardar = Number(this.visor);
              this.visor = "";
            }
            this.arrastra = false; // Después de la suma, permitir ingresar un nuevo número
            this.operador = -3;
            break;
        }
        case "-4":{
          // Decimal

          // Verificar si ya hay un punto en el número
          if (this.visor.indexOf('.') === -1) {
            // Si no hay un punto, agrega el punto al final del número en el visor
            this.visor += '.';
          }
          break;
        }

        case "-5":{
          console.log("entro en igual");
          console.log("operador "+this.operador);

          console.log(this.visor);

          if(this.operador==-1){
            this.visor=String(this.guardar/Number(this.visor));
          }
          if(this.operador==-2){
            this.visor=String(Number(this.visor)*this.guardar);
            console.log("operacion "+this.visor);
          }
          if (this.operador==-3){
            this.visor=String(Number(this.visor)+this.guardar);
            console.log("operacion: "+this.visor);
          }
          if(this.operador==-6){
            this.visor=String(this.guardar-Number(this.visor));
          }
          break;
        }
        case "-6":{
          // Restar
          if (this.arrastra) {
            this.guardar -= Number(this.visor);
            this.visor = String(this.guardar);
          } else {
            this.guardar = Number(this.visor);
            this.visor = "";

          }
          this.arrastra = false;
          this.operador = -6;
          break;
        }
        case "-7":{
         // Resetear total
          this.visor = "";
          this.guardar = 0;
          this.arrastra = false;
          this.operador = 0;
          break;
        }
        case "-8":{
          // Limpiar visor
          this.visor="";
          break;
        }

       }

     }
   }
}
