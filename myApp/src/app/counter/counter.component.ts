import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = 0;

  add() {
    this.count += 1;
  }

  minus() {
    this.count -= 1;
  }
}
