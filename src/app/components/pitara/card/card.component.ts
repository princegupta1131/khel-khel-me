import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardPComponent implements OnInit {

data:any;
 
  constructor(public router:Router) { }

  ngOnInit() {
    const result = JSON.parse(localStorage.getItem('result'));
     this.data = result.filter((content: any) =>  content.mimeType === 'application/vnd.ekstep.content-collection')
  }

  unboxPitara(value){
    this.router.navigate(['pitara-search', value.identifier])
  }


}
