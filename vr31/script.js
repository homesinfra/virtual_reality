TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": false,
  "id": "panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB.jpeg"
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "id": "overlay_587A2EA2_54A1_C577_41CB_9E102806B52E",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.52,
        "yaw": -11.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -32.17
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
        "yaw": -11.32,
        "hfov": 4.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -32.17
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
        "click": "this.startPanoramaWithCamera(this.panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92, this.camera_411FF05F_54A6_FDCC_41B5_D6782BDF788E)"
       }
      ],
      "id": "overlay_5950EA34_54A2_4D53_41B4_BDDEF36CA28D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.01,
        "yaw": -69.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 60,
           "url": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -41.89
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
        "yaw": -69.13,
        "hfov": 5.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 120,
           "url": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -41.89
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -156.12,
    "panorama": {
     "class": "Panorama",
     "partial": false,
     "id": "panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92.jpeg"
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "click": "this.startPanoramaWithCamera(this.panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB, this.camera_41336032_54A6_FD54_41CA_8CA28D147F75)"
          }
         ],
         "id": "overlay_5A8B2869_54A3_CDF4_41B9_ED904D027E64",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.88,
           "yaw": -156.12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 67,
              "class": "ImageResourceLevel",
              "width": 53,
              "url": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -49.94
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
           "yaw": -156.12,
           "hfov": 3.88,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 134,
              "class": "ImageResourceLevel",
              "width": 107,
              "url": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -49.94
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
           "click": "this.startPanoramaWithCamera(this.panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C, this.camera_4102D048_54A6_FD34_41D0_82C180F64B4E)"
          }
         ],
         "id": "overlay_5AA4965C_54A2_C5CC_41BB_6C86AC0479EA",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.67,
           "yaw": 33.47,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "class": "ImageResourceLevel",
              "width": 60,
              "url": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -57.28
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
           "yaw": 33.47,
           "hfov": 3.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 117,
              "class": "ImageResourceLevel",
              "width": 121,
              "url": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -57.28
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -69.13,
       "panorama": "this.panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB",
       "yaw": -156.12,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 174.83,
       "panorama": {
        "class": "Panorama",
        "partial": false,
        "id": "panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C.jpeg"
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
              "click": "this.startPanoramaWithCamera(this.panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92, this.camera_413AA021_54A6_FD74_41C2_50B1C3DB935A)"
             }
            ],
            "id": "overlay_5A63C0EC_54A2_5ECC_41CC_590715CCDD9B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.45,
              "yaw": 174.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -48.37
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
              "yaw": 174.83,
              "hfov": 3.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 112,
                 "class": "ImageResourceLevel",
                 "width": 92,
                 "url": "media/panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -48.37
             }
            ]
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 33.47,
          "panorama": "this.panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92",
          "yaw": 174.83,
          "distance": 1
         }
        ],
        "label": "kit_33 - Panorama",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_t.jpg"
       },
       "yaw": 33.47,
       "distance": 1
      }
     ],
     "label": "kit_22 - Panorama",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_t.jpg"
    },
    "yaw": -69.13,
    "distance": 1
   }
  ],
  "label": "55",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37502"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonRestart": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37500"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37501"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37506"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "toggle",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37505"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37508"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37507"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37504"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37499"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37510"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "maxWidth": 35,
   "paddingRight": 0,
   "maxHeight": 23,
   "mode": "push",
   "width": 35,
   "paddingLeft": 0,
   "height": 23,
   "paddingTop": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_5A4881B5_54AE_BF5D_41CB_4A5FA1BF03FD",
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_5A4881B5_54AE_BF5D_41CB_4A5FA1BF03FD.png",
   "paddingBottom": 0,
   "minWidth": 1,
   "data": {
    "name": "IconButton6710"
   },
   "transparencyActive": false,
   "minHeight": 1,
   "borderSize": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_camera",
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
 "this.panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_camera",
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
 "this.panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_camera",
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
    "thumbnailUrl": "media/panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95.jpeg"
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_5A827343_54A2_4335_41C9_B21A0D3D429F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.68,
        "yaw": 170.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "class": "ImageResourceLevel",
           "width": 62,
           "url": "media/panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -35.66
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
        "yaw": 170.68,
        "hfov": 5.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 141,
           "class": "ImageResourceLevel",
           "width": 124,
           "url": "media/panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -35.66
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_t.jpg",
  "partial": false,
  "hfov": 360,
  "hfovMin": 60,
  "label": "kit_44 - Panorama",
  "id": "panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95",
  "vfov": 180,
  "hfovMax": 120,
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_camera",
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
    "media": "this.panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5E00DA7F_54A2_4DCD_41B1_4500BB4EA3FB_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5E6CA0A3_54A2_FD75_417D_DA6A2C1FBE92_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5E7A9A4C_54A2_CD33_41C9_62A22E5A2F8C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95",
    "camera": "this.panorama_5E6883A7_54A2_437C_41CE_42CAEC2D8E95_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_413AA021_54A6_FD74_41C2_50B1C3DB935A",
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
   "yaw": -146.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_41336032_54A6_FD54_41CA_8CA28D147F75",
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
   "yaw": 110.87,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_4102D048_54A6_FD34_41D0_82C180F64B4E",
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
   "yaw": -5.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_411FF05F_54A6_FDCC_41B5_D6782BDF788E",
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
   "yaw": 23.88,
   "pitch": 0
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipPaddingRight": 6,
  "borderSize": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "toolTipPaddingLeft": 6,
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
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
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
  "playbackBarHeadShadowVerticalLength": 0,
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
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "width": 40,
      "paddingLeft": 0,
      "height": "100%",
      "paddingTop": 0,
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "scrollBarWidth": 10,
      "gap": 4,
      "borderRadius": 0,
      "horizontalAlign": "center",
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
      "layout": "vertical",
      "borderSize": 0,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "toggle",
      "verticalAlign": "middle",
      "width": 40,
      "paddingLeft": 0,
      "height": 40,
      "paddingTop": 0,
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "horizontalAlign": "center",
      "shadow": false,
      "cursor": "hand",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button37509"
      },
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "paddingBottom": 0,
      "minWidth": 0,
      "transparencyActive": false,
      "minHeight": 0,
      "borderSize": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "width": 360,
    "paddingLeft": 0,
    "height": "95.07%",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "scrollBarWidth": 10,
    "gap": 4,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "shadow": false,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "backgroundOpacity": 0,
    "data": {
     "name": "Container37498"
    },
    "paddingBottom": 0,
    "minWidth": 360,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "layout": "horizontal",
    "borderSize": 0,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_5A4881B5_54AE_BF5D_41CB_4A5FA1BF03FD"
  ],
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "verticalAlign": "middle",
  "height": 142,
  "width": "100%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "scrollBarWidth": 10,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
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
  "layout": "horizontal",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_5A4881B5_54AE_BF5D_41CB_4A5FA1BF03FD], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "creationPolicy": "delayed",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "contentOpaque": false,
 "overflow": "visible"
})