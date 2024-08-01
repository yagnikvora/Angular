import { Component } from '@angular/core';
import { FacultyServiceService } from '../faculty-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-faculty',
  templateUrl: './add-edit-faculty.component.html',
  styleUrl: './add-edit-faculty.component.css'
})
export class AddEditFacultyComponent {
  id:any = "";
  constructor(private api: FacultyServiceService, private router: Router, private actRoute: ActivatedRoute) { }

  myForm = new FormGroup({
    FacultyName: new FormControl(""),
    FacultyAge: new FormControl(""),
    FacultyDescription: new FormControl(""),
    FacultyImage: new FormControl(""),
    FacultyDesignation: new FormControl(""),
  });

  ngOnInit() {
    if (this.actRoute.snapshot.paramMap.get("id") != null) {
      this.id = this.actRoute.snapshot.paramMap.get("id");
      this.api.getFacultyById(this.id).subscribe((res: any) => {
        this.myForm.controls.FacultyName.setValue(res.FacultyName);
        this.myForm.controls.FacultyAge.setValue(res.FacultyAge);
        this.myForm.controls.FacultyDescription.setValue(res.FacultyDescription);
        this.myForm.controls.FacultyDesignation.setValue(res.FacultyDesignation);
        this.myForm.controls.FacultyImage.setValue(res.FacultyImage);
      })
    }
  }

  insertData() {
    if (this.id.length > 0) {
      this.api.updateFaculty(this.id, this.myForm.value).subscribe((res: any) => {
        this.router.navigate(['fac']);
      })
    }
    else {
      this.api.insertFaculty(this.myForm.value).subscribe((res: any) => {
        this.router.navigate(['fac']);
      });
    }
  }
}
