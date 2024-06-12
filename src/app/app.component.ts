import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Testserver',
    content: 'Just a test!'
  }];

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  isGameStarted: boolean = false;

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    const newLocal = this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onGameStarted(data: {odd: number, even: number}) {
    this.oddNumbers.push(data.odd);
    this.evenNumbers.push(data.even);

    this.isGameStarted = true;
  }

  onGameStopped(interval: NodeJS.Timeout) {
    if (confirm('Are you sure you want to stop the game?')) {
      clearInterval(interval);

      this.oddNumbers = [];
      this.evenNumbers = [];

      this.isGameStarted = false;
    }
  }
}
