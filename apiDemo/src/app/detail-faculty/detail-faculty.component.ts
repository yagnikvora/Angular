import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrl: './detail-faculty.component.css'
})
export class DetailFacultyComponent {
  fac: Faculty = new Faculty();
  id = 0;
  constructor(private actRoute: ActivatedRoute, private api: ApiFacultyService, private router: Router) { }

  ngOnInit() {
    this.id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.api.getFacultyById(this.id).subscribe((res: any) => {
      console.log(res);
      this.fac = res;
    });
  }

  deleteFac(id: any) {
    this.api.deleteFaculty(id).subscribe((res: any) => {
      this.router.navigate(['/']);
    })
  }
}
