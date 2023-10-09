import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  data: any = JSON.parse(localStorage.getItem('filteredArray'));
  icon:any;
showPlayer: boolean=false;
playerSource:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // this.icon="https://i.ytimg.com/vi/CeTMThtg0VQ/maxresdefault.jpg"
    this.showPlayer=false
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
