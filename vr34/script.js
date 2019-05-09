TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_8A85A49C_9AC2_31CB_41D8_8BF08EB690FA",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.89,
        "yaw": 10.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -18.5
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
        "yaw": 10.99,
        "hfov": 4.89,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 92,
           "url": "media/panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -18.5
       }
      ]
     }
    ]
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "hfovMax": 120,
  "partial": false,
  "label": "mayur banquet_11 - Panorama",
  "id": "panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_t.jpg",
  "pitch": 0
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonRestart": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "borderSize": 0,
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
   "horizontalAlign": "center",
   "shadow": false,
   "iconURL": "skin/IconButton_966715A2_9AC2_13FF_41CE_6860A2789C04.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_966715A2_9AC2_13FF_41CE_6860A2789C04",
   "data": {
    "name": "IconButton3682"
   },
   "paddingBottom": 0,
   "minWidth": 1,
   "transparencyActive": false,
   "minHeight": 1
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_camera",
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
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_8AB33466_9AC2_1147_41E3_0B48154A28E5",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.71,
        "yaw": 141.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -21.94
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
        "yaw": 141.24,
        "hfov": 5.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 109,
           "class": "ImageResourceLevel",
           "width": 109,
           "url": "media/panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -21.94
       }
      ]
     }
    ]
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "hfovMax": 120,
  "partial": false,
  "label": "mayur banquet_22 - Panorama",
  "id": "panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_t.jpg",
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_camera",
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
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA.jpeg"
      }
     ]
    },
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
      "id": "overlay_8BC3661D_9AC6_10CA_41DE_D0E0EBE6F99C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.88,
        "yaw": -125.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.24
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
        "yaw": -125.64,
        "hfov": 4.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 92,
           "class": "ImageResourceLevel",
           "width": 92,
           "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -20.24
       }
      ]
     },
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
      "id": "overlay_8B8BC134_9AC6_30DB_4197_AFF981BD29EA",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.72,
        "yaw": 120.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -21.43
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
        "yaw": 120.01,
        "hfov": 5.72,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 105,
           "class": "ImageResourceLevel",
           "width": 109,
           "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -21.43
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
        "click": "this.startPanoramaWithCamera(this.panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947, this.camera_8764E33D_9ABE_292E_41D3_9FF3C33B9F0A)"
       }
      ],
      "id": "overlay_8B27F7C8_9AC2_3F4B_41DD_CEB1A7B8AA21",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.19,
        "yaw": -59.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 51,
           "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -25.63
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
        "yaw": -59.83,
        "hfov": 5.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 102,
           "url": "media/panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -25.63
       }
      ]
     }
    ]
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_t.jpg",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
           "click": "this.startPanoramaWithCamera(this.panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA, this.camera_876B7331_9ABE_2939_41E2_B7CE392941D1)"
          }
         ],
         "id": "overlay_88B8CDFB_9AC6_134E_41C0_DB6D051DB971",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.29,
           "yaw": 100.41,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 51,
              "class": "ImageResourceLevel",
              "width": 43,
              "url": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -27.3
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
           "yaw": 100.41,
           "hfov": 4.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 102,
              "class": "ImageResourceLevel",
              "width": 86,
              "url": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -27.3
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
           "click": "this.startPanoramaWithCamera(this.panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497, this.camera_876FD327_9ABE_2ADA_41D1_4599179A633A)"
          }
         ],
         "id": "overlay_8883BD3F_9AC6_10C5_41DA_58F9BE9EBB6F",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.49,
           "yaw": 11.39,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54,
              "url": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -26.76
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
           "yaw": 11.39,
           "hfov": 5.49,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109,
              "url": "media/panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -26.76
          }
         ]
        }
       ]
      }
     ],
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_t.jpg",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
              "click": "this.startPanoramaWithCamera(this.panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947, this.camera_872F33AD_9ABE_292E_41E1_B6CC0C72D691)"
             }
            ],
            "id": "overlay_885C44CC_9AC7_F14B_41DC_EF34FD6AC194",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.72,
              "yaw": -150.09,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 53,
                 "class": "ImageResourceLevel",
                 "width": 45,
                 "url": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.9
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
              "yaw": -150.09,
              "hfov": 4.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 106,
                 "class": "ImageResourceLevel",
                 "width": 91,
                 "url": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -22.9
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
              "click": "this.startPanoramaWithCamera(this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D, this.camera_872233C8_9ABE_2956_41DD_C67D0B317438)"
             }
            ],
            "id": "overlay_89D32AAB_9AC2_11CD_41C3_D1752D1A0BE5",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.08,
              "yaw": 2.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 42,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -19.51
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
              "yaw": 2.83,
              "hfov": 4.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 84,
                 "class": "ImageResourceLevel",
                 "width": 77,
                 "url": "media/panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -19.51
             }
            ]
           }
          ]
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947",
          "yaw": -150.09,
          "backwardYaw": 11.39,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_91B5265A_9ABE_114F_41A5_810A27A9611D",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_t.jpg",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
                 "click": "this.startPanoramaWithCamera(this.panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497, this.camera_8750A35E_9ABE_296A_41E2_32ADB965BF6E)"
                }
               ],
               "id": "overlay_89D9E8B4_9AFE_31DB_41DD_A044919B04CB",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.14,
                 "yaw": 179.05,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 39,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.45
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
                 "yaw": 179.05,
                 "hfov": 4.14,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 78,
                    "class": "ImageResourceLevel",
                    "width": 78,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -19.45
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 6)",
                 "click": "this.startPanoramaWithCamera(this.panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633, this.camera_874BD369_9ABE_2956_41CA_2C0B9AA73FE2)"
                }
               ],
               "id": "overlay_895422EE_9AC2_F147_41C9_ADFE0CC582E7",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.38,
                 "yaw": 14.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -29.05
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
                 "yaw": 14.04,
                 "hfov": 5.38,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -29.05
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                 "click": "this.startPanoramaWithCamera(this.panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4, this.camera_87587353_9ABE_297A_41BF_FAE48D7909A9)"
                }
               ],
               "id": "overlay_897BDE89_9AC6_11CD_41E2_17A78FF3D6B9",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.92,
                 "yaw": 50.84,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 46,
                    "class": "ImageResourceLevel",
                    "width": 55,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -16.52
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
                 "yaw": 50.84,
                 "hfov": 5.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 93,
                    "class": "ImageResourceLevel",
                    "width": 110,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -16.52
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                 "click": "this.startPanoramaWithCamera(this.panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F, this.camera_87435374_9ABE_293E_41DE_87075E15EEB1)"
                }
               ],
               "id": "overlay_8EEF1CE4_9AC6_317B_419C_7EEA9E3AC3FD",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.17,
                 "yaw": -45.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 52,
                    "class": "ImageResourceLevel",
                    "width": 48,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -18.79
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
                 "yaw": -45.65,
                 "hfov": 5.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 104,
                    "class": "ImageResourceLevel",
                    "width": 97,
                    "url": "media/panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -18.79
                }
               ]
              }
             ]
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "hfovMax": 120,
              "id": "panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_t.jpg",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
                    "click": "this.startPanoramaWithCamera(this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D, this.camera_875FA348_9ABE_2956_41B2_187E05D001B6)"
                   }
                  ],
                  "id": "overlay_8EDEBD5D_9AC3_F345_416C_6E647D2AAF1C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.55,
                    "yaw": 144.89,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 65,
                       "class": "ImageResourceLevel",
                       "width": 62,
                       "url": "media/panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -19.31
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
                    "yaw": 144.89,
                    "hfov": 6.55,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 131,
                       "class": "ImageResourceLevel",
                       "width": 124,
                       "url": "media/panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -19.31
                   }
                  ]
                 }
                ]
               }
              ],
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D",
                "yaw": 144.89,
                "backwardYaw": 50.84,
                "distance": 1
               }
              ],
              "label": "mayur banquet_88 - Panorama",
              "vfov": 180
             },
             "yaw": 50.84,
             "backwardYaw": 144.89,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497",
             "yaw": 179.05,
             "backwardYaw": 2.83,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "hfovMax": 120,
              "id": "panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_t.jpg",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
                    "click": "this.startPanoramaWithCamera(this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D, this.camera_870F73FE_9ABE_292A_41C9_7737B05FF730)"
                   }
                  ],
                  "id": "overlay_89A9A667_9AC6_1145_41D2_F8DD99CB59CA",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.7,
                    "yaw": -170.36,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 93,
                       "class": "ImageResourceLevel",
                       "width": 76,
                       "url": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -48.34
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
                    "yaw": -170.36,
                    "hfov": 5.7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 187,
                       "class": "ImageResourceLevel",
                       "width": 153,
                       "url": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -48.34
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                    "click": "this.startPanoramaWithCamera(this.panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9, this.camera_8718B3E3_9ABE_295A_41D7_6545F9227840)"
                   }
                  ],
                  "id": "overlay_8EA2FAC4_9AC2_11BA_41D9_8EE5BDA16689",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.72,
                    "yaw": 115.27,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 55,
                       "class": "ImageResourceLevel",
                       "width": 55,
                       "url": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -23.73
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
                    "yaw": 115.27,
                    "hfov": 5.72,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 111,
                       "class": "ImageResourceLevel",
                       "width": 111,
                       "url": "media/panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -23.73
                   }
                  ]
                 }
                ]
               }
              ],
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "partial": false,
                 "hfovMax": 120,
                 "id": "panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_t.jpg",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "stereoSphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 6434,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_hq.jpeg"
                     },
                     {
                      "height": 4002,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 6)",
                       "click": "this.startPanoramaWithCamera(this.panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633, this.camera_8736C38D_9ABE_29EE_41D2_355D6F78EADD)"
                      }
                     ],
                     "id": "overlay_8EB5BD05_9ACD_F0C5_41E2_BB7B1FEB7F1B",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.14,
                       "yaw": 14.9,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 35,
                          "class": "ImageResourceLevel",
                          "width": 38,
                          "url": "media/panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -15.03
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
                       "yaw": 14.9,
                       "hfov": 4.14,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 71,
                          "class": "ImageResourceLevel",
                          "width": 76,
                          "url": "media/panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -15.03
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfov": 360,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633",
                   "yaw": 14.9,
                   "backwardYaw": 115.27,
                   "distance": 1
                  }
                 ],
                 "label": "mayur banquet_1010 - Panorama",
                 "vfov": 180
                },
                "yaw": 115.27,
                "backwardYaw": 14.9,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D",
                "yaw": -170.36,
                "backwardYaw": 14.04,
                "distance": 1
               }
              ],
              "label": "mayur banquet_77 - Panorama",
              "vfov": 180
             },
             "yaw": 14.04,
             "backwardYaw": -170.36,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "hfovMax": 120,
              "id": "panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_t.jpg",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
                    "click": "this.startPanoramaWithCamera(this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D, this.camera_8700C419_9ABE_2EF6_41B7_689C8BD6CD92)"
                   }
                  ],
                  "id": "overlay_8EA72F6F_9AC2_EF46_41E1_A7C67DB99FF1",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.69,
                    "yaw": -145.95,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 67,
                       "class": "ImageResourceLevel",
                       "width": 64,
                       "url": "media/panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -21.39
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
                    "yaw": -145.95,
                    "hfov": 6.69,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 134,
                       "class": "ImageResourceLevel",
                       "width": 128,
                       "url": "media/panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -21.39
                   }
                  ]
                 }
                ]
               }
              ],
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D",
                "yaw": -145.95,
                "backwardYaw": -45.65,
                "distance": 1
               }
              ],
              "label": "mayur banquet_99 - Panorama",
              "vfov": 180
             },
             "yaw": -45.65,
             "backwardYaw": -145.95,
             "distance": 1
            }
           ],
           "label": "mayur banquet_66 - Panorama",
           "vfov": 180
          },
          "yaw": 2.83,
          "backwardYaw": 179.05,
          "distance": 1
         }
        ],
        "label": "mayur banquet_55 - Panorama",
        "vfov": 180
       },
       "yaw": 11.39,
       "backwardYaw": -150.09,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA",
       "yaw": 100.41,
       "backwardYaw": -59.83,
       "distance": 1
      }
     ],
     "label": "mayur banquet_44 - Panorama",
     "vfov": 180
    },
    "yaw": -59.83,
    "backwardYaw": 100.41,
    "distance": 1
   }
  ],
  "label": "mayur banquet_33 - Panorama",
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_camera",
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
 "this.panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_camera",
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
 "this.panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_camera",
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
 "this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_camera",
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
 "this.panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_camera",
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
 "this.panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_camera",
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
 "this.panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_camera",
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
 "this.panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_camera",
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09",
    "camera": "this.panorama_90197155_9ABE_1345_41C4_CDDBF82C9F09_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248",
    "camera": "this.panorama_9079EDAC_9ABE_F3CB_41B7_E9CA1F11F248_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA",
    "camera": "this.panorama_91A3E7A2_9ABE_3FFF_41E0_92425F3538DA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947",
    "camera": "this.panorama_91AE11C3_9ABE_73BE_41CD_0668F7060947_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497",
    "camera": "this.panorama_91A43BCA_9ABE_174F_41E0_08A929BBE497_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D",
    "camera": "this.panorama_91B5265A_9ABE_114F_41A5_810A27A9611D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633",
    "camera": "this.panorama_91ACD076_9ABE_1147_41D4_76DBFF7B2633_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4",
    "camera": "this.panorama_91AB8AC8_9ABE_314B_41C6_02ACBCF2BBB4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F",
    "camera": "this.panorama_91CC855E_9ABE_7347_41C5_C3F7715E6C7F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9",
    "camera": "this.panorama_91A07F7E_9ABE_2F47_41DA_BE5A0EEE59B9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_876FD327_9ABE_2ADA_41D1_4599179A633A",
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
   "yaw": 29.91,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_876B7331_9ABE_2939_41E2_B7CE392941D1",
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
   "yaw": 120.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8764E33D_9ABE_292E_41D3_9FF3C33B9F0A",
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
   "yaw": -79.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_875FA348_9ABE_2956_41B2_187E05D001B6",
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
   "yaw": -129.16,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87587353_9ABE_297A_41BF_FAE48D7909A9",
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
   "yaw": -35.11,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8750A35E_9ABE_296A_41E2_32ADB965BF6E",
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
   "yaw": -177.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_874BD369_9ABE_2956_41CA_2C0B9AA73FE2",
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
   "yaw": 9.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_87435374_9ABE_293E_41DE_87075E15EEB1",
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
   "yaw": 34.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8736C38D_9ABE_29EE_41D2_355D6F78EADD",
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
   "yaw": -64.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_872F33AD_9ABE_292E_41E1_B6CC0C72D691",
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
   "yaw": -168.61,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_872233C8_9ABE_2956_41DD_C67D0B317438",
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
   "yaw": -0.95,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8718B3E3_9ABE_295A_41D7_6545F9227840",
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
   "yaw": -165.1,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_870F73FE_9ABE_292A_41C9_7737B05FF730",
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
   "yaw": -165.96,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_8700C419_9ABE_2EF6_41B7_689C8BD6CD92",
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
   "yaw": 134.35,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Bright Shining Love (vocal mix)"
  },
  "class": "MediaAudio",
  "id": "audio_95A8D733_9AC2_10DD_41B4_BB3A7E5C20AC",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_95A8D733_9AC2_10DD_41B4_BB3A7E5C20AC.mp3",
   "oggUrl": "media/audio_95A8D733_9AC2_10DD_41B4_BB3A7E5C20AC.ogg"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "progressHeight": 20,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "progressBorderSize": 2,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 30,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "top": 0,
  "playbackBarHeight": 20,
  "progressBorderRadius": 4,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "progressLeft": 10,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#AAAAAA",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 4,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
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
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarColor": "#000000",
      "width": 40,
      "paddingLeft": 0,
      "height": "100%",
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "gap": 4,
      "horizontalAlign": "center",
      "shadow": false,
      "scrollBarMargin": 2,
      "layout": "vertical",
      "backgroundOpacity": 0,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "paddingBottom": 0,
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "class": "IconButton",
      "borderSize": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 40,
      "paddingLeft": 0,
      "height": 40,
      "paddingTop": 0,
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "horizontalAlign": "center",
      "shadow": false,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "paddingBottom": 0,
      "minWidth": 0,
      "transparencyActive": false,
      "minHeight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "width": 360,
    "paddingLeft": 0,
    "height": "95.07%",
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "gap": 4,
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "paddingBottom": 0,
    "minWidth": 360,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_966715A2_9AC2_13FF_41CE_6860A2789C04"
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "height": 142,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "center",
  "shadow": false,
  "width": "100%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "paddingBottom": 0,
  "minWidth": 1,
  "left": "0%",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.playAudioList([this.audio_95A8D733_9AC2_10DD_41B4_BB3A7E5C20AC]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_966715A2_9AC2_13FF_41CE_6860A2789C04], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "creationPolicy": "delayed",
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "shadow": false,
 "scrollBarMargin": 2,
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
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
 "contentOpaque": false,
 "overflow": "visible"
})