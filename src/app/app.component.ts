import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { UtilService } from './services/utils.service';
import { InstallService } from './services/install.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  installButtonVisible = true;
  title = '';
  isMenuBarVisible: boolean = false;
  isHeaderBarVisible: boolean = true;
  isInstallButtonVisible:boolean=false
  isLanguageOptionVisible:boolean=false
  titleSubscription: Subscription;
  selectedLanguage;

  constructor(private router: Router, private utilService: UtilService, private installService: InstallService,private translate: TranslateService) {

    translate.setDefaultLang('en');
    // Use the browser's language if available, otherwise use the default language
    translate.use(translate.getBrowserLang() || 'en');

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check the current route and set disableElements accordingly
        if (event.url === '/') {
          this.isMenuBarVisible = false;
          this.isHeaderBarVisible = true;
          this.isInstallButtonVisible=true;
          this.isLanguageOptionVisible=true
        }
        if (event.url.includes('/pitara')) {
          this.title = 'Pitara';
          this.isMenuBarVisible = true;
          this.isHeaderBarVisible = false;
          this.isInstallButtonVisible=false
          this.isLanguageOptionVisible=false

        }
        else if (event.url.includes('/explore')) {
          this.isMenuBarVisible = true;
          this.isHeaderBarVisible = false;
          this.isInstallButtonVisible=false
          this.isLanguageOptionVisible=false

        }
      });
  }


  ngOnInit(): void {
    this.utilService.getTitle().subscribe(
      (value) => {
        this.title = value
      }
    );
  }
  showInstallButton() {
    return this.installService.showInstallPrompt();
  }

  promptInstall() {
    this.installService.promptUser();
  }

  onLanguageChange() {
     this.translate.use(this.selectedLanguage);
  }
}

