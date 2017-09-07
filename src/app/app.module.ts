import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ApartmentsComponent } from './apartments/apartments.component';

import {ApartmentService} from './service/apartment.service';
import {HttpModule} from '@angular/http';
import {AppRoutes} from '../routes';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import {ApartmentCreateComponent} from './apartments/apartment-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentDetailComponent,
    ApartmentCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
