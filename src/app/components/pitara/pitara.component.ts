import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';
import { Howl } from 'howler';
import { MatTabGroup } from '@angular/material/tabs';
import * as Hammer from 'hammerjs';

interface Chip {
  key: string;
  value: string;
}

@Component({
  selector: 'app-pitara',
  templateUrl: './pitara.component.html',
  styleUrls: ['./pitara.component.scss']
})
export class PitaraComponent implements OnInit {
  saaspitara: any;
  onestpitara: any;
  mypitara: any;
  result: any;
  sound: any;
  selectedTab: Chip;
  selectedTabIndex: number = 0;
  saasArray;
  data;
  allChips: Chip[] = [
    { value: 'Saas Pitaras', key: 'saaspitara' },
    { value: 'Pitaras from open network', key: 'onestpitara' },
    { value: 'My Pitaras', key: 'mypitara' },
  ];

  constructor(public router: Router, public utils: UtilService, private localStorageService: LocalStorageService) { }

  @ViewChild(MatTabGroup, { static: true }) tabGroup: MatTabGroup;

  ngOnInit() {
    this.utils.updateHeaderClass('pitara');
    this.saaspitara = JSON.parse(this.localStorageService.getItem('saaspitara'));
    this.onestpitara = JSON.parse(this.localStorageService.getItem('onestpitara'));
    this.mypitara = JSON.parse(this.localStorageService.getItem('mypitara'));
    this.localStorageService.removeItem('resultArray')
    this.sound = new Howl({
      src: ['assets/audio/windchime.mp3'],
    });
    this.data = this.saaspitara
  }

  ngAfterViewInit() {
    const hammer = new Hammer(this.tabGroup._elementRef.nativeElement, { touchAction: 'auto' });
    hammer.on('swipeleft', () => this.tabGroup.selectedIndex = (this.tabGroup.selectedIndex + 1) % this.tabGroup._tabs.length);
    hammer.on('swiperight', () => this.tabGroup.selectedIndex = (this.tabGroup.selectedIndex - 1 + this.tabGroup._tabs.length) % this.tabGroup._tabs.length);
  }

  unboxPitara(value) {
    console.log('val', value)
    this.utils.setTitle(value.name);
    if (!value.provider_id) {
      if (!value.myPitara)
        this.utils.saasCollectionRead(value.identifier).subscribe((data) => {
          this.result = data.result.content
          this.localStorageService.setItem('resultArray', JSON.stringify(this.result.children[0].children))
          this.sound.play();
          setTimeout(() => {
            this.router.navigate(['explore'])
          }, 1000);
        })
      this.result = value.children
      this.localStorageService.setItem('resultArray', JSON.stringify(this.result))
      this.sound.play();
      setTimeout(() => {
        this.router.navigate(['explore'])
      }, 1000);
    }
    else {
      this.utils.onestCollectionRead(value.identifier).subscribe((data) => {
        this.result = data.data.collection[0].collectionContentRelation
        let onestContent = this.result.map((content) => {
          return {
            appIcon: content.contentFlncontentRelation.image,
            description: content.contentFlncontentRelation.description,
            name: content.contentFlncontentRelation.title,
            author: content.contentFlncontentRelation.author,
            identifier: content.contentFlncontentRelation.id,
            artifactUrl: content.contentFlncontentRelation.link,
            primaryCategory: content.contentFlncontentRelation.contentType,
            category: content.contentFlncontentRelation.category,
            mimeType: content.contentFlncontentRelation.mimeType,
            urlType: content.contentFlncontentRelation.urlType,
          }
        })
        this.localStorageService.setItem('resultArray', JSON.stringify(onestContent))
        this.sound.play();
        setTimeout(() => {
          this.router.navigate(['explore'])
        }, 1000);
      })
    }
  }

  // Define a single method to handle both favoriting and sharing
  handleClick(event: Event, action: string) {
    const clickedElement = event.currentTarget as HTMLElement;
    event.stopPropagation();
    if (clickedElement.tagName === 'BUTTON') {
      if (action === 'favorite') {
        if (!clickedElement.classList.contains('favorite')) {
          clickedElement.classList.add('favorite');
        } else {
          clickedElement.classList.remove('favorite');
        }
      }
    }
  }

  handlePitaraSelection(event: any) {
    this.selectedTab = this.allChips[event.index];
    // this.localStorageService.setTabIndex(event.index);
    if (this.selectedTab.key === 'saaspitara') {
      this.saasArray = this.saaspitara;
    } else if (this.selectedTab.key === 'onestpitara') {
      this.saasArray = this.onestpitara;
    } else if (this.selectedTab.key === 'mypitara') {
      this.saasArray = this.mypitara;
    }
    this.data = this.saasArray
  }
}

