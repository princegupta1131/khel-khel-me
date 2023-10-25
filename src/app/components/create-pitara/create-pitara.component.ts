import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-create-pitara',
  templateUrl: './create-pitara.component.html',
  styleUrls: ['./create-pitara.component.scss']
})
export class CreatePitaraComponent implements OnInit {

  constructor(public utils: UtilService) { }

  ngOnInit(): void {
    this.utils.setTitle('Create Your Own Pitara');

  }

}
