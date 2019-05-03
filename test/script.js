TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "vfov": 180,
  "id": "panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1214.12,
    "x": 1463.35,
    "angle": -71.4,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "width": 2327,
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "height": 2120,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1457,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98.png"
       },
       {
        "height": 728,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 800,
        "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_lq.png"
       }
      ]
     },
     "id": "map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98",
     "label": "Ground Floor",
     "maximumZoomFactor": 1,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Hall",
         "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_6F05FCF0_7C14_9B00_4189_195E09583521",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 250,
        "y": 1089.12,
        "height": 250,
        "x": 1338.35,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_0_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1089.12,
        "x": 1338.35,
        "width": 250,
        "height": 250,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 171,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_0.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Hall Side",
         "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "id": "overlay_6CD86749_7C1D_B500_41D9_8E12A250B5AB",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 250,
        "y": 743.21,
        "height": 250,
        "x": 1289.87,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_1_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 743.21,
        "x": 1289.87,
        "width": 250,
        "height": 250,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 171,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_1.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "rollOver": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "id": "overlay_6ED6654C_7C1C_9501_41A4_A1F58E28761D",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 250,
        "y": 980.09,
        "height": 250,
        "x": 1067.78,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_2_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 980.09,
        "x": 1067.78,
        "width": 250,
        "height": 250,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 171,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_2.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Room1",
         "rollOver": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "id": "overlay_6E1B7C43_7C6C_BB00_41C9_62A8E0180539",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 250,
        "y": 1089.56,
        "height": 250,
        "x": 527.49,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_3_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1089.56,
        "x": 527.49,
        "width": 250,
        "height": 250,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 171,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_3.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Room",
         "rollOver": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "id": "overlay_6DD8A8AD_7C73_9B00_41DC_49D3885BC9F2",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 250,
        "y": 788.18,
        "height": 250,
        "x": 369.94,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_4_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 788.18,
        "x": 369.94,
        "width": 250,
        "height": 250,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 171,
           "url": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_HS_4.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0.2,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.14,
     "thumbnailUrl": "media/map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98_t.png"
    }
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "vfov": 180,
     "id": "panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 1105.09,
       "x": 1192.78,
       "angle": -121.24,
       "map": "this.map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98"
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "vfov": 180,
        "id": "panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 1214.56,
          "x": 652.49,
          "angle": -78.69,
          "map": "this.map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98"
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
          "yaw": -166.29,
          "backwardYaw": 15.53,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "vfov": 180,
           "id": "panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 913.18,
             "x": 494.94,
             "angle": 322.18,
             "map": "this.map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98"
            }
           ],
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB",
             "yaw": 176.66,
             "backwardYaw": 49.72,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28.jpeg"
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
                 "click": "this.startPanoramaWithCamera(this.panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB, this.camera_69FE043C_7C74_EB00_41C5_A16AFF447833)"
                }
               ],
               "id": "overlay_45E276EA_4A61_F1E5_41CF_AC78EBEF507A",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.41,
                 "yaw": 176.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 46,
                    "class": "ImageResourceLevel",
                    "width": 46,
                    "url": "media/panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -31.65
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
                 "yaw": 176.66,
                 "hfov": 4.41,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 93,
                    "class": "ImageResourceLevel",
                    "width": 92,
                    "url": "media/panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -31.65
                }
               ]
              },
              {
               "class": "VideoPanoramaOverlay",
               "autoplay": true,
               "vfov": 10.19,
               "video": {
                "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
                "class": "VideoResource",
                "width": 1280,
                "height": 720
               },
               "click": "this.overlay_53548BDC_5E30_7D42_41D3_6D86B810549A.stop()",
               "id": "overlay_53548BDC_5E30_7D42_41D3_6D86B810549A",
               "loop": true,
               "rotationX": 0.96,
               "roll": 0.02,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 720,
                  "class": "ImageResourceLevel",
                  "width": 1280,
                  "url": "media/overlay_53548BDC_5E30_7D42_41D3_6D86B810549A_t.png"
                 }
                ]
               },
               "rotationY": 29.81,
               "enabledInCardboard": true,
               "yaw": 155.67,
               "pitch": -0.8,
               "hfov": 17.25,
               "useHandCursor": true
              }
             ]
            }
           ],
           "partial": false,
           "label": "77",
           "thumbnailUrl": "media/panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_t.jpg"
          },
          "yaw": 49.72,
          "backwardYaw": 176.66,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB.jpeg"
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
              "click": "this.startPanoramaWithCamera(this.panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28, this.camera_69D634B1_7C74_EB00_41CE_F82F93DC0788)"
             }
            ],
            "id": "overlay_45719840_4A61_5025_41CC_44163DCE5EB4",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.2,
              "yaw": 49.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 41,
                 "url": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.69
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
              "yaw": 49.72,
              "hfov": 4.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 120,
                 "class": "ImageResourceLevel",
                 "width": 83,
                 "url": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -25.69
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
              "click": "this.startPanoramaWithCamera(this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B, this.camera_69DB648B_7C74_EB00_41D5_A8281306ED01)"
             }
            ],
            "id": "overlay_45F17C62_4A61_50E5_41C4_CF95DF312328",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.46,
              "yaw": -166.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 58,
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "url": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -33.66
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
              "yaw": -166.29,
              "hfov": 4.46,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 116,
                 "class": "ImageResourceLevel",
                 "width": 95,
                 "url": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -33.66
             }
            ]
           },
           {
            "class": "VideoPanoramaOverlay",
            "autoplay": true,
            "vfov": 18.16,
            "video": {
             "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
             "class": "VideoResource",
             "width": 1280,
             "height": 720
            },
            "click": "this.overlay_52816D5F_5E37_957E_418B_8C3159B3DC92.stop()",
            "id": "overlay_52816D5F_5E37_957E_418B_8C3159B3DC92",
            "loop": true,
            "rotationX": 3.42,
            "roll": -2.68,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 720,
               "class": "ImageResourceLevel",
               "width": 1280,
               "url": "media/overlay_52816D5F_5E37_957E_418B_8C3159B3DC92_t.png"
              }
             ]
            },
            "rotationY": -58.2,
            "enabledInCardboard": true,
            "yaw": 116.07,
            "pitch": -1.43,
            "hfov": 29.07,
            "useHandCursor": true
           }
          ]
         }
        ],
        "partial": false,
        "label": "ground floor interior_66 - Panorama",
        "thumbnailUrl": "media/panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_t.jpg"
       },
       "yaw": 15.53,
       "backwardYaw": -166.29,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "vfov": 180,
        "id": "panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 868.21,
          "x": 1414.87,
          "angle": 322.76,
          "map": "this.map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98"
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_41700181_4A61_5024_41B0_494F4A235E88",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0",
                "yaw": -6.06,
                "backwardYaw": 173.74,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_41700181_4A61_5024_41B0_494F4A235E88_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_41700181_4A61_5024_41B0_494F4A235E88_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_41700181_4A61_5024_41B0_494F4A235E88.jpeg"
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
                    "click": "this.startPanoramaWithCamera(this.panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0, this.camera_6941D3D0_7C74_ED00_41AC_F5FC944E18DB)"
                   }
                  ],
                  "id": "overlay_44BB9962_4A61_50E5_41B1_5D2EFF93EC66",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.15,
                    "yaw": -6.06,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 44,
                       "class": "ImageResourceLevel",
                       "width": 45,
                       "url": "media/panorama_41700181_4A61_5024_41B0_494F4A235E88_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -35.22
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
                    "yaw": -6.06,
                    "hfov": 4.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 89,
                       "class": "ImageResourceLevel",
                       "width": 90,
                       "url": "media/panorama_41700181_4A61_5024_41B0_494F4A235E88_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -35.22
                   }
                  ]
                 }
                ]
               }
              ],
              "partial": false,
              "label": "ground floor interior_44 - Panorama",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_41700181_4A61_5024_41B0_494F4A235E88_t.jpg"
             },
             "yaw": 173.74,
             "backwardYaw": -6.06,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E",
             "yaw": -55.24,
             "backwardYaw": 88.58,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0.jpeg"
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
                 "click": "this.startPanoramaWithCamera(this.panorama_41700181_4A61_5024_41B0_494F4A235E88, this.camera_6A172541_7C74_F500_41CA_8590BAADA06D)"
                }
               ],
               "id": "overlay_44DE23DF_4A61_D7DC_41BD_6DDD8338B02C",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.55,
                 "yaw": 173.74,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 48,
                    "url": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -33.43
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
                 "yaw": 173.74,
                 "hfov": 4.55,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 110,
                    "class": "ImageResourceLevel",
                    "width": 97,
                    "url": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -33.43
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
                 "click": "this.startPanoramaWithCamera(this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E, this.camera_6A02454C_7C74_F500_41DD_E78D50F71B7E)"
                }
               ],
               "id": "overlay_5A676776_4A60_B0ED_41C2_0F8021A54D64",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.1,
                 "yaw": -55.24,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -40.18
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
                 "yaw": -55.24,
                 "hfov": 4.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 116,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -40.18
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "label": "ground floor interior_55 - Panorama",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_t.jpg"
          },
          "yaw": 88.58,
          "backwardYaw": -55.24,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
          "yaw": -87.92,
          "backwardYaw": 153.47,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E",
             "yaw": 162.96,
             "backwardYaw": 33.54,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6.jpeg"
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
                 "click": "this.startPanoramaWithCamera(this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E, this.camera_698A7426_7C74_EB00_41C6_BEECC1F1CB99)"
                }
               ],
               "id": "overlay_5E908DA3_4EFC_92D6_41B5_6397DC0FA09A",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.31,
                 "yaw": 162.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 66,
                    "url": "media/panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -44.73
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
                 "yaw": 162.96,
                 "hfov": 5.31,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 175,
                    "class": "ImageResourceLevel",
                    "width": 133,
                    "url": "media/panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -44.73
                }
               ]
              }
             ]
            }
           ],
           "partial": false,
           "label": "1313",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_t.jpg"
          },
          "yaw": 33.54,
          "backwardYaw": 162.96,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_5B26504F_4F24_926D_4190_0FA022002001",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5B26504F_4F24_926D_4190_0FA022002001",
                "yaw": 176.17,
                "backwardYaw": 85.25,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745.jpeg"
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
                    "rollOver": "this.mainPlayList.set('selectedIndex', 14)",
                    "click": "this.startPanoramaWithCamera(this.panorama_5B26504F_4F24_926D_4190_0FA022002001, this.camera_6980C431_7C74_EB00_41CB_2E3ABB34B3B4)"
                   }
                  ],
                  "id": "overlay_41C753E6_4EE7_765F_41AA_E545771425FD",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 3.51,
                    "yaw": 176.17,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 40,
                       "class": "ImageResourceLevel",
                       "width": 38,
                       "url": "media/panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -35.29
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
                    "yaw": 176.17,
                    "hfov": 3.51,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 81,
                       "class": "ImageResourceLevel",
                       "width": 76,
                       "url": "media/panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -35.29
                   }
                  ]
                 },
                 {
                  "class": "VideoPanoramaOverlay",
                  "autoplay": true,
                  "vfov": 25.52,
                  "video": {
                   "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
                   "class": "VideoResource",
                   "width": 1280,
                   "height": 720
                  },
                  "id": "overlay_51E23FEA_5E50_9546_41AE_4E8FD1DA70C1",
                  "rotationX": -1.34,
                  "roll": -0.66,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 720,
                     "class": "ImageResourceLevel",
                     "width": 1280,
                     "url": "media/overlay_51E23FEA_5E50_9546_41AE_4E8FD1DA70C1_t.png"
                    }
                   ]
                  },
                  "rotationY": 28.31,
                  "loop": true,
                  "pitch": 1.12,
                  "enabledInCardboard": true,
                  "yaw": 120.82,
                  "hfov": 42.9,
                  "useHandCursor": true
                 }
                ]
               }
              ],
              "partial": false,
              "label": "1111",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_t.jpg"
             },
             "yaw": 85.25,
             "backwardYaw": 176.17,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E",
             "yaw": -166.42,
             "backwardYaw": 64.53,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001.jpeg"
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
                 "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                 "click": "this.startPanoramaWithCamera(this.panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745, this.camera_69F70447_7C74_EB00_41BC_667277357211)"
                }
               ],
               "id": "overlay_5B4372FE_4FDD_962F_41AC_BA27B22A05AB",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.55,
                 "yaw": 85.25,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 36,
                    "class": "ImageResourceLevel",
                    "width": 35,
                    "url": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -27.92
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
                 "yaw": 85.25,
                 "hfov": 3.55,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 72,
                    "class": "ImageResourceLevel",
                    "width": 71,
                    "url": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -27.92
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
                 "click": "this.startPanoramaWithCamera(this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E, this.camera_69E2646B_7C74_EB00_41DD_3625A179F4BC)"
                }
               ],
               "id": "overlay_596CB7D5_4FDD_7E7D_41CB_ACDA62741AAD",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.22,
                 "yaw": -166.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 45,
                    "url": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -33.89
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
                 "yaw": -166.42,
                 "hfov": 4.22,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 111,
                    "class": "ImageResourceLevel",
                    "width": 90,
                    "url": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -33.89
                }
               ]
              },
              {
               "class": "VideoPanoramaOverlay",
               "autoplay": false,
               "vfov": 18.26,
               "video": {
                "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
                "class": "VideoResource",
                "width": 1280,
                "height": 720
               },
               "click": "this.overlay_51D9C1FA_5E50_ED46_41D0_43DBD952AB63.play()",
               "id": "overlay_51D9C1FA_5E50_ED46_41D0_43DBD952AB63",
               "loop": true,
               "rotationX": -1.5,
               "roll": 1.2,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 720,
                  "class": "ImageResourceLevel",
                  "width": 1280,
                  "url": "media/overlay_51D9C1FA_5E50_ED46_41D0_43DBD952AB63_t.png"
                 }
                ]
               },
               "rotationY": -54.43,
               "enabledInCardboard": true,
               "yaw": 123.06,
               "pitch": 0.99,
               "hfov": 30.71,
               "useHandCursor": true
              }
             ]
            }
           ],
           "partial": false,
           "label": "1010",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_5B26504F_4F24_926D_4190_0FA022002001_t.jpg"
          },
          "yaw": 64.53,
          "backwardYaw": -166.42,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E.jpeg"
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
              "click": "this.startPanoramaWithCamera(this.panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0, this.camera_69C2F4D1_7C74_EB00_41DB_428406F9CE33)"
             }
            ],
            "id": "overlay_441BF3B3_4A67_506B_41D1_99E7B3A9A365",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.91,
              "yaw": 88.58,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 48,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.05
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
              "yaw": 88.58,
              "hfov": 3.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 77,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -25.05
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 12)",
              "click": "this.startPanoramaWithCamera(this.panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6, this.camera_6A37F517_7C74_F500_41C5_F5294E34B2D4)"
             }
            ],
            "id": "overlay_4095A3B9_4EE3_7635_4191_71966D95B031",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.85,
              "yaw": 33.54,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.49
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
              "yaw": 33.54,
              "hfov": 3.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 101,
                 "class": "ImageResourceLevel",
                 "width": 77,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -27.49
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
              "click": "this.startPanoramaWithCamera(this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B, this.camera_6A3B24F1_7C74_EB00_41C7_1813985D027D)"
             }
            ],
            "id": "overlay_5EACD79E_4EE4_9EEF_41D0_374BB0526980",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.21,
              "yaw": -87.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 51,
                 "class": "ImageResourceLevel",
                 "width": 52,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -43.87
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
              "yaw": -87.92,
              "hfov": 4.21,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 103,
                 "class": "ImageResourceLevel",
                 "width": 104,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -43.87
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 14)",
              "click": "this.startPanoramaWithCamera(this.panorama_5B26504F_4F24_926D_4190_0FA022002001, this.camera_6A2D852B_7C74_F500_41D3_44DE09D2E665)"
             }
            ],
            "id": "overlay_5FDF3FD3_4EE7_8E75_41D2_8EA8A3E06C9B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 2.94,
              "yaw": 64.53,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 33,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -37.66
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
              "yaw": 64.53,
              "hfov": 2.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 66,
                 "url": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -37.66
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "ground floor interior_22 - Panorama",
        "thumbnailUrl": "media/panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_t.jpg"
       },
       "yaw": 153.47,
       "backwardYaw": -87.92,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A",
       "yaw": -143.12,
       "backwardYaw": 14.88,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
          "yaw": 172.42,
          "backwardYaw": -5.1,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3.jpeg"
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
              "click": "this.startPanoramaWithCamera(this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B, this.camera_6A186536_7C74_F500_41B7_D037D560B0CC)"
             }
            ],
            "id": "overlay_443E3AB9_4A60_B067_4196_CFE9E4104381",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.34,
              "yaw": 172.42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 50,
                 "url": "media/panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -39.83
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
              "yaw": 172.42,
              "hfov": 4.34,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 126,
                 "class": "ImageResourceLevel",
                 "width": 100,
                 "url": "media/panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -39.83
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "ground floor interior_33 - Panorama",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_t.jpg"
       },
       "yaw": -5.1,
       "backwardYaw": 172.42,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82",
                "yaw": -142.86,
                "backwardYaw": -63.11,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A.jpeg"
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
                    "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                    "click": "this.startPanoramaWithCamera(this.panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82, this.camera_694B73BA_7C74_ED00_41D1_E9C4A4308C23)"
                   }
                  ],
                  "id": "overlay_5C7BC017_4EE5_71FD_41AF_571A75CE2356",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 3.44,
                    "yaw": -142.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -48.9
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
                    "yaw": -142.86,
                    "hfov": 3.44,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 113,
                       "class": "ImageResourceLevel",
                       "width": 93,
                       "url": "media/panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -48.9
                   }
                  ]
                 }
                ]
               }
              ],
              "partial": false,
              "label": "1212",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_t.jpg"
             },
             "yaw": -63.11,
             "backwardYaw": -142.86,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D",
             "yaw": 175.47,
             "backwardYaw": -81.53,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82.jpeg"
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
                 "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
                 "click": "this.startPanoramaWithCamera(this.panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A, this.camera_6A7FD557_7C74_F500_41D6_6D3AB35F78FE)"
                }
               ],
               "id": "overlay_5F03FC16_4EE3_71FE_41A6_DBF1634777E9",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.22,
                 "yaw": -63.11,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 69,
                    "class": "ImageResourceLevel",
                    "width": 54,
                    "url": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -45.83
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
                 "yaw": -63.11,
                 "hfov": 4.22,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 139,
                    "class": "ImageResourceLevel",
                    "width": 108,
                    "url": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -45.83
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
                 "rollOver": "this.mainPlayList.set('selectedIndex', 13)",
                 "click": "this.startPanoramaWithCamera(this.panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D, this.camera_6A6AC562_7C74_F500_41D0_9ACFD906AF0D)"
                }
               ],
               "id": "overlay_5C6919AD_4EE3_B22D_41C8_D0366DE6A20E",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.42,
                 "yaw": 175.47,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 45,
                    "url": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -29.06
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
                 "yaw": 175.47,
                 "hfov": 4.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 83,
                    "class": "ImageResourceLevel",
                    "width": 90,
                    "url": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -29.06
                }
               ]
              },
              {
               "class": "VideoPanoramaOverlay",
               "autoplay": true,
               "vfov": 10.84,
               "video": {
                "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
                "class": "VideoResource",
                "width": 1280,
                "height": 720
               },
               "id": "overlay_519715F2_5E53_9546_41CA_CB4A3D2C0791",
               "rotationX": 8.01,
               "roll": -6.28,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 720,
                  "class": "ImageResourceLevel",
                  "width": 1280,
                  "url": "media/overlay_519715F2_5E53_9546_41CA_CB4A3D2C0791_t.png"
                 }
                ]
               },
               "rotationY": -47.69,
               "loop": true,
               "pitch": -4.82,
               "enabledInCardboard": true,
               "yaw": -165.63,
               "hfov": 17.12,
               "useHandCursor": true
              }
             ]
            }
           ],
           "partial": false,
           "label": "99",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_t.jpg"
          },
          "yaw": -81.53,
          "backwardYaw": 175.47,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
          "yaw": 154.54,
          "backwardYaw": 100.52,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D.jpeg"
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
              "click": "this.startPanoramaWithCamera(this.panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82, this.camera_69BBC3DB_7C74_ED00_41C3_EDB891B53FCD)"
             }
            ],
            "id": "overlay_5CE2A086_4FDD_B2DF_41D0_3AA653FFA3FE",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.7,
              "yaw": -81.53,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 41,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -30.86
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
              "yaw": -81.53,
              "hfov": 3.7,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 82,
                 "class": "ImageResourceLevel",
                 "width": 77,
                 "url": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -30.86
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
              "click": "this.startPanoramaWithCamera(this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B, this.camera_69BFA3E6_7C74_ED00_41DD_14380EE2CE0F)"
             }
            ],
            "id": "overlay_5C908A0A_4FDD_91D7_4193_F3D8A6CECC2F",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.96,
              "yaw": 154.54,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 44,
                 "url": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -37.52
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
              "yaw": 154.54,
              "hfov": 3.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 111,
                 "class": "ImageResourceLevel",
                 "width": 89,
                 "url": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -37.52
             }
            ]
           },
           {
            "class": "VideoPanoramaOverlay",
            "autoplay": true,
            "vfov": 23.73,
            "video": {
             "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
             "class": "VideoResource",
             "width": 1280,
             "height": 720
            },
            "click": "this.overlay_50C311BB_5E30_ADC5_41BB_3B3E1B91EA06.stop()",
            "id": "overlay_50C311BB_5E30_ADC5_41BB_3B3E1B91EA06",
            "loop": true,
            "rotationX": 14.86,
            "roll": 11.31,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 720,
               "class": "ImageResourceLevel",
               "width": 1280,
               "url": "media/overlay_50C311BB_5E30_ADC5_41BB_3B3E1B91EA06_t.png"
              }
             ]
            },
            "rotationY": 44.63,
            "enabledInCardboard": true,
            "yaw": -132.63,
            "pitch": -11.02,
            "hfov": 38.9,
            "useHandCursor": true
           }
          ]
         }
        ],
        "partial": false,
        "label": "88",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_t.jpg"
       },
       "yaw": 100.52,
       "backwardYaw": 154.54,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B.jpeg"
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
           "click": "this.startPanoramaWithCamera(this.panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3, this.camera_69A72411_7C74_EB00_41C8_F6E611D6FA62)"
          }
         ],
         "id": "overlay_43D54C6F_4ED5_A21A_41A7_7E4B8515DCAE",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 2.99,
           "yaw": -5.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 44,
              "class": "ImageResourceLevel",
              "width": 28,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -21.89
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
           "yaw": -5.1,
           "hfov": 2.99,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 89,
              "class": "ImageResourceLevel",
              "width": 57,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -21.89
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
           "click": "this.startPanoramaWithCamera(this.panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB, this.camera_69B143F0_7C74_ED00_419F_34F044079492)"
          }
         ],
         "id": "overlay_43B0272F_4ED4_6E1A_41C9_34F509907402",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 2.67,
           "yaw": 15.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 31,
              "class": "ImageResourceLevel",
              "width": 25,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -21.12
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
           "yaw": 15.53,
           "hfov": 2.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 63,
              "class": "ImageResourceLevel",
              "width": 51,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -21.12
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 13)",
           "click": "this.startPanoramaWithCamera(this.panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D, this.camera_699C941C_7C74_EB00_41D7_89E3C761E268)"
          }
         ],
         "id": "overlay_40249142_4EED_7257_41C2_7C7C1FCD2E14",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 2.41,
           "yaw": 100.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 34,
              "class": "ImageResourceLevel",
              "width": 22,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -17.43
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
           "yaw": 100.52,
           "hfov": 2.41,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 68,
              "class": "ImageResourceLevel",
              "width": 45,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -17.43
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
           "click": "this.startPanoramaWithCamera(this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E, this.camera_69AA13FB_7C74_ED00_41DB_A70355B46BEC)"
          }
         ],
         "id": "overlay_5E2F39BF_4EE4_F22E_41AA_12CC55C640DD",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.22,
           "yaw": 153.47,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 46,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -35.53
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
           "yaw": 153.47,
           "hfov": 4.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 93,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -35.53
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
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "click": "this.startPanoramaWithCamera(this.panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A, this.camera_69AD3406_7C74_EB00_41D6_F8355045AA02)"
          }
         ],
         "id": "overlay_5B808936_4FEC_923F_41CF_EFB2301E715C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.13,
           "yaw": -143.12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 38,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "pitch": -44.08
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
           "yaw": -143.12,
           "hfov": 3.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 81,
              "class": "ImageResourceLevel",
              "width": 77,
              "url": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -44.08
          }
         ]
        }
       ]
      }
     ],
     "partial": false,
     "label": "1414",
     "thumbnailUrl": "media/panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_t.jpg"
    },
    "yaw": 14.88,
    "backwardYaw": -143.12,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A.jpeg"
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
        "click": "this.startPanoramaWithCamera(this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B, this.camera_694F93C5_7C74_ED00_41DE_99CD6B349C37)"
       }
      ],
      "id": "overlay_5DD0D879_4F23_9232_41CD_5D5C2AF1E15C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.32,
        "yaw": 14.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -33.6
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
        "yaw": 14.88,
        "hfov": 4.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 93,
           "class": "ImageResourceLevel",
           "width": 92,
           "url": "media/panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -33.6
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "label": "ground floor interior_11 - Panorama",
  "thumbnailUrl": "media/panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "shadow": false
  },
  "buttonRestart": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "shadow": false
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "shadow": false
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "shadow": false
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "toggle",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "shadow": false
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "shadow": false
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "shadow": false
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "shadow": false
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "shadow": false
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "minHeight": 0,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "minWidth": 0,
   "paddingBottom": 0,
   "transparencyActive": false,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "shadow": false
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "minHeight": 1,
   "paddingRight": 0,
   "borderSize": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 35,
   "height": 23,
   "paddingTop": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_582EFE15_4FE4_B1FD_41D2_8F45056195B4",
   "data": {
    "name": "IconButton5219"
   },
   "maxWidth": 35,
   "minWidth": 1,
   "paddingBottom": 0,
   "transparencyActive": false,
   "maxHeight": 23,
   "iconURL": "skin/IconButton_582EFE15_4FE4_B1FD_41D2_8F45056195B4.png",
   "shadow": false
  }
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "class": "ViewerArea",
   "playbackBarHeadShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipOpacity": 1,
   "progressBottom": 2,
   "progressBorderColor": "#AAAAAA",
   "toolTipTextShadowBlurRadius": 3,
   "progressHeight": 20,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "paddingRight": 0,
   "transitionMode": "blending",
   "toolTipPaddingTop": 4,
   "shadow": false,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipTextShadowOpacity": 0,
   "toolTipDisplayTime": 600,
   "toolTipFontColor": "#606060",
   "borderRadius": 0,
   "paddingLeft": 0,
   "progressBorderSize": 2,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowOpacity": 1,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarBottom": 0,
   "playbackBarProgressOpacity": 1,
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
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarBorderColor": "#AAAAAA",
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBarBorderRadius": 4,
   "toolTipShadowColor": "#333333",
   "height": "91.471%",
   "playbackBarHeadShadow": true,
   "paddingTop": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarLeft": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadHeight": 30,
   "toolTipShadowHorizontalLength": 0,
   "width": "100%",
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
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeight": 20,
   "progressBorderRadius": 4,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipFontFamily": "Arial",
   "progressLeft": 10,
   "toolTipBorderColor": "#767676",
   "id": "MapViewer",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadWidth": 6,
   "bottom": "0%",
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "playbackBarBorderRadius": 4,
   "progressOpacity": 1,
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 0,
   "transitionDuration": 500,
   "left": "0%",
   "playbackBarBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarRight": 0,
   "playbackBarOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipPaddingLeft": 6,
   "toolTipPaddingRight": 6
  },
  "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_camera",
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
 "this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_camera",
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
 "this.panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_camera",
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
 "this.panorama_41700181_4A61_5024_41B0_494F4A235E88",
 {
  "class": "PanoramaCamera",
  "id": "panorama_41700181_4A61_5024_41B0_494F4A235E88_camera",
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
 "this.panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_camera",
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
 "this.panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB",
 {
  "class": "PanoramaCamera",
  "id": "panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_camera",
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
 "this.panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28",
 {
  "class": "PanoramaCamera",
  "id": "panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_camera",
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
  "class": "PhotoAlbum",
  "label": "Photo Album 88",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_4597648F_4E92_0FA7_4192_F3DEF74EA53F_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.32",
       "y": "0.42",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000
     },
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "88",
      "thumbnailUrl": "media/album_4597648F_4E92_0FA7_4192_F3DEF74EA53F_0_t.jpg",
      "width": 8192,
      "id": "album_4597648F_4E92_0FA7_4192_F3DEF74EA53F_0",
      "height": 8192,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_4597648F_4E92_0FA7_4192_F3DEF74EA53F_0.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    }
   ]
  },
  "id": "album_4597648F_4E92_0FA7_4192_F3DEF74EA53F",
  "thumbnailUrl": "media/album_4597648F_4E92_0FA7_4192_F3DEF74EA53F_t.png"
 },
 {
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonRestart": "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
  "viewerArea": "this.MainViewer"
 },
 "this.album_4597648F_4E92_0FA7_4192_F3DEF74EA53F_0",
 "this.panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_camera",
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
 "this.panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745",
 {
  "class": "PanoramaCamera",
  "id": "panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_camera",
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
 "this.panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_camera",
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
 "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_camera",
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
 "this.panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6",
 {
  "class": "PanoramaCamera",
  "id": "panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_camera",
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
 "this.panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_camera",
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
 "this.panorama_5B26504F_4F24_926D_4190_0FA022002001",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5B26504F_4F24_926D_4190_0FA022002001_camera",
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
    "camera": "this.panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A_camera",
    "media": "this.panorama_408A2E0C_4A61_503C_4186_ED9D4F9B237A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_695913A6_7C74_ED00_41C2_49FBF2BBE1AB, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_695913A6_7C74_ED00_41C2_49FBF2BBE1AB",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E_camera",
    "media": "this.panorama_40ABCB14_4A61_D02D_41CE_C40692C0259E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_695E83A7_7C74_ED00_41DD_D5E3FC841056, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_695E83A7_7C74_ED00_41DD_D5E3FC841056",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4156761E_4A61_D05D_41C8_2756C16ABBB3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_41700181_4A61_5024_41B0_494F4A235E88",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_41700181_4A61_5024_41B0_494F4A235E88_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_40CE3B28_4A61_7065_41C1_A7ADC92B3FB0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB_camera",
    "media": "this.panorama_40C29493_4A60_B02B_41B2_1DD766D03DDB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_695F83A8_7C74_ED00_41C5_099AA7715080, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_695F83A8_7C74_ED00_41C5_099AA7715080",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28_camera",
    "media": "this.panorama_478DC34E_4A7F_B03D_41C1_6D232D5B8C28",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_695F53A8_7C74_ED00_41CF_67B1DD0DF752, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_695F53A8_7C74_ED00_41CF_67B1DD0DF752",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_4597648F_4E92_0FA7_4192_F3DEF74EA53F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4517EADF_4E92_1BA7_41BA_DF0DFB6BFA82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_458C6EA4_4E92_3B99_41C8_0E5C6FF7A745_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_45AD4872_4E92_0779_41BD_8B3DEE8DB28A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B_camera",
    "media": "this.panorama_4481549D_4ECC_A23E_41CA_8DEA21A9B20B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_695D93A9_7C74_ED00_41CD_D058D21BFCDB, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_695D93A9_7C74_ED00_41CD_D058D21BFCDB",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_429BC206_4EEC_91DF_41C4_0D4EEDC903B6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C2835E2_4F24_9256_41D1_B9DDAE4FAE5D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5B26504F_4F24_926D_4190_0FA022002001",
    "camera": "this.panorama_5B26504F_4F24_926D_4190_0FA022002001_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)"
   }
  ]
 },
 "this.map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98",
 {
  "class": "PlayList",
  "id": "DropDown_770BF6A5_7BF7_9700_41A0_76528C2D290D_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_6D04C91C_7C2C_BD00_41D8_C63EC0429C98",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_531F4052_5E30_6B46_41B3_C33A26382425_t.jpg",
  "label": "The Islands of The Bahamas _ QCPTV.com",
  "video": {
   "mp4Url": "media/video_531F4052_5E30_6B46_41B3_C33A26382425.mp4",
   "class": "VideoResource",
   "width": 1280,
   "height": 720
  },
  "width": 1280,
  "id": "video_531F4052_5E30_6B46_41B3_C33A26382425",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
  "buttonRestart": "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25"
 },
 {
  "class": "PlayList",
  "id": "playList_695993A6_7C74_ED00_41AF_12A03ADDBB5C",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_531F4052_5E30_6B46_41B3_C33A26382425",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_695993A6_7C74_ED00_41AF_12A03ADDBB5C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_695993A6_7C74_ED00_41AF_12A03ADDBB5C, 0, this.video_531F4052_5E30_6B46_41B3_C33A26382425)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_694B73BA_7C74_ED00_41D1_E9C4A4308C23",
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
   "yaw": 116.89,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_694F93C5_7C74_ED00_41DE_99CD6B349C37",
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
   "yaw": 36.88,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6941D3D0_7C74_ED00_41AC_F5FC944E18DB",
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
   "yaw": -6.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69BBC3DB_7C74_ED00_41C3_EDB891B53FCD",
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
   "yaw": -4.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69BFA3E6_7C74_ED00_41DD_14380EE2CE0F",
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
   "yaw": -79.48,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69B143F0_7C74_ED00_419F_34F044079492",
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
   "yaw": 13.71,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69AA13FB_7C74_ED00_41DB_A70355B46BEC",
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
   "yaw": 92.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69AD3406_7C74_EB00_41D6_F8355045AA02",
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
   "yaw": -165.12,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69A72411_7C74_EB00_41C8_F6E611D6FA62",
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
   "yaw": -7.58,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_699C941C_7C74_EB00_41D7_89E3C761E268",
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
   "yaw": -25.46,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_698A7426_7C74_EB00_41C6_BEECC1F1CB99",
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
   "yaw": -146.46,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6980C431_7C74_EB00_41CB_2E3ABB34B3B4",
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
   "yaw": -94.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69FE043C_7C74_EB00_41C5_A16AFF447833",
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
   "yaw": -130.28,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69F70447_7C74_EB00_41BC_667277357211",
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
   "yaw": -3.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69E2646B_7C74_EB00_41DD_3625A179F4BC",
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
   "yaw": -115.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69DB648B_7C74_EB00_41D5_A8281306ED01",
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
   "yaw": -164.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69D634B1_7C74_EB00_41CE_F82F93DC0788",
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
   "yaw": -3.34,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_69C2F4D1_7C74_EB00_41DB_428406F9CE33",
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
   "yaw": 124.76,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A3B24F1_7C74_EB00_41C7_1813985D027D",
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
   "yaw": -26.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A37F517_7C74_F500_41C5_F5294E34B2D4",
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
   "yaw": -17.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A2D852B_7C74_F500_41D3_44DE09D2E665",
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
   "yaw": 13.58,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A186536_7C74_F500_41B7_D037D560B0CC",
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
   "yaw": 174.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A172541_7C74_F500_41CA_8590BAADA06D",
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
   "yaw": 173.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A02454C_7C74_F500_41DD_E78D50F71B7E",
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
   "yaw": -91.42,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A7FD557_7C74_F500_41D6_6D3AB35F78FE",
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
   "yaw": 37.14,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6A6AC562_7C74_F500_41D0_9ACFD906AF0D",
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
   "yaw": 98.47,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Better Days Ahead"
  },
  "class": "MediaAudio",
  "id": "audio_576EAE99_4FE7_8EF2_41D2_C29C801F96F6",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_576EAE99_4FE7_8EF2_41D2_C29C801F96F6.mp3",
   "oggUrl": "media/audio_576EAE99_4FE7_8EF2_41D2_C29C801F96F6.ogg"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "playbackBarHeadShadowVerticalLength": 0,
  "borderSize": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressHeight": 20,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "shadow": false,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "paddingLeft": 0,
  "progressBorderSize": 2,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "playbackBarProgressOpacity": 1,
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
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "minHeight": 50,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 4,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 30,
  "toolTipShadowHorizontalLength": 0,
  "width": "100%",
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
  "progressOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 4,
  "minWidth": 100,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
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
      "minHeight": 20,
      "paddingRight": 0,
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "verticalAlign": "middle",
      "width": 40,
      "height": "100%",
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "gap": 4,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "scrollBarMargin": 2,
      "creationPolicy": "delayed",
      "backgroundOpacity": 0,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "minWidth": 20,
      "layout": "vertical",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "shadow": false,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "class": "IconButton",
      "minHeight": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "mode": "toggle",
      "verticalAlign": "middle",
      "width": 40,
      "height": 40,
      "paddingTop": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "minWidth": 0,
      "paddingBottom": 0,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "shadow": false
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "scrollBarVisible": "rollOver",
    "minHeight": 20,
    "paddingRight": 0,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "width": 360,
    "height": "95.07%",
    "paddingTop": 0,
    "borderRadius": 0,
    "paddingLeft": 0,
    "gap": 4,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "scrollBarMargin": 2,
    "creationPolicy": "delayed",
    "backgroundOpacity": 0,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "minWidth": 360,
    "layout": "horizontal",
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "shadow": false,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_582EFE15_4FE4_B1FD_41D2_8F45056195B4"
  ],
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "paddingRight": 0,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "verticalAlign": "middle",
  "height": 142,
  "paddingTop": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "width": "100%",
  "creationPolicy": "delayed",
  "bottom": "0%",
  "data": {
   "name": "Container44746"
  },
  "backgroundOpacity": 0,
  "minWidth": 1,
  "layout": "horizontal",
  "paddingBottom": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "shadow": false,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "class": "Container",
  "children": [
   "this.MapViewer",
   {
    "class": "DropDown",
    "selectedPopUpFontColor": "#FFFFFF",
    "minHeight": 20,
    "popUpBorderRadius": 0,
    "backgroundColor": [
     "#666666",
     "#333333"
    ],
    "borderSize": 0,
    "fontSize": 14,
    "paddingRight": 5,
    "textDecoration": "none",
    "popUpShadowOpacity": 0,
    "selectedPopUpBackgroundColor": "#333333",
    "popUpFontColor": "#000000",
    "paddingTop": 0,
    "paddingLeft": 5,
    "gap": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "borderRadius": 4,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "fontWeight": "normal",
    "backgroundColorRatios": [
     0,
     1
    ],
    "top": "0%",
    "popUpShadowBlurRadius": 6,
    "backgroundOpacity": 0.9,
    "id": "DropDown_770BF6A5_7BF7_9700_41A0_76528C2D290D",
    "fontFamily": "Arial",
    "popUpShadowSpread": 1,
    "minWidth": 200,
    "popUpBackgroundOpacity": 0.9,
    "width": "100%",
    "fontColor": "#FFFFFF",
    "fontStyle": "normal",
    "paddingBottom": 0,
    "data": {
     "name": "DropDown1204"
    },
    "left": "0%",
    "popUpShadow": false,
    "arrowBeforeLabel": false,
    "playList": "this.DropDown_770BF6A5_7BF7_9700_41A0_76528C2D290D_playlist",
    "height": "8.529%",
    "popUpShadowColor": "#000000",
    "arrowColor": "#FFFFFF",
    "shadow": false
   }
  ],
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "verticalAlign": "top",
  "paddingRight": 0,
  "height": "37.171%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "top": "2.57%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "creationPolicy": "delayed",
  "backgroundOpacity": 0.3,
  "id": "Container_74D8F168_7BEA_8DA1_41D8_13DF6C965A6E",
  "data": {
   "name": "Container3579"
  },
  "minWidth": 1,
  "layout": "absolute",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "scrollBarOpacity": 0.5,
  "width": "18.931%",
  "right": "1.45%",
  "shadow": false,
  "overflow": "scroll"
 }
], 
 "start": "this.playAudioList([this.audio_576EAE99_4FE7_8EF2_41D2_C29C801F96F6]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_582EFE15_4FE4_B1FD_41D2_8F45056195B4], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_770BF6A5_7BF7_9700_41A0_76528C2D290D_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_770BF6A5_7BF7_9700_41A0_76528C2D290D_playlist.set('selectedIndex', 0)",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "verticalAlign": "top",
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "gap": 10,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "scrollBarWidth": 10,
 "scripts": {
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "scrollBarMargin": 2,
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "minWidth": 20,
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "contentOpaque": false,
 "overflow": "visible"
})