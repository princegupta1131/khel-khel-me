import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { samplePlayerConfig } from './videoPlayerConfig';
import { playerConfig } from './pdfPlayerConfig';
import * as _ from 'lodash-es';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() playerData: any
  @ViewChild('video') video: ElementRef;
  @ViewChild('pdf') pdf: ElementRef;
  @ViewChild('preview') previewElement: ElementRef;

  videoPlayer: any;
  enableSBPlayer: boolean = false;
  enablePlayBtn: boolean = true;
  showPlayIcon = true;
  mobileViewDisplay = 'block';
  isMobileOrTab: boolean;
  playerConfiguration: any;


  @HostListener('window:orientationchange', ['$event'])
  public handleOrientationChange() {
    const screenType = _.get(screen, 'orientation.type');
    if (screenType === 'portrait-primary' || screenType === 'portrait-secondary') {
      this.closeFullscreen();
    }
  }
  constructor(private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobileOrTab = this.deviceDetectorService.isMobile() || this.deviceDetectorService.isTablet();
    console.log('device is ', this.isMobileOrTab)
    console.log(this.playerData)

    this.setContentData();
  }

  ngAfterViewInit() {
    // this.enableSBPlayer = true;
    // console.log('ss', this.playerData)
    // if (this.playerData.mimeType === 'video/mp4' || this.playerData.mimeType === 'video/webm') {
    //     this.loadVideoPlayer()
    //     if (this.isMobileOrTab) {
    //       this.rotatePlayer();
    //     }
    //   } else if (this.playerData.mimeType === 'application/pdf') {
    //     this.loadPDFPlayer()
    //     if (this.isMobileOrTab) {
    //       this.rotatePlayer();
    //     }
    //     if (this.isMobileOrTab) {
    //     this.rotatePlayer();
    //     }
    //   }

    this.loadPlayer()
  }

  loadPlayer() {
    console.log('loadplayer')
    const src = this.previewElement.nativeElement.src;
    this.previewElement.nativeElement.src = '';
    this.previewElement.nativeElement.src = src;
    this.previewElement.nativeElement.onload = () => {
      setTimeout(() => {

        this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfiguration);
        this.previewElement.nativeElement.removeEventListener('renderer:telemetry:event', telemetryEvent => this.test(telemetryEvent));
        this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
          if (resp.data && typeof resp.data === 'object') {
            if (resp.data['player.pdf-renderer.error']) {
              const pdfError = resp.data['player.pdf-renderer.error'];
              if (pdfError.name === 'MissingPDFException') {
                alert('This Pdf has some issue, please try with the differnet pdf content');
              }
            } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
              alert('Max limit reached to attempt the quiz');
            }
          }
        });
      }, 1000);
    };

    this.previewElement.nativeElement.onload = () => {
      console.log('onloadd')
      this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfiguration);
    };
  }
  test(telemetryEvent: any) {
console.log('hi')  }

  setContentData() {
    console.log('setContentDataabove')
    this.playerConfiguration = {
      context: playerConfig.context,
      config: playerConfig.config,
      metadata: this.playerData,
      data: {}
    };

console.log('playerconfig',this.playerConfiguration)
    if (this.playerConfiguration.metadata.mimeType === 'application/vnd.ekstep.ecml-archive') {
      this.playerConfiguration.data = this.playerData?.body;
    }
    console.log('setContentData')

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
    console.log('pc', samplePlayerConfig)

    this.videoPlayer.setAttribute('player-config', JSON.stringify(samplePlayerConfig));

    this.videoPlayer.addEventListener('playerEvent', (event: any) => {
      console.log("On playerEvent", event);
    });
    this.videoPlayer.addEventListener('telemetryEvent', (event: any) => {
      console.log("On telemetryEvent", event);
    });
    this.video.nativeElement.append(this.videoPlayer);
  }

  /** when user clicks on close button
  * this method will let the player to exit from fullscreen mode and
  * 1. video thumbnail will be shown for single content
  * 2. content-details page will be shown ( for multi-result dial-code search flow)
  */
  closeFullscreen() {
    /** to exit the fullscreen mode */
    if (document['exitFullscreen']) {
      document['exitFullscreen']();
    } else if (document['mozCancelFullScreen']) { /* Firefox */
      document['mozCancelFullScreen']();
    } else if (document['webkitExitFullscreen']) { /* Chrome, Safari and Opera */
      document['webkitExitFullscreen']();
    } else if (document['msExitFullscreen']) { /* IE/Edge */
      document['msExitFullscreen']();
    }

    /** to change the view of the content-details page */
    this.showPlayIcon = true;
    // this.closePlayerEvent.emit();
  }


  /** this method checks for the browser capability to be fullscreen via if-else ladder
   * if match found, it will turn the player along will be close button into fullscreen and then
   * rotate it to landscape mode
   */
  rotatePlayer() {
    setTimeout(() => {
      const playVideo: any = document.querySelector('#playerFullscreen');
      try {
        if (playVideo.requestFullscreen) {
          playVideo.requestFullscreen();
        } else if (playVideo.mozRequestFullScreen) { /* Firefox */
          playVideo.mozRequestFullScreen();
        } else if (playVideo.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          playVideo.webkitRequestFullscreen();
        } else if (playVideo.msRequestFullscreen) { /* IE/Edge */
          playVideo.msRequestFullscreen();
        }
        screen.orientation.lock('landscape');
      } catch (error) { }
    });
  }
}
