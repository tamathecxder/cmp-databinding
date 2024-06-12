import { Component, ContentChild, ElementRef, Input, SimpleChanges } from '@angular/core';

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

  @ContentChild('contentParagraph', {
    static: true
  }) paragraph: ElementRef;

  // constructor() {
  //   console.log('constructor executed');
  // }

  // ngOnChanges(simpleChanges: SimpleChanges) {
  //   console.log('ngOnChanges executed');

  //   console.log(simpleChanges);

  //   console.log("Text content of paragraph ContentChild(): " + this.paragraph.nativeElement.textContent);
  // }

  // ngOnInit() {
  //   console.log('ngOnInit executed');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck executed');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit executed');
  //   console.log("Text content of paragraph ContentChild(): " + this.paragraph.nativeElement.textContent);
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked executed');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit executed');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked executed');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy executed');
  // }
}
