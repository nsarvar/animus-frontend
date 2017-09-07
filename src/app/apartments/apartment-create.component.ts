import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  // styleUrls: ['./apartment-detail.component.css']
})

export class ApartmentCreateComponent implements OnInit {

  formGroup: FormGroup;
  apartment = new Apartment();

  constructor(private fb: FormBuilder) {
    // console.log('dsa');
    this.formGroup = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'country': [null, Validators.required]
    });
  }

  onSubmit(data) {
    this.apartment.country = data.country;
    this.apartment.email = data.email;
    console.log(data);

  }

  ngOnInit(): void {
    // this.formGroup.get('validate')
  }
}
