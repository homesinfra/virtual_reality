TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_49E9FDC9_44EB_F524_41CC_6EC6029023F1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.52,
        "yaw": -96.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 35,
           "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.09
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -96.42,
        "hfov": 3.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 78,
           "class": "ImageResourceLevel",
           "width": 71,
           "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -28.09
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
        "click": "this.startPanoramaWithCamera(this.panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127, this.camera_650ECF3B_4564_7564_41C8_646685D12867)"
       }
      ],
      "id": "overlay_4A427BB1_44E4_FD65_41A0_50E17986782B",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.57,
        "yaw": -43.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 49,
           "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -33.57
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -43.42,
        "hfov": 4.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 117,
           "class": "ImageResourceLevel",
           "width": 98,
           "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -33.57
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
        "click": "this.startPanoramaWithCamera(this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9, this.camera_65117F46_4564_752C_41BD_2A7415E92014)"
       }
      ],
      "id": "overlay_4B78EF60_44FC_75E4_41D1_1F4B1B539CA1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.11,
        "yaw": 92.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -25.31
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 92.83,
        "hfov": 4.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 81,
           "url": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -25.31
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "hfovMax": 120,
     "id": "panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127",
     "hfovMin": 60,
     "pitch": 0,
     "hfov": 360,
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "click": "this.startPanoramaWithCamera(this.panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3, this.camera_6548EFB5_4564_756C_41CB_359AAF140EEA)"
          }
         ],
         "id": "overlay_4A431A7D_44E4_9FDC_41BF_2D737165250C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.54,
           "yaw": 110.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -30.91
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 110.29,
           "hfov": 4.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 78,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -30.91
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 14)",
           "click": "this.startPanoramaWithCamera(this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826, this.camera_65503FC0_4564_7524_41C1_37743CEAC49B)"
          }
         ],
         "id": "overlay_520795FF_453C_B4DC_41BE_E77A1657797B",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.4,
           "yaw": -75,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 31,
              "url": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -12.1
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -75,
           "hfov": 3.4,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 62,
              "url": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -12.1
          }
         ]
        }
       ]
      }
     ],
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3",
       "yaw": 110.29,
       "distance": 1,
       "backwardYaw": -43.42
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826",
        "hfovMin": 60,
        "pitch": 0,
        "hfov": 360,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 15)",
              "click": "this.startPanoramaWithCamera(this.panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3, this.camera_67EBAE9B_4564_7724_41C2_A957F07A733E)"
             }
            ],
            "id": "overlay_511DA2E1_452D_ECE5_41A1_A15B53B65504",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.29,
              "yaw": -26.57,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 53,
                 "class": "ImageResourceLevel",
                 "width": 45,
                 "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -33.26
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -26.57,
              "hfov": 4.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 106,
                 "class": "ImageResourceLevel",
                 "width": 91,
                 "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -33.26
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 16)",
              "click": "this.startPanoramaWithCamera(this.panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25, this.camera_67E74E90_4564_7724_41BB_B5749D53B31D)"
             }
            ],
            "id": "overlay_51C5A2F4_452C_ECEC_41A9_966DEB612966",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.72,
              "yaw": 32.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 44,
                 "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -20.14
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 32.11,
              "hfov": 4.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 78,
                 "class": "ImageResourceLevel",
                 "width": 89,
                 "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -20.14
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127, this.camera_679C7E85_4564_772C_416B_FBF5670430C5)"
             }
            ],
            "id": "overlay_53A9A692_4524_9724_41B4_04484054502E",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.45,
              "yaw": -123.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 79,
                 "class": "ImageResourceLevel",
                 "width": 76,
                 "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.56
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -123.07,
              "hfov": 8.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 159,
                 "class": "ImageResourceLevel",
                 "width": 152,
                 "url": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -6.56
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127",
          "yaw": -123.07,
          "distance": 1,
          "backwardYaw": -75
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25",
           "hfovMin": 60,
           "pitch": 0,
           "hfov": 360,
           "partial": false,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 14)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826, this.camera_67C23EC7_4564_772C_41BC_C57C46AB66ED)"
                }
               ],
               "id": "overlay_516CDDD2_452F_B524_41C5_B6AC7196A00A",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.59,
                 "yaw": 169.43,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 44,
                    "url": "media/panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -21.52
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 169.43,
                 "hfov": 4.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 98,
                    "class": "ImageResourceLevel",
                    "width": 88,
                    "url": "media/panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -21.52
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826",
             "yaw": 169.43,
             "distance": 1,
             "backwardYaw": 32.11
            }
           ],
           "label": "pr room_33 - Panorama",
           "thumbnailUrl": "media/panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_t.jpg"
          },
          "yaw": 32.11,
          "distance": 1,
          "backwardYaw": 169.43
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3",
           "hfovMin": 60,
           "pitch": 0,
           "hfov": 360,
           "partial": false,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 14)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826, this.camera_65093F2F_4564_757C_41D0_5A8B38879A45)"
                }
               ],
               "id": "overlay_58B16A82_455D_9F24_41C2_8CE0B9486E96",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.38,
                 "yaw": -153.97,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 46,
                    "class": "ImageResourceLevel",
                    "width": 38,
                    "url": "media/panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -37.85
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -153.97,
                 "hfov": 3.38,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 92,
                    "class": "ImageResourceLevel",
                    "width": 76,
                    "url": "media/panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -37.85
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826",
             "yaw": -153.97,
             "distance": 1,
             "backwardYaw": -26.57
            }
           ],
           "label": "pr room_22 - Panorama",
           "thumbnailUrl": "media/panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_t.jpg"
          },
          "yaw": -26.57,
          "distance": 1,
          "backwardYaw": -153.97
         }
        ],
        "label": "pr room_11 - Panorama",
        "thumbnailUrl": "media/panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_t.jpg"
       },
       "yaw": -75,
       "distance": 1,
       "backwardYaw": -123.07
      }
     ],
     "label": "jalan residence_222 - Panorama",
     "thumbnailUrl": "media/panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_t.jpg"
    },
    "yaw": -43.42,
    "distance": 1,
    "backwardYaw": 110.29
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "hfovMax": 120,
     "id": "panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9",
     "hfovMin": 60,
     "pitch": 0,
     "hfov": 360,
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
           "click": "this.startPanoramaWithCamera(this.panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB, this.camera_65635F67_4564_75EC_41C1_0658BA9B2B94)"
          }
         ],
         "id": "overlay_4B3D432B_44FC_6D64_41CA_C4D0FE3DAD15",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.8,
           "yaw": -37.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 40,
              "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -33.39
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -37.52,
           "hfov": 3.8,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 81,
              "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -33.39
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
           "click": "this.startPanoramaWithCamera(this.panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B, this.camera_65655F72_4564_75E4_41B5_BA54D74E1597)"
          }
         ],
         "id": "overlay_5396BB80_4525_FD24_41C0_2CE61A905EE4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.89,
           "yaw": 46.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 69,
              "class": "ImageResourceLevel",
              "width": 52,
              "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -5.43
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 46.11,
           "hfov": 5.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 139,
              "class": "ImageResourceLevel",
              "width": 105,
              "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -5.43
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "click": "this.startPanoramaWithCamera(this.panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3, this.camera_656F5F7D_4564_75DC_41CD_A1912904D615)"
          }
         ],
         "id": "overlay_582FEF55_4525_B52C_41C2_9CF3109E038C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.86,
           "yaw": 176.73,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 36,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -29.59
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 176.73,
           "hfov": 3.86,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 79,
              "url": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -29.59
          }
         ]
        }
       ]
      }
     ],
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB",
        "hfovMin": 60,
        "pitch": 0,
        "hfov": 360,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9, this.camera_6581BFF6_4564_74EC_4199_560D0DA971D4)"
             }
            ],
            "id": "overlay_4B08ACB4_44FC_9B6C_41C4_52C9D00B8909",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.11,
              "yaw": -130.75,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 47,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -37.29
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -130.75,
              "hfov": 4.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 95,
                 "class": "ImageResourceLevel",
                 "width": 92,
                 "url": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -37.29
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 6)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2, this.camera_65BB0FEC_4564_74FC_41C2_F244A25981B6)"
             }
            ],
            "id": "overlay_55ADFD24_44E4_956C_41BF_C279084DA10D",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.92,
              "yaw": -25.67,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 50,
                 "url": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -29.52
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -25.67,
              "hfov": 4.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 121,
                 "class": "ImageResourceLevel",
                 "width": 101,
                 "url": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -29.52
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2",
           "hfovMin": 60,
           "pitch": 0,
           "hfov": 360,
           "partial": false,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB, this.camera_67C41ED2_4564_7724_41C1_4FD72474B382)"
                }
               ],
               "id": "overlay_54C662BE_44E5_EF5C_41B4_91C3CA7EC152",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.05,
                 "yaw": 145.81,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 54,
                    "url": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -33.4
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 145.81,
                 "hfov": 5.05,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 111,
                    "class": "ImageResourceLevel",
                    "width": 108,
                    "url": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -33.4
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3, this.camera_650B1F24_4564_756C_4196_344598E3E313)"
                }
               ],
               "id": "overlay_545BC94C_44E4_7D3C_41B6_C54AC941D004",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.47,
                 "yaw": 110.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 79,
                    "class": "ImageResourceLevel",
                    "width": 69,
                    "url": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -17.06
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 110.17,
                 "hfov": 7.47,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 158,
                    "class": "ImageResourceLevel",
                    "width": 139,
                    "url": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -17.06
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB",
             "yaw": 145.81,
             "distance": 1,
             "backwardYaw": -25.67
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "hfovMax": 120,
              "id": "panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3",
              "hfovMin": 60,
              "pitch": 0,
              "hfov": 360,
              "partial": false,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                    "click": "this.startPanoramaWithCamera(this.panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47, this.camera_657A1F93_4564_7524_41CB_DF8FCA2A7253)"
                   }
                  ],
                  "id": "overlay_543CA4B5_44E4_EB6C_41C7_43F424FA0698",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 3.53,
                    "yaw": 1.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 51,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -47.74
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 1.86,
                    "hfov": 3.53,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 103,
                       "class": "ImageResourceLevel",
                       "width": 93,
                       "url": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -47.74
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 6)",
                    "click": "this.startPanoramaWithCamera(this.panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2, this.camera_65711F88_4564_7524_41AF_32599FA43D14)"
                   }
                  ],
                  "id": "overlay_56294C27_44E7_FB6C_41AF_D5A27EBE1F1D",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.02,
                    "yaw": 157.24,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 88,
                       "class": "ImageResourceLevel",
                       "width": 88,
                       "url": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -24.19
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 157.24,
                    "hfov": 9.02,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 176,
                       "class": "ImageResourceLevel",
                       "width": 176,
                       "url": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -24.19
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2",
                "yaw": 157.24,
                "distance": 1,
                "backwardYaw": 110.17
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "hfovMax": 120,
                 "id": "panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47",
                 "hfovMin": 60,
                 "pitch": 0,
                 "hfov": 360,
                 "partial": false,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "stereoSphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 6434,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_hq.jpeg"
                     },
                     {
                      "height": 4002,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                       "click": "this.startPanoramaWithCamera(this.panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3, this.camera_6595800D_4564_6B3C_41CD_1281D59C2D53)"
                      }
                     ],
                     "id": "overlay_55221170_44E5_EDE4_41B0_2AD514524D0B",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.8,
                       "yaw": -174.98,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 57,
                          "class": "ImageResourceLevel",
                          "width": 46,
                          "url": "media/panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -42.53
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -174.98,
                       "hfov": 3.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 114,
                          "class": "ImageResourceLevel",
                          "width": 92,
                          "url": "media/panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -42.53
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3",
                   "yaw": -174.98,
                   "distance": 1,
                   "backwardYaw": 1.86
                  }
                 ],
                 "label": "jalan residence_888 - Panorama",
                 "thumbnailUrl": "media/panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_t.jpg"
                },
                "yaw": 1.86,
                "distance": 1,
                "backwardYaw": -174.98
               }
              ],
              "label": "jalan residence_777 - Panorama",
              "thumbnailUrl": "media/panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_t.jpg"
             },
             "yaw": 110.17,
             "distance": 1,
             "backwardYaw": 157.24
            }
           ],
           "label": "jalan residence_666 - Panorama",
           "thumbnailUrl": "media/panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_t.jpg"
          },
          "yaw": -25.67,
          "distance": 1,
          "backwardYaw": 145.81
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9",
          "yaw": -130.75,
          "distance": 1,
          "backwardYaw": -37.52
         }
        ],
        "label": "jalan residence_555 - Panorama",
        "thumbnailUrl": "media/panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_t.jpg"
       },
       "yaw": -37.52,
       "distance": 1,
       "backwardYaw": -130.75
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B",
        "hfovMin": 60,
        "pitch": 0,
        "hfov": 360,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 12)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034, this.camera_657C1F9F_4564_755C_41C3_2581701C5A9E)"
             }
            ],
            "id": "overlay_5042E528_452B_9563_41CC_5AC82766A370",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.41,
              "yaw": -52.62,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 46,
                 "class": "ImageResourceLevel",
                 "width": 34,
                 "url": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -29.26
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -52.62,
              "hfov": 3.41,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 93,
                 "class": "ImageResourceLevel",
                 "width": 69,
                 "url": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -29.26
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9, this.camera_65453FA9_4564_7564_4178_8E43EAA43874)"
             }
            ],
            "id": "overlay_5354F688_4527_B724_41B8_34CFB832ED90",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.12,
              "yaw": 175.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 64,
                 "class": "ImageResourceLevel",
                 "width": 57,
                 "url": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -19.32
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 175.63,
              "hfov": 6.12,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 129,
                 "class": "ImageResourceLevel",
                 "width": 115,
                 "url": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -19.32
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034",
           "hfovMin": 60,
           "pitch": 0,
           "hfov": 360,
           "partial": false,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B, this.camera_6518FF5C_4564_75DC_41D0_1D36B0BA41C2)"
                }
               ],
               "id": "overlay_504ACC9C_452C_FB5C_4179_7B4B28E50ADC",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.99,
                 "yaw": -167.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 39,
                    "url": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -24.24
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -167.95,
                 "hfov": 3.99,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "class": "ImageResourceLevel",
                    "width": 78,
                    "url": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -24.24
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 13)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21, this.camera_65152F51_4564_7524_41BF_B79F67E4E406)"
                }
               ],
               "id": "overlay_50E0F7BA_4525_9564_41B1_940F6031A5B2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.75,
                 "yaw": 21.85,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 61,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -45.73
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 21.85,
                 "hfov": 3.75,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 123,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -45.73
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "hfovMax": 120,
              "id": "panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21",
              "hfovMin": 60,
              "pitch": 0,
              "hfov": 360,
              "partial": false,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_t.jpg",
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 12)",
                    "click": "this.startPanoramaWithCamera(this.panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034, this.camera_65586FCB_4564_7524_41CF_74A0CC191EAE)"
                   }
                  ],
                  "id": "overlay_50BB720F_4524_EF3C_41AB_EAB14FA53848",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.37,
                    "yaw": -147.27,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 62,
                       "class": "ImageResourceLevel",
                       "width": 61,
                       "url": "media/panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -38.79
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -147.27,
                    "hfov": 5.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 125,
                       "class": "ImageResourceLevel",
                       "width": 123,
                       "url": "media/panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -38.79
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034",
                "yaw": -147.27,
                "distance": 1,
                "backwardYaw": 21.85
               }
              ],
              "label": "jalan residence_1414 - Panorama",
              "thumbnailUrl": "media/panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_t.jpg"
             },
             "yaw": 21.85,
             "distance": 1,
             "backwardYaw": -147.27
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B",
             "yaw": -167.95,
             "distance": 1,
             "backwardYaw": -52.62
            }
           ],
           "label": "jalan residence_1313 - Panorama",
           "thumbnailUrl": "media/panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_t.jpg"
          },
          "yaw": -52.62,
          "distance": 1,
          "backwardYaw": -167.95
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9",
          "yaw": 175.63,
          "distance": 1,
          "backwardYaw": 46.11
         }
        ],
        "label": "jalan residence_1212 - Panorama",
        "thumbnailUrl": "media/panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_t.jpg"
       },
       "yaw": 46.11,
       "distance": 1,
       "backwardYaw": 175.63
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3",
       "yaw": 176.73,
       "distance": 1,
       "backwardYaw": 92.83
      }
     ],
     "label": "jalan residence_444 - Panorama",
     "thumbnailUrl": "media/panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_t.jpg"
    },
    "yaw": 92.83,
    "distance": 1,
    "backwardYaw": 176.73
   }
  ],
  "label": "entry1",
  "thumbnailUrl": "media/panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_t.jpg"
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "buttonPause": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonMoveLeft": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "buttonRestart": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonMoveUp": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "buttonMoveRight": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonPlayRight": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonMoveDown": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 32,
   "paddingLeft": 0,
   "height": 32,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "maxHeight": 23,
   "iconURL": "skin/IconButton_5D78A7AD_4525_957C_41B2_FBB128EB66AA.png",
   "paddingRight": 0,
   "mode": "push",
   "width": 35,
   "paddingLeft": 0,
   "height": 23,
   "maxWidth": 35,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "cursor": "hand",
   "id": "IconButton_5D78A7AD_4525_957C_41B2_FBB128EB66AA",
   "data": {
    "name": "IconButton3682"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 1,
   "transparencyActive": false,
   "borderSize": 0
  },
  "gyroscopeVerticalDraggingEnabled": false,
  "buttonPlayLeft": {
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderRadius": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "borderSize": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_t.jpg",
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_4ADCB433_44E4_EB64_41C7_BF01CF73E908",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.66,
        "yaw": 46.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -30.46
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 46.09,
        "hfov": 3.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -30.46
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
        "click": "this.startPanoramaWithCamera(this.panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F, this.camera_6588E002_4564_6B24_41C1_56492103E9A0)"
       }
      ],
      "id": "overlay_577E22C9_44DC_EF24_41D1_2276D2E64A28",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.03,
        "yaw": 168.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -11.46
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 168.43,
        "hfov": 6.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 147,
           "class": "ImageResourceLevel",
           "width": 109,
           "url": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -11.46
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "hfovMax": 120,
     "id": "panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F",
     "hfovMin": 60,
     "pitch": 0,
     "hfov": 360,
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_t.jpg",
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
           "click": "this.startPanoramaWithCamera(this.panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7, this.camera_65A77FD6_4564_752C_4192_6F4C90E1A2E6)"
          }
         ],
         "id": "overlay_57599F28_44DB_9563_41C4_1F523545D4EF",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.96,
           "yaw": 79.78,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 88,
              "class": "ImageResourceLevel",
              "width": 88,
              "url": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -25.06
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 79.78,
           "hfov": 8.96,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 176,
              "class": "ImageResourceLevel",
              "width": 176,
              "url": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -25.06
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
           "click": "this.startPanoramaWithCamera(this.panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141, this.camera_65AC2FE1_4564_74E4_41C1_01ABBA601879)"
          }
         ],
         "id": "overlay_56C0BCAF_4524_BB7C_419D_522DC4E59AAB",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.32,
           "yaw": -179.39,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 88,
              "class": "ImageResourceLevel",
              "width": 88,
              "url": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -42.22
          }
         ],
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -179.39,
           "hfov": 7.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 176,
              "class": "ImageResourceLevel",
              "width": 176,
              "url": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -42.22
          }
         ]
        }
       ]
      }
     ],
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "hfovMax": 120,
        "id": "panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7",
        "hfovMin": 60,
        "pitch": 0,
        "hfov": 360,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_t.jpg",
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F, this.camera_67F04EB1_4564_7764_41B8_48014277211D)"
             }
            ],
            "id": "overlay_564ED661_44EC_B7E4_41B6_403136F5CF1A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.13,
              "yaw": -20.54,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.25
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -20.54,
              "hfov": 4.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 101,
                 "class": "ImageResourceLevel",
                 "width": 81,
                 "url": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -25.25
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
              "click": "this.startPanoramaWithCamera(this.panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F, this.camera_67FAEEBC_4564_775C_41C0_349B67C0DB37)"
             }
            ],
            "id": "overlay_50E41795_44DF_952C_41B1_6A74654E9494",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.96,
              "yaw": 175.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 84,
                 "class": "ImageResourceLevel",
                 "width": 84,
                 "url": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -17.8
             }
            ],
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 175.3,
              "hfov": 8.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 168,
                 "class": "ImageResourceLevel",
                 "width": 168,
                 "url": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -17.8
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "hfovMax": 120,
           "id": "panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F",
           "hfovMin": 60,
           "pitch": 0,
           "hfov": 360,
           "partial": false,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_t.jpg",
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                 "click": "this.startPanoramaWithCamera(this.panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7, this.camera_67ED9EA6_4564_776C_41D0_795799D7EA46)"
                }
               ],
               "id": "overlay_579FC4FE_44EC_94DC_41CE_0341AA162CE2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.58,
                 "yaw": 176.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "class": "ImageResourceLevel",
                    "width": 60,
                    "url": "media/panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -34.3
                }
               ],
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 176.42,
                 "hfov": 5.58,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "class": "ImageResourceLevel",
                    "width": 120,
                    "url": "media/panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -34.3
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7",
             "yaw": 176.42,
             "distance": 1,
             "backwardYaw": -20.54
            }
           ],
           "label": "jalan residence_1aa1 - Panorama",
           "thumbnailUrl": "media/panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_t.jpg"
          },
          "yaw": -20.54,
          "distance": 1,
          "backwardYaw": 176.42
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F",
          "yaw": 175.3,
          "distance": 1,
          "backwardYaw": 79.78
         }
        ],
        "label": "jalan residence_1010 - Panorama",
        "thumbnailUrl": "media/panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_t.jpg"
       },
       "yaw": 79.78,
       "distance": 1,
       "backwardYaw": 175.3
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141",
       "yaw": -179.39,
       "distance": 1,
       "backwardYaw": 168.43
      }
     ],
     "label": "jalan residence_999 - Panorama",
     "thumbnailUrl": "media/panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_t.jpg"
    },
    "yaw": 168.43,
    "distance": 1,
    "backwardYaw": -179.39
   }
  ],
  "label": "jalan residence_111 - Panorama",
  "thumbnailUrl": "media/panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 "this.panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25",
 {
  "class": "PanoramaCamera",
  "id": "panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4EAE144E_44E7_EB3C_41C8_727C22BDF1F3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E5AD3F9_44DC_6CE4_41B0_571E9D78E141",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E6593DF_44DC_ACDC_4180_FFA134E8D127",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E209B1D_44DC_9D5D_41BE_945979C4D4F9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E325673_44DC_97E4_41C0_740AD7CA02DB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E1FB319_44DD_AD25_41BD_FF04475BAB7F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E131147_44DC_6D2C_41BD_AD0801356EB2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E38FD29_44DD_B567_41A3_5CD001A94CE3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E1D27E0_44DD_F4E4_41CD_9E3EFD1C3E47",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E3F6DDD_44DD_94DD_41B4_D00CCB4768F7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E383A42_44DF_9F27_41BB_4A84821FBA7F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E112924_44DC_9D6C_41CE_7E686B36C03B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E1363A5_44DC_AD6C_41B3_64E184AB5034",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4FDC6EEF_44DC_F4FC_41AC_C8832DFDFC21",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4FCC9D22_44DC_B564_41A0_C8A14945A826",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4FDB39D8_44DC_7D24_41CD_A0332E4DABD3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4FEBF5F4_44DB_B4E3_41CA_4F8060424A25",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_679C7E85_4564_772C_416B_FBF5670430C5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 105,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67E74E90_4564_7724_41BB_B5749D53B31D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.57,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67EBAE9B_4564_7724_41C2_A957F07A733E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 26.03,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67ED9EA6_4564_776C_41D0_795799D7EA46",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.46,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67F04EB1_4564_7764_41B8_48014277211D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.58,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67FAEEBC_4564_775C_41C0_349B67C0DB37",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.22,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67C23EC7_4564_772C_41BC_C57C46AB66ED",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.89,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_67C41ED2_4564_7724_41C1_4FD72474B382",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.33,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_650B1F24_4564_756C_4196_344598E3E313",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.76,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65093F2F_4564_757C_41D0_5A8B38879A45",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 153.43,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_650ECF3B_4564_7564_41C8_646685D12867",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.71,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65117F46_4564_752C_41BD_2A7415E92014",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.27,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65152F51_4564_7524_41BF_B79F67E4E406",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 32.73,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6518FF5C_4564_75DC_41D0_1D36B0BA41C2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.38,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65635F67_4564_75EC_41C1_0658BA9B2B94",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 49.25,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65655F72_4564_75E4_41B5_BA54D74E1597",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.37,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_656F5F7D_4564_75DC_41CD_A1912904D615",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.17,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65711F88_4564_7524_41AF_32599FA43D14",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.83,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_657A1F93_4564_7524_41CB_DF8FCA2A7253",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.02,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_657C1F9F_4564_755C_41C3_2581701C5A9E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.05,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65453FA9_4564_7564_4178_8E43EAA43874",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.89,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6548EFB5_4564_756C_41CB_359AAF140EEA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 136.58,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65503FC0_4564_7524_41C1_37743CEAC49B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.93,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65586FCB_4564_7524_41CF_74A0CC191EAE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.15,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65A77FD6_4564_752C_4192_6F4C90E1A2E6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.7,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65AC2FE1_4564_74E4_41C1_01ABBA601879",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.57,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_65BB0FEC_4564_74FC_41C2_F244A25981B6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -34.19,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6581BFF6_4564_74EC_4199_560D0DA971D4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 142.48,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6588E002_4564_6B24_41C1_56492103E9A0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.61,
   "pitch": 0
  },
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
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_6595800D_4564_6B3C_41CD_1281D59C2D53",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.14,
   "pitch": 0
  },
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
  }
 },
 {
  "data": {
   "label": "The Happiest Day Ever Ver 2"
  },
  "class": "MediaAudio",
  "id": "audio_5BE0E038_4567_AB64_41C3_58CE558BC9BB",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_5BE0E038_4567_AB64_41C3_58CE558BC9BB.mp3",
   "oggUrl": "media/audio_5BE0E038_4567_AB64_41C3_58CE558BC9BB.ogg"
  },
  "autoplay": true
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarBorderSize": 2,
  "progressBorderRadius": 4,
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 10,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "minWidth": 100,
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
  "playbackBarLeft": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "progressBottom": 1,
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 4,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#AAAAAA",
  "progressRight": 10,
  "toolTipTextShadowBlurRadius": 3
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
      "scrollBarColor": "#000000",
      "width": 40,
      "paddingLeft": 0,
      "layout": "vertical",
      "paddingTop": 0,
      "gap": 4,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "minHeight": 20,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "creationPolicy": "delayed",
      "shadow": false,
      "height": "100%",
      "scrollBarMargin": 2,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "verticalAlign": "middle",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 40,
      "paddingLeft": 0,
      "height": 40,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "minHeight": 0,
      "borderRadius": 0,
      "shadow": false,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "cursor": "hand",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "minWidth": 0,
      "transparencyActive": false,
      "borderSize": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "width": 360,
    "paddingLeft": 0,
    "layout": "horizontal",
    "paddingTop": 0,
    "gap": 4,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "minHeight": 20,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "shadow": false,
    "height": "95.07%",
    "scrollBarMargin": 2,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "minWidth": 360,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_5D78A7AD_4525_957C_41B2_FBB128EB66AA"
  ],
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": 142,
  "width": "100%",
  "paddingTop": 0,
  "layout": "horizontal",
  "gap": 10,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "minHeight": 1,
  "creationPolicy": "delayed",
  "shadow": false,
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "bottom": "0%",
  "data": {
   "name": "Container44746"
  },
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 1,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.playAudioList([this.audio_5BE0E038_4567_AB64_41C3_58CE558BC9BB]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_5D78A7AD_4525_957C_41B2_FBB128EB66AA], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "borderRadius": 0,
 "verticalAlign": "top",
 "creationPolicy": "delayed",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "shadow": false,
 "layout": "absolute",
 "height": "100%",
 "scrollBarMargin": 2,
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
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
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "vrPolyfillScale": 0.5,
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "paddingBottom": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "contentOpaque": false,
 "overflow": "visible"
})