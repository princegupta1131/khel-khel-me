import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-backbar',
  templateUrl: './backbar.component.html',
  styleUrls: ['./backbar.component.css']
})
export class BackbarComponent implements OnInit {
  @Input() title: any; 
  constructor(private location: Location) { }

  ngOnInit() {
  }
goBack(){
  this.location.back()

}
}
