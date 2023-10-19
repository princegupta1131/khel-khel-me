import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';
import { Howl } from 'howler';

@Component({
  selector: 'app-pcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardPComponent implements OnInit {

  data: any;
  result: any;
  sound: any;
  favBtnColor = 'default'; // Initially set to the default color
  constructor(public router: Router, public utils: UtilService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.data = JSON.parse(this.localStorageService.getItem('result'));
    this.localStorageService.removeItem('resultArray')
    this.sound = new Howl({
      src: ['assets/audio/windchime.mp3'],
    });
  }

  unboxPitara(value) {
    this.utils.setTitle(value.name);
    this.utils.collectionRead(value.identifier).subscribe((data) => {
      this.result = data.result.content
      this.localStorageService.setItem('resultArray', JSON.stringify(this.result.children[0].children))
      this.sound.play();
      setTimeout(() => {
        this.router.navigate(['explore'])
      }, 1000);
    })
  }

  // Define a single method to handle both favoriting and sharing
  handleClick(event: Event, action: string) {
    event.stopPropagation();
    if (action === 'favorite') {
      if (this.favBtnColor === 'default') {
        this.favBtnColor = 'primary';
        alert('Added to favorites');
      } else {
        this.favBtnColor = 'default';
        alert('Removed from favorites');
      }
    } else if (action === 'share') {
      alert('Share to');
      // Add your custom logic for sharing here
    }
  }

}
