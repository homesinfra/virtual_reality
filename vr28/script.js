TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_1D5FABCF_10DF_0BD9_4192_4614BA626A8B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.52,
        "yaw": 15.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 34,
           "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -22.89
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 15.11,
        "hfov": 3.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 78,
           "class": "ImageResourceLevel",
           "width": 68,
           "url": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -22.89
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_t.jpg",
  "hfov": 360,
  "hfovMin": 60,
  "label": "cassia flat_a1 - Panorama",
  "id": "panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E",
  "vfov": 180,
  "partial": false,
  "hfovMax": 120,
  "pitch": 0
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "buttonPause": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "toggle",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonMoveLeft": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "buttonZoomIn": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonRestart": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonMoveRight": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonPlayRight": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "gyroscopeEnabled": true,
  "buttonMoveDown": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "width": 35,
   "paddingLeft": 0,
   "height": 23,
   "maxHeight": 23,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E.png",
   "verticalAlign": "middle",
   "horizontalAlign": "center",
   "shadow": false,
   "minWidth": 1,
   "cursor": "hand",
   "maxWidth": 35,
   "id": "IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E",
   "data": {
    "name": "IconButton1773"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 1
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayLeft": {
   "class": "IconButton",
   "borderRadius": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "shadow": false,
   "minWidth": 0,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "paddingBottom": 0,
   "transparencyActive": false,
   "minHeight": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
  "id": "panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_1D05342E_10DC_FC5B_41B0_B02B5CD00E2B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.02,
        "yaw": -171.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -29.24
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -171.47,
        "hfov": 4.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 82,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -29.24
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
        "click": "this.startPanoramaWithCamera(this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938, this.camera_019C4520_11BC_BB5D_41AD_998D7773A5EF)"
       }
      ],
      "id": "overlay_1E88C35D_10FF_062F_41AA_BC4E249C3BD1",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 2.88,
        "yaw": 2.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "class": "ImageResourceLevel",
           "width": 29,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -29.85
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 2.78,
        "hfov": 2.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -29.85
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": 169.1,
    "panorama": {
     "class": "Panorama",
     "id": "panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
           "click": "this.startPanoramaWithCamera(this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94, this.camera_0191D515_11BC_BB67_4178_7CB4F4FCAD85)"
          }
         ],
         "id": "overlay_1E3158A2_10D5_1448_41A1_3FCCEE7D5368",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.97,
           "yaw": 169.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 46,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -40.06
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 169.1,
           "hfov": 3.97,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 93,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -40.06
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
           "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_01A8F50A_11BC_BB6D_41AF_72A660A4E992)"
          }
         ],
         "id": "overlay_1FAAB515_10FB_023E_417A_6A1F24AB2D34",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 2.92,
           "yaw": 110.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 31,
              "class": "ImageResourceLevel",
              "width": 29,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.59
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 110.5,
           "hfov": 2.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 62,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -28.59
          }
         ]
        }
       ]
      }
     ],
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -176.59,
       "panorama": {
        "class": "Panorama",
        "id": "panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938, this.camera_01F90541_11BC_BBDF_41A7_86916DC50F8B)"
             }
            ],
            "id": "overlay_1FFEB434_10FB_027E_41A2_9C7E5A565C88",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.48,
              "yaw": -176.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -24.31
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -176.59,
              "hfov": 4.48,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 87,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -24.31
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3, this.camera_01D38556_11BC_BBE5_419E_B505F8DFFCCA)"
             }
            ],
            "id": "overlay_1F16C2DC_10F5_062D_4191_C85F0350F554",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.81,
              "yaw": 56.54,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 38,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.08
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 56.54,
              "hfov": 3.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 77,
                 "class": "ImageResourceLevel",
                 "width": 76,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -27.08
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E, this.camera_01F3E536_11BC_BBA5_41AD_4C45A5F6101B)"
             }
            ],
            "id": "overlay_007F54F4_10CF_03FD_4186_9A1D2AF93071",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.06,
              "yaw": -13.41,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.77
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -13.41,
              "hfov": 3.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 79,
                 "class": "ImageResourceLevel",
                 "width": 59,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -22.77
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887, this.camera_01E4154C_11BC_BBE5_417F_B0E20B431F32)"
             }
            ],
            "id": "overlay_04ED94DD_10D7_022F_417D_716DE4357FF2",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.83,
              "yaw": -82.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 35,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.6
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -82.37,
              "hfov": 2.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 70,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -25.6
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
              "click": "this.startPanoramaWithCamera(this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938, this.camera_0185752B_11BC_BBA3_41AF_5F6325A65A49)"
             }
            ],
            "id": "overlay_1D5E2933_11A7_6BA2_419F_8F6CA419D972",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.08,
              "yaw": -36.39,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 38,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.13
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -36.39,
              "hfov": 3.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 77,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -13.13
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 159.41,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748, this.camera_1E5EA4D3_11BC_BAE3_418A_3111EF2F9F70)"
                }
               ],
               "id": "overlay_016CD181_10D7_0216_4160_F2707B2A1FF8",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.86,
                 "yaw": 53.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -45.67
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 53.48,
                 "hfov": 3.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 111,
                    "class": "ImageResourceLevel",
                    "width": 98,
                    "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -45.67
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_1E5504C9_11BC_BAEF_4182_EF647946449F)"
                }
               ],
               "id": "overlay_0255E409_10DF_0217_41AB_6258AEEA2C5C",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.36,
                 "yaw": 159.41,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 68,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -47.92
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 159.41,
                 "hfov": 4.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 136,
                    "class": "ImageResourceLevel",
                    "width": 116,
                    "url": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -47.92
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -36.39,
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 159.41,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 176.25,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938, this.camera_01B794F4_11BC_BAA5_41B0_4330B984AD4D)"
                   }
                  ],
                  "id": "overlay_025A1394_10D5_063E_419E_9CA57352F16E",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 3.35,
                    "yaw": 176.25,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 49,
                       "class": "ImageResourceLevel",
                       "width": 40,
                       "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -42.2
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 176.25,
                    "hfov": 3.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 98,
                       "class": "ImageResourceLevel",
                       "width": 80,
                       "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -42.2
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A003000_10D7_1447_4184_4E998CDB4600, this.camera_01A224FF_11BC_BAA3_4191_3FA57463C78E)"
                   }
                  ],
                  "id": "overlay_01419AD7_10DB_063A_41AF_D4F051DC3FE9",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 3.1,
                    "yaw": -70.87,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 35,
                       "class": "ImageResourceLevel",
                       "width": 29,
                       "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -19.99
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -70.87,
                    "hfov": 3.1,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 70,
                       "class": "ImageResourceLevel",
                       "width": 58,
                       "url": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -19.99
                   }
                  ]
                 }
                ]
               }
              ],
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 53.48,
                "panorama": "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
                "yaw": 176.25,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 160.43,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_1A003000_10D7_1447_4184_4E998CDB4600",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "stereoSphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 6434,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_hq.jpeg"
                     },
                     {
                      "height": 4002,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                       "click": "this.startPanoramaWithCamera(this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748, this.camera_01DE1561_11BC_BBDF_41A0_AFEFB3A21AF7)"
                      }
                     ],
                     "id": "overlay_02C52B8B_10DB_062B_41B0_CB4377A87CB9",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.71,
                       "yaw": 160.43,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 43,
                          "class": "ImageResourceLevel",
                          "width": 36,
                          "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -24.52
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 160.43,
                       "hfov": 3.71,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 86,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -24.52
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -70.87,
                   "panorama": "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
                   "yaw": 160.43,
                   "distance": 1
                  }
                 ],
                 "label": "cassia flat_j10 - Panorama",
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_1A003000_10D7_1447_4184_4E998CDB4600_t.jpg"
                },
                "yaw": -70.87,
                "distance": 1
               }
              ],
              "label": "cassia flat_i9 - Panorama",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_t.jpg"
             },
             "yaw": 53.48,
             "distance": 1
            }
           ],
           "label": "cassia flat_h8 - Panorama",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_t.jpg"
          },
          "yaw": -36.39,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 172.97,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 6)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0, this.camera_00F48487_11BC_B962_4170_9036EE8B01B6)"
                }
               ],
               "id": "overlay_0062B848_10CB_0216_419A_344CA9C73818",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.74,
                 "yaw": 48.16,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 35,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -18.42
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 48.16,
                 "hfov": 3.74,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "class": "ImageResourceLevel",
                    "width": 70,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -18.42
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_0089E47C_11BC_B9A6_4161_6970A9DB8FFC)"
                }
               ],
               "id": "overlay_01F42FFC_10CB_1DEE_419C_B74216EA12EC",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.84,
                 "yaw": 172.97,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 65,
                    "class": "ImageResourceLevel",
                    "width": 55,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -38.95
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 172.97,
                 "hfov": 4.84,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 131,
                    "class": "ImageResourceLevel",
                    "width": 111,
                    "url": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -38.95
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -13.41,
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 172.97,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 169.48,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_1A3224B3_10D4_FC49_4193_D734858513E0",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E, this.camera_1E51C4BE_11BC_BAA5_41A7_D3FB5C8D776A)"
                   }
                  ],
                  "id": "overlay_0119EC50_10CB_0236_41AE_E81F75ED258D",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.95,
                    "yaw": 169.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 53,
                       "class": "ImageResourceLevel",
                       "width": 49,
                       "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -26.22
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 169.48,
                    "hfov": 4.95,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 107,
                       "class": "ImageResourceLevel",
                       "width": 98,
                       "url": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -26.22
                   }
                  ]
                 }
                ]
               }
              ],
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 48.16,
                "panorama": "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
                "yaw": 169.48,
                "distance": 1
               }
              ],
              "label": "cassia flat_g7 - Panorama",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_1A3224B3_10D4_FC49_4193_D734858513E0_t.jpg"
             },
             "yaw": 48.16,
             "distance": 1
            }
           ],
           "label": "cassia flat_f6 - Panorama",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_1A389B88_10D5_3447_41AB_583E86766D2E_t.jpg"
          },
          "yaw": -13.41,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 110.5,
          "panorama": "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
          "yaw": -176.59,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 165.83,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7, this.camera_1E4EF4E9_11BC_BAAF_41A8_40831029A83F)"
                }
               ],
               "id": "overlay_03ECC769_10D5_0E17_4190_D9CDCDA58DC4",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.35,
                 "yaw": -1.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -35.85
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -1.42,
                 "hfov": 4.35,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 116,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -35.85
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_1E4044DE_11BC_BAE5_41A2_A4A40861FF43)"
                }
               ],
               "id": "overlay_04F43813_10D5_023A_41AA_684C18E24B2B",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.11,
                 "yaw": 165.83,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -17.73
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 165.83,
                 "hfov": 5.11,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 116,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -17.73
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -82.37,
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 165.83,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -147.98,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 12)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E, this.camera_0136F577_11BC_BBA3_41B0_1259FB9058F0)"
                   }
                  ],
                  "id": "overlay_06EFBF05_10DD_FE1E_412C_6F64D298AB14",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.96,
                    "yaw": -4.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -27.09
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -4.32,
                    "hfov": 5.96,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 108,
                       "class": "ImageResourceLevel",
                       "width": 119,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -27.09
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
                    "click": "this.startPanoramaWithCamera(this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887, this.camera_0120A581_11BC_BB5F_41AB_E67549B83CE0)"
                   }
                  ],
                  "id": "overlay_03D06566_10DB_021D_41A2_4075BD1E3312",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 2.94,
                    "yaw": -147.98,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 43,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -53.1
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -147.98,
                    "hfov": 2.94,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "class": "ImageResourceLevel",
                       "width": 87,
                       "url": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -53.1
                   }
                  ]
                 }
                ]
               }
              ],
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -117.78,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "stereoSphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 6434,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_hq.jpeg"
                     },
                     {
                      "height": 4002,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
                       "click": "this.startPanoramaWithCamera(this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7, this.camera_1E6DB4B2_11BC_BABD_41A8_9DD61BEC13D8)"
                      }
                     ],
                     "id": "overlay_021A425F_10DD_062B_41AF_F140F9D3D584",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.71,
                       "yaw": -117.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 51,
                          "class": "ImageResourceLevel",
                          "width": 48,
                          "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -29.04
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -117.78,
                       "hfov": 4.71,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 102,
                          "class": "ImageResourceLevel",
                          "width": 96,
                          "url": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -29.04
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -4.32,
                   "panorama": "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
                   "yaw": -117.78,
                   "distance": 1
                  }
                 ],
                 "label": "cassia flat_n13 - Panorama",
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_t.jpg"
                },
                "yaw": -4.32,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -1.42,
                "panorama": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
                "yaw": -147.98,
                "distance": 1
               }
              ],
              "label": "cassia flat_l12 - Panorama",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_t.jpg"
             },
             "yaw": -1.42,
             "distance": 1
            }
           ],
           "label": "cassia flat_k11 - Panorama",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_1A023950_10D7_34C8_41A7_99729DBFF887_t.jpg"
          },
          "yaw": -82.37,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 175.03,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                 "click": "this.startPanoramaWithCamera(this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36, this.camera_01CB156C_11BC_BBA5_419A_6F03C1FFA208)"
                }
               ],
               "id": "overlay_0080E38C_10F5_062D_419B_5A7D97D856D5",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.48,
                 "yaw": 175.03,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "class": "ImageResourceLevel",
                    "width": 55,
                    "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.79
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 175.03,
                 "hfov": 5.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "class": "ImageResourceLevel",
                    "width": 111,
                    "url": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -28.79
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 56.54,
             "panorama": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
             "yaw": 175.03,
             "distance": 1
            }
           ],
           "label": "cassia flat_e5 - Panorama",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_t.jpg"
          },
          "yaw": 56.54,
          "distance": 1
         }
        ],
        "label": "cassia flat_d4 - Panorama",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_t.jpg"
       },
       "yaw": 110.5,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 2.78,
       "panorama": "this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94",
       "yaw": 169.1,
       "distance": 1
      }
     ],
     "label": "cassia flat_c3 - Panorama",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_t.jpg"
    },
    "yaw": 2.78,
    "distance": 1
   }
  ],
  "label": "cassia flat_b2 - Panorama",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A389B88_10D5_3447_41AB_583E86766D2E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A3224B3_10D4_FC49_4193_D734858513E0_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A003000_10D7_1447_4184_4E998CDB4600",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A003000_10D7_1447_4184_4E998CDB4600_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1A023950_10D7_34C8_41A7_99729DBFF887_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
 "this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
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
    "media": "this.panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1BF637F7_10D5_3BC9_41AF_9C587AC98C5E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A2D35C7_10D5_FFC8_419A_AAC169EF6D94_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A724ED3_10D5_0DC9_41AC_94F4088BD938_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A18E828_10D5_1458_41AA_17FB7F77CF36_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A1791BA_10D5_17BB_41AF_341FCD687FD3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A389B88_10D5_3447_41AB_583E86766D2E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A3224B3_10D4_FC49_4193_D734858513E0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A06AE17_10D7_0C48_4171_A72FD839C938_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A7CA712_10D7_1C4B_41A2_B55038488748_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_1A003000_10D7_1447_4184_4E998CDB4600",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A003000_10D7_1447_4184_4E998CDB4600_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1A023950_10D7_34C8_41A7_99729DBFF887_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1BC7C2EA_10D7_F5D8_41A5_2A0BD8C6E7C7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E",
    "camera": "this.panorama_1B9BBCDB_10D7_0DF9_419E_39BE298D685E_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0089E47C_11BC_B9A6_4161_6970A9DB8FFC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_00F48487_11BC_B962_4170_9036EE8B01B6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.52,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E6DB4B2_11BC_BABD_41A8_9DD61BEC13D8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.68,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E51C4BE_11BC_BAA5_41A7_D3FB5C8D776A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -131.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E5504C9_11BC_BAEF_4182_EF647946449F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.61,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E5EA4D3_11BC_BAE3_418A_3111EF2F9F70",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E4044DE_11BC_BAE5_41A2_A4A40861FF43",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.63,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E4EF4E9_11BC_BAAF_41A8_40831029A83F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 32.02,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01B794F4_11BC_BAA5_41B0_4330B984AD4D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.52,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01A224FF_11BC_BAA3_4191_3FA57463C78E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01A8F50A_11BC_BB6D_41AF_72A660A4E992",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.41,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0191D515_11BC_BB67_4178_7CB4F4FCAD85",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.22,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_019C4520_11BC_BB5D_41AD_998D7773A5EF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0185752B_11BC_BBA3_41AF_5F6325A65A49",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01F3E536_11BC_BBA5_41AD_4C45A5F6101B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01F90541_11BC_BBDF_41A7_86916DC50F8B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.5,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01E4154C_11BC_BBE5_417F_B0E20B431F32",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01D38556_11BC_BBE5_419E_B505F8DFFCCA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01DE1561_11BC_BBDF_41A0_AFEFB3A21AF7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.13,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_01CB156C_11BC_BBA5_419A_6F03C1FFA208",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.46,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0136F577_11BC_BBA3_41B0_1259FB9058F0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.22,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0120A581_11BC_BB5F_41AB_E67549B83CE0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.58,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "A Bright Future (Shorter Version)"
  },
  "class": "MediaAudio",
  "id": "audio_078A97B8_1135_0E76_41A2_8ED900F03F0F",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_078A97B8_1135_0E76_41A2_8ED900F03F0F.mp3",
   "oggUrl": "media/audio_078A97B8_1135_0E76_41A2_8ED900F03F0F.ogg"
  },
  "autoplay": true
 }
], "children": [
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "borderRadius": 0,
  "paddingRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowColor": "#333333",
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBorderSize": 0,
  "shadow": false,
  "playbackBarBottom": 10,
  "progressLeft": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipBorderColor": "#767676",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontColor": "#606060",
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeight": 20,
  "minHeight": 50,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
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
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipTextShadowBlurRadius": 3,
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
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "id": "MainViewer",
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "progressOpacity": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBorderSize": 2,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadow": true
 },
 {
  "class": "Container",
  "borderRadius": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "height": 142,
  "contentOpaque": false,
  "width": "100%",
  "paddingTop": 0,
  "layout": "horizontal",
  "gap": 10,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "bottom": "0%",
  "data": {
   "name": "Container44746"
  },
  "creationPolicy": "delayed",
  "paddingBottom": 0,
  "left": "0%",
  "minHeight": 1,
  "children": [
   {
    "class": "Container",
    "borderRadius": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "width": 360,
    "paddingLeft": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "height": "95.07%",
    "layout": "horizontal",
    "gap": 4,
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minWidth": 360,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "creationPolicy": "delayed",
    "paddingBottom": 0,
    "minHeight": 20,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "class": "Container",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "verticalAlign": "middle",
      "width": 40,
      "paddingLeft": 0,
      "contentOpaque": false,
      "paddingTop": 0,
      "height": "100%",
      "layout": "vertical",
      "gap": 4,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "creationPolicy": "delayed",
      "paddingBottom": 0,
      "minHeight": 20,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "class": "IconButton",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "backgroundOpacity": 0,
      "mode": "toggle",
      "verticalAlign": "middle",
      "width": 40,
      "paddingLeft": 0,
      "height": 40,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "shadow": false,
      "minWidth": 0,
      "cursor": "hand",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "paddingBottom": 0,
      "transparencyActive": false,
      "minHeight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "overflow": "hidden"
   },
   "this.IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "overflow": "scroll"
 }
], 
 "class": "Player",
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
 "scrollBarMargin": 2,
 "width": "100%",
 "minWidth": 20,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } }
 },
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "creationPolicy": "delayed",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "start": "this.playAudioList([this.audio_078A97B8_1135_0E76_41A2_8ED900F03F0F]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_059ACB5F_10CF_062B_41AD_E69D7BAEF61E], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "visible"
})