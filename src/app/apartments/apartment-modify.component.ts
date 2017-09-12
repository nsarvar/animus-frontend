import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {ApartmentService} from '../service/apartment.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {CookieService} from 'ngx-cookie-service';
import {HttpErrorResponse} from "@angular/common/http";
import {ResponseMessage} from "../model/responseMessage";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-apartment-modify',
  templateUrl: './apartment-modify.component.html',
})

export class ApartmentModifyComponent implements OnInit {

  apartment: Apartment;
  responseMessage: ResponseMessage;
  formGroup: FormGroup;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private fb: FormBuilder
    ) {
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


  ngOnInit(): void {
    this.getData(this.route.snapshot.paramMap.get('id'));
    this.cookieService.set( 'X-XSRF-TOKEN', this.cookieService.get('XSRF-TOKEN') );

    this.formGroup.setValue({
      'email': this.apartment.email
    });
  }

  getData(id) {
    this.apartmentService.getOne(id).subscribe(
      res => {
        this.apartment = res.body;
      },
      (err: HttpErrorResponse) => {
        // this.apartmentService.handleErrors(err);
        this.responseMessage = err.error;
      }
    );
  }

  delete(): void {
    if (confirm('Are you sure to delete the record?')) {
      this.apartmentService.delete(this.apartment).subscribe(
        res => {
          this.apartment = res;
          location.reload();
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          this.apartmentService.handleErrors(err);
        }
      );
    }
  }
}
