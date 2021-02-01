import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  field = "attribute1"
  @Input() input: string;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('input has been changed')
  }
  ngAfterContentChecked() {
    console.log('content checked')
  }
  ngAfterContentInit() {
    console.log('content init')
  }
  ngAfterViewInit() {
    console.log('view init')
  }
  ngAfterViewChecked() {
    console.log('view checked')
  }

}
