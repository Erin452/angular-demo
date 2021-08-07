import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('');
  fromG: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.fromG = this.fb.group({
      address: '',
      email: '',
      name: this.fb.group({
        first: '',
        last: ''
      }),
      phone: ''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.name.value);
  }

  print() {
    console.log(this.fromG.value);
  }

}
