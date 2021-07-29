import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-event',
  templateUrl: './html-event.component.html',
  styleUrls: ['./html-event.component.scss']
})
export class HtmlEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log("click");
  }

  dblClick() {
    console.log("dblClick");
  }

  mouseDown() {
    console.log("mouseDown");
  }

  mouseUp() {
    console.log("mouseUp");
  }

  enter() {
    console.log("enter");
  }

  event(event: any) {
    console.log(event);
  }
}
