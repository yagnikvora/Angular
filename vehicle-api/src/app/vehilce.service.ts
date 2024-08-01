import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehilceService {

  constructor(private http: HttpClient) { }

  API_URL = "http://localhost:3000/vehicle";

  getAllVehicle() {
    return this.http.get(this.API_URL)
  }

  getVehicleById(id: any) {
    return this.http.get(this.API_URL + "/" + id)
  }

  deleteVehicle(id: any) {
    return this.http.delete(this.API_URL + "/" + id);
  }

  insertVehicle(form: any) {
    return this.http.post(this.API_URL, form);
  }

  updateVehicle(id: any, form: any) {
    return this.http.put(this.API_URL + "/" + id, form);
  }
}
