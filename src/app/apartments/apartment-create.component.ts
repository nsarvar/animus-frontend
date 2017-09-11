import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApartmentService} from '../service/apartment.service';
import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {NgbDatepicker, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ResponseMessage} from '../model/responseMessage';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
})

export class ApartmentCreateComponent implements OnInit {

  formGroup: FormGroup;
  apartment = new Apartment();
  private location: Location;
  date: {year: number, month: number};
  responseMessage: ResponseMessage;

  constructor(private fb: FormBuilder, private apartmentService: ApartmentService) {
    // console.log('dsa');
    this.formGroup = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'country': [null, Validators.required],
      'town': [null, Validators.required],
      'street': [null, Validators.required],
      'move_in_date': [null],
      'postcode': [null],
      'photo': [null],
      'description': [null]
    });
  }

  onSubmit(data: Apartment): void {
    this.apartment.country = data.country;
    this.apartment.email = data.email;
    this.apartment.town = data.town;
    this.apartment.street = data.street;
    this.apartment.postcode = data.postcode;
    this.apartment.move_in_date = data.move_in_date;
    this.apartment.description = data.description;
    this.apartment.photo = data.photo;

    this.apartmentService.create(this.apartment).subscribe(
      res => {
          console.log(res);
          this.responseMessage = res;
      },
      (err: HttpErrorResponse) => {
        this.responseMessage = err.error;
        // console.log(this.responseMessage);
        // this.apartmentService.handleErrors(err);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {  }
}
