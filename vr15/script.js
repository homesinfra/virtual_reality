TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "AA",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "class": "Panorama",
     "partial": false,
     "label": "BB",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6",
       "class": "AdjacentPanorama",
       "backwardYaw": -180,
       "yaw": -59.44,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "label": "cc",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "hfovMax": 120,
           "class": "Panorama",
           "partial": false,
           "label": "ee",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF",
             "class": "AdjacentPanorama",
             "backwardYaw": -180,
             "yaw": -151.29,
             "distance": 1
            }
           ],
           "id": "panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_55CAB6CC_4109_70E5_41B1_9B2E5CC825DC",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_0_HS_0_0.png",
                    "height": 102,
                    "class": "ImageResourceLevel",
                    "width": 105
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.06,
                 "pitch": -29.82,
                 "yaw": -151.29
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
                    "url": "media/panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_0_HS_0_0_0_map.gif",
                    "height": 51,
                    "class": "ImageResourceLevel",
                    "width": 52
                   }
                  ]
                 },
                 "pitch": -29.82,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -151.29,
                 "hfov": 8.06
                }
               ]
              }
             ],
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_hq.jpeg",
                "height": 4096,
                "class": "ImageResourceLevel",
                "width": 4096
               },
               {
                "url": "media/panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F.jpeg",
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 3217
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -180,
          "yaw": 173.56,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "class": "Panorama",
           "partial": false,
           "label": "dd",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF",
             "class": "AdjacentPanorama",
             "backwardYaw": -180,
             "yaw": -22.31,
             "distance": 1
            }
           ],
           "id": "panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_57004C63_410B_17A2_41BC_B1E94AE31D71",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_0_HS_0_0.png",
                    "height": 80,
                    "class": "ImageResourceLevel",
                    "width": 68
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.42,
                 "pitch": -25.3,
                 "yaw": -22.31
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
                    "url": "media/panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_0_HS_0_0_0_map.gif",
                    "height": 40,
                    "class": "ImageResourceLevel",
                    "width": 34
                   }
                  ]
                 },
                 "pitch": -25.3,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -22.31,
                 "hfov": 5.42
                }
               ]
              }
             ],
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_hq.jpeg",
                "height": 4096,
                "class": "ImageResourceLevel",
                "width": 4096
               },
               {
                "url": "media/panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364.jpeg",
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 3217
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -180,
          "yaw": -37.94,
          "distance": 1
         },
         {
          "panorama": "this.panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C",
          "class": "AdjacentPanorama",
          "backwardYaw": -180,
          "yaw": -85.84,
          "distance": 1
         }
        ],
        "id": "panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_56EEEC7B_4109_17A3_41C0_4B606EB0D4BC",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_0_HS_2_0.png",
                 "height": 90,
                 "class": "ImageResourceLevel",
                 "width": 103
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.1,
              "pitch": -26.84,
              "yaw": 173.56
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
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
                 "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_0_HS_2_0_0_map.gif",
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 51
                }
               ]
              },
              "pitch": -26.84,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 173.56,
              "hfov": 8.1
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_55D460AD_4137_10A6_41CD_886D6063BCA1",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_0_HS_3_0.png",
                 "height": 72,
                 "class": "ImageResourceLevel",
                 "width": 101
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.57,
              "pitch": -16.92,
              "yaw": -37.94
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
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
                 "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_0_HS_3_0_0_map.gif",
                 "height": 36,
                 "class": "ImageResourceLevel",
                 "width": 50
                }
               ]
              },
              "pitch": -16.92,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -37.94,
              "hfov": 8.57
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_57D764B0_4139_10BE_41C1_67C48BC9FA6E",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_0_HS_4_0.png",
                 "height": 53,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.57,
              "pitch": -19.39,
              "yaw": -85.84
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
                 "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_0_HS_4_0_0_map.gif",
                 "height": 26,
                 "class": "ImageResourceLevel",
                 "width": 27
                }
               ]
              },
              "pitch": -19.39,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -85.84,
              "hfov": 4.57
             }
            ]
           }
          ],
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_hq.jpeg",
             "height": 4096,
             "class": "ImageResourceLevel",
             "width": 4096
            },
            {
             "url": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF.jpeg",
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 3217
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -180,
       "yaw": 103.69,
       "distance": 1
      }
     ],
     "id": "panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_58B3BD54_4117_31E6_41C1_FC9BEECC7164",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_0_HS_1_0.png",
              "height": 78,
              "class": "ImageResourceLevel",
              "width": 70
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.42,
           "pitch": -28.95,
           "yaw": 103.69
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
              "url": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_0_HS_1_0_0_map.gif",
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 35
             }
            ]
           },
           "pitch": -28.95,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 103.69,
           "hfov": 5.42
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_55C8DEF0_411B_10BE_41A0_8BE0F81433B8",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_0_HS_0_0.png",
              "height": 85,
              "class": "ImageResourceLevel",
              "width": 111
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.02,
           "pitch": -22.4,
           "yaw": -59.44
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
              "url": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_0_HS_0_0_0_map.gif",
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 55
             }
            ]
           },
           "pitch": -22.4,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -59.44,
           "hfov": 9.02
          }
         ]
        }
       ],
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_hq.jpeg",
          "height": 4096,
          "class": "ImageResourceLevel",
          "width": 4096
         },
         {
          "url": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C.jpeg",
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 3217
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -180,
    "yaw": 14.54,
    "distance": 1
   }
  ],
  "id": "panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_55B3B847_4109_1FE2_41CE_BBAE98BC0F5E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_0_HS_0_0.png",
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 55
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.62,
        "pitch": -19.57,
        "yaw": 14.54
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
           "url": "media/panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_0_HS_0_0_0_map.gif",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "pitch": -19.57,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 14.54,
        "hfov": 4.62
       }
      ]
     }
    ],
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_hq.jpeg",
       "height": 4096,
       "class": "ImageResourceLevel",
       "width": 4096
      },
      {
       "url": "media/panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6.jpeg",
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_t.jpg"
   }
  ]
 },
 {
  "buttonMoveRight": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "touchControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "gyroscopeEnabled": true,
  "buttonPause": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "toggle",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "buttonCardboardView": {
   "horizontalAlign": "center",
   "maxWidth": 35,
   "minHeight": 1,
   "iconURL": "skin/IconButton_5586A9A2_413B_70A2_41BC_807D020E1C02.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "maxHeight": 23,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 35,
   "height": 23,
   "backgroundOpacity": 0,
   "id": "IconButton_5586A9A2_413B_70A2_41BC_807D020E1C02",
   "borderRadius": 0,
   "minWidth": 1,
   "paddingRight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveDown": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "buttonZoomOut": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "mouseControlMode": "drag_acceleration",
  "buttonMoveUp": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "buttonRestart": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "buttonPlayRight": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
   "borderRadius": 0,
   "minWidth": 0,
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true
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
  "id": "panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_camera"
 },
 "this.panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C",
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
  "id": "panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_camera"
 },
 "this.panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF",
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
  "id": "panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_camera"
 },
 "this.panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364",
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
  "id": "panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_camera"
 },
 "this.panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F",
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
  "id": "panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_2B495FB0_3F79_30BE_41C9_EF4010C81AD6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_2AD02243_3F79_13E3_41CE_FA8874ED803C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_2B45C0FE_3F0B_70A2_41A9_DF958E0C7ADF_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_28456FD2_3F09_10E2_41C0_9BC5522F5364_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_2AB7CA2F_3F0B_13A2_41CB_24C875A00D5F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_584AB59E_4109_1165_41AF_99E046D71D3C",
  "audio": {
   "oggUrl": "media/audio_584AB59E_4109_1165_41AF_99E046D71D3C.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_584AB59E_4109_1165_41AF_99E046D71D3C.mp3"
  }
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 10,
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
  "playbackBarHeadHeight": 30,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 1,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 20,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 2,
  "playbackBarBottom": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "minWidth": 100,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 20,
  "minHeight": 50,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderRadius": 4,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "left": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "horizontalAlign": "center",
    "children": [
     "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
     "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
     "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
     "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
     {
      "horizontalAlign": "center",
      "children": [
       "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
       "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
       "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15"
      ],
      "minHeight": 20,
      "borderSize": 0,
      "paddingLeft": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "shadow": false,
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "middle",
      "overflow": "hidden",
      "paddingTop": 0,
      "paddingBottom": 0,
      "scrollBarColor": "#000000",
      "gap": 4,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "backgroundOpacity": 0,
      "id": "Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
      "width": 40,
      "borderRadius": 0,
      "contentOpaque": false,
      "minWidth": 20,
      "layout": "vertical",
      "paddingRight": 0
     },
     "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
     "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
     {
      "backgroundOpacity": 0,
      "minHeight": 0,
      "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC.png",
      "borderSize": 0,
      "paddingLeft": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "paddingTop": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "paddingBottom": 0,
      "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC_pressed.png",
      "width": 40,
      "height": 40,
      "horizontalAlign": "center",
      "id": "IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
      "borderRadius": 0,
      "minWidth": 0,
      "paddingRight": 0
     },
     "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375"
    ],
    "minHeight": 20,
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "hidden",
    "paddingTop": 0,
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundOpacity": 0,
    "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
    "width": 421,
    "borderRadius": 0,
    "contentOpaque": false,
    "minWidth": 421,
    "layout": "horizontal",
    "paddingRight": 0
   },
   "this.IconButton_5586A9A2_413B_70A2_41BC_807D020E1C02"
  ],
  "minHeight": 1,
  "bottom": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "middle",
  "overflow": "scroll",
  "paddingTop": 0,
  "left": "0%",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 142,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "width": "100%",
  "borderRadius": 0,
  "minWidth": 1,
  "layout": "horizontal",
  "paddingRight": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "layout": "absolute",
 "start": "this.playAudioList([this.audio_584AB59E_4109_1165_41AF_99E046D71D3C]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_5586A9A2_413B_70A2_41BC_807D020E1C02], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "minHeight": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){    return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "existsKey": function(key){    return key in window; },
  "unregisterKey": function(key){    delete window[key]; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "registerKey": function(key, value){    window[key] = value; }
 },
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 20,
 "paddingRight": 0
})