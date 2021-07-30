import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.scss']
})
export class NgDirectiveComponent implements OnInit {

  loading = false;
  isChange = false;
  statusNum = 0;
  status = ["Start", "Loading", "Complete","Fail"];
  color = ["blue", "blueviolet", "green", "red", "black"];

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.loading = true;
  }

  stop() {
    this.loading = false;
  }

  changeColor() {
    this.isChange = !this.isChange;
  }

}
