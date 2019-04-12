TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E8D30775_E215_0391_41DA_A40AEED046FB_t.jpg",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "class": "ImageResourceLevel",
       "url": "media/panorama_E8D30775_E215_0391_41DA_A40AEED046FB_hq.jpeg"
      },
      {
       "height": 4002,
       "width": 4002,
       "class": "ImageResourceLevel",
       "url": "media/panorama_E8D30775_E215_0391_41DA_A40AEED046FB.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
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
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 24,
           "class": "ImageResourceLevel",
           "url": "media/panorama_E8D30775_E215_0391_41DA_A40AEED046FB_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 2.59,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -31.95,
        "pitch": -16.44
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_ED2E2888_E21D_0D7F_41C4_AEE76C4C07C5",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "width": 48,
           "class": "ImageResourceLevel",
           "url": "media/panorama_E8D30775_E215_0391_41DA_A40AEED046FB_0_HS_0_0.png"
          }
         ]
        },
        "yaw": -31.95,
        "hfov": 2.59,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.44
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_E8D30775_E215_0391_41DA_A40AEED046FB_t.jpg",
  "hfov": 360,
  "hfovMin": 60,
  "label": "cassia_11 - Panorama",
  "class": "Panorama",
  "vfov": 180,
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_E8D30775_E215_0391_41DA_A40AEED046FB",
  "pitch": 0
 },
 {
  "buttonMoveLeft": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37502"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "buttonZoomOut": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37499"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37505"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37501"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "buttonMoveRight": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37507"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "buttonMoveDown": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37506"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37508"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveUp": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37504"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "buttonRestart": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37500"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomIn": {
   "borderSize": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 0,
   "class": "IconButton",
   "data": {
    "name": "Button37510"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "transparencyActive": false,
   "minWidth": 0
  },
  "buttonCardboardView": {
   "borderSize": 0,
   "id": "IconButton_EF8DCD29_E21B_07B1_41E9_234F8156B3DC",
   "maxHeight": 23,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "maxWidth": 35,
   "mode": "push",
   "width": 35,
   "paddingLeft": 0,
   "height": 23,
   "paddingTop": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "minHeight": 1,
   "class": "IconButton",
   "data": {
    "name": "IconButton1773"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_EF8DCD29_E21B_07B1_41E9_234F8156B3DC.png",
   "transparencyActive": false,
   "minWidth": 1
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E8D30775_E215_0391_41DA_A40AEED046FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA",
  "pitch": 0,
  "adjacentPanoramas": [
   {
    "backwardYaw": 16.39,
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "hfovMax": 120,
     "id": "panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
     "pitch": 0,
     "adjacentPanoramas": [
      {
       "backwardYaw": 134.23,
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF",
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "backwardYaw": 173.25,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
          "distance": 1,
          "yaw": 134.23
         },
         {
          "backwardYaw": -18.98,
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782",
           "pitch": 0,
           "adjacentPanoramas": [
            {
             "backwardYaw": -42.75,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF",
             "distance": 1,
             "yaw": -18.98
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_t.jpg",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "class": "ImageResourceLevel",
                "url": "media/panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_hq.jpeg"
               },
               {
                "height": 4002,
                "width": 4002,
                "class": "ImageResourceLevel",
                "url": "media/panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF, this.camera_F9EB5E59_E22D_0591_41EA_162D39B8EBBB)",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 38,
                    "width": 37,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 3.87,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -18.98,
                 "pitch": -24.26
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "id": "overlay_F078C0C9_E22B_1EF1_41EB_246F9EC3F450",
               "enabledInCardboard": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 76,
                    "width": 75,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_0_HS_0_0.png"
                   }
                  ]
                 },
                 "yaw": -18.98,
                 "hfov": 3.87,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -24.26
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "label": "son room 22",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_t.jpg"
          },
          "distance": 1,
          "yaw": -42.75
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_t.jpg",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_hq.jpeg"
            },
            {
             "height": 4002,
             "width": 4002,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782, this.camera_F9876E11_E22D_0591_41D1_059C3C9EB2F2)",
              "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 42,
                 "width": 37,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 3.71,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -42.75,
              "pitch": -27.86
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "id": "overlay_F3A4227F_E22A_FD91_41CC_821E5AD3EC51",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 84,
                 "width": 74,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_0_HS_0_0.png"
                }
               ]
              },
              "yaw": -42.75,
              "hfov": 3.71,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -27.86
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E, this.camera_F99BEDFB_E22D_0691_41E3_CFC9F3490290)",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 38,
                 "width": 28,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "hfov": 2.82,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 134.23,
              "pitch": -29.45
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "id": "overlay_F0702063_E22B_1DB1_41EA_AB034C6FBFDC",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 76,
                 "width": 57,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_0_HS_1_0.png"
                }
               ]
              },
              "yaw": 134.23,
              "hfov": 2.82,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -29.45
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "son room 11",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_t.jpg"
       },
       "distance": 1,
       "yaw": 173.25
      },
      {
       "backwardYaw": -1.37,
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A",
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "backwardYaw": -85.44,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
          "distance": 1,
          "yaw": -1.37
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_t.jpg",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_hq.jpeg"
            },
            {
             "height": 4002,
             "width": 4002,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E, this.camera_F98C9E27_E22D_05B1_41E3_E2F507E02247)",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 40,
                 "width": 38,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 3.96,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -1.37,
              "pitch": -21.41
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "id": "overlay_F07A144E_E235_05F2_41E6_04ED8DA89242",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 81,
                 "width": 76,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_0_HS_0_0.png"
                }
               ]
              },
              "yaw": -1.37,
              "hfov": 3.96,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -21.41
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "kitch1",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_t.jpg"
       },
       "distance": 1,
       "yaw": -85.44
      },
      {
       "backwardYaw": 129.07,
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_E9030A94_E217_0297_41E5_238D10559EF9",
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "backwardYaw": -25.78,
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0",
           "pitch": 0,
           "adjacentPanoramas": [
            {
             "backwardYaw": 20.06,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E9030A94_E217_0297_41E5_238D10559EF9",
             "distance": 1,
             "yaw": -25.78
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_t.jpg",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "class": "ImageResourceLevel",
                "url": "media/panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_hq.jpeg"
               },
               {
                "height": 4002,
                "width": 4002,
                "class": "ImageResourceLevel",
                "url": "media/panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_E9030A94_E217_0297_41E5_238D10559EF9, this.camera_F9FFFE43_E22D_05F1_41EC_0668C59348D6)",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 29,
                    "width": 28,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 2.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -25.78,
                 "pitch": -24.85
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "id": "overlay_F3155C28_E22B_05BF_41D8_48A95DC8840D",
               "enabledInCardboard": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "width": 56,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_0_HS_0_0.png"
                   }
                  ]
                 },
                 "yaw": -25.78,
                 "hfov": 2.85,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -24.85
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "label": "master room 22",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_t.jpg"
          },
          "distance": 1,
          "yaw": 20.06
         },
         {
          "backwardYaw": 138.27,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
          "distance": 1,
          "yaw": 129.07
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_t.jpg",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_hq.jpeg"
            },
            {
             "height": 4002,
             "width": 4002,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0, this.camera_F952ED4E_E22D_07F3_41AB_8C4DFD7DF549)",
              "rollOver": "this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 34,
                 "width": 33,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 3.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 20.06,
              "pitch": -23.13
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "id": "overlay_F2C43632_E22B_0593_41DA_C3AEF8D2770E",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 69,
                 "width": 66,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_0_HS_0_0.png"
                }
               ]
              },
              "yaw": 20.06,
              "hfov": 3.43,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -23.13
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E, this.camera_F956AD59_E22D_0791_41E8_EC8901CD2D64)",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 78,
                 "width": 54,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "hfov": 5.31,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 129.07,
              "pitch": -30.15
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "id": "overlay_F74CFDD4_E22D_0697_41DF_3F9B5E135A42",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 156,
                 "width": 109,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_0_HS_1_0.png"
                }
               ]
              },
              "yaw": 129.07,
              "hfov": 5.31,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -30.15
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "master room 11",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_E9030A94_E217_0297_41E5_238D10559EF9_t.jpg"
       },
       "distance": 1,
       "yaw": 138.27
      },
      {
       "backwardYaw": -71.01,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA",
       "distance": 1,
       "yaw": 16.39
      },
      {
       "backwardYaw": -177.01,
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0",
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "backwardYaw": 71.96,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
          "distance": 1,
          "yaw": -177.01
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_t.jpg",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_hq.jpeg"
            },
            {
             "height": 4002,
             "width": 4002,
             "class": "ImageResourceLevel",
             "url": "media/panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E, this.camera_F9AE4DE4_E22D_06B7_41E8_B95741FD53D4)",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 39,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 4.16,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -177.01,
              "pitch": -20.39
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "id": "overlay_F34B2045_E216_FDF1_41D4_569A292BDE68",
            "enabledInCardboard": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 105,
                 "width": 79,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_0_HS_0_0.png"
                }
               ]
              },
              "yaw": -177.01,
              "hfov": 4.16,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -20.39
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "daughter room 1",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_t.jpg"
       },
       "distance": 1,
       "yaw": 71.96
      }
     ],
     "hfov": 360,
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_t.jpg",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "width": 6434,
          "class": "ImageResourceLevel",
          "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_hq.jpeg"
         },
         {
          "height": 4002,
          "width": 4002,
          "class": "ImageResourceLevel",
          "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA, this.camera_F94D2D9D_E22D_0691_4196_7512CF8FBB03)",
           "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 27,
              "width": 31,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 3.31,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 16.39,
           "pitch": -17.65
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_F2109E28_E215_05BF_41D1_5055C78C1F1B",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 54,
              "width": 62,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_0_0.png"
             }
            ]
           },
           "yaw": 16.39,
           "hfov": 3.31,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -17.65
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0, this.camera_F9BA8DB3_E22D_0691_41DE_65B101065901)",
           "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "width": 36,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "hfov": 3.64,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 71.96,
           "pitch": -26.06
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_F29A7FE6_E217_02B3_41EB_C715A58BD205",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 90,
              "width": 72,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_1_0.png"
             }
            ]
           },
           "yaw": 71.96,
           "hfov": 3.64,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -26.06
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E9030A94_E217_0297_41E5_238D10559EF9, this.camera_F9477D7B_E22D_0792_41D8_4D48E5CE851E)",
           "rollOver": "this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 38,
              "width": 29,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "hfov": 2.54,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 138.27,
           "pitch": -40.45
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_F354DA8F_E215_0D71_41C1_E4429A71BD67",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 76,
              "width": 59,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_2_0.png"
             }
            ]
           },
           "yaw": 138.27,
           "hfov": 2.54,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -40.45
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF, this.camera_F95AFD64_E22D_07B7_41CD_86D4893F7B90)",
           "rollOver": "this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 47,
              "width": 33,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "hfov": 3.48,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 173.25,
           "pitch": -23.76
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_F05D23D3_E22D_0291_41E7_E548AA31C5D3",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 94,
              "width": 67,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_3_0.png"
             }
            ]
           },
           "yaw": 173.25,
           "hfov": 3.48,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -23.76
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A, this.camera_F95D1D70_E22D_07AE_41EB_33FE56D7061F)",
           "rollOver": "this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "width": 39,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "hfov": 4.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -85.44,
           "pitch": -21.4
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "id": "overlay_F04D73B2_E237_0293_41B2_7F4FE213BB46",
         "enabledInCardboard": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 81,
              "width": 78,
              "class": "ImageResourceLevel",
              "url": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_0_HS_4_0.png"
             }
            ]
           },
           "yaw": -85.44,
           "hfov": 4.09,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -21.4
          }
         ]
        }
       ]
      }
     ],
     "partial": false,
     "label": "cassia_33 - Panorama",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_t.jpg"
    },
    "distance": 1,
    "yaw": -71.01
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_t.jpg",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "class": "ImageResourceLevel",
       "url": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_hq.jpeg"
      },
      {
       "height": 4002,
       "width": 4002,
       "class": "ImageResourceLevel",
       "url": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
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
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "width": 33,
           "class": "ImageResourceLevel",
           "url": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 3.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 13.55,
        "pitch": -20.14
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_F269EC26_E21B_05B3_41CA_2AB4CD54F992",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 66,
           "class": "ImageResourceLevel",
           "url": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_0_HS_0_0.png"
          }
         ]
        },
        "yaw": 13.55,
        "hfov": 3.48,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.14
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E, this.camera_F9A15DC9_E22D_06F1_41DB_C9B088E7BEC1)",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 31,
           "class": "ImageResourceLevel",
           "url": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "hfov": 3.33,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -71.01,
        "pitch": -16.8
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "id": "overlay_F28045A5_E215_06B1_41BE_44E0B0C3ABA1",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "width": 62,
           "class": "ImageResourceLevel",
           "url": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_0_HS_1_0.png"
          }
         ]
        },
        "yaw": -71.01,
        "hfov": 3.33,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.8
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "label": "cassia_22 - Panorama",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E9030A94_E217_0297_41E5_238D10559EF9",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E9030A94_E217_0297_41E5_238D10559EF9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_camera",
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_E8D30775_E215_0391_41DA_A40AEED046FB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E8D30775_E215_0391_41DA_A40AEED046FB_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E8E702A2_E215_02B3_41D6_F394A3F774AA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E8DB5C09_E215_0571_41E9_FFD6863B445E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E942865E_E215_0593_41E1_9BB11F0BB2D0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E92F0055_E217_1D96_41E4_417C6FC3FA1A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_E9030A94_E217_0297_41E5_238D10559EF9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E9030A94_E217_0297_41E5_238D10559EF9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E8DD0403_E217_0571_41DE_08AC30CBDDA0_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E8CF3D6F_E217_07B1_41E7_4A2DE0410BCF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8F6762C_E217_05B6_41BE_5DCA907E5782_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F952ED4E_E22D_07F3_41AB_8C4DFD7DF549",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.22,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F956AD59_E22D_0791_41E8_EC8901CD2D64",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F95AFD64_E22D_07B7_41CD_86D4893F7B90",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -45.77,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F95D1D70_E22D_07AE_41EB_33FE56D7061F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.63,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9477D7B_E22D_0792_41D8_4D48E5CE851E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F94D2D9D_E22D_0691_4196_7512CF8FBB03",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 108.99,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9BA8DB3_E22D_0691_41DE_65B101065901",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.99,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9A15DC9_E22D_06F1_41DB_C9B088E7BEC1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.61,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9AE4DE4_E22D_06B7_41E8_B95741FD53D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F99BEDFB_E22D_0691_41E3_CFC9F3490290",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9876E11_E22D_0591_41D1_059C3C9EB2F2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.02,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F98C9E27_E22D_05B1_41E3_E2F507E02247",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 94.56,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9FFFE43_E22D_05F1_41EC_0668C59348D6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F9EB5E59_E22D_0591_41EA_162D39B8EBBB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.25,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Ukulele Fun"
  },
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_F1A71119_E23B_1F9E_41E6_10918D3F20D4.mp3",
   "oggUrl": "media/audio_F1A71119_E23B_1F9E_41E6_10918D3F20D4.ogg"
  },
  "id": "audio_F1A71119_E23B_1F9E_41E6_10918D3F20D4"
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderSize": 2,
  "borderSize": 0,
  "progressBorderRadius": 4,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 10,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontColor": "#606060",
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "progressBottom": 1,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontWeight": "normal",
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "minHeight": 50,
  "id": "MainViewer",
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipDisplayTime": 600,
  "class": "ViewerArea",
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#AAAAAA",
  "minWidth": 100,
  "progressRight": 10,
  "toolTipBorderColor": "#767676"
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
      "borderSize": 0,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarColor": "#000000",
      "width": 40,
      "paddingTop": 0,
      "paddingLeft": 0,
      "layout": "vertical",
      "borderRadius": 0,
      "gap": 4,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "height": "100%",
      "shadow": false,
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "minHeight": 20,
      "class": "Container",
      "data": {
       "name": "Container37503"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "borderSize": 0,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 40,
      "height": 40,
      "paddingTop": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "horizontalAlign": "center",
      "shadow": false,
      "cursor": "hand",
      "minHeight": 0,
      "class": "IconButton",
      "data": {
       "name": "Button37509"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "transparencyActive": false,
      "minWidth": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "borderSize": 0,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "width": 360,
    "paddingTop": 0,
    "paddingLeft": 0,
    "layout": "horizontal",
    "borderRadius": 0,
    "gap": 4,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "height": "95.07%",
    "shadow": false,
    "creationPolicy": "delayed",
    "scrollBarMargin": 2,
    "minHeight": 20,
    "class": "Container",
    "data": {
     "name": "Container37498"
    },
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "minWidth": 360,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_EF8DCD29_E21B_07B1_41E9_234F8156B3DC"
  ],
  "borderSize": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": 142,
  "paddingTop": 0,
  "width": "100%",
  "gap": 10,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "creationPolicy": "delayed",
  "minHeight": 1,
  "class": "Container",
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": "0%",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.playAudioList([this.audio_F1A71119_E23B_1F9E_41E6_10918D3F20D4]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EF8DCD29_E21B_07B1_41E9_234F8156B3DC], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "paddingTop": 0,
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "creationPolicy": "delayed",
 "mouseWheelEnabled": true,
 "minHeight": 20,
 "class": "Player",
 "data": {
  "name": "Player43899"
 },
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})