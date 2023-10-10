import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-pcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardPComponent implements OnInit {

  data: any;
  result: any
  constructor(public router: Router, public utils: UtilService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('result'));
    localStorage.removeItem('filteredArray')
  }

  unboxPitara(value) {
    this.utils.collectionRead(value.identifier).subscribe((data) => {
      this.result = data.result.content
      localStorage.setItem('filteredArray', JSON.stringify(this.result.children[0].children))
      this.router.navigate(['explore'])
    })


  }

}
