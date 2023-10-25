import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-create-pitara',
  templateUrl: './create-pitara.component.html',
  styleUrls: ['./create-pitara.component.scss']
})
export class CreatePitaraComponent implements OnInit {
  data: any;
  targetItems = [];
  pitaraName = '';
  constructor(public utils: UtilService, public router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.utils.setTitle('Create Your Own Pitara');
    this.data = JSON.parse(this.localStorageService.getItem('contents'));
  }

  onDrop(event: any) {
    this.utils.drop(event);
    console.log(this.targetItems, '--')
    this.data.splice(event.previousIndex, 1);
  }
  
  createPitara() {
    var sUnique = (performance.now() + '').replace('.', '');
    var fiveDigitNumber = parseInt(sUnique.slice(0, 5), 10);

    let myPitaras = this.localStorageService.getItem('mypitara');
    const existingPitara = myPitaras ? JSON.parse(myPitaras) : [];
    const newPitara =
    {
      name: this.pitaraName,
      identifier: fiveDigitNumber,
      children: [
        ...this.targetItems
      ]
    }

    existingPitara.push(newPitara);
    this.localStorageService.setItem('mypitara', JSON.stringify(existingPitara))
    this.router.navigate(['mypitara'])
    console.log(newPitara)
  }
}
