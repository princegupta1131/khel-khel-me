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

  constructor(private router: Router, private utilService: UtilService, private installService: InstallService, private translate: TranslateService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check the current route and set disableElements accordingly
        if (event.url === '/') {
          this.isMenuBarVisible = false;
          this.isHeaderBarVisible = true;
          this.isInstallButtonVisible=true;
        }
        if (event.url.includes('/pitara')) {
          this.title = 'pitara';
          this.isMenuBarVisible = true;
          this.isHeaderBarVisible = false;
          this.isInstallButtonVisible=false

        }
        else if (event.url.includes('/explore')||event.url.includes('/mypitara')||event.url.includes('/create-pitara')) {
          this.isMenuBarVisible = true;
          this.isHeaderBarVisible = false;
          this.isInstallButtonVisible=false
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

}

