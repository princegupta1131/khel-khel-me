import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-my-pitara',
  templateUrl: './my-pitara.component.html',
  styleUrls: ['./my-pitara.component.scss']
})
export class MyPitaraComponent implements OnInit {
  contents;

  mypitaras = [{
    name: "My pitara 1",
    identifier: 1,
  }, {
    name: "My pitara 2",
    identifier: 2,
  }
  ]
  constructor(public utils: UtilService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.utils.setTitle('My Pitaras');

    this.utils.searchSaas().subscribe(data => {
      console.log(JSON.stringify(data))
      this.contents = data.result.content.filter((content: any) => content.mimeType !== 'application/vnd.ekstep.content-collection')
      this.localStorageService.setItem('contents', JSON.stringify(this.contents))
    })
  }

}
