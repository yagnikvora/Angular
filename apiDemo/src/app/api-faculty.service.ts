import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  constructor(private http: HttpClient) { }

  API_URL = "https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty";

  getAllFaculty() {
    return this.http.get(this.API_URL)
  }

  getFacultyById(id: any) {
    return this.http.get(this.API_URL + "/" + id)
  }

  deleteFaculty(id: any) {
    return this.http.delete(this.API_URL + "/" + id);
  }

  insertFaculty(form: any) {
    return this.http.post(this.API_URL, form);
  }

  updateFaculty(id: any, form: any) {
    return this.http.put(this.API_URL + "/" + id, form);
  }
}
