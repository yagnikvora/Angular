import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehilceService } from '../vehilce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrl: './add-edit-vehicle.component.css'
})
export class AddEditVehicleComponent {
  id: any = "";
  constructor(private api: VehilceService, private router: Router, private actRoute: ActivatedRoute) { }

  myForm = new FormGroup({
    VehicleModel: new FormControl(""),
    VehicleMake: new FormControl(""),
    VehicleYear: new FormControl(""),
    VehicleLastServiceDate: new FormControl(""),
    VehicleMileage: new FormControl(""),
  });

  ngOnInit() {
    if (this.actRoute.snapshot.paramMap.get("id") != null) {
      this.id = this.actRoute.snapshot.paramMap.get("id");   
      this.api.getVehicleById(this.id).subscribe((res: any) => {
        this.myForm.controls.VehicleModel.setValue(res.VehicleModel);
        this.myForm.controls.VehicleMake.setValue(res.VehicleMake);
        this.myForm.controls.VehicleYear.setValue(res.VehicleYear);
        this.myForm.controls.VehicleMileage.setValue(res.VehicleMileage);
        this.myForm.controls.VehicleLastServiceDate.setValue(res.VehicleLastServiceDate);
        console.log(this.myForm.value)
      })
    }
  }

  insertData() {
    if (this.id) {
        this.api.updateVehicle(this.id, this.myForm.value).subscribe((res: any) => {
          this.router.navigate(['vehicle']);
        })
    }
    else {
      this.api.insertVehicle(this.myForm.value).subscribe((res: any) => {
        this.router.navigate(['vehicle']);
      });
    }
  }
}
