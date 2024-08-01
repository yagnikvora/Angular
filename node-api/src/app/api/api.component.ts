import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';
import { FacultyServiceService } from '../faculty-service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  faculties: Faculty[] = [];
  constructor(private api: FacultyServiceService, private router: Router) { }

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
