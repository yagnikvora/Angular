import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Faculty10Component } from './faculty10/faculty10.component';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { FormupdateComponent } from './formupdate/formupdate.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "faculty", component: FacultyComponent },
  { path: "about", component: AboutComponent},
  { path:"contact", component: ContactComponent},
  { path:"exp10faculty",component:Faculty10Component},
  { path:"counter", component:CounterComponent},
  { path:"form", component:FormComponent},
  { path:"updateform" , component:FormupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
