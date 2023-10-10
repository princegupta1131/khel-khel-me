import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  playerSource: any;
  data: any
  isPlayerInit: boolean;
  isContentInit: boolean;
  value: any;
  constructor(public dialog: MatDialog) {
    this.data = JSON.parse(localStorage.getItem('filteredArray'));

  }

  ngOnInit() {
  }

  // openDialog(data: any): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     height: 'auto',
  //     width: '80rem',
  //     data: data

  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //   });

  // }
  openPlayerPage(content: any) {
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
