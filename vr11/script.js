TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfov": 360,
  "vfov": 180,
  "hfovMax": 120,
  "label": "360 bedroom 1",
  "thumbnailUrl": "media/panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_t.jpg",
  "class": "Panorama",
  "id": "panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7",
  "hfovMin": 60,
  "frames": [
   {
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7.jpeg"
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_025AB73D_0CF5_9844_4190_4ECFBC267612",
      "items": [
       {
        "hfov": 6.13,
        "yaw": 134.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 121,
           "class": "ImageResourceLevel",
           "width": 111,
           "url": "media/panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.81
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.13,
        "yaw": 134.48,
        "image": {
         "levels": [
          {
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 55,
           "url": "media/panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.81
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "thumbnailUrl": "media/panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "buttonRestart": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_rollover.png"
  },
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "buttonPause": {
   "paddingTop": 0,
   "mode": "toggle",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_rollover.png"
  },
  "buttonCardboardView": {
   "maxHeight": 55,
   "paddingTop": 0,
   "width": 56,
   "borderRadius": 0,
   "height": 55,
   "mode": "push",
   "iconURL": "skin/IconButton_029B460D_0CD6_9845_4160_9A281471EE28.png",
   "minHeight": 1,
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_029B460D_0CD6_9845_4160_9A281471EE28",
   "maxWidth": 56,
   "minWidth": 1,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "gyroscopeEnabled": true,
  "buttonMoveDown": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_rollover.png"
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_rollover.png"
  },
  "buttonMoveLeft": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_rollover.png"
  },
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "buttonZoomOut": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_rollover.png"
  },
  "buttonZoomIn": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_rollover.png"
  },
  "buttonMoveUp": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_rollover.png"
  },
  "touchControlMode": "drag_rotation",
  "buttonPlayRight": {
   "paddingTop": 0,
   "mode": "push",
   "width": 40,
   "borderRadius": 0,
   "height": 40,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33.png",
   "minHeight": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_pressed.png",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "id": "IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_rollover.png"
  },
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_camera",
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfov": 360,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfov": 360,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC",
          "yaw": 35.57,
          "backwardYaw": -180,
          "distance": 1
         }
        ],
        "hfovMin": 60,
        "id": "panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003",
        "frames": [
         {
          "stereoSphere": {
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_hq.jpeg"
            },
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003.jpeg"
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_02400956_0CEA_88C7_418C_AE95B63A907C",
            "items": [
             {
              "hfov": 6.51,
              "yaw": 35.57,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 116,
                 "class": "ImageResourceLevel",
                 "width": 117,
                 "url": "media/panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.48
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.51,
              "yaw": 35.57,
              "image": {
               "levels": [
                {
                 "height": 58,
                 "class": "ImageResourceLevel",
                 "width": 58,
                 "url": "media/panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.48
             }
            ],
            "rollOverDisplay": false
           }
          ],
          "thumbnailUrl": "media/panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_t.jpg"
         }
        ],
        "pitch": 0,
        "partial": false,
        "label": "360 BEDROOM 3",
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_t.jpg",
        "class": "Panorama"
       },
       "yaw": 115.61,
       "backwardYaw": -180,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B",
       "yaw": -39.76,
       "backwardYaw": -180,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfov": 360,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC",
          "yaw": 169.86,
          "backwardYaw": -180,
          "distance": 1
         }
        ],
        "hfovMin": 60,
        "id": "panorama_02A33532_0BDE_8F64_4194_4108A9307B90",
        "frames": [
         {
          "stereoSphere": {
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_02A33532_0BDE_8F64_4194_4108A9307B90_hq.jpeg"
            },
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_02A33532_0BDE_8F64_4194_4108A9307B90.jpeg"
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_021353FA_0CEE_9FCC_4193_336F90FD69AB",
            "items": [
             {
              "hfov": 5.99,
              "yaw": 169.86,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 111,
                 "class": "ImageResourceLevel",
                 "width": 124,
                 "url": "media/panorama_02A33532_0BDE_8F64_4194_4108A9307B90_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30.46
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.99,
              "yaw": 169.86,
              "image": {
               "levels": [
                {
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 62,
                 "url": "media/panorama_02A33532_0BDE_8F64_4194_4108A9307B90_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30.46
             }
            ],
            "rollOverDisplay": false
           }
          ],
          "thumbnailUrl": "media/panorama_02A33532_0BDE_8F64_4194_4108A9307B90_t.jpg"
         }
        ],
        "pitch": 0,
        "partial": false,
        "label": "360 KITCHEN",
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_02A33532_0BDE_8F64_4194_4108A9307B90_t.jpg",
        "class": "Panorama"
       },
       "yaw": 71.23,
       "backwardYaw": -180,
       "distance": 1
      }
     ],
     "hfovMin": 60,
     "id": "panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC",
     "frames": [
      {
       "stereoSphere": {
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_hq.jpeg"
         },
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC.jpeg"
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_010D520E_0CDD_9844_414A_338FE53B8514",
         "items": [
          {
           "hfov": 5.39,
           "yaw": 71.23,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 102,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.64
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.39,
           "yaw": 71.23,
           "image": {
            "levels": [
             {
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 51,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -20.64
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0130C29A_0CDA_984F_41A2_F83447E16123",
         "items": [
          {
           "hfov": 6.76,
           "yaw": -39.76,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 121,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.92
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.76,
           "yaw": -39.76,
           "image": {
            "levels": [
             {
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 60,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.92
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0126FE99_0CD6_884C_417E_F847FD69522C",
         "items": [
          {
           "hfov": 7.18,
           "yaw": -135.68,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 124,
              "class": "ImageResourceLevel",
              "width": 130,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.54
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.18,
           "yaw": -135.68,
           "image": {
            "levels": [
             {
              "height": 62,
              "class": "ImageResourceLevel",
              "width": 65,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.54
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_019BCD23_0CFF_887C_4190_ACAB99B1966C",
         "items": [
          {
           "hfov": 7.12,
           "yaw": 115.61,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 133,
              "class": "ImageResourceLevel",
              "width": 128,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.29
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.12,
           "yaw": 115.61,
           "image": {
            "levels": [
             {
              "height": 66,
              "class": "ImageResourceLevel",
              "width": 64,
              "url": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_0_HS_3_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.29
          }
         ],
         "rollOverDisplay": false
        }
       ],
       "thumbnailUrl": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_t.jpg"
      }
     ],
     "pitch": 0,
     "partial": false,
     "label": "360 DD room",
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_t.jpg",
     "class": "Panorama"
    },
    "yaw": 132.64,
    "backwardYaw": -180,
    "distance": 1
   }
  ],
  "hfovMin": 60,
  "id": "panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B",
  "frames": [
   {
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B.jpeg"
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0259D5E0_0CF6_FBFB_41A0_32F1EC898707",
      "items": [
       {
        "hfov": 7.81,
        "yaw": 132.64,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 139,
           "class": "ImageResourceLevel",
           "width": 142,
           "url": "media/panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.12
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.81,
        "yaw": 132.64,
        "image": {
         "levels": [
          {
           "height": 69,
           "class": "ImageResourceLevel",
           "width": 71,
           "url": "media/panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.12
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "thumbnailUrl": "media/panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_t.jpg"
   }
  ],
  "pitch": 0,
  "partial": false,
  "label": "360 BEDROOM 2",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_t.jpg",
  "class": "Panorama"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_camera",
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_camera",
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_camera",
  "automaticRotationSpeed": 78,
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 1022
 },
 "this.panorama_02A33532_0BDE_8F64_4194_4108A9307B90",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_02A33532_0BDE_8F64_4194_4108A9307B90_camera",
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
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_01BDAC38_0BAD_FD64_4196_0569CF0BDFE7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_01B736ED_0BAE_8AFD_41A7_035605C93D3B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_02A61FBA_0BD6_7B64_4194_B2C4ED048003_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_02A54277_0BDA_85ED_418C_5BF6C54D05DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_02A33532_0BDE_8F64_4194_4108A9307B90",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_02A33532_0BDE_8F64_4194_4108A9307B90_camera"
   }
  ]
 },
 {
  "class": "MediaAudio",
  "id": "audio_1D901177_0DEA_98C5_4192_6A4C857C42DD",
  "audio": {
   "mp3Url": "media/audio_1D901177_0DEA_98C5_4192_6A4C857C42DD.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_1D901177_0DEA_98C5_4192_6A4C857C42DD.ogg"
  },
  "autoplay": true
 }
], "children": [
 {
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderSize": 2,
  "borderRadius": 0,
  "playbackBarLeft": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadHeight": 30,
  "toolTipBorderSize": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "shadow": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderColor": "#000000",
  "progressBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBottom": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarBackgroundOpacity": 1,
  "paddingLeft": 0,
  "progressBackgroundOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "borderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipOpacity": 1,
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderRadius": 4,
  "progressOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "toolTipPaddingTop": 4,
  "minHeight": 50,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingRight": 0,
  "toolTipFontColor": "#606060",
  "top": 0,
  "transitionMode": "blending",
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "id": "MainViewer",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingRight": 6,
  "progressHeight": 20,
  "left": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressRight": 10,
  "playbackBarOpacity": 1,
  "class": "ViewerArea",
  "progressLeft": 10,
  "paddingTop": 0,
  "playbackBarHeadBorderSize": 0
 },
 {
  "paddingTop": 0,
  "width": "100%",
  "borderRadius": 0,
  "height": 142,
  "minHeight": 1,
  "gap": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "paddingBottom": 0,
  "bottom": "0%",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "minWidth": 1,
  "borderSize": 0,
  "left": "0%",
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "class": "Container",
  "children": [
   {
    "paddingTop": 0,
    "width": 421,
    "borderRadius": 0,
    "height": "100%",
    "minHeight": 20,
    "gap": 4,
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "paddingBottom": 0,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
    "scrollBarVisible": "rollOver",
    "overflow": "hidden",
    "minWidth": 421,
    "borderSize": 0,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "class": "Container",
    "verticalAlign": "middle",
    "children": [
     "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
     "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
     "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
     "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
     {
      "paddingTop": 0,
      "width": 40,
      "borderRadius": 0,
      "height": "100%",
      "minHeight": 20,
      "gap": 4,
      "horizontalAlign": "center",
      "shadow": false,
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "id": "Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
      "paddingRight": 0,
      "overflow": "hidden",
      "minWidth": 20,
      "borderSize": 0,
      "layout": "vertical",
      "scrollBarWidth": 10,
      "class": "Container",
      "verticalAlign": "middle",
      "children": [
       "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
       "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
       "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15"
      ],
      "scrollBarMargin": 2
     },
     "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
     "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
     {
      "paddingTop": 0,
      "mode": "toggle",
      "width": 40,
      "borderRadius": 0,
      "height": 40,
      "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC.png",
      "minHeight": 0,
      "horizontalAlign": "center",
      "shadow": false,
      "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC_pressed.png",
      "transparencyActive": true,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingRight": 0,
      "backgroundOpacity": 0,
      "paddingLeft": 0,
      "id": "IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
      "minWidth": 0,
      "borderSize": 0,
      "class": "IconButton",
      "verticalAlign": "middle"
     },
     "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375"
    ],
    "scrollBarMargin": 2
   },
   "this.IconButton_029B460D_0CD6_9845_4160_9A281471EE28"
  ],
  "verticalAlign": "middle",
  "scrollBarMargin": 2
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_029B460D_0CD6_9845_4160_9A281471EE28], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playAudioList([this.audio_1D901177_0DEA_98C5_4192_6A4C857C42DD])",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "vrPolyfillScale": 1,
 "width": "100%",
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "height": "100%",
 "gap": 10,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
 },
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "borderSize": 0,
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Player",
 "verticalAlign": "top",
 "mouseWheelEnabled": true
})