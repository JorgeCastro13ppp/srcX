import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicioHotelService } from '../servicio-hotel.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  constructor(private fb: FormBuilder, private hotelService:ServicioHotelService) {
    this.reservaForm = this.fb.group({
      nombre: ['', Validators.required],
      hotel: ['', Validators.required],
      fechaEntrada: ['', [Validators.required]],
      fechaSalida: ['', [Validators.required]]
    });
  }
ngOnInit(): void {
  this.hotelService.getHoteles().subscribe(hoteles => {
    this.hoteles = hoteles;
  });
}
reservaForm: any;
hoteles: any;
enviar() {
throw new Error('Method not implemented.');
}
reservar() {
throw new Error('Method not implemented.');
}

}
