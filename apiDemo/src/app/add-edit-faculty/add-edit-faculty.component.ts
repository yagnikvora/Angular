import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiFacultyService } from '../api-faculty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-faculty',
  templateUrl: './add-edit-faculty.component.html',
  styleUrl: './add-edit-faculty.component.css'
})
export class AddEditFacultyComponent {
  id = -1;
  constructor(private api: ApiFacultyService, private router: Router, private actRoute: ActivatedRoute) { }

  myForm = new FormGroup({
    FacultyName: new FormControl(""),
    FacultyAge: new FormControl(""),
    FacultyDescription: new FormControl(""),
    FacultyImage: new FormControl(""),
    FacultyDesignation: new FormControl(""),
  });

  ngOnInit() {
    if (this.actRoute.snapshot.paramMap.get("id") != null) {
      this.id = Number(this.actRoute.snapshot.paramMap.get("id"));
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
    if(this.id > 0){
      this.api.updateFaculty(this.id, this.myForm.value).subscribe((res: any) => {
        this.router.navigate(['fac']);
      })
    }
    else{
      this.api.insertFaculty(this.myForm.value).subscribe((res: any) => {
        this.router.navigate(['fac']);
      });
    }
  }
}
