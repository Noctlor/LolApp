import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../interface/data.interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [
  ]
})
export class ComponentsComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }
  @Input()camp!:Datum;


}
