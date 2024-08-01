import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formupdate',
  templateUrl: './formupdate.component.html',
  styleUrl: './formupdate.component.css'
})
export class FormupdateComponent {
  array: any = [{ name: "YAGNIK", age: 19 }, { name: "UMANG", age: 18 }];
  myForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });
  // isEdit = false;
  editIndex = -1;
  add() {
    this.array.push(this.myForm.value);
  }
  deleteData(arr: any) {
    this.array.splice(this.array.indexOf(arr), 1);
  }
  editData(i: any) {
    this.myForm.controls.name.setValue(this.array[i].name);
    this.myForm.controls.age.setValue(this.array[i].age);
    // this.isEdit = true;
    this.editIndex = i;
  }
  edit() {
    this.array[this.editIndex] = this.myForm.value;
    this.myForm.reset();
    this.editIndex = -1;
  }
}
