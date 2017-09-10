import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/apartment';
import {ApartmentService} from '../service/apartment.service';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})

export class ApartmentDetailComponent implements OnInit {

  private apartment: Apartment;
  apartments;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getData(id);
  }

  getData(id) {
    this.apartmentService.getOne(id).subscribe(
      res => {
        // console.log(res.headers.get('X-Debug-Token'));
        this.apartment = res.body;
      },
      (err: HttpErrorResponse) => {
        this.apartmentService.handleErrors(err);
      }
    );
  }
}
