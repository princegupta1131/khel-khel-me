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
playerSource:any;
  playerData: any;
  isPlayerInit: boolean=false;
  isContentInit: boolean=true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
   
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      // width: '500px',
      data: data
  
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  
}

openPlayerPage(value: any) {
  this.playerData = value;
  console.log(value, 'test');
  this.isPlayerInit = true;
  this.isContentInit = false;
}
exitPlayerPage() {
  this.isPlayerInit = false;
  this.isContentInit = true;
}
}
