import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Apartment} from '../model/apartment';

@Injectable()
export class ApartmentService {
  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  // private apiUri = 'http://demo2300149.mockable.io/apartments';
  private apiUri = 'http://wild-frog-1801.getsandbox.com/apartments';

  getApartments(): Promise<Apartment[]> {
    return this.http.get(this.apiUri)
      .toPromise()
      // .then(response => response.json().data as Apartment[])
      .then(this.extractData)
      .catch(this.handleError);
  }

  getApartmentById(id: number): Promise<Apartment> {
    const url = this.apiUri + '/' + id;

    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || [];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
