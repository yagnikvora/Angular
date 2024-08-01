import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';
import { AddEditFacultyComponent } from './add-edit-faculty/add-edit-faculty.component';
import { DetailFacultyComponent } from './detail-vehicle/detail-faculty.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "fac", component: ApiComponent },
  { path: "fac/add", component: AddEditFacultyComponent },
  { path: "fac/edit/:id", component: AddEditFacultyComponent },
  { path: "fac/:id", component: DetailFacultyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
