import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {ApartmentService} from '../service/apartment.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {CookieService} from 'ngx-cookie-service';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-apartment-modify',
  templateUrl: './apartment-modify.component.html',
})

export class ApartmentModifyComponent implements OnInit {

  apartment: Apartment;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }


  ngOnInit(): void {
    this.getData(this.route.snapshot.paramMap.get('id'));
    this.cookieService.set( 'X-XSRF-TOKEN', this.cookieService.get('XSRF-TOKEN') );
  }

  getData(id) {
    this.apartmentService.getOne(id).subscribe(
      res => {
        this.apartment = res.body;
      },
      (err: HttpErrorResponse) => {
        this.apartmentService.handleErrors(err);
      }
    );
  }

  delete(): void {
    if (confirm('Are you sure to delete the record?')) {
      this.apartmentService.delete(this.apartment).subscribe(
        res => {
          this.apartment = res;
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          this.apartmentService.handleErrors(err);
        }
      );
    }
  }
}
