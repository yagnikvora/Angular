import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';
import { AddEditVehicleComponent } from './add-edit-vehicle/add-edit-vehicle.component';
import { DetailVehicleComponent } from './detail-vehicle/detail-vehicle.component';

const routes: Routes = [
{ path: "", component: HomeComponent },
{ path: "vehicle", component: ApiComponent },
{ path: "vehicle/add", component: AddEditVehicleComponent },
{ path: "vehicle/edit/:id", component: AddEditVehicleComponent },
{ path: "vehicle/:id", component: DetailVehicleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
