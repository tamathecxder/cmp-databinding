import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() onGameStarted = new EventEmitter<{odd: number, even: number}>();
  @Output() onGameStopped = new EventEmitter<NodeJS.Timeout>();
  @Input() isGameStarted: boolean;

  interval: NodeJS.Timeout = setInterval(() => {}, 1000);

  onStartGame(): void {
    let oddNumber: number = 0;
    let evenNumber: number = 0;

    this.interval = setInterval(()=> {
      oddNumber++;

      if (oddNumber % 2 === 1) {
        oddNumber = oddNumber++;
      } else {
        return;
      }

      evenNumber = evenNumber + 2;

      this.onGameStarted.emit({
        odd: oddNumber,
        even: evenNumber,
      });
    }, 1000);
  }

  onStopGame(): void {
    this.onGameStopped.emit(this.interval);
  }
}
