TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362",
       "yaw": -21.61,
       "backwardYaw": -180,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfov": 360,
        "vfov": 180,
        "hfovMin": 60,
        "id": "panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5",
          "yaw": 43.73,
          "backwardYaw": -180,
          "distance": 1
         }
        ],
        "frames": [
         {
          "stereoSphere": {
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_hq.jpeg"
            },
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_D40F9045_D917_ED14_41DB_EE3480CA974A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.73,
              "yaw": 43.73,
              "image": {
               "levels": [
                {
                 "height": 32,
                 "class": "ImageResourceLevel",
                 "width": 33,
                 "url": "media/panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.11
             }
            ],
            "items": [
             {
              "hfov": 3.73,
              "yaw": 43.73,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 64,
                 "class": "ImageResourceLevel",
                 "width": 67,
                 "url": "media/panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.11
             }
            ],
            "rollOverDisplay": false
           }
          ],
          "thumbnailUrl": "media/panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_t.jpg"
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "label": "360 (C)1",
        "partial": false,
        "thumbnailUrl": "media/panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_t.jpg",
        "class": "Panorama"
       },
       "yaw": -99.05,
       "backwardYaw": -180,
       "distance": 1
      }
     ],
     "frames": [
      {
       "stereoSphere": {
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_hq.jpeg"
         },
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_D4CA212D_D8F3_2F14_41E0_DC5FE6386713",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.96,
           "yaw": -21.61,
           "image": {
            "levels": [
             {
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 53,
              "url": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -8.97
          }
         ],
         "items": [
          {
           "hfov": 5.96,
           "yaw": -21.61,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 101,
              "class": "ImageResourceLevel",
              "width": 107,
              "url": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -8.97
          }
         ],
         "rollOverDisplay": false
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_D5C58A76_D913_1DF7_41E2_EC2AB4478845",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.23,
           "yaw": -99.05,
           "image": {
            "levels": [
             {
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -5.28
          }
         ],
         "items": [
          {
           "hfov": 5.23,
           "yaw": -99.05,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 93,
              "url": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -5.28
          }
         ],
         "rollOverDisplay": false
        }
       ],
       "thumbnailUrl": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_t.jpg"
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "label": "360 (D) EXTERIOR",
     "partial": false,
     "thumbnailUrl": "media/panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_t.jpg",
     "class": "Panorama"
    },
    "yaw": 135.74,
    "backwardYaw": -180,
    "distance": 1
   }
  ],
  "frames": [
   {
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_D31DF57A_D8F1_17FC_41D3_516DFAED4D63",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.04,
        "yaw": 135.74,
        "image": {
         "levels": [
          {
           "height": 57,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.5
       }
      ],
      "items": [
       {
        "hfov": 6.04,
        "yaw": 135.74,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "class": "ImageResourceLevel",
           "width": 113,
           "url": "media/panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.5
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "thumbnailUrl": "media/panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_t.jpg"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "360 (B)",
  "partial": false,
  "thumbnailUrl": "media/panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_t.jpg",
  "class": "Panorama"
 },
 {
  "buttonRestart": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_rollover.png"
  },
  "displayPlaybackBar": true,
  "buttonPause": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "toggle",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "buttonMoveRight": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_rollover.png"
  },
  "buttonCardboardView": {
   "paddingTop": 0,
   "class": "IconButton",
   "width": 70,
   "borderRadius": 0,
   "maxWidth": 70,
   "mode": "push",
   "iconURL": "skin/IconButton_D463160F_D913_1515_41D6_D175860B1B69.png",
   "height": 70,
   "horizontalAlign": "center",
   "minWidth": 1,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_D463160F_D913_1515_41D6_D175860B1B69",
   "backgroundOpacity": 0,
   "maxHeight": 70,
   "borderSize": 0,
   "minHeight": 1,
   "verticalAlign": "middle"
  },
  "gyroscopeEnabled": true,
  "buttonMoveDown": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_rollover.png"
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_rollover.png"
  },
  "touchControlMode": "drag_rotation",
  "buttonMoveLeft": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_rollover.png"
  },
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "buttonZoomOut": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_rollover.png"
  },
  "buttonZoomIn": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_rollover.png"
  },
  "buttonMoveUp": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_rollover.png"
  },
  "buttonPlayRight": {
   "paddingTop": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33.png",
   "horizontalAlign": "center",
   "minWidth": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
   "backgroundOpacity": 0,
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_rollover.png"
  },
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_D2D388C9_D8F3_1D1C_41DD_90EBCC988362_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_D38CBB36_D8F1_1374_41E7_451FAFEF867E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_D3D198A9_D8F3_1D1D_41BB_7694BD646DA5_camera"
   }
  ]
 },
 {
  "class": "MediaAudio",
  "id": "audio_D5C724D8_D91F_153B_41C8_CC8C496035F3",
  "audio": {
   "mp3Url": "media/audio_D5C724D8_D91F_153B_41C8_CC8C496035F3.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_D5C724D8_D91F_153B_41C8_CC8C496035F3.ogg"
  },
  "autoplay": true
 }
], "children": [
 {
  "playbackBarHeadBorderColor": "#000000",
  "paddingTop": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderSize": 2,
  "borderRadius": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "progressBarOpacity": 1,
  "progressBottom": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadOpacity": 1,
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderColor": "#AAAAAA",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderSize": 1,
  "progressOpacity": 1,
  "progressBorderSize": 2,
  "borderSize": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderRadius": 4,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBottom": 10,
  "toolTipPaddingTop": 4,
  "playbackBarHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "width": "100%",
  "progressBarBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarRight": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "toolTipFontSize": 12,
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "transitionMode": "blending",
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingRight": 0,
  "toolTipFontColor": "#606060",
  "top": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 4,
  "toolTipPaddingBottom": 4,
  "toolTipShadowVerticalLength": 0,
  "id": "MainViewer",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressRight": 10,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 50,
  "toolTipPaddingRight": 6,
  "left": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressHeight": 20,
  "playbackBarOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "progressLeft": 10,
  "class": "ViewerArea",
  "playbackBarHeadBorderSize": 0
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
     "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
     "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
     "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
     {
      "children": [
       "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
       "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
       "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15"
      ],
      "paddingTop": 0,
      "class": "Container",
      "width": 40,
      "borderRadius": 0,
      "height": "100%",
      "gap": 4,
      "horizontalAlign": "center",
      "minWidth": 20,
      "shadow": false,
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "paddingLeft": 0,
      "id": "Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
      "backgroundOpacity": 0,
      "overflow": "hidden",
      "borderSize": 0,
      "layout": "vertical",
      "minHeight": 20,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarMargin": 2
     },
     "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
     "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
     {
      "paddingTop": 0,
      "class": "IconButton",
      "mode": "toggle",
      "width": 40,
      "borderRadius": 0,
      "height": 40,
      "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC.png",
      "horizontalAlign": "center",
      "minWidth": 0,
      "shadow": false,
      "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC_pressed.png",
      "transparencyActive": true,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
      "backgroundOpacity": 0,
      "borderSize": 0,
      "minHeight": 0,
      "verticalAlign": "middle"
     },
     "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375"
    ],
    "paddingTop": 0,
    "class": "Container",
    "width": 421,
    "borderRadius": 0,
    "height": "100%",
    "gap": 4,
    "horizontalAlign": "center",
    "minWidth": 421,
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "paddingBottom": 0,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
    "backgroundOpacity": 0,
    "overflow": "hidden",
    "borderSize": 0,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2
   },
   "this.IconButton_D463160F_D913_1515_41D6_D175860B1B69"
  ],
  "paddingTop": 0,
  "class": "Container",
  "width": "100%",
  "borderRadius": 0,
  "height": 142,
  "gap": 10,
  "horizontalAlign": "center",
  "minWidth": 1,
  "shadow": false,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "paddingBottom": 0,
  "bottom": "0%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "overflow": "scroll",
  "borderSize": 0,
  "layout": "horizontal",
  "minHeight": 1,
  "left": "0%",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "scrollBarMargin": 2
 }
], 
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "start": "this.playAudioList([this.audio_D5C724D8_D91F_153B_41C8_CC8C496035F3]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_D463160F_D913_1515_41D6_D175860B1B69], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 },
 "gap": 10,
 "horizontalAlign": "left",
 "minWidth": 20,
 "shadow": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "overflow": "visible",
 "borderSize": 0,
 "layout": "absolute",
 "minHeight": 20,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "mouseWheelEnabled": true
})