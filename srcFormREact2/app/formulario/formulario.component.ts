import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

// nombre!: string;
// apellidos: any;
// fechaN: any;
// tarjetaC: any;
// pwd: any;

miformulario!:FormGroup;

constructor(private fb:FormBuilder){

}

  ngOnInit(): void {
    this.miformulario=this.fb.group({
      nombre:['',Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      apellidos:['',Validators.required,Validators.minLength(3),Validators.maxLength(15)],
      fechaN:['',Validators.required,],
      tarjetaC:['',[Validators.required,Validators.pattern('^[0-9]{25}$')]],
      pwd:['',[Validators.required,Validators.pattern('^(=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{10,}$')]],

    });
  }

  get nombre(){
    return this.miformulario.get('nombre');
  }
  get apellidos(){
    return this.miformulario.get('apellidos');
  }
  get fechaN(){
    return this.miformulario.get('fechaN');
  }
  get tarjetaC(){
    return this.miformulario.get('tarjetaC');
  }
  get pwd(){
    return this.miformulario.get('pwd');
  }

  EnviarDatos() {
  if(this.miformulario.valid){
    alert('Todo correcto');
  }
  }



}
