import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input('srvEl') element: {
    type: string,
    name: string,
    content: string,
  };

  constructor() {
    console.log('constructor executed');
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('ngOnChanges executed');

    console.log(simpleChanges);
  }

  ngOnInit() {
    console.log('ngOnInit executed');
  }

  ngDoCheck() {
    console.log('ngDoCheck executed');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit executed');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked executed');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit executed');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked executed');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy executed');
  }
}
