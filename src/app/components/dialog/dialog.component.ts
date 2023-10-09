import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafePipe } from "src/app/pipes/safe.pipe";


import { samplePlayerConfig } from './videoPlayerConfig';
import { playerConfig } from './pdfPlayerConfig';
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../dialog/dialog.component.html',
  styleUrls: ['../dialog/dialog.component.scss']

})
export class DialogComponent implements OnInit,AfterViewInit {
  @ViewChild('video',{ static: true }) video!: ElementRef;
  @ViewChild('pdf',{ static: true }) pdf!: ElementRef;
  videoPlayer: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
     this.data.artifactUrl='https://www.youtube.com/embed/Y36dbTLopMw'
   
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();

      if (this.data.mimeType === 'video/mp4' || this.data.mimeType === 'video/webm' ||this.data.mimeType==='video/x-youtube') {
        this.loadVideoPlayer()
      } else if (this.data.mimeType === 'application/pdf') {
        this.loadPDFPlayer()
      } else {
        alert("unable to player ")
      }

    console.log(this.pdf);
    console.log(this.video)

    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  navigate(url: any) {
    window.open(url)
  }

  loadPDFPlayer() {
    const pdfElement = document.createElement('sunbird-pdf-player');
    playerConfig.metadata = {
      compatibilityLevel: 4,
      artifactUrl: this.data.artifactUrl,
      identifier: this.data.identifier,
      name: this.data.name,
      streamingUrl: this.data.artifactUrl,
    }
    pdfElement.setAttribute('player-config', JSON.stringify(playerConfig));

    pdfElement.addEventListener('playerEvent', (event) => {
      console.log("On playerEvent", event);
    });

    pdfElement.addEventListener('telemetryEvent', (event) => {
      console.log("On telemetryEvent", event);
    });
    this.pdf.nativeElement.append(pdfElement);
  }

  loadVideoPlayer() {
    this.videoPlayer = document.createElement('sunbird-video-player');
    samplePlayerConfig.metadata = {
      mimeType: this.data.mimeType,
      artifactUrl: this.data.artifactUrl,
      identifier: this.data.identifier,
      name: this.data.name,
      streamingUrl: '',
    }
    this.videoPlayer.setAttribute('player-config', JSON.stringify(samplePlayerConfig));

    this.videoPlayer.addEventListener('playerEvent', (event: any) => {
      console.log("On playerEvent", event);
    });
  }

   resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
}
