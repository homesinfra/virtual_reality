TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "overlays": [
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1D5FABCF_10DF_0BD9_4192_4614BA626A8B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 3.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 15.11,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 34,
           "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.89
       }
      ],
      "items": [
       {
        "yaw": 15.11,
        "hfov": 3.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 78,
           "width": 68,
           "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.89
       }
      ]
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_t.jpg",
  "hfov": 360,
  "hfovMin": 60,
  "label": "cassia flat_a1 - Panorama",
  "class": "Panorama",
  "id": "panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E",
  "vfov": 180,
  "partial": false,
  "hfovMax": 120,
  "pitch": 0
 },
 {
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "buttonPause": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "toggle",
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonMoveLeft": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 32,
   "width": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonMoveUp": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 32,
   "width": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "gyroscopeEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 32,
   "width": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "buttonRestart": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonMoveRight": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 32,
   "width": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonPlayRight": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 32,
   "width": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonMoveDown": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 32,
   "width": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  },
  "buttonCardboardView": {
   "borderRadius": 0,
   "paddingRight": 0,
   "maxWidth": 35,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 35,
   "paddingLeft": 0,
   "height": 23,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "minHeight": 1,
   "maxHeight": 23,
   "cursor": "hand",
   "iconURL": "skin/IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E.png",
   "class": "IconButton",
   "id": "IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E",
   "data": {
    "name": "IconButton1773"
   },
   "paddingBottom": 0,
   "minWidth": 1,
   "transparencyActive": false
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayLeft": {
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "paddingLeft": 0,
   "height": 40,
   "width": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "minHeight": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "class": "IconButton",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "id": "panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1D05342E_10DC_FC5B_41B0_B02B5CD00E2B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 4.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -171.47,
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 41,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.24
       }
      ],
      "items": [
       {
        "yaw": -171.47,
        "hfov": 4.02,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 80,
           "width": 82,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.24
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
        "click": "this.startPanoramaWithCamera(this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938, this.camera_0AC1D697_1135_0E3A_41A8_B2DAEB23D961)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1E88C35D_10FF_062F_41AA_BC4E249C3BD1",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 2.88,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.78,
        "image": {
         "levels": [
          {
           "height": 32,
           "width": 29,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.85
       }
      ],
      "items": [
       {
        "yaw": 2.78,
        "hfov": 2.88,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 65,
           "width": 59,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.85
       }
      ]
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_t.jpg"
   }
  ],
  "vfov": 180,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": 169.1,
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "id": "panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "frames": [
      {
       "overlays": [
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
           "click": "this.startPanoramaWithCamera(this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94, this.camera_0D9F57B3_1135_0E7A_41AE_A6B9297D9DAF)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1E3158A2_10D5_1448_41A1_3FCCEE7D5368",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "hfov": 3.97,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 169.1,
           "image": {
            "levels": [
             {
              "height": 46,
              "width": 46,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -40.06
          }
         ],
         "items": [
          {
           "yaw": 169.1,
           "hfov": 3.97,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 93,
              "width": 92,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -40.06
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
           "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_0DAE17C4_1135_0E1E_4168_86A1C0DB4C0E)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1FAAB515_10FB_023E_417A_6A1F24AB2D34",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "hfov": 2.92,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 110.5,
           "image": {
            "levels": [
             {
              "height": 31,
              "width": 29,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -28.59
          }
         ],
         "items": [
          {
           "yaw": 110.5,
           "hfov": 2.92,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 62,
              "width": 59,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -28.59
          }
         ]
        }
       ],
       "stereoSphere": {
        "levels": [
         {
          "height": 6434,
          "width": 6434,
          "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 4002,
          "width": 4002,
          "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_t.jpg"
      }
     ],
     "vfov": 180,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 2.78,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94",
       "yaw": 169.1,
       "distance": 1
      },
      {
       "backwardYaw": -176.59,
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938, this.camera_0D644776_1135_0EFA_41A0_78939A3B46E6)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1FFEB434_10FB_027E_41A2_9C7E5A565C88",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "hfov": 4.48,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -176.59,
              "image": {
               "levels": [
                {
                 "height": 43,
                 "width": 43,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -24.31
             }
            ],
            "items": [
             {
              "yaw": -176.59,
              "hfov": 4.48,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 86,
                 "width": 87,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -24.31
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3, this.camera_0D49473A_1135_0E6A_41AF_9CC3D4A488C9)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1F16C2DC_10F5_062D_4191_C85F0350F554",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "hfov": 3.81,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 56.54,
              "image": {
               "levels": [
                {
                 "height": 38,
                 "width": 38,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -27.08
             }
            ],
            "items": [
             {
              "yaw": 56.54,
              "hfov": 3.81,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 77,
                 "width": 76,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -27.08
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E, this.camera_0D461750_1135_0E36_419A_61446E35DD74)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_007F54F4_10CF_03FD_4186_9A1D2AF93071",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "hfov": 3.04,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -34.8,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 29,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -23.57
             }
            ],
            "items": [
             {
              "yaw": -34.8,
              "hfov": 3.04,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 79,
                 "width": 59,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -23.57
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887, this.camera_0D55B760_1135_0E16_4164_2EECCA1F6648)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_04ED94DD_10D7_022F_417D_716DE4357FF2",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "hfov": 2.83,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -82.37,
              "image": {
               "levels": [
                {
                 "height": 35,
                 "width": 28,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -25.6
             }
            ],
            "items": [
             {
              "yaw": -82.37,
              "hfov": 2.83,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 70,
                 "width": 56,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -25.6
             }
            ]
           }
          ],
          "stereoSphere": {
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 4002,
             "width": 4002,
             "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_t.jpg"
         }
        ],
        "vfov": 180,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": 175.03,
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_0D72B787_1135_0E1A_41A5_0E0F88D4A651)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0080E38C_10F5_062D_419B_5A7D97D856D5",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "hfov": 5.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 175.03,
                 "image": {
                  "levels": [
                   {
                    "height": 50,
                    "width": 55,
                    "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -28.79
                }
               ],
               "items": [
                {
                 "yaw": 175.03,
                 "hfov": 5.48,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 100,
                    "width": 111,
                    "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -28.79
                }
               ]
              }
             ],
             "stereoSphere": {
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 4002,
                "width": 4002,
                "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_t.jpg"
            }
           ],
           "vfov": 180,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 56.54,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 175.03,
             "distance": 1
            }
           ],
           "label": "cassia flat_e5 - Panorama",
           "thumbnailUrl": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_t.jpg"
          },
          "yaw": 56.54,
          "distance": 1
         },
         {
          "backwardYaw": 172.97,
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 6)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0, this.camera_0D0116EC_1135_0FEE_41A7_096D54393E55)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0062B848_10CB_0216_419A_344CA9C73818",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "hfov": 3.74,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 48.16,
                 "image": {
                  "levels": [
                   {
                    "height": 43,
                    "width": 35,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -18.42
                }
               ],
               "items": [
                {
                 "yaw": 48.16,
                 "hfov": 3.74,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 86,
                    "width": 70,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -18.42
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_0D1E1702_1135_0E1A_41AF_E842F083DED9)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_01F42FFC_10CB_1DEE_419C_B74216EA12EC",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "hfov": 4.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 172.97,
                 "image": {
                  "levels": [
                   {
                    "height": 65,
                    "width": 55,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -38.95
                }
               ],
               "items": [
                {
                 "yaw": 172.97,
                 "hfov": 4.84,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 131,
                    "width": 111,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -38.95
                }
               ]
              }
             ],
             "stereoSphere": {
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 4002,
                "width": 4002,
                "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_t.jpg"
            }
           ],
           "vfov": 180,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 169.48,
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_1A3224B3_10D4_FC49_4193_D734858513E0",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "overlays": [
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E, this.camera_0AF366DC_1135_0E2E_41B0_9E2AA6EDC538)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0119EC50_10CB_0236_41AE_E81F75ED258D",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "hfov": 4.95,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 169.48,
                    "image": {
                     "levels": [
                      {
                       "height": 53,
                       "width": 49,
                       "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.22
                   }
                  ],
                  "items": [
                   {
                    "yaw": 169.48,
                    "hfov": 4.95,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 107,
                       "width": 98,
                       "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.22
                   }
                  ]
                 }
                ],
                "stereoSphere": {
                 "levels": [
                  {
                   "height": 6434,
                   "width": 6434,
                   "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 4002,
                   "width": 4002,
                   "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_t.jpg"
               }
              ],
              "vfov": 180,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 48.16,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
                "yaw": 169.48,
                "distance": 1
               }
              ],
              "label": "cassia flat_g7 - Panorama",
              "thumbnailUrl": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_t.jpg"
             },
             "yaw": 48.16,
             "distance": 1
            },
            {
             "backwardYaw": -34.8,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 172.97,
             "distance": 1
            }
           ],
           "label": "cassia flat_f6 - Panorama",
           "thumbnailUrl": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_t.jpg"
          },
          "yaw": -34.8,
          "distance": 1
         },
         {
          "backwardYaw": 165.83,
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7, this.camera_0AE956B8_1135_0E76_41A0_9EC368418BEA)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_03ECC769_10D5_0E17_4190_D9CDCDA58DC4",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "hfov": 3.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -75.03,
                 "image": {
                  "levels": [
                   {
                    "height": 58,
                    "width": 47,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -49.46
                }
               ],
               "items": [
                {
                 "yaw": -75.03,
                 "hfov": 3.48,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 116,
                    "width": 95,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -49.46
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938, this.camera_0AC746A2_1135_0E1A_419C_CF45E88072CE)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_05E76002_10D5_0215_4195_4EAE869A2C84",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "hfov": 4.4,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 2.85,
                 "image": {
                  "levels": [
                   {
                    "height": 58,
                    "width": 47,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -34.93
                }
               ],
               "items": [
                {
                 "yaw": 2.85,
                 "hfov": 4.4,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 116,
                    "width": 95,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -34.93
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_0ADD06AD_1135_0E6E_41B0_DB7B1C413391)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_04F43813_10D5_023A_41AA_684C18E24B2B",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "hfov": 5.11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 165.83,
                 "image": {
                  "levels": [
                   {
                    "height": 58,
                    "width": 47,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -17.73
                }
               ],
               "items": [
                {
                 "yaw": 165.83,
                 "hfov": 5.11,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 116,
                    "width": 95,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -17.73
                }
               ]
              }
             ],
             "stereoSphere": {
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 4002,
                "width": 4002,
                "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_t.jpg"
            }
           ],
           "vfov": 180,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 159.41,
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "overlays": [
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748, this.camera_0D3A0729_1135_0E16_41A2_0E26E28DE9FD)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_016CD181_10D7_0216_4160_F2707B2A1FF8",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "hfov": 3.86,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 53.48,
                    "image": {
                     "levels": [
                      {
                       "height": 55,
                       "width": 49,
                       "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -45.67
                   }
                  ],
                  "items": [
                   {
                    "yaw": 53.48,
                    "hfov": 3.86,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 111,
                       "width": 98,
                       "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -45.67
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887, this.camera_0D2D0713_1135_0E3A_4180_D4790C21B059)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0255E409_10DF_0217_41AB_6258AEEA2C5C",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "hfov": 4.36,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 159.41,
                    "image": {
                     "levels": [
                      {
                       "height": 68,
                       "width": 58,
                       "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -47.92
                   }
                  ],
                  "items": [
                   {
                    "yaw": 159.41,
                    "hfov": 4.36,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 136,
                       "width": 116,
                       "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -47.92
                   }
                  ]
                 }
                ],
                "stereoSphere": {
                 "levels": [
                  {
                   "height": 6434,
                   "width": 6434,
                   "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 4002,
                   "width": 4002,
                   "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_t.jpg"
               }
              ],
              "vfov": 180,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 2.85,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
                "yaw": 159.41,
                "distance": 1
               },
               {
                "backwardYaw": 176.25,
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                       "click": "this.startPanoramaWithCamera(this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938, this.camera_0DE90813_1135_023B_41AE_CFF763460B80)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_025A1394_10D5_063E_419E_9CA57352F16E",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "hfov": 3.35,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 176.25,
                       "image": {
                        "levels": [
                         {
                          "height": 49,
                          "width": 40,
                          "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -42.2
                      }
                     ],
                     "items": [
                      {
                       "yaw": 176.25,
                       "hfov": 3.35,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 98,
                          "width": 80,
                          "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -42.2
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                       "click": "this.startPanoramaWithCamera(this.panorama_1A003000_10D7_1447_4184_4E998CDB4600, this.camera_0DDB0802_1135_0215_41AC_1D5C3FC2DC9B)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_01419AD7_10DB_063A_41AF_D4F051DC3FE9",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "hfov": 3.1,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -70.87,
                       "image": {
                        "levels": [
                         {
                          "height": 35,
                          "width": 29,
                          "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -19.99
                      }
                     ],
                     "items": [
                      {
                       "yaw": -70.87,
                       "hfov": 3.1,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 70,
                          "width": 58,
                          "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -19.99
                      }
                     ]
                    }
                   ],
                   "stereoSphere": {
                    "levels": [
                     {
                      "height": 6434,
                      "width": 6434,
                      "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 4002,
                      "width": 4002,
                      "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_t.jpg"
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 160.43,
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_1A003000_10D7_1447_4184_4E998CDB4600",
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                          "click": "this.startPanoramaWithCamera(this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748, this.camera_0D81079D_1135_0E2E_41A6_507AB2F80E2B)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_02C52B8B_10DB_062B_41B0_CB4377A87CB9",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "maps": [
                         {
                          "hfov": 3.71,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 160.43,
                          "image": {
                           "levels": [
                            {
                             "height": 43,
                             "width": 36,
                             "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -24.52
                         }
                        ],
                        "items": [
                         {
                          "yaw": 160.43,
                          "hfov": 3.71,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 86,
                             "width": 72,
                             "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -24.52
                         }
                        ]
                       }
                      ],
                      "stereoSphere": {
                       "levels": [
                        {
                         "height": 6434,
                         "width": 6434,
                         "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 4002,
                         "width": 4002,
                         "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_t.jpg"
                     }
                    ],
                    "vfov": 180,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -70.87,
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
                      "yaw": 160.43,
                      "distance": 1
                     }
                    ],
                    "label": "cassia flat_j10 - Panorama",
                    "thumbnailUrl": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_t.jpg"
                   },
                   "yaw": -70.87,
                   "distance": 1
                  },
                  {
                   "backwardYaw": 53.48,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
                   "yaw": 176.25,
                   "distance": 1
                  }
                 ],
                 "label": "cassia flat_i9 - Panorama",
                 "thumbnailUrl": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_t.jpg"
                },
                "yaw": 53.48,
                "distance": 1
               }
              ],
              "label": "cassia flat_h8 - Panorama",
              "thumbnailUrl": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_t.jpg"
             },
             "yaw": 2.85,
             "distance": 1
            },
            {
             "backwardYaw": -82.37,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 165.83,
             "distance": 1
            },
            {
             "backwardYaw": -147.98,
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "overlays": [
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 12)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E, this.camera_0DCC97EC_1135_0DED_4184_34E097614D40)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_06EFBF05_10DD_FE1E_412C_6F64D298AB14",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "hfov": 5.96,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -4.32,
                    "image": {
                     "levels": [
                      {
                       "height": 54,
                       "width": 59,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -27.09
                   }
                  ],
                  "items": [
                   {
                    "yaw": -4.32,
                    "hfov": 5.96,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 108,
                       "width": 119,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -27.09
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887, this.camera_0DBC07DA_1135_0E2A_41A4_265D093AFBEF)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_03D06566_10DB_021D_41A2_4075BD1E3312",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "hfov": 2.94,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -147.98,
                    "image": {
                     "levels": [
                      {
                       "height": 56,
                       "width": 43,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -53.1
                   }
                  ],
                  "items": [
                   {
                    "yaw": -147.98,
                    "hfov": 2.94,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 112,
                       "width": 87,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -53.1
                   }
                  ]
                 }
                ],
                "stereoSphere": {
                 "levels": [
                  {
                   "height": 6434,
                   "width": 6434,
                   "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 4002,
                   "width": 4002,
                   "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_t.jpg"
               }
              ],
              "vfov": 180,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": -75.03,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
                "yaw": -147.98,
                "distance": 1
               },
               {
                "backwardYaw": -117.78,
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
                       "click": "this.startPanoramaWithCamera(this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7, this.camera_0AE526C3_1135_0E1A_4191_0208CE2C130E)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_021A425F_10DD_062B_41AF_F140F9D3D584",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "hfov": 4.71,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -117.78,
                       "image": {
                        "levels": [
                         {
                          "height": 51,
                          "width": 48,
                          "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -29.04
                      }
                     ],
                     "items": [
                      {
                       "yaw": -117.78,
                       "hfov": 4.71,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 102,
                          "width": 96,
                          "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -29.04
                      }
                     ]
                    }
                   ],
                   "stereoSphere": {
                    "levels": [
                     {
                      "height": 6434,
                      "width": 6434,
                      "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 4002,
                      "width": 4002,
                      "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_t.jpg"
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -4.32,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
                   "yaw": -117.78,
                   "distance": 1
                  }
                 ],
                 "label": "cassia flat_n13 - Panorama",
                 "thumbnailUrl": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_t.jpg"
                },
                "yaw": -4.32,
                "distance": 1
               }
              ],
              "label": "cassia flat_l12 - Panorama",
              "thumbnailUrl": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_t.jpg"
             },
             "yaw": -75.03,
             "distance": 1
            }
           ],
           "label": "cassia flat_k11 - Panorama",
           "thumbnailUrl": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_t.jpg"
          },
          "yaw": -82.37,
          "distance": 1
         },
         {
          "backwardYaw": 110.5,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
          "yaw": -176.59,
          "distance": 1
         }
        ],
        "label": "cassia flat_d4 - Panorama",
        "thumbnailUrl": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_t.jpg"
       },
       "yaw": 110.5,
       "distance": 1
      }
     ],
     "label": "cassia flat_c3 - Panorama",
     "thumbnailUrl": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_t.jpg"
    },
    "yaw": 2.78,
    "distance": 1
   }
  ],
  "label": "cassia flat_b2 - Panorama",
  "thumbnailUrl": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A389B88_10D5_3447_41AB_583E86766D2E_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A3224B3_10D4_FC49_4193_D734858513E0_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A003000_10D7_1447_4184_4E998CDB4600",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A003000_10D7_1447_4184_4E998CDB4600_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A023950_10D7_34C8_41A7_99729DBFF887_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
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
    "camera": "this.panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_camera",
    "media": "this.panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_camera",
    "media": "this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_camera",
    "media": "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_camera",
    "media": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_camera",
    "media": "this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E_camera",
    "media": "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0_camera",
    "media": "this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_camera",
    "media": "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_camera",
    "media": "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A003000_10D7_1447_4184_4E998CDB4600_camera",
    "media": "this.panorama_1A003000_10D7_1447_4184_4E998CDB4600",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887_camera",
    "media": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_camera",
    "media": "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_camera",
    "media": "this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AC1D697_1135_0E3A_41A8_B2DAEB23D961",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AC746A2_1135_0E1A_419C_CF45E88072CE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0ADD06AD_1135_0E6E_41B0_DB7B1C413391",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.63,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AE956B8_1135_0E76_41A0_9EC368418BEA",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 32.02,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AE526C3_1135_0E1A_4191_0208CE2C130E",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.68,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AF366DC_1135_0E2E_41B0_9E2AA6EDC538",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -131.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D0116EC_1135_0FEE_41A7_096D54393E55",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.52,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D1E1702_1135_0E1A_41AF_E842F083DED9",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.2,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D2D0713_1135_0E3A_4180_D4790C21B059",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.15,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D3A0729_1135_0E16_41A2_0E26E28DE9FD",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D49473A_1135_0E6A_41AF_9CC3D4A488C9",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D461750_1135_0E36_419A_61446E35DD74",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D55B760_1135_0E16_4164_2EECCA1F6648",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D644776_1135_0EFA_41A0_78939A3B46E6",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.5,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D72B787_1135_0E1A_41A5_0E0F88D4A651",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.46,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D81079D_1135_0E2E_41A6_507AB2F80E2B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.13,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0D9F57B3_1135_0E7A_41AE_A6B9297D9DAF",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.22,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0DAE17C4_1135_0E1E_4168_86A1C0DB4C0E",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.41,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0DBC07DA_1135_0E2A_41A4_265D093AFBEF",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 104.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0DCC97EC_1135_0DED_4184_34E097614D40",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.22,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0DDB0802_1135_0215_41AC_1D5C3FC2DC9B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0DE90813_1135_023B_41AE_CFF763460B80",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.52,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "A Bright Future (Shorter Version)"
  },
  "autoplay": true,
  "class": "MediaAudio",
  "id": "audio_078A97B8_1135_0E76_41A2_8ED900F03F0F",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_078A97B8_1135_0E76_41A2_8ED900F03F0F.mp3",
   "oggUrl": "media/audio_078A97B8_1135_0E76_41A2_8ED900F03F0F.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressBorderRadius": 4,
  "toolTipShadowColor": "#333333",
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBorderSize": 0,
  "shadow": false,
  "playbackBarBottom": 10,
  "progressLeft": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "progressBarBorderRadius": 4,
  "toolTipPaddingRight": 6,
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBorderRadius": 0,
  "minWidth": 100,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowColor": "#000000",
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "100%",
  "toolTipFontWeight": "normal",
  "playbackBarLeft": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "width": "100%",
  "playbackBarHeadHeight": 30,
  "playbackBarRight": 0,
  "progressBottom": 1,
  "toolTipPaddingLeft": 6,
  "toolTipOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipBorderRadius": 3,
  "progressBarBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "top": 0,
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowOpacity": 1,
  "class": "ViewerArea",
  "id": "MainViewer",
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingTop": 4,
  "progressRight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "progressOpacity": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBorderSize": 2,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadow": true
 },
 {
  "verticalAlign": "middle",
  "borderRadius": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "height": 142,
  "contentOpaque": false,
  "width": "100%",
  "paddingTop": 0,
  "layout": "horizontal",
  "gap": 10,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "bottom": "0%",
  "class": "Container",
  "data": {
   "name": "Container44746"
  },
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "minWidth": 1,
  "left": "0%",
  "children": [
   {
    "verticalAlign": "middle",
    "borderRadius": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "contentOpaque": false,
    "width": 360,
    "paddingTop": 0,
    "height": "95.07%",
    "layout": "horizontal",
    "gap": 4,
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 20,
    "class": "Container",
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "creationPolicy": "delayed",
    "paddingBottom": 0,
    "minWidth": 360,
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "contentOpaque": false,
      "width": 40,
      "paddingTop": 0,
      "height": "100%",
      "layout": "vertical",
      "gap": 4,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "minHeight": 20,
      "class": "Container",
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "creationPolicy": "delayed",
      "paddingBottom": 0,
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "scrollBarVisible": "rollOver",
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "backgroundOpacity": 0,
      "mode": "toggle",
      "paddingLeft": 0,
      "height": 40,
      "width": 40,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "shadow": false,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "minHeight": 0,
      "cursor": "hand",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "class": "IconButton",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "paddingBottom": 0,
      "minWidth": 0,
      "transparencyActive": false
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "hidden"
   },
   "this.IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "overflow": "scroll"
 }
], 
 "borderRadius": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "height": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "gap": 10,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "shadow": false,
 "minHeight": 20,
 "width": "100%",
 "scrollBarMargin": 2,
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "layout": "absolute",
 "class": "Player",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "creationPolicy": "delayed",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "start": "this.playAudioList([this.audio_078A97B8_1135_0E76_41A2_8ED900F03F0F]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible"
})