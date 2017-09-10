import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ApartmentsComponent} from './app/apartments/apartments.component';
import {ApartmentDetailComponent} from './app/apartment-detail/apartment-detail.component';
import {ApartmentCreateComponent} from './app/apartments/apartment-create.component';
import {ApartmentModifyComponent} from './app/apartments/apartment-modify.component';


const routes: Routes = [
  { path: 'apartment/create', component: ApartmentCreateComponent },
  { path: 'apartment/:id', component: ApartmentDetailComponent},
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartment/modify/:id', component: ApartmentModifyComponent}
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
