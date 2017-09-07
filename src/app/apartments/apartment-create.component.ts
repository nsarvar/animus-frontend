import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApartmentService} from '../service/apartment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  // styleUrls: ['./apartment-detail.component.css']
})

export class ApartmentCreateComponent implements OnInit {

  formGroup: FormGroup;
  apartment = new Apartment();
  errorMessage: string;
  successMessage: string;
  private location: Location;

  constructor(private fb: FormBuilder, private apartmentService: ApartmentService) {
    // console.log('dsa');
    this.formGroup = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'country': [null, Validators.required],
      'town': [null, Validators.required],
      'street': [null, Validators.required],
      'postcode': [null],
      'photo': [null],
      'description': [null]
    });
  }

  onSubmit(data: Apartment): void {
    this.apartment.country = data.country;
    this.apartment.email = data.email;

    this.apartmentService.create(this.apartment)
      .then(
        response => {
            this.successMessage = response.message;
          },
          error => this.errorMessage = <any>error);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // this.formGroup.get('validate')
  }
}
