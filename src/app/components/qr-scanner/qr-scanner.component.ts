import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class QrScannerComponent{
  information: any;

  constructor() {}

  public scanSuccessHandler($event: any) {
    this.information = $event;
    console.log(this.information)
  }
}

