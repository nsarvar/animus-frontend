import { Component, OnInit } from '@angular/core';
import {ApartmentService} from '../service/apartment.service';
import {Router} from '@angular/router';
import {Apartment} from '../model/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})

export class ApartmentsComponent implements OnInit {
  title= 'Apartments';
  apartments: Apartment[];
  newApartment: Apartment;

  constructor(private router: Router, private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.apartmentService.getAll().subscribe(res => {
      this.apartments = res;
    });
    // this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
  }
}
