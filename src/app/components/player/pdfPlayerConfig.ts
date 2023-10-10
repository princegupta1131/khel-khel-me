export const playerConfig = {
  context: {
    mode: 'play',
    authToken: '',
    sid: '7283cf2e-d215-9944-b0c5-269489c6fa56',
    did: '3c0a3724311fe944dec5df559cc4e006',
    uid: 'anonymous',
    channel: '505c7c48ac6dc1edc9b08f21db5a571d',
    pdata: {
      id: 'sunbird.portal',
      ver: '3.2.12',
      pid: 'sunbird-portal.contentplayer'
    },
    contextRollup: {
      l1: '505c7c48ac6dc1edc9b08f21db5a571d'
    },
    tags: [
      ''
    ],
    cdata: [],
    timeDiff: 0,
    objectRollup: {},
    host: '',
    endpoint: '',
    userData: {
      firstName: 'Harish',
      lastName: 'Gangula'
    }
  },
  config: {
    showEndPage: false,
      endPage: [
        {
          template: 'assessment',
          contentType: ['SelfAssess']
        }
      ],
      showStartPage: true,
      host: '',
      overlay: {
          enableUserSwitcher: true,
          showOverlay: true,
          showNext: true,
          showPrevious: true,
          showSubmit: false,
          showReload: false,
          showUser: false,
          menu: {
              showTeachersInstruction: false
          }
      },
      splash: {
        text: '',
        icon: '',
        bgImage: 'assets/icons/splacebackground_1.png',
        webLink: ''
      },
      apislug: '/action',
      repos: ['/assets/content-player/sunbird-plugins'],
      plugins: [
        {
          id: 'org.ekstep.iframeevent',
          ver: 1,
          type: 'plugin'
        },
        {
          id: 'org.ekstep.player.endpage',
          ver: 1.1,
          type: 'plugin'
        }
      ],
      sideMenu: {
        showShare: true,
        showDownload: true,
        showExit: false
      },
      enableTelemetryValidation: false
  },
  metadata: {
    compatibilityLevel: 4,
    artifactUrl: 'https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21361377330381619213052/artifact/cbse-1st-class-activity-sheet-21.pdf',
    identifier: 'do_31291455031832576019477',
    name: 'B301,ENGLISH_LANG_TERM 1_OPT',
    streamingUrl: 'https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21361377330381619213052/artifact/cbse-1st-class-activity-sheet-21.pdf',
  },
  };