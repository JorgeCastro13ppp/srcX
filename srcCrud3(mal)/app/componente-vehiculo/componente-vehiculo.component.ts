import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioDatosService } from '../servicio-datos.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-componente-vehiculo',
  templateUrl: './componente-vehiculo.component.html',
  styleUrls: ['./componente-vehiculo.component.css']
})
export class ComponenteVehiculoComponent {
  //Construir el objeto dataSource
dataSource= new MatTableDataSource<Vehiculo>;
displayedColumns: string[]=['make_and_model','color','transmission','doors','fuel_type','kilometrage'];
vehiculo!:Vehiculo[];
//Llamar al servicio y cargar en el array vehículo en lalista
constructor(private httpCliente:ServicioDatosService){
  //Llamar al método listarVehiculos del servicio
  this.httpCliente.listarVehiculos().subscribe(x=>this.dataSource.data=x)
}

applyFilter($event: KeyboardEvent) {

}

}
