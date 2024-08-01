import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyServiceService } from '../faculty-service.service';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrl: './detail-faculty.component.css'
})
export class DetailFacultyComponent {
  fac: Faculty = new Faculty();
  id:any = "";
  constructor(private actRoute: ActivatedRoute, private api: FacultyServiceService, private router: Router) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.api.getFacultyById(this.id).subscribe((res: any) => {
      this.fac = res;
    });
  }

  deleteFac(id: any) {
    this.api.deleteFaculty(id).subscribe((res: any) => {
      this.router.navigate(['/']);
    })
  }
}
