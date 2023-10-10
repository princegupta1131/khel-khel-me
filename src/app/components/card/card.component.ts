import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
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

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: 'auto',
      width: '80rem',
      data: data

    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
