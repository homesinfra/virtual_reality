TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "label": "Photo1",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_10341B64_1A2A_EDE5_4170_DA26A2BC2DC3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_0_HS_0_0.png",
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 86
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -89.49,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -26.35,
        "hfov": 4.65
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_0_HS_0_0_0_map.gif",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 43
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -26.35,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -89.49,
        "hfov": 4.65
       }
      ]
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_hq.jpeg",
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000
      },
      {
       "url": "media/panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60.jpeg",
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_t.jpg"
   }
  ],
  "adjacentPanoramas": [
   {
    "panorama": {
     "vfov": 180,
     "label": "Photo2",
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_101858AD_1A29_AB67_41B1_ECCDF8B4C77E",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_0_HS_1_0.png",
              "height": 84,
              "class": "ImageResourceLevel",
              "width": 95
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 9.44,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -27.84,
           "hfov": 5.09
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_0_HS_1_0_0_map.gif",
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 47
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -27.84,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 9.44,
           "hfov": 5.09
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_107E9B85_1A36_ED27_419E_A4860A937B76",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_0_HS_0_0.png",
              "height": 85,
              "class": "ImageResourceLevel",
              "width": 97
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -175.71,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -23.11,
           "hfov": 5.37
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_0_HS_0_0_0_map.gif",
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 48
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -23.11,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -175.71,
           "hfov": 5.37
          }
         ]
        }
       ],
       "stereoSphere": {
        "levels": [
         {
          "url": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_hq.jpeg",
          "height": 6000,
          "class": "ImageResourceLevel",
          "width": 6000
         },
         {
          "url": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545.jpeg",
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 3217
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_t.jpg"
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": {
        "vfov": 180,
        "label": "Photo3",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_101DC98D_1A39_AD27_41B2_970D463F80C0",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_0_HS_0_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 58.58,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -23.82,
              "hfov": 4.74
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_0_HS_0_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -23.82,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 58.58,
              "hfov": 4.74
             }
            ]
           }
          ],
          "stereoSphere": {
           "levels": [
            {
             "url": "media/panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_hq.jpeg",
             "height": 6000,
             "class": "ImageResourceLevel",
             "width": 6000
            },
            {
             "url": "media/panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8.jpeg",
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 3217
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_t.jpg"
         }
        ],
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545",
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": 58.58,
          "distance": 1
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "id": "panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8",
        "class": "Panorama",
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_t.jpg"
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -175.71,
       "distance": 1
      },
      {
       "panorama": "this.panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60",
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": 9.44,
       "distance": 1
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "id": "panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545",
     "class": "Panorama",
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_t.jpg"
    },
    "backwardYaw": -180,
    "class": "AdjacentPanorama",
    "yaw": -89.49,
    "distance": 1
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60",
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_t.jpg"
 },
 {
  "buttonRestart": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 40,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25"
  },
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "paddingRight": 0,
   "height": 23,
   "transparencyActive": false,
   "maxHeight": 23,
   "maxWidth": 35,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minHeight": 1,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "minWidth": 1,
   "class": "IconButton",
   "iconURL": "skin/IconButton_1260D366_1A2A_5DE5_41A5_723E9CEFB1BF.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 35,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_1260D366_1A2A_5DE5_41A5_723E9CEFB1BF"
  },
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "buttonZoomOut": {
   "height": 32,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 32,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB"
  },
  "displayPlaybackBar": true,
  "buttonMoveRight": {
   "height": 32,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 32,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C"
  },
  "buttonPause": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "toggle",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 40,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1"
  },
  "buttonMoveUp": {
   "height": 32,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 32,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689"
  },
  "buttonPlayLeft": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 40,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321"
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_acceleration",
  "buttonPlayRight": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 40,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B"
  },
  "buttonZoomIn": {
   "height": 32,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 32,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
  },
  "buttonMoveDown": {
   "height": 32,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 32,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
  },
  "buttonMoveLeft": {
   "height": 32,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 32,
   "minHeight": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08"
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545",
 {
  "id": "panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8",
 {
  "id": "panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1D69C62B_1A08_9D9B_417A_0C53B11D2B60_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1CE184E5_1A08_BE8F_4187_00CB50F80545_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1CE7F469_1A09_9D87_4195_E5E8B57DB9F8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "id": "audio_130D7213_1A09_B584_4186_6727FD8B4612",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_130D7213_1A09_B584_4186_6727FD8B4612.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_130D7213_1A09_B584_4186_6727FD8B4612.ogg"
  }
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "borderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "playbackBarLeft": 0,
  "id": "MainViewer",
  "width": "100%",
  "playbackBarHeadHeight": 30,
  "borderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 10,
  "toolTipShadowSpread": 0,
  "progressOpacity": 1,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "minHeight": 50,
  "progressHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderColor": "#AAAAAA"
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 142,
  "paddingRight": 0,
  "bottom": "0%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 4,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "95.07%",
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "minHeight": 20,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 360,
    "class": "Container",
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "overflow": "hidden",
    "paddingBottom": 0,
    "width": 360,
    "borderSize": 0,
    "horizontalAlign": "center",
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "scrollBarColor": "#000000",
      "gap": 4,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "contentOpaque": false,
      "paddingLeft": 0,
      "minHeight": 20,
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 20,
      "class": "Container",
      "scrollBarMargin": 2,
      "layout": "vertical",
      "backgroundOpacity": 0,
      "overflow": "hidden",
      "paddingBottom": 0,
      "width": 40,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ]
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "height": 40,
      "paddingRight": 0,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "mode": "toggle",
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 40,
      "minHeight": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B"
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ]
   },
   "this.IconButton_1260D366_1A2A_5DE5_41A5_723E9CEFB1BF"
  ]
 }
], 
 "scrollBarColor": "#000000",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.playAudioList([this.audio_130D7213_1A09_B584_4186_6727FD8B4612]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_1260D366_1A2A_5DE5_41A5_723E9CEFB1BF], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "scripts": {
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "getKey": function(key){    return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "registerKey": function(key, value){    window[key] = value; },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "minWidth": 20,
 "class": "Player",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "overflow": "visible",
 "paddingBottom": 0,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "id": "rootPlayer"
})