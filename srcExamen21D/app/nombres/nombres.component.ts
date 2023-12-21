import { Component } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent {
  newName: string = '';
  nameAdded: boolean = false;

  addName(): void {
    if (this.newName) {
      // Si hay un nombre, se añade y se deshabilita el input
      this.nameAdded = true;
    }
  }
}
