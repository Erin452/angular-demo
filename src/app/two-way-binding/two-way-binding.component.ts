import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  inputS = '';

  from: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.from = this.fb.group({
      name: '',
      // name: ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  print() {
    console.log(this.from.controls);
  }
}
