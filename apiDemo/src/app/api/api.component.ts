import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  faculties: Faculty[] = [];
  constructor(private api: ApiFacultyService, private router: Router) { }

  ngOnInit() {
    this.api.getAllFaculty().subscribe((res: any) => {
      this.faculties = res;
    });
  }

  deleteFac(id: any) {
    this.api.deleteFaculty(id).subscribe((res: any) => {
      this.ngOnInit();
    })
  }
}
