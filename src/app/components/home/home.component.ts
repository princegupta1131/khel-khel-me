import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  result: any;

  constructor(public router: Router, public utils: UtilService) {

  }

  ngOnInit(): void {
    this.utils.search().subscribe((data) => {
      this.result = data.result.content
      localStorage.setItem('result', JSON.stringify(this.result))
      localStorage.removeItem('filteredArray')
      console.log(this.result)
    })
  }


}