TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "bk2",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "class": "Panorama",
     "partial": false,
     "label": "bk3",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "label": "bk4",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_43BA5AE2_4551_726F_41BA_70209DE87E05",
          "class": "AdjacentPanorama",
          "backwardYaw": -180,
          "yaw": -167.68,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4D631332_4551_13EF_41D1_33AFBD45AF09",
          "class": "AdjacentPanorama",
          "backwardYaw": -180,
          "yaw": 132.57,
          "distance": 1
         }
        ],
        "id": "panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_4965FBC5_4577_12B5_41AB_CA747AC03915",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_0_HS_1_0.png",
                 "height": 84,
                 "class": "ImageResourceLevel",
                 "width": 95
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5,
              "pitch": -29.81,
              "yaw": 132.57
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_0_HS_1_0_0_map.gif",
                 "height": 42,
                 "class": "ImageResourceLevel",
                 "width": 47
                }
               ]
              },
              "pitch": -29.81,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 132.57,
              "hfov": 5
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_49752908_4571_1FBB_41BD_0DFFFFFD09DB",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_0_HS_0_0.png",
                 "height": 84,
                 "class": "ImageResourceLevel",
                 "width": 95
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.71,
              "pitch": -35.02,
              "yaw": -167.68
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_0_HS_0_0_0_map.gif",
                 "height": 42,
                 "class": "ImageResourceLevel",
                 "width": 47
                }
               ]
              },
              "pitch": -35.02,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -167.68,
              "hfov": 4.71
             }
            ]
           }
          ],
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_hq.jpeg",
             "height": 6000,
             "class": "ImageResourceLevel",
             "width": 6000
            },
            {
             "url": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C.jpeg",
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 3217
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -180,
       "yaw": -152.53,
       "distance": 1
      },
      {
       "panorama": "this.panorama_4D631332_4551_13EF_41D1_33AFBD45AF09",
       "class": "AdjacentPanorama",
       "backwardYaw": -180,
       "yaw": -88.37,
       "distance": 1
      }
     ],
     "id": "panorama_43BA5AE2_4551_726F_41BA_70209DE87E05",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_4CFB6491_455F_16AC_41C6_8DAC8922A087",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_0_HS_1_0.png",
              "height": 93,
              "class": "ImageResourceLevel",
              "width": 107
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.55,
           "pitch": -30.82,
           "yaw": -88.37
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_0_HS_1_0_0_map.gif",
              "height": 46,
              "class": "ImageResourceLevel",
              "width": 53
             }
            ]
           },
           "pitch": -30.82,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -88.37,
           "hfov": 5.55
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_4F52B8DF_4551_3E54_41CF_CD6E523FC584",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_0_HS_0_0.png",
              "height": 96,
              "class": "ImageResourceLevel",
              "width": 106
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.53,
           "pitch": -29.89,
           "yaw": -152.53
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_0_HS_0_0_0_map.gif",
              "height": 48,
              "class": "ImageResourceLevel",
              "width": 53
             }
            ]
           },
           "pitch": -29.89,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -152.53,
           "hfov": 5.53
          }
         ]
        }
       ],
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_hq.jpeg",
          "height": 6000,
          "class": "ImageResourceLevel",
          "width": 6000
         },
         {
          "url": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05.jpeg",
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 3217
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -180,
    "yaw": -5.26,
    "distance": 1
   },
   {
    "panorama": "this.panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C",
    "class": "AdjacentPanorama",
    "backwardYaw": -180,
    "yaw": 40.54,
    "distance": 1
   }
  ],
  "id": "panorama_4D631332_4551_13EF_41D1_33AFBD45AF09",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4CF8A836_4551_1DD7_41C0_3BDE88F00270",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_0_HS_1_0.png",
           "height": 86,
           "class": "ImageResourceLevel",
           "width": 100
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.15,
        "pitch": -31.44,
        "yaw": -5.26
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_0_HS_1_0_0_map.gif",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 50
          }
         ]
        },
        "pitch": -31.44,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -5.26,
        "hfov": 5.15
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4CA89234_4551_0DEB_41C8_C1369FF87D1B",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_0_HS_0_0.png",
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 95
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.48,
        "pitch": -17.94,
        "yaw": 40.54
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_0_HS_0_0_0_map.gif",
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 47
          }
         ]
        },
        "pitch": -17.94,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 40.54,
        "hfov": 5.48
       }
      ]
     }
    ],
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_hq.jpeg",
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000
      },
      {
       "url": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09.jpeg",
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_t.jpg"
   }
  ]
 },
 {
  "buttonMoveRight": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 32,
   "pressedIconHeight": 32,
   "iconURL": "skin/button11478.png",
   "pressedIconWidth": 32,
   "iconHeight": 32,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 32,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 32,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button11478_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button11478_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button11478",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 32,
   "pressedIconHeight": 32,
   "iconURL": "skin/button12365.png",
   "pressedIconWidth": 32,
   "iconHeight": 32,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 32,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 32,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button12365_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button12365_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button12365",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "gyroscopeEnabled": true,
  "buttonPause": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 40,
   "pressedIconHeight": 40,
   "iconURL": "skin/button10241.png",
   "pressedIconWidth": 40,
   "iconHeight": 40,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 40,
   "verticalAlign": "middle",
   "mode": "toggle",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 40,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button10241_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button10241",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "buttonZoomIn": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 32,
   "pressedIconHeight": 32,
   "iconURL": "skin/button14041.png",
   "pressedIconWidth": 32,
   "iconHeight": 32,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 32,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 32,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button14041_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button14041_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button14041",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "buttonCardboardView": {
   "horizontalAlign": "center",
   "iconURL": "skin/IconButton_4DFCBDA0_4553_36EC_41B2_50566E6FEA4D.png",
   "maxHeight": 23,
   "maxWidth": 35,
   "borderSize": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "minHeight": 1,
   "class": "IconButton",
   "mode": "push",
   "paddingTop": 0,
   "shadow": false,
   "minWidth": 1,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 35,
   "height": 23,
   "backgroundOpacity": 0,
   "id": "IconButton_4DFCBDA0_4553_36EC_41B2_50566E6FEA4D",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveDown": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 32,
   "pressedIconHeight": 32,
   "iconURL": "skin/button11056.png",
   "pressedIconWidth": 32,
   "iconHeight": 32,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 32,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 32,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button11056_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button11056_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button11056",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "buttonZoomOut": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 32,
   "pressedIconHeight": 32,
   "iconURL": "skin/button14286.png",
   "pressedIconWidth": 32,
   "iconHeight": 32,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 32,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 32,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button14286_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button14286_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button14286",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 40,
   "pressedIconHeight": 40,
   "iconURL": "skin/button12886.png",
   "pressedIconWidth": 40,
   "iconHeight": 40,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 40,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 40,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button12886_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button12886_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button12886",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 32,
   "pressedIconHeight": 32,
   "iconURL": "skin/button10701.png",
   "pressedIconWidth": 32,
   "iconHeight": 32,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 32,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 32,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button10701_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button10701_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button10701",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "buttonRestart": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 40,
   "pressedIconHeight": 40,
   "iconURL": "skin/button13357.png",
   "pressedIconWidth": 40,
   "iconHeight": 40,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 40,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 40,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button13357_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button13357_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button13357",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "buttonPlayRight": {
   "fontFamily": "Arial",
   "backgroundOpacity": 0,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedBackgroundOpacity": 0,
   "fontSize": 12,
   "rollOverIconHeight": 40,
   "pressedIconHeight": 40,
   "iconURL": "skin/button12694.png",
   "pressedIconWidth": 40,
   "iconHeight": 40,
   "borderSize": 0,
   "paddingLeft": 0,
   "fontStyle": "normal",
   "iconWidth": 40,
   "verticalAlign": "middle",
   "mode": "push",
   "borderColor": "#000000",
   "class": "Button",
   "fontWeight": "normal",
   "minHeight": 0,
   "paddingTop": 0,
   "rollOverIconWidth": 40,
   "fontColor": "#FFFFFF",
   "shadow": false,
   "minWidth": 0,
   "shadowSpread": 1,
   "rollOverIconURL": "skin/button12694_rollover.png",
   "cursor": "hand",
   "layout": "horizontal",
   "paddingBottom": 0,
   "pressedIconURL": "skin/button12694_pressed.png",
   "rollOverBackgroundOpacity": 0,
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "gap": 5,
   "id": "button12694",
   "iconBeforeLabel": true,
   "textDecoration": "none",
   "borderRadius": 0,
   "shadowBlurRadius": 6,
   "backgroundColorDirection": "vertical",
   "shadowColor": "#000000",
   "backgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_camera"
 },
 "this.panorama_43BA5AE2_4551_726F_41BA_70209DE87E05",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_camera"
 },
 "this.panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_4D631332_4551_13EF_41D1_33AFBD45AF09",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_4D631332_4551_13EF_41D1_33AFBD45AF09_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_43BA5AE2_4551_726F_41BA_70209DE87E05",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_43BA5AE2_4551_726F_41BA_70209DE87E05_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_4C1D6FCD_4551_12B4_41CB_CF9F0C78944C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_4E50789E_4551_3ED7_41C6_C3C5F25174DC",
  "audio": {
   "oggUrl": "media/audio_4E50789E_4551_3ED7_41C6_C3C5F25174DC.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_4E50789E_4551_3ED7_41C6_C3C5F25174DC.mp3"
  }
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "minHeight": 50,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderRadius": 0,
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   "this.button14286",
   "this.button13357",
   "this.button12886",
   "this.button12365",
   {
    "horizontalAlign": "center",
    "children": [
     "this.button10701",
     "this.button10241",
     "this.button11056"
    ],
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 20,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "visible",
    "paddingTop": 0,
    "shadow": false,
    "minWidth": 20,
    "layout": "vertical",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundOpacity": 0,
    "id": "container10112",
    "width": 40,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingRight": 0
   },
   "this.button11478",
   "this.button12694",
   {
    "fontFamily": "Arial",
    "backgroundOpacity": 0,
    "backgroundColor": [
     "#5794FE",
     "#0065CD"
    ],
    "pressedBackgroundOpacity": 0,
    "fontSize": 12,
    "rollOverIconHeight": 40,
    "pressedIconHeight": 40,
    "iconURL": "skin/button13647.png",
    "pressedIconWidth": 40,
    "iconHeight": 40,
    "borderSize": 0,
    "paddingLeft": 0,
    "fontStyle": "normal",
    "iconWidth": 40,
    "verticalAlign": "middle",
    "mode": "toggle",
    "borderColor": "#000000",
    "class": "Button",
    "fontWeight": "normal",
    "minHeight": 0,
    "paddingTop": 0,
    "rollOverIconWidth": 40,
    "fontColor": "#FFFFFF",
    "shadow": false,
    "minWidth": 0,
    "shadowSpread": 1,
    "cursor": "hand",
    "layout": "horizontal",
    "paddingBottom": 0,
    "pressedIconURL": "skin/button13647_pressed.png",
    "rollOverBackgroundOpacity": 0,
    "width": 40,
    "height": 40,
    "horizontalAlign": "center",
    "gap": 5,
    "id": "button13647",
    "iconBeforeLabel": true,
    "textDecoration": "none",
    "borderRadius": 0,
    "shadowBlurRadius": 6,
    "backgroundColorDirection": "vertical",
    "shadowColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0
   },
   "this.button14041",
   "this.IconButton_4DFCBDA0_4553_36EC_41B2_50566E6FEA4D"
  ],
  "bottom": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minHeight": 20,
  "class": "Container",
  "verticalAlign": "middle",
  "overflow": "visible",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 20,
  "left": 0,
  "layout": "horizontal",
  "paddingBottom": 0,
  "right": 0,
  "scrollBarColor": "#000000",
  "gap": 4,
  "scrollBarOpacity": 0.5,
  "height": 172,
  "backgroundOpacity": 0,
  "id": "container9697",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingRight": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "start": "this.playAudioList([this.audio_4E50789E_4551_3ED7_41C6_C3C5F25174DC]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_4DFCBDA0_4553_36EC_41B2_50566E6FEA4D], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "shadow": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){    window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "unregisterKey": function(key){    delete window[key]; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "existsKey": function(key){    return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getKey": function(key){    return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } }
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.button13647",
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingRight": 0
})