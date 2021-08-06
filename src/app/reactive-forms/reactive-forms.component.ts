import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('');
  from: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.from = this.fb.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.name.value);
    console.log(this.name.valid);
  }

  print() {
    console.log(this.from.value);
  }

}
