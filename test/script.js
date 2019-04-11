TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_t.jpg",
  "label": "1entry gate inside front of shopping center",
  "vfov": 180,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7",
  "hfovMax": 120,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_B5BFBE82_B90C_3899_41DE_90FA5B5C943D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 2.52,
        "yaw": -83.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.95
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.52,
        "yaw": -83.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 64,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.95
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37502"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonRestart": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 40,
   "height": 40,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37500"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonPlayLeft": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 40,
   "height": 40,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37501"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37506"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "gyroscopeVerticalDraggingEnabled": false,
  "buttonPause": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingBottom": 0,
   "width": 40,
   "height": 40,
   "paddingLeft": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37505"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 40,
   "height": 40,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37508"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37507"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37504"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37499"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "paddingLeft": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "borderRadius": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37510"
   },
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingBottom": 0,
   "width": 35,
   "height": 23,
   "paddingLeft": 0,
   "maxWidth": 35,
   "borderRadius": 0,
   "paddingTop": 0,
   "paddingRight": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "cursor": "hand",
   "iconURL": "skin/IconButton_B5F0079B_B90C_28AF_41D4_35A3610CD7E2.png",
   "id": "IconButton_B5F0079B_B90C_28AF_41D4_35A3610CD7E2",
   "backgroundOpacity": 0,
   "maxHeight": 23,
   "data": {
    "name": "IconButton1773"
   },
   "transparencyActive": false,
   "minWidth": 1,
   "shadow": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_t.jpg",
  "label": "2entry gate",
  "vfov": 180,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151",
  "hfovMax": 120,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_B4EA45EE_B90C_6868_414E_A146897FEEEE",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.02,
        "yaw": -22.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.11
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.02,
        "yaw": -22.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.11
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B3CF2025_B90C_2798_41E6_CD052E98BDD7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151",
    "camera": "this.panorama_B3C18A51_B90D_FBB8_41E4_B43A2C4BF151_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)"
   }
  ]
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipPaddingRight": 6,
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "toolTipPaddingLeft": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "paddingLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "progressBorderSize": 2,
  "paddingRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "minHeight": 50,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBottom": 10,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingBottom": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadHeight": 30,
  "paddingTop": 0,
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
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "class": "Container",
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "borderSize": 0,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "width": 40,
      "height": "100%",
      "paddingLeft": 0,
      "borderRadius": 0,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "paddingRight": 0,
      "gap": 4,
      "layout": "vertical",
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "minHeight": 20,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "backgroundOpacity": 0,
      "data": {
       "name": "Container37503"
      },
      "scrollBarOpacity": 0.5,
      "creationPolicy": "delayed",
      "minWidth": 20,
      "shadow": false,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "class": "IconButton",
      "borderSize": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingBottom": 0,
      "width": 40,
      "height": 40,
      "paddingLeft": 0,
      "borderRadius": 0,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "minHeight": 0,
      "cursor": "hand",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button37509"
      },
      "transparencyActive": false,
      "minWidth": 0,
      "shadow": false
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "borderSize": 0,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "width": 360,
    "height": "95.07%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "paddingRight": 0,
    "gap": 4,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "minHeight": 20,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "backgroundOpacity": 0,
    "data": {
     "name": "Container37498"
    },
    "scrollBarOpacity": 0.5,
    "creationPolicy": "delayed",
    "minWidth": 360,
    "shadow": false,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_B5F0079B_B90C_28AF_41D4_35A3610CD7E2"
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "height": 142,
  "width": "100%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "paddingRight": 0,
  "gap": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "minHeight": 1,
  "bottom": "0%",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container44746"
  },
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "shadow": false,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_B5F0079B_B90C_28AF_41D4_35A3610CD7E2], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "vrPolyfillScale": 1,
 "height": "100%",
 "width": "100%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "shadow": false,
 "contentOpaque": false,
 "overflow": "visible"
})