import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Apartment} from '../model/apartment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResponseMessage} from "../model/responseMessage";

@Injectable()
export class ApartmentService {
  constructor(private http: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  // private apiUri = 'http://demo2300149.mockable.io/apartments';
  // private apiUri = 'http://wild-frog-1801.getsandbox.com';
  private apiUri = 'http://localhost:8000/api';


  public getOne(id: string) {
    return this.http.get<Apartment>(`${this.apiUri}/apartment/${id}`, {
        observe: 'response',
        withCredentials: true
      });
  }

  public getAll(): Observable<Array<Apartment>> {
    return this.http.get<Array<Apartment>>(
      this.apiUri + '/apartments'
    );
  }

  public create(apartment: Apartment): Observable<any> {
    return this.http.post<Apartment>(`${this.apiUri}/apartment`, apartment);
  //   // // const options = new RequestOptions({ headers: this.headers });
  }

  public delete(apartment: Apartment): Observable<Apartment> {
    return this.http.delete<Apartment>(`${this.apiUri}/apartment/delete/${apartment.id}`,
      {withCredentials: true});
  }

  handleErrors(err: any) {
    console.log(err.error);
    console.log(err.name);
    console.log(err.message);
    console.log(err.status);
  }

  public getApiUri(): string {
    return this.apiUri;
  }
}
