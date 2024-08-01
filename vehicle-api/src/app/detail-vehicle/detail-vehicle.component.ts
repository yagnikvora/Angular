import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { VehilceService } from '../vehilce.service';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrl: './detail-vehicle.component.css'
})
export class DetailVehicleComponent {
  vehicle = new Vehicle();
  id: any = "";
  constructor(private actRoute: ActivatedRoute, private api: VehilceService, private router: Router) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.api.getVehicleById(this.id).subscribe((res: any) => {
      this.vehicle = res;
    });
  }

  deleteVeh(id: any) {
    this.api.deleteVehicle(id).subscribe((res: any) => {
      this.router.navigate(['/vehicle']);
    })
  }
}
