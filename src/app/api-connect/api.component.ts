import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(
    private serService: ServiceService,
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.serService.getData()
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
