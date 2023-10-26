import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';
import { Howl } from 'howler';

@Component({
  selector: 'app-my-pitara',
  templateUrl: './my-pitara.component.html',
  styleUrls: ['./my-pitara.component.scss']
})
export class MyPitaraComponent implements OnInit {
  contents;
  mypitara: any;
  result: any;
  sound: any;
  constructor(public router: Router,public utils: UtilService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.utils.setTitle('myPitara');
    this.sound = new Howl({
      src: ['assets/audio/windchime.mp3'],
    });
    this.mypitara = JSON.parse(this.localStorageService.getItem('mypitara'));

    this.utils.searchSaas().subscribe(data => {
      this.contents = data.result.content.filter((content: any) => content.mimeType !== 'application/vnd.ekstep.content-collection')
      this.localStorageService.setItem('contents', JSON.stringify(this.contents))
    })
  }

  unboxPitara(value) {
    console.log('val', value)
    this.utils.setTitle(value.name);
    if (!value.provider_id) {
        this.result = value.children
        this.localStorageService.setItem('resultArray', JSON.stringify(this.result))
        this.sound.play();
        setTimeout(() => {
          this.router.navigate(['explore'])
        }, 1000);
      }
    }
}
