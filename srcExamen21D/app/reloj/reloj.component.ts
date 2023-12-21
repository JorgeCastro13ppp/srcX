import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent {
  timer: number = 0;
  private timerInterval: any;
  isTimerRunning: boolean = false;

  startTimer(): void {
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => {
        this.timer++;
      }, 1000);
    }
    this.isTimerRunning = true;
  }

  pauseTimer(): void {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.isTimerRunning = false;
  }

  resumeTimer(): void {
    if (!this.timerInterval && this.timer > 0) {
      this.timerInterval = setInterval(() => {
        this.timer++;
      }, 1000);
    }
    this.isTimerRunning = true;
  }
}
