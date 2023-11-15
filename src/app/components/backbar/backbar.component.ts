import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-backbar',
  templateUrl: './backbar.component.html',
  styleUrls: ['./backbar.component.scss']
})
export class BackbarComponent implements OnInit,OnChanges {
  @Input() title: any;
  translatedTitle;
  headerClass: string = '';

  constructor(private location: Location,private translate: TranslateService, private utilityService: UtilService) { }

  ngOnInit() {
    this.utilityService.addClassToHeaderSubject.subscribe((componentName) => {
      this.headerClass = componentName === 'pitara' ? 'padding-left-30' : '';
    });
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
