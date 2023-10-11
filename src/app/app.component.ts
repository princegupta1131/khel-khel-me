import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { UtilService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  isMenuBarVisible: boolean ;
  isHeaderBarVisible: boolean;
  routeData:any;
  disableElements = false;
  titleSubscription: Subscription;

    constructor(private router: Router,private utilService:UtilService) {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check the current route and set disableElements accordingly
        if (event.url.includes('/home')) {
          this.isMenuBarVisible = false;
          this.isHeaderBarVisible = true;
        }
        else if (event.url.includes('/pitara')) {
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
  }
   launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
  
}

