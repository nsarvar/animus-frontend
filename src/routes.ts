import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ApartmentsComponent} from './app/apartments/apartments.component';
import {ApartmentDetailComponent} from './app/apartment-detail/apartment-detail.component';
import {ApartmentCreateComponent} from './app/apartments/apartment-create.component';


const routes: Routes = [
  { path: 'apartment/create', component: ApartmentCreateComponent },
  { path: 'apartment/:id', component: ApartmentDetailComponent},
  { path: 'apartments', component: ApartmentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutes { }
