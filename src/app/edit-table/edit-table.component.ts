import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

  data = [
    { 
      index: 1,
      temp: 100,
      k: 20100 
    },
    { 
      index: 2,
      temp: 200,
      k: 20200 
    },
    { 
      index: 3,
      temp: 300,
      k: 20300 
    },
    { 
      index: 4,
      temp: 400,
      k: 20400 
    }
  ]

  editStatus: { [key: string]: any } = [
    { 
      index: false,
      temp: false,
      k: false 
    },
    { 
      index: false,
      temp: false,
      k: false 
    },
    { 
      index: false,
      temp: false,
      k: false 
    },
    { 
      index: false,
      temp: false,
      k: false 
    }
  ]

  constructor() { }

  ngOnInit(): void {
    // for (let i in this.data) {
    //   this.editStatus.push(false);
    // }
  }

  edit(category: string, index: number) {
    console.log("edit", category, index);
    this.editStatus[index][category] = true;
    console.log(this.editStatus)
  }

  save(category: string, index: number, value: any) {
    console.log("save", category, index, value);
    this.editStatus[index][category] = false;
  }
}
