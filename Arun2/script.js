TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_9BB714B4_9118_7C50_41D7_CC159A622F25.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9FB169C7_911B_F43F_4171_D7F70B7F64DE",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.75,
        "yaw": -43.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "width": 66,
           "url": "media/panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.34
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -43.56,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 133,
           "width": 133,
           "url": "media/panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.34
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "arun_111 - Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_9BB714B4_9118_7C50_41D7_CC159A622F25",
  "vfov": 180,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_t.jpg",
  "pitch": 0
 },
 {
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_acceleration",
  "buttonMoveLeft": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37502"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37501"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveRight": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37507"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveDown": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37506"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37505"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37508"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37499"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveUp": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37504"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonRestart": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37500"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "preloadEnabled": false,
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "borderRadius": 0,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37510"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonCardboardView": {
   "maxWidth": 35,
   "paddingRight": 0,
   "maxHeight": 23,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 35,
   "paddingLeft": 0,
   "height": 23,
   "paddingTop": 0,
   "borderRadius": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_9DA453B2_9119_B450_41D6_148D72A21FC6.png",
   "id": "IconButton_9DA453B2_9119_B450_41D6_148D72A21FC6",
   "backgroundOpacity": 0,
   "data": {
    "name": "IconButton1773"
   },
   "paddingBottom": 0,
   "minWidth": 1,
   "transparencyActive": false,
   "minHeight": 1,
   "borderSize": 0
  }
 },
 {
  "id": "panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_9ECC94E1_9118_FDF0_41E0_F9C33EC65DEC",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 6.73,
        "yaw": 166.15,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "width": 66,
           "url": "media/panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 166.15,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 133,
           "width": 133,
           "url": "media/panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.72
       }
      ]
     }
    ]
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "arun_222 - Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D",
  "vfov": 180,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_t.jpg",
  "pitch": 0
 },
 {
  "id": "panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_9BB714B4_9118_7C50_41D7_CC159A622F25",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9BB714B4_9118_7C50_41D7_CC159A622F25_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_9BA28E78_9118_ACD0_41B2_CCC0075BBB4D_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)"
   }
  ]
 },
 {
  "data": {
   "label": "A Bright Future (No Drums)"
  },
  "id": "audio_82B6E6CE_9118_5C30_41C9_F8572D6E41A5",
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_82B6E6CE_9118_5C30_41C9_F8572D6E41A5.mp3",
   "oggUrl": "media/audio_82B6E6CE_9118_5C30_41C9_F8572D6E41A5.ogg"
  },
  "autoplay": true
 }
], "children": [
 {
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "borderSize": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "paddingRight": 0,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "class": "ViewerArea",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "minHeight": 50,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingLeft": 0,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "width": "100%",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBarBorderRadius": 4,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "progressBorderRadius": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "top": 0,
  "progressLeft": 10,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#AAAAAA",
  "id": "MainViewer",
  "playbackBarBorderRadius": 4,
  "progressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "progressHeight": 20
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "width": 40,
      "paddingLeft": 0,
      "height": "100%",
      "paddingTop": 0,
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "scrollBarWidth": 10,
      "class": "Container",
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "layout": "vertical",
      "scrollBarMargin": 2,
      "shadow": false,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "backgroundOpacity": 0,
      "data": {
       "name": "Container37503"
      },
      "paddingBottom": 0,
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "borderSize": 0,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 40,
      "paddingLeft": 0,
      "height": 40,
      "paddingTop": 0,
      "borderRadius": 0,
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "horizontalAlign": "center",
      "shadow": false,
      "cursor": "hand",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button37509"
      },
      "paddingBottom": 0,
      "minWidth": 0,
      "transparencyActive": false,
      "minHeight": 0,
      "borderSize": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "width": 360,
    "paddingLeft": 0,
    "height": "95.07%",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "scrollBarWidth": 10,
    "class": "Container",
    "gap": 4,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "shadow": false,
    "layout": "horizontal",
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "backgroundOpacity": 0,
    "data": {
     "name": "Container37498"
    },
    "paddingBottom": 0,
    "minWidth": 360,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "borderSize": 0,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_9DA453B2_9119_B450_41D6_148D72A21FC6"
  ],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "height": 142,
  "width": "100%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "scrollBarWidth": 10,
  "class": "Container",
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "shadow": false,
  "bottom": "0%",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container44746"
  },
  "paddingBottom": 0,
  "minWidth": 1,
  "left": "0%",
  "minHeight": 1,
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.playAudioList([this.audio_82B6E6CE_9118_5C30_41C9_F8572D6E41A5]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_9DA453B2_9119_B450_41D6_148D72A21FC6], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "borderRadius": 0,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "creationPolicy": "delayed",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } }
 },
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "contentOpaque": false,
 "overflow": "visible"
})