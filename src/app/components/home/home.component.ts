import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utils.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: any;
  hideback:true;
  constructor(public router: Router, public utils: UtilService,private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.utils.search().subscribe((data) => {
      this.result = data.result.content
      this.localStorageService.setItem('result', JSON.stringify(this.result))
    })
  }


}