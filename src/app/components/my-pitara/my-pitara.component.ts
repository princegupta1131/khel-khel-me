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
  mypitara: any;
  constructor(public utils: UtilService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.utils.setTitle('My Pitaras');
    this.mypitara = JSON.parse(this.localStorageService.getItem('mypitara'));

    this.utils.searchSaas().subscribe(data => {
      this.contents = data.result.content.filter((content: any) => content.mimeType !== 'application/vnd.ekstep.content-collection')
      this.localStorageService.setItem('contents', JSON.stringify(this.contents))
    })
  }

}
