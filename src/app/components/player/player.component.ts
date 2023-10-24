import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { playerConfig } from './playerConfig';
import * as _ from 'lodash-es';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as $ from "jquery";
import { UtilService } from 'src/app/services/utils.service';


@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() playerData: any
  @ViewChild('preview') previewElement: ElementRef;

  enableSBPlayer: boolean = false;
  enablePlayBtn: boolean = true;
  showPlayIcon = true;
  mobileViewDisplay = 'block';
  isMobileOrTab: boolean;
  playerConfiguration: any;
  isYoutube:boolean=false
  @Output() closePlayerscreen = new EventEmitter();
  @HostListener('window:orientationchange', ['$event'])
  public handleOrientationChange() {
    const screenType = _.get(screen, 'orientation.type');
    if (screenType === 'portrait-primary' || screenType === 'portrait-secondary') {
      this.closeFullscreen();
      if (this.isMobileOrTab) {
        this.closePlayerscreen.emit('closed')
      }
    }
  }
  constructor(private deviceDetectorService: DeviceDetectorService, public utils: UtilService) { }

  ngOnInit(): void {
    this.isMobileOrTab = this.deviceDetectorService.isMobile() || this.deviceDetectorService.isTablet();
    console.log('device is ', this.isMobileOrTab)
    this.setContentData();
  }

  ngAfterViewInit() {
    this.loadPlayer();
    //if (this.isMobileOrTab) {
      this.rotatePlayer();
   // }
  }

  loadPlayer() {
    if(!this.isYoutube){
    const src = this.previewElement.nativeElement.src;
    this.previewElement.nativeElement.src = '';
    this.previewElement.nativeElement.src = src;
    }else{
     this.previewElement.nativeElement.src = this.playerConfiguration.metadata.artifactUrl;
    }
    this.previewElement.nativeElement.onload = () => {
      setTimeout(() => {
        this.adjustPlayerHeight();
        this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfiguration);
      }, 1000);
    };

    this.previewElement.nativeElement.onload = () => {
      this.adjustPlayerHeight();
      this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfiguration);
    };
  }

  setContentData() {
    playerConfig.context['contentId'] = this.playerData.identifier
    playerConfig.context['channel'] = this.playerData.channel
    playerConfig.context['app'] = [this.playerData.channel]
    playerConfig.context['tags'] = [this.playerData.channel]
    playerConfig.context['contextRollup'] = this.playerData.channel

    this.playerConfiguration = {
      context: playerConfig.context,
      config: playerConfig.config,
      metadata: this.playerData,
      data: {}
    };

    if (this.playerConfiguration.metadata.mimeType === 'application/vnd.ekstep.ecml-archive') {
      this.utils.contentRead(this.playerConfiguration.metadata.identifier).subscribe((data) => {
        return this.playerConfiguration.data = data?.result?.content?.body
      }
      )
      console.log('config::', this.playerConfiguration)
    }else if(this.playerConfiguration.metadata.mimeType === 'video/x-youtube'){
      this.isYoutube=true
    }

  }

  /** when user clicks on close button
  * this method will let the player to exit from fullscreen mode and
  * 1. video thumbnail will be shown for single content
  * 2. content-details page will be shown ( for multi-result dial-code search flow)
  */
  closeFullscreen() {
    /** to exit the fullscreen mode */
    if (document.fullscreenElement && document['exitFullscreen']) {
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
    this.closePlayerscreen.emit('closed');
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
  /**
  * Adjust player height after load
  */
  adjustPlayerHeight() {
    const playerWidth = $('#contentPlayer').width();
    if (playerWidth) {
      let height = playerWidth * (9 / 16);
      let width = playerWidth * (16 / 9);

      if (_.get(screen, 'orientation.type') === 'landscape-primary' && this.isMobileOrTab) {
        height = window.innerHeight;
        width = window.innerWidth
      }
      $('#contentPlayer').css('height', height + 'px');
      $('#contentPlayer').css('width', width + 'px');
    }
  }
}
