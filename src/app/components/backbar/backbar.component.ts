import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backbar',
  templateUrl: './backbar.component.html',
  styleUrls: ['./backbar.component.css']
})
export class BackbarComponent implements OnInit {
  @Input() title: any; 
  constructor() { }

  ngOnInit() {
  }

}
