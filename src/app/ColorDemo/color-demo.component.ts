import { Component } from '@angular/core';

@Component({
  selector: 'app-color-demo',
  templateUrl: './color-demo.component.html',
  styleUrls: ['./color-demo.component.css']
})
export class ColorDemoComponent {
  
  backgroundColor =''
  red='red';
  blue='blue';
  green='green'
  yellow='yellow'
  changeColor(c1:any) {
    this.backgroundColor = c1;
  }
}
