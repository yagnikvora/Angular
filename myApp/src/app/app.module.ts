import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { Faculty10Component } from './faculty10/faculty10.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    AboutComponent,
    ContactComponent,
    CounterComponent,
    FormComponent,
    FormupdateComponent,
    Faculty10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
