export const playerConfig = {
  context: {
    "mode": "play",
    "pdata": {
      "id": "khelkhelme.portal",
      "ver": "4.9.0",
      "pid": "sunbird.contentplayer"
    },
    "contentId": "do_11319720466326323219",
    "sid": "I9mq-3VN49rS3uz9J6ucVXxz5Cwf20HE",
    "uid": "5a587cc1-e018-4859-a0a8-e842650b9d64",
    "timeDiff": 0,
    "contextRollup": {
      "l1": "01309282781705830427",
    },
    "channel": "01309282781705830427",
    "did": "34a18ad500734f9f94078f92f2403d5b",
    "dims": [
    ],
    "tags": [],
    "app": [],
    "cdata": [],
    "userData": {
      "firstName": "Test",
      "lastName": "User"
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
      showStartPage: false,
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
        },
        {
          id:"org.ekstep.navigation",
          ver:1,
          type: 'plugin'
        }
      ],
      sideMenu: {
        showShare: false,
        showDownload: false,
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