import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('');
  fromG: FormGroup;

  constructor(private fb: FormBuilder, private serService: ServiceService) { 
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
    this.serService.getData()
    .subscribe(
      data => {
        this.fromG.patchValue(data[0]);
      }
    )
  }

  submit() {
    console.log(this.name.value);
  }

  print() {
    console.log(this.fromG.value);
  }

}
