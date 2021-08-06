import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  inputS = '';
  from: FormGroup;

  defaultPage = 1;

  constructor(private fb: FormBuilder) { 
    this.from = this.fb.group({
      name: '',
    });
  }

  ngOnInit(): void {
  }

  chang(event: any) {
    console.log(event);
  }

  print() {
    console.log(this.from.controls);
  }

  changePage(page: number) {
    console.log("changePage", page);
  }
}
