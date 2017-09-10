import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {ApartmentService} from '../service/apartment.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})

export class ApartmentDetailComponent implements OnInit {

  apartment: Apartment;
  private par1: any;
  id: number;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.par1 = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });


    this.route.params.switchMap((params: Params) => this.apartmentService.getApartmentById(params['id']))
      .subscribe(apartment => this.apartment = apartment);


  }
}
