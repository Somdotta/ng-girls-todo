import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  @Output() submitItem: EventEmitter<string> = new EventEmitter();


  constructor() {
    this.title = 'I Love Angular';
  }

  ngOnInit() {
    this.title = 'Angular CLI Rules!';
  }
  changeTitle(newTitle: string): void {
   this.submitItem.emit(newTitle);
  }
}
