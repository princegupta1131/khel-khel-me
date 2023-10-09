import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { samplePlayerConfig } from './videoPlayerConfig';
import { playerConfig } from './pdfPlayerConfig';

@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() playerData: any
  @ViewChild('video') video: ElementRef;
  @ViewChild('pdf') pdf: ElementRef;
  videoPlayer: any;
  enableSBPlayer: boolean = false;
  enablePlayBtn: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.enableSBPlayer = true;
    console.log('ss', this.playerData)
    if (this.playerData.mimeType === 'video/mp4' || this.playerData.mimeType === 'video/webm'|| this.playerData.mimeType==="video/x-youtube") {
        this.loadVideoPlayer()
      } else if (this.playerData.mimeType === 'application/pdf') {
        this.loadPDFPlayer()
      } else {
        alert("unable to player ")
      }
  }

  loadPDFPlayer() {
    const pdfElement = document.createElement('sunbird-pdf-player');
    playerConfig.metadata = {
      compatibilityLevel: 4,
      artifactUrl: this.playerData.artifactUrl,
      identifier: this.playerData.identifier,
      name: this.playerData.name,
      streamingUrl: this.playerData.artifactUrl,
    }
    pdfElement.setAttribute('player-config', JSON.stringify(playerConfig));

    pdfElement.addEventListener('playerEvent', (event) => {
      console.log("On playerEvent", event);
    });
    pdfElement.addEventListener('telemetryEvent', (event: any) => {
      console.log("On telemetryEvent", event);
    });
    this.pdf.nativeElement.append(pdfElement);
  }

  loadVideoPlayer() {
    this.videoPlayer = document.createElement('sunbird-video-player');
    samplePlayerConfig.metadata = {
      mimeType: this.playerData.mimeType,
      artifactUrl: this.playerData.artifactUrl,
      identifier: this.playerData.identifier,
      name: this.playerData.title,
      streamingUrl: '',
    }
    this.videoPlayer.setAttribute('player-config', JSON.stringify(samplePlayerConfig));

    this.videoPlayer.addEventListener('playerEvent', (event: any) => {
      console.log("On playerEvent", event);
    });
    this.videoPlayer.addEventListener('telemetryEvent', (event: any) => {
      console.log("On telemetryEvent", event);
    });
    this.video.nativeElement.append(this.videoPlayer);
  }

}
