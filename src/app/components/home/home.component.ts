import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utils.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: any;
  selectedLanguage;

  constructor(public router: Router, public utils: UtilService, private localStorageService: LocalStorageService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.selectedLanguage = this.utils.getLanguage()

    forkJoin([
      this.utils.searchOnest(),
      this.utils.searchSaas()
    ]).subscribe(
      ([data1, data2]) => {
        let onestResult = data1.data.collection;
        let onestCollection = onestResult.map((collection) => {
          return {
            appIcon: collection.icon,
            description: collection.description,
            name: collection.title,
            publisher: collection.publisher,
            identifier: collection.id,
            provider_id:collection.provider_id
          }
        })

        let data = data2.result.content.filter((content: any) => content.mimeType === 'application/vnd.ekstep.content-collection' && content.keywords.includes('djp_master'))
        let result = [
          ...data
        ]
        this.localStorageService.setItem('result', JSON.stringify(result))
      },
      (error) => {
        console.error('Error in one of the API calls', error);
      }
    );
  }

  onLanguageChange() {
    this.utils.setLanguage(this.selectedLanguage)
    this.translate.use(this.utils.getLanguage());
  }
}