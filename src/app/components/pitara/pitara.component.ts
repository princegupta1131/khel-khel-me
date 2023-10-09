import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pitara',
  templateUrl: './pitara.component.html',
  styleUrls: ['./pitara.component.scss']
})
export class PitaraComponent implements OnInit {
  title = 'Pitara';
  data: any;
  constructor() { }

  ngOnInit(): void {
    const result = JSON.parse(localStorage.getItem('result'));
    this.data = result.filter((content: any) => content.mimeType === 'application/vnd.ekstep.content-collection')
    localStorage.setItem('result', JSON.stringify(this.data))
  }

}
