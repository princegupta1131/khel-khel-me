import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-backbar',
  templateUrl: './backbar.component.html',
  styleUrls: ['./backbar.component.css']
})
export class BackbarComponent implements OnInit,OnChanges {
  @Input() title: any;
  translatedTitle;
  constructor(private location: Location,private translate: TranslateService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

  ngOnChanges() {
    this.translate.get(this.title).subscribe((translation: string) => {
      this.translatedTitle = translation;
    });
}
}
