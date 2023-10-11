import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  playerSource: any;
  data: any
  isPlayerInit: boolean=false;
  isContentInit: boolean=true;
  value: any;
  localStorageSubscription: Subscription;

  constructor(public dialog: MatDialog, private localStorageService: LocalStorageService) {
    this.localStorageSubscription = this.localStorageService.getLocalStorageChanges().subscribe(
      (value) => {
        this.data = JSON.parse(localStorage.getItem('filteredArray'));
      }
    );
  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('filteredArray'));
  }

  openPlayer(content: any) {
    this.value = content;
    console.log(this.value, 'test');
    this.isPlayerInit = true;
    this.isContentInit = false;
  }
  exitPlayerPage() {
    this.isPlayerInit = false;
    this.isContentInit = true;
  }
}
