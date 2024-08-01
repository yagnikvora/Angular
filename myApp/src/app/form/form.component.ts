import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  array = ["yagnik", "raj","umang"];
  val: string = "";
  add() {
    this.array.push(this.val);
    this.val = "";
  }
}
