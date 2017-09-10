import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ApartmentsComponent } from './apartments/apartments.component';

import {ApartmentService} from './service/apartment.service';
import {AppRoutes} from '../routes';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import {ApartmentCreateComponent} from './apartments/apartment-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApartmentModifyComponent} from './apartments/apartment-modify.component';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentDetailComponent,
    ApartmentCreateComponent,
    ApartmentModifyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApartmentService, CookieService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
