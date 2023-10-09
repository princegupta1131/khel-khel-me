import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-pitara-search',
  templateUrl: './pitara-search.component.html',
  styleUrls: ['./pitara-search.component.scss']
})
export class PitaraSearchComponent implements OnInit {


  result: any;
  id: string;
  data: any;

  constructor(public route: ActivatedRoute, public utils: UtilService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.utils.collectionRead(this.id).subscribe((data) => {
      this.data = data.result.content
      console.log(this.data)
      localStorage.removeItem('result')
      localStorage.setItem('result', JSON.stringify(this.data.children[0].children))
    })
  }
}