import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { UtilService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private deferredPrompt: any;
  installButtonVisible = true;
  @ViewChild('installButton') installButton: ElementRef;
  title = '';
  isMenuBarVisible: boolean = false;
  isHeaderBarVisible: boolean = true;
  routeData: any;
  disableElements = false;
  titleSubscription: Subscription;

  constructor(private router: Router, private utilService: UtilService, private renderer: Renderer2) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check the current route and set disableElements accordingly
        if (event.url === '/') {
          this.isMenuBarVisible = false;
          this.isHeaderBarVisible = true;
        }
        if (event.url.includes('/pitara')) {
          this.title = 'Pitara';
          this.isMenuBarVisible = true;
          this.isHeaderBarVisible = false;
        }
        else if (event.url.includes('/explore')) {
          this.isMenuBarVisible = true;
          this.isHeaderBarVisible = false;
        }
      });

  }


  ngOnInit(): void {
    // Launch fullscreen for browsers that support it!
    // this.launchIntoFullscreen(document.documentElement); // the whole page
    this.utilService.getTitle().subscribe(
      (value) => {
        this.title = value
      }
    );

    window.addEventListener('beforeinstallprompt', (e: any) => {
      // Prevent the browser's default install prompt
      e.preventDefault();

      // Store the event for later use
      this.deferredPrompt = e;

      // Check if the app is already installed
      if (window.matchMedia('(display-mode: fullscreen)').matches) {
        this.hideInstallButton();
      }

      // Show or hide the "Install App" button based on installation status
      if (this.deferredPrompt) {
        this.showInstallButton();
      } else {
        this.hideInstallButton();
      }
    });

    window.addEventListener('appinstalled', () => {
      // App has been installed; hide the button
      this.hideInstallButton();
    });

  }

  showInstallButton() {
    if (this.deferredPrompt && this.installButtonVisible) {
      this.renderer.removeStyle(this.installButton.nativeElement, 'display');
    }
  }

  installPwa() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          this.hideInstallButton();
        }
        this.deferredPrompt = null;
      });
    }
  }

  hideInstallButton() {
    this.renderer.setStyle(this.installButton.nativeElement, 'display', 'none');
    this.installButtonVisible = false;
  }

}

