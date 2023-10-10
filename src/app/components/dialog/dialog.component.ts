import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafePipe } from "src/app/pipes/safe.pipe";
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: '../dialog/dialog.component.html',
    styleUrls: ['../dialog/dialog.component.scss']
  
  })
  export class DialogComponent {
    constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
  
    ) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    navigate(url: any) {
      window.open(url)
    }
  }
  