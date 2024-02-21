import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit{
enviarDatos() {
  alert("Todo ok");
}
  formulario1!:FormGroup;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.formulario1=this.fb.group({
      // se valida con el formControlName
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)]],
      firstName:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern('/(?=.*[a-z])(?=.*\d)/i')]]
    });
  }
}
