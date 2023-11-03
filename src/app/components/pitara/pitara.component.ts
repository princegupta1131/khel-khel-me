import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';
import { Howl } from 'howler';

@Component({
  selector: 'app-pitara',
  templateUrl: './pitara.component.html',
  styleUrls: ['./pitara.component.scss']
})

export class PitaraComponent implements OnInit {
  data: any;
  result: any;
  sound: any;
  constructor(public router: Router, public utils: UtilService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.data = JSON.parse(this.localStorageService.getItem('result'));
    this.localStorageService.removeItem('resultArray')
    this.sound = new Howl({
      src: ['assets/audio/windchime.mp3'],
    });
  }

  unboxPitara(value) {
    console.log('val', value)
    this.utils.setTitle(value.name);
    if (!value.provider_id) {
      this.utils.saasCollectionRead(value.identifier).subscribe((data) => {
        this.result = data.result.content
        this.localStorageService.setItem('resultArray', JSON.stringify(this.result.children[0].children))
        this.sound.play();
        setTimeout(() => {
          this.router.navigate(['explore'])
        }, 1000);
      })
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
}
