///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {ApartmentService} from '../service/apartment.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-apartment-modify',
  templateUrl: './apartment-modify.component.html',
})

export class ApartmentModifyComponent implements OnInit {

  apartment: Apartment;
  private par1: any;
  id: number;
  public apiUri;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }


  ngOnInit(): void {
    this.apiUri = this.apartmentService.getApiUri();
    this.par1 = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    // this.route.params.switchMap((params: Params) => this.apartmentService.getApartmentById(params['id']))
    //   .subscribe(apartment => this.apartment = apartment);

  }

  delete(): void {
    // this.route.params.switchMap((params: Params) => this.apartmentService.getApartmentById(params['id']))
    //   .subscribe(apartment => this.apartment = apartment);
  }
}
