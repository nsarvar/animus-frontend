import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ApartmentsComponent } from './apartments/apartments.component';

import {ApartmentService} from './service/apartment.service';
import {HttpModule} from '@angular/http';
import {AppRoutes} from '../routes';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutes
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
