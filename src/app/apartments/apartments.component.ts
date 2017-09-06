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
    this.getApartments();
    // console.log(this.apartments);
    // this.apartmentService.getContacts().subscribe(response => this.apartments = response);
  }

  getApartments(): void {
    this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
  }
}
