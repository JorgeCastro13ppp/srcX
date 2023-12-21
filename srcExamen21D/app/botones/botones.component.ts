import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  changeColor(color: string): void {
    const button1 = document.getElementById('buttonRef1') as HTMLButtonElement;
    const button2 = document.getElementById('buttonRef2') as HTMLButtonElement;
    const button3 = document.getElementById('buttonRef3') as HTMLButtonElement;
    const button4 = document.getElementById('buttonRef4') as HTMLButtonElement;

    if (button1 && button2 && button3 && button4) {
      button1.style.backgroundColor = color;
      button2.style.backgroundColor = color;
      button3.style.backgroundColor = color;
      button4.style.backgroundColor = color;
    }
  }
}
