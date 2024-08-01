import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehilceService } from '../vehilce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  vehicles: Vehicle[] = [];
  constructor(private api: VehilceService, private router: Router) { }

  ngOnInit() {
    this.api.getAllVehicle().subscribe((res: any) => {
      this.vehicles = res;
    });
  }

  deleteFac(id: any) {
    this.api.deleteVehicle(id).subscribe((res: any) => {
      this.ngOnInit();
    })
  }
}
