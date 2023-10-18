import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-pitara',
  templateUrl: './pitara.component.html',
  styleUrls: ['./pitara.component.scss']
})
export class PitaraComponent implements OnInit {
  isHeaderbar = false;
  data: any;
  constructor(private localStorageService: LocalStorageService) { }
  ngOnInit(): void {
    const result = JSON.parse(this.localStorageService.getItem('result'));
    this.data = result.filter((content: any) => content.mimeType === 'application/vnd.ekstep.content-collection' && content.keywords.includes('djp_master'))
    this.localStorageService.setItem('result', JSON.stringify(this.data))
  }


}
