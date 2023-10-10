import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-pcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardPComponent implements OnInit {

  data: any;
  result: any
  constructor(public router: Router, public utils: UtilService,private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.data = JSON.parse(this.localStorageService.getItem('result'));
    this.localStorageService.removeItem('resultArray')
  }

  unboxPitara(value) {
    this.utils.collectionRead(value.identifier).subscribe((data) => {
      this.result = data.result.content
      this.localStorageService.setItem('resultArray', JSON.stringify(this.result.children[0].children))
      this.router.navigate(['explore'])
    })


  }

}
