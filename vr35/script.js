TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
  "partial": false,
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_t.jpg",
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975, this.camera_8E6D8FAA_9C6D_B1F5_41DC_2631E00A85B7); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_C9B51996_C476_0DBF_41E6_2D42395ABD4A",
      "maps": [
       {
        "hfov": 2.91,
        "yaw": 93.64,
        "image": {
         "levels": [
          {
           "height": 34,
           "width": 26,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 93.64,
        "hfov": 2.91,
        "image": {
         "levels": [
          {
           "height": 68,
           "width": 52,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.03
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_CA9B2F80_C46A_0592_41BC_BA122097AD89",
      "maps": [
       {
        "hfov": 3.98,
        "yaw": -92.35,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 36,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.73
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -92.35,
        "hfov": 3.98,
        "image": {
         "levels": [
          {
           "height": 79,
           "width": 72,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.73
       }
      ]
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "backwardYaw": -62.01,
    "panorama": {
     "id": "panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
     "partial": false,
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_t.jpg",
       "stereoSphere": {
        "levels": [
         {
          "height": 6434,
          "width": 6434,
          "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 4002,
          "width": 4002,
          "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF, this.camera_8D0A0F35_9C6D_B2DF_41D2_1BCE630F93B5); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_CB21F4A6_C46A_1B9E_41E1_189D16D77A55",
         "maps": [
          {
           "hfov": 4.53,
           "yaw": -62.01,
           "image": {
            "levels": [
             {
              "height": 39,
              "width": 41,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -11.77
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -62.01,
           "hfov": 4.53,
           "image": {
            "levels": [
             {
              "height": 78,
              "width": 82,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -11.77
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF, this.camera_8D38CF2B_9C6D_B2CB_41C5_86B008350E9F); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_CBA1E13F_C46E_1AED_41CB_F109E86A7A02",
         "maps": [
          {
           "hfov": 3.55,
           "yaw": 0.77,
           "image": {
            "levels": [
             {
              "height": 40,
              "width": 32,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -14.21
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 0.77,
           "hfov": 3.55,
           "image": {
            "levels": [
             {
              "height": 80,
              "width": 65,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.21
          }
         ]
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "backwardYaw": 164.22,
       "panorama": {
        "id": "panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
        "partial": false,
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_t.jpg",
          "stereoSphere": {
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 4002,
             "width": 4002,
             "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975, this.camera_8D7FDF00_9C6D_B2B5_41D8_9B4B75C885C4); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_D4681828_C46E_0A92_41B1_00633FE3138A",
            "maps": [
             {
              "hfov": 3.73,
              "yaw": 164.22,
              "image": {
               "levels": [
                {
                 "height": 52,
                 "width": 38,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -31.31
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 164.22,
              "hfov": 3.73,
              "image": {
               "levels": [
                {
                 "height": 105,
                 "width": 77,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -31.31
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B, this.camera_8D4E4F0B_9C6D_B2CB_41A9_08643DCA716A); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_D5486891_C46A_0BB5_41E8_37AC4A9B30F6",
            "maps": [
             {
              "hfov": 5.42,
              "yaw": -19.75,
              "image": {
               "levels": [
                {
                 "height": 54,
                 "width": 49,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -13.97
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -19.75,
              "hfov": 5.42,
              "image": {
               "levels": [
                {
                 "height": 108,
                 "width": 99,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -13.97
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_8FF5C2D2_9C77_57F0_41C7_01C1A2A9D79F",
            "maps": [
             {
              "hfov": 5.92,
              "yaw": 0.65,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 57,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 22.78
             }
            ],
            "items": [
             {
              "yaw": 0.65,
              "hfov": 5.92,
              "image": {
               "levels": [
                {
                 "height": 78,
                 "width": 114,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 22.78
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_8F369BED_9C77_D5D1_41D2_31276DD2DF7B",
            "maps": [
             {
              "hfov": 14.97,
              "yaw": 6,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 52,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_3_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 19.81
             }
            ],
            "items": [
             {
              "yaw": 6,
              "hfov": 14.97,
              "image": {
               "levels": [
                {
                 "height": 86,
                 "width": 284,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 19.81
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "Rs 32000"
            },
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "backwardYaw": 0.77,
          "panorama": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
          "yaw": 164.22,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": -16.06,
          "panorama": {
           "id": "panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
           "partial": false,
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_t.jpg",
             "stereoSphere": {
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 4002,
                "width": 4002,
                "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF, this.camera_8CB35ED5_9C6D_B35F_41CA_D12C331BF01A); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_D5033642_C46A_0697_4181_7826BC339FA1",
               "maps": [
                {
                 "hfov": 3,
                 "yaw": -16.06,
                 "image": {
                  "levels": [
                   {
                    "height": 39,
                    "width": 30,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -29.24
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -16.06,
                 "hfov": 3,
                 "image": {
                  "levels": [
                   {
                    "height": 79,
                    "width": 61,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -29.24
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09, this.camera_8C83CEE0_9C6D_B375_41DA_BD57CEF0F77E); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_D5AFDD0D_C46A_0A92_41AB_005421A94FB8",
               "maps": [
                {
                 "hfov": 4.08,
                 "yaw": 142.17,
                 "image": {
                  "levels": [
                   {
                    "height": 50,
                    "width": 41,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -28.14
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 142.17,
                 "hfov": 4.08,
                 "image": {
                  "levels": [
                   {
                    "height": 100,
                    "width": 82,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -28.14
                }
               ]
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "backwardYaw": -19.75,
             "panorama": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
             "yaw": -16.06,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "backwardYaw": 119.77,
             "panorama": {
              "id": "panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
              "partial": false,
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_t.jpg",
                "stereoSphere": {
                 "levels": [
                  {
                   "height": 6434,
                   "width": 6434,
                   "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 4002,
                   "width": 4002,
                   "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B, this.camera_8CF5FEAB_9C6D_B3CB_41C2_0CE2595EADC2); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_D58142AA_C46A_FF97_41BA_4E8B067823A7",
                  "maps": [
                   {
                    "hfov": 5.99,
                    "yaw": 119.77,
                    "image": {
                     "levels": [
                      {
                       "height": 82,
                       "width": 67,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -37.91
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": 119.77,
                    "hfov": 5.99,
                    "image": {
                     "levels": [
                      {
                       "height": 164,
                       "width": 135,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -37.91
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_8CFA0E9E_9C6D_B3CD_41CB_228EB46CB1B4); this.mainPlayList.set('selectedIndex', 12)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_D58EC272_C456_FF77_41BD_6332CF3EE1F4",
                  "maps": [
                   {
                    "hfov": 4.36,
                    "yaw": -148.14,
                    "image": {
                     "levels": [
                      {
                       "height": 46,
                       "width": 46,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -32.97
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -148.14,
                    "hfov": 4.36,
                    "image": {
                     "levels": [
                      {
                       "height": 93,
                       "width": 92,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -32.97
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_8EB037B5_9C6D_3DB1_41C4_B347B5A681C3",
                  "maps": [
                   {
                    "hfov": 19.84,
                    "yaw": 161.37,
                    "image": {
                     "levels": [
                      {
                       "height": 131,
                       "width": 200,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 29.85
                   }
                  ],
                  "items": [
                   {
                    "yaw": 161.37,
                    "hfov": 19.84,
                    "image": {
                     "levels": [
                      {
                       "height": 269,
                       "width": 408,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 29.85
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_8E8DE775_9C6D_7EB1_41E1_D0ED98E6FC34",
                  "maps": [
                   {
                    "hfov": 17.59,
                    "yaw": 174.83,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 51,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_3_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 23.54
                   }
                  ],
                  "items": [
                   {
                    "yaw": 174.83,
                    "hfov": 17.59,
                    "image": {
                     "levels": [
                      {
                       "height": 106,
                       "width": 342,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 23.54
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Rs 18000"
                  },
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "areas": [
                   {
                    "click": "this.showWindow(this.window_8FD8F0FE_9C74_D3B3_41D3_AAC5168D5A2B, null, false)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_88FFB7E2_9C73_DDD3_41E0_42236B0AFEF0",
                  "maps": [
                   {
                    "hfov": 10.11,
                    "yaw": -76.32,
                    "image": {
                     "levels": [
                      {
                       "height": 131,
                       "width": 137,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -48.82
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -76.32,
                    "hfov": 10.11,
                    "image": {
                     "levels": [
                      {
                       "height": 262,
                       "width": 274,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -48.82
                   }
                  ]
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "backwardYaw": -154.74,
                "panorama": {
                 "id": "panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                 "partial": false,
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_t.jpg",
                   "stereoSphere": {
                    "levels": [
                     {
                      "height": 6434,
                      "width": 6434,
                      "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 4002,
                      "width": 4002,
                      "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09, this.camera_8EC7803B_9C6D_CECB_41D0_155BA4D5CB15); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D59B0E04_C45E_0693_41C8_9EFE0826501F",
                     "maps": [
                      {
                       "hfov": 6.8,
                       "yaw": -154.74,
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "width": 65,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -21.91
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -154.74,
                       "hfov": 6.8,
                       "image": {
                        "levels": [
                         {
                          "height": 119,
                          "width": 130,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -21.91
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA, this.camera_8EF7F030_9C6D_CED5_41CC_52E3B4A9B99B); this.mainPlayList.set('selectedIndex', 11)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D697E876_C45A_0B7E_41BD_7CD15D881871",
                     "maps": [
                      {
                       "hfov": 3.91,
                       "yaw": -22.24,
                       "image": {
                        "levels": [
                         {
                          "height": 47,
                          "width": 41,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -33.59
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -22.24,
                       "hfov": 3.91,
                       "image": {
                        "levels": [
                         {
                          "height": 94,
                          "width": 83,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -33.59
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_8ED6004B_9C6D_CF4B_41D3_5A20BA2C2E6A); this.mainPlayList.set('selectedIndex', 15)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_E462DEF0_C4D6_0772_41BC_D3D11D8001A5",
                     "maps": [
                      {
                       "hfov": 5.06,
                       "yaw": 124.86,
                       "image": {
                        "levels": [
                         {
                          "height": 53,
                          "width": 50,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -27.34
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 124.86,
                       "hfov": 5.06,
                       "image": {
                        "levels": [
                         {
                          "height": 106,
                          "width": 101,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -27.34
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "click": "this.showWindow(this.window_8D9DADBF_9C15_2DB1_41CE_0A45DFD6D107, null, false)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_8DBF81F5_9C15_55B1_41DB_1DEF35EBB5E7",
                     "maps": [
                      {
                       "hfov": 15.76,
                       "yaw": -7.95,
                       "image": {
                        "levels": [
                         {
                          "height": 90,
                          "width": 161,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -29.6
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -7.95,
                       "hfov": 15.76,
                       "image": {
                        "levels": [
                         {
                          "height": 181,
                          "width": 323,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -29.6
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "click": "this.showWindow(this.window_8E4C3EAD_9C1F_2E51_41D9_1C1CD9951914, null, false)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_8EBDEF4B_9C13_2ED1_41E3_7CD5EBF4BB2F",
                     "maps": [
                      {
                       "hfov": 14.5,
                       "yaw": -54.43,
                       "image": {
                        "levels": [
                         {
                          "height": 117,
                          "width": 144,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -26.31
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": -54.43,
                       "hfov": 14.5,
                       "image": {
                        "levels": [
                         {
                          "height": 234,
                          "width": 289,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -26.31
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_885AD8E4_9C74_F3D7_41A4_A9E61B3505A8",
                     "maps": [
                      {
                       "hfov": 9.4,
                       "yaw": -134.72,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 92,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_5_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 24.4
                      }
                     ],
                     "items": [
                      {
                       "yaw": -134.72,
                       "hfov": 9.4,
                       "image": {
                        "levels": [
                         {
                          "height": 136,
                          "width": 184,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 24.4
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_8FDEBB84_9C75_3657_41C4_225E046025D8",
                     "maps": [
                      {
                       "hfov": 15.82,
                       "yaw": -124.42,
                       "image": {
                        "levels": [
                         {
                          "height": 15,
                          "width": 44,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_6_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 18.2
                      }
                     ],
                     "items": [
                      {
                       "yaw": -124.42,
                       "hfov": 15.82,
                       "image": {
                        "levels": [
                         {
                          "height": 107,
                          "width": 297,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": 18.2
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Rs 27000"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    }
                   ]
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -125.56,
                   "panorama": {
                    "id": "panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
                    "partial": false,
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_t.jpg",
                      "stereoSphere": {
                       "levels": [
                        {
                         "height": 6434,
                         "width": 6434,
                         "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 4002,
                         "width": 4002,
                         "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95, this.camera_8E4FDFC0_9C6D_B1B5_41C0_D6C15F46FF9A); this.mainPlayList.set('selectedIndex', 13)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D6884557_C45E_7ABE_41D7_AB46B5BDF5DF",
                        "maps": [
                         {
                          "hfov": 4.79,
                          "yaw": -44.07,
                          "image": {
                           "levels": [
                            {
                             "height": 49,
                             "width": 49,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -29.93
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -44.07,
                          "hfov": 4.79,
                          "image": {
                           "levels": [
                            {
                             "height": 98,
                             "width": 98,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -29.93
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_8E7F7FB5_9C6D_B1DF_41B8_E581F54D8FFC); this.mainPlayList.set('selectedIndex', 12)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D70FB7DD_C45A_05AD_41E3_68A1F39BF30B",
                        "maps": [
                         {
                          "hfov": 4.7,
                          "yaw": -125.56,
                          "image": {
                           "levels": [
                            {
                             "height": 61,
                             "width": 56,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -41.63
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -125.56,
                          "hfov": 4.7,
                          "image": {
                           "levels": [
                            {
                             "height": 123,
                             "width": 112,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -41.63
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -22.24,
                      "panorama": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                      "yaw": -125.56,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "backwardYaw": 0.69,
                      "panorama": {
                       "id": "panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
                       "partial": false,
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_t.jpg",
                         "stereoSphere": {
                          "levels": [
                           {
                            "height": 6434,
                            "width": 6434,
                            "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 4002,
                            "width": 4002,
                            "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA, this.camera_8DF75F60_9C6D_B175_4193_3BB162955759); this.mainPlayList.set('selectedIndex', 11)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D782CC98_C456_0BB2_41E1_670FB9031B62",
                           "maps": [
                            {
                             "hfov": 4.53,
                             "yaw": 0.69,
                             "image": {
                              "levels": [
                               {
                                "height": 51,
                                "width": 46,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.35
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 0.69,
                             "hfov": 4.53,
                             "image": {
                              "levels": [
                               {
                                "height": 103,
                                "width": 92,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.35
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.mainPlayList.set('selectedIndex', 15)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D1B15F0C_C456_0692_41E6_48F756CB395F",
                           "maps": [
                            {
                             "hfov": 4.21,
                             "yaw": 59.97,
                             "image": {
                              "levels": [
                               {
                                "height": 42,
                                "width": 38,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -13.4
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 59.97,
                             "hfov": 4.21,
                             "image": {
                              "levels": [
                               {
                                "height": 85,
                                "width": 77,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -13.4
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -44.07,
                         "panorama": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
                         "yaw": 0.69,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "label": "3 OUTER WINDOW SIDE",
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_t.jpg"
                      },
                      "yaw": -44.07,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "label": "1 CENTER OF DRAWING ROOM",
                    "vfov": 180,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_t.jpg"
                   },
                   "yaw": -22.24,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "backwardYaw": -148.14,
                   "panorama": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
                   "yaw": -154.74,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "backwardYaw": -125.52,
                   "panorama": {
                    "id": "panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                    "partial": false,
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_t.jpg",
                      "stereoSphere": {
                       "levels": [
                        {
                         "height": 6434,
                         "width": 6434,
                         "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 4002,
                         "width": 4002,
                         "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D, this.camera_8DD17F75_9C6D_B15F_41B4_AB688ADD23D2); this.mainPlayList.set('selectedIndex', 17)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D1253A93_C42A_0FB5_41E6_17CB3E5C542A",
                        "maps": [
                         {
                          "hfov": 4.8,
                          "yaw": -38.26,
                          "image": {
                           "levels": [
                            {
                             "height": 48,
                             "width": 46,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -21.37
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -38.26,
                          "hfov": 4.8,
                          "image": {
                           "levels": [
                            {
                             "height": 97,
                             "width": 92,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -21.37
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF, this.camera_8DC6BF6A_9C6D_B175_41D8_61B632C6C184); this.mainPlayList.set('selectedIndex', 18)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D26B7D5E_C436_0AAE_41D5_EE21179DDE28",
                        "maps": [
                         {
                          "hfov": 3.97,
                          "yaw": 51.02,
                          "image": {
                           "levels": [
                            {
                             "height": 56,
                             "width": 49,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -43.85
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 51.02,
                          "hfov": 3.97,
                          "image": {
                           "levels": [
                            {
                             "height": 113,
                             "width": 98,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -43.85
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_8DA32F7F_9C6D_B14A_41D7_7199BA9D8669); this.mainPlayList.set('selectedIndex', 12)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_DC4DF38D_C42B_FDAD_4198_C86C91934CB6",
                        "maps": [
                         {
                          "hfov": 4.82,
                          "yaw": -125.52,
                          "image": {
                           "levels": [
                            {
                             "height": 58,
                             "width": 53,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -35.66
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -125.52,
                          "hfov": 4.82,
                          "image": {
                           "levels": [
                            {
                             "height": 116,
                             "width": 106,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -35.66
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "click": "this.showWindow(this.window_8DF04D2E_9C1D_F253_41C0_72181FCF1270, null, false)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_8DEA1493_9C1D_3271_41D2_61F83A7FBE7F",
                        "maps": [
                         {
                          "hfov": 19.04,
                          "yaw": -11.64,
                          "image": {
                           "levels": [
                            {
                             "height": 121,
                             "width": 177,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -16.65
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -11.64,
                          "hfov": 19.04,
                          "image": {
                           "levels": [
                            {
                             "height": 243,
                             "width": 355,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -16.65
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -100.16,
                      "panorama": {
                       "id": "panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
                       "partial": false,
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_t.jpg",
                         "stereoSphere": {
                          "levels": [
                           {
                            "height": 6434,
                            "width": 6434,
                            "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 4002,
                            "width": 4002,
                            "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_8E0BBFF9_9C6D_B157_41D8_0FD44089FBF3); this.mainPlayList.set('selectedIndex', 15)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D21833C6_C43B_FD9E_41A5_DDAB3D2BC6A2",
                           "maps": [
                            {
                             "hfov": 5.06,
                             "yaw": -100.16,
                             "image": {
                              "levels": [
                               {
                                "height": 62,
                                "width": 56,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -37.06
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -100.16,
                             "hfov": 5.06,
                             "image": {
                              "levels": [
                               {
                                "height": 124,
                                "width": 113,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -37.06
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_8E384FE9_9C6D_B177_41E3_81CC9CD199A1); this.mainPlayList.set('selectedIndex', 14)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D2B252C0_C43A_3F92_41DD_987502A9BADE",
                           "maps": [
                            {
                             "hfov": 5.04,
                             "yaw": 110.13,
                             "image": {
                              "levels": [
                               {
                                "height": 60,
                                "width": 56,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -37.31
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 110.13,
                             "hfov": 5.04,
                             "image": {
                              "levels": [
                               {
                                "height": 121,
                                "width": 113,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -37.31
                            }
                           ]
                          },
                          {
                           "areas": [
                            {
                             "click": "this.showWindow(this.window_8E4BEEB6_9C15_EFB3_41D9_22921C81E253, null, false)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_8E68F412_9C15_7273_41B7_27720D9E416F",
                           "maps": [
                            {
                             "hfov": 20.66,
                             "yaw": 7.05,
                             "image": {
                              "levels": [
                               {
                                "height": 73,
                                "width": 186,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -9.05
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 7.05,
                             "hfov": 20.66,
                             "image": {
                              "levels": [
                               {
                                "height": 147,
                                "width": 373,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -9.05
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -48.94,
                         "panorama": {
                          "id": "panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                          "partial": false,
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_t.jpg",
                            "stereoSphere": {
                             "levels": [
                              {
                               "height": 6434,
                               "width": 6434,
                               "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 4002,
                               "width": 4002,
                               "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF, this.camera_8DB33F8A_9C6D_B1B5_41D1_F23A7CDD5864); this.mainPlayList.set('selectedIndex', 18)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D34E2028_C43A_1A93_41DF_E0DEE009F334",
                              "maps": [
                               {
                                "hfov": 4.53,
                                "yaw": -48.94,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 51,
                                   "width": 47,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -30.89
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -48.94,
                                "hfov": 4.53,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 103,
                                   "width": 94,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -30.89
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527, this.camera_8D83EF95_9C6D_B1DF_4120_4A3C24F54598); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D91C4FBE_C4FA_05EE_41D6_63FF68F589E6",
                              "maps": [
                               {
                                "hfov": 3.84,
                                "yaw": 146.1,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 60,
                                   "width": 51,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -47.91
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 146.1,
                                "hfov": 3.84,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 120,
                                   "width": 102,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -47.91
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_8D9D1FA0_9C6D_B1F5_41C0_3977E63741D8); this.mainPlayList.set('selectedIndex', 9)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_E4EE35CF_C4DA_05AD_41D7_A24AD1E6566C",
                              "maps": [
                               {
                                "hfov": 3.5,
                                "yaw": -143.83,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 40,
                                   "width": 35,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_2_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -27.37
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": -143.83,
                                "hfov": 3.5,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 80,
                                   "width": 70,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -27.37
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": 110.13,
                            "panorama": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
                            "yaw": -48.94,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "backwardYaw": 101.77,
                            "panorama": {
                             "id": "panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
                             "partial": false,
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_t.jpg",
                               "stereoSphere": {
                                "levels": [
                                 {
                                  "height": 6434,
                                  "width": 6434,
                                  "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 4002,
                                  "width": 4002,
                                  "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_8E591FCB_9C6D_B14B_41DE_BC8F72C21630); this.mainPlayList.set('selectedIndex', 14)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_DA1F5AD1_C4FA_0FB5_41DC_13E4B8C76CE8",
                                 "maps": [
                                  {
                                   "hfov": 4.5,
                                   "yaw": 101.77,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 55,
                                      "width": 52,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -40.38
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": 101.77,
                                   "hfov": 4.5,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 110,
                                      "width": 105,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -40.38
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_8E29BFDE_9C6D_B14D_41C8_C2A72C0937BF); this.mainPlayList.set('selectedIndex', 19)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_DA3AE9AA_C4F6_0D97_41B9_33887DB625B8",
                                 "maps": [
                                  {
                                   "hfov": 3.9,
                                   "yaw": -130.31,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 52,
                                      "width": 40,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -29.91
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -130.31,
                                   "hfov": 3.9,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 105,
                                      "width": 80,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -29.91
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 146.1,
                               "panorama": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                               "yaw": 101.77,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "backwardYaw": -123.53,
                               "panorama": {
                                "id": "panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                "partial": false,
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_t.jpg",
                                  "stereoSphere": {
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "width": 6434,
                                     "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 4002,
                                     "width": 4002,
                                     "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527, this.camera_8D1A9F40_9C6D_B2B5_419D_1C19A4BC5A88); this.mainPlayList.set('selectedIndex', 8)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DDFDA466_C4EE_1A9E_41D9_C2CDAD963DFF",
                                    "maps": [
                                     {
                                      "hfov": 4.09,
                                      "yaw": -123.53,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 83,
                                         "width": 48,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -40.92
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -123.53,
                                      "hfov": 4.09,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 167,
                                         "width": 96,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -40.92
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415, this.camera_8D14DF4A_9C6D_B2B5_41D3_4E518D8F793D); this.mainPlayList.set('selectedIndex', 22)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DDCE8C7D_C4EA_0B6D_41DF_65D4D9B54FF0",
                                    "maps": [
                                     {
                                      "hfov": 3.51,
                                      "yaw": -31.76,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 40,
                                         "width": 37,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -33.3
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -31.76,
                                      "hfov": 3.51,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 81,
                                         "width": 74,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -33.3
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C, this.camera_8DE4BF55_9C6D_B15F_41DA_CC8B2D83DA39); this.mainPlayList.set('selectedIndex', 20)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DE6893B5_C4EA_1DFD_41D2_E8844ABFD486",
                                    "maps": [
                                     {
                                      "hfov": 3.57,
                                      "yaw": 57.97,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 37,
                                         "width": 34,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_2_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -23.02
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": 57.97,
                                      "hfov": 3.57,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 75,
                                         "width": 69,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -23.02
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.showWindow(this.window_8E702AAE_9C14_D653_41D1_5EBC506632A1, null, false)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_8E694019_9C17_5271_41CA_25B45E952094",
                                    "maps": [
                                     {
                                      "hfov": 17.29,
                                      "yaw": 9.27,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 109,
                                         "width": 166,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_3_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -21.62
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": 9.27,
                                      "hfov": 17.29,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 219,
                                         "width": 332,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_3_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -21.62
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": -130.31,
                                  "panorama": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
                                  "yaw": -123.53,
                                  "class": "AdjacentPanorama",
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": 29.15,
                                  "panorama": {
                                   "id": "panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_t.jpg",
                                     "stereoSphere": {
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "width": 6434,
                                        "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 4002,
                                        "width": 4002,
                                        "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_8CA6BECB_9C6D_B34B_41DC_5BD271AACEAB); this.mainPlayList.set('selectedIndex', 19)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_DD079184_C4EA_1D93_41BA_C0E46DA04358",
                                       "maps": [
                                        {
                                         "hfov": 3.71,
                                         "yaw": 29.15,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 49,
                                            "width": 46,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -44.1
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": 29.15,
                                         "hfov": 3.71,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 99,
                                            "width": 92,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -44.1
                                        }
                                       ]
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.showWindow(this.window_8EE9A275_9C6C_D6B1_41C3_FEEEC0D3452F, null, false)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_8E4F6425_9C13_5251_41D5_F27941D44C94",
                                       "maps": [
                                        {
                                         "hfov": 10.71,
                                         "yaw": 5.68,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 96,
                                            "width": 105,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_1_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -25.09
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": 5.68,
                                         "hfov": 10.71,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 192,
                                            "width": 211,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -25.09
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_8F7E5FB2_9C6F_6DB3_4170_D1E08CFCFC78",
                                       "maps": [
                                        {
                                         "hfov": 6.7,
                                         "yaw": -74.03,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 54,
                                            "width": 60,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_2_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": 9.59
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -74.03,
                                         "hfov": 6.7,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 108,
                                            "width": 121,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_2_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": 9.59
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay"
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_8F4BA4FD_9C6F_F3B1_4194_424F1EC8140B",
                                       "maps": [
                                        {
                                         "hfov": 14.49,
                                         "yaw": -64.58,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 55,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_3_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": 11.11
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -64.58,
                                         "hfov": 14.49,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 76,
                                            "width": 263,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_3_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": 11.11
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Rs 24000"
                                       },
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay"
                                      }
                                     ]
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": -31.76,
                                     "panorama": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                     "yaw": 29.15,
                                     "class": "AdjacentPanorama",
                                     "distance": 1
                                    }
                                   ],
                                   "label": "44",
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_t.jpg"
                                  },
                                  "yaw": -31.76,
                                  "class": "AdjacentPanorama",
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": -67.29,
                                  "panorama": {
                                   "id": "panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_t.jpg",
                                     "stereoSphere": {
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "width": 6434,
                                        "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 4002,
                                        "width": 4002,
                                        "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_8D5E3F16_9C6D_B2DD_41BC_FD9276ACD08F); this.mainPlayList.set('selectedIndex', 19)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_DD57D166_C4EB_FA9F_41E5_AB2D424F3646",
                                       "maps": [
                                        {
                                         "hfov": 4.26,
                                         "yaw": -67.29,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 49,
                                            "width": 41,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -21.99
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": -67.29,
                                         "hfov": 4.26,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 98,
                                            "width": 82,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -21.99
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F, this.camera_8D28CF20_9C6D_B2F5_41DE_338139BFC492); this.mainPlayList.set('selectedIndex', 21)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_DF1D5115_C4EA_1AB2_41E3_0BFF2FA0ED8A",
                                       "maps": [
                                        {
                                         "hfov": 3.51,
                                         "yaw": 24.82,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 45,
                                            "width": 39,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_1_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -36.49
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": 24.82,
                                         "hfov": 3.51,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 91,
                                            "width": 78,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -36.49
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 57.97,
                                     "panorama": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                     "yaw": -67.29,
                                     "class": "AdjacentPanorama",
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": -40.22,
                                     "panorama": {
                                      "id": "panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
                                      "partial": false,
                                      "pitch": 0,
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 60,
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_t.jpg",
                                        "stereoSphere": {
                                         "levels": [
                                          {
                                           "height": 6434,
                                           "width": 6434,
                                           "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_hq.jpeg",
                                           "class": "ImageResourceLevel"
                                          },
                                          {
                                           "height": 4002,
                                           "width": 4002,
                                           "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F.jpeg",
                                           "class": "ImageResourceLevel"
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C, this.camera_8D6DBEF5_9C6D_B35F_41DD_5539A3B3FBBE); this.mainPlayList.set('selectedIndex', 20)",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "id": "overlay_DF8F5674_C4F6_0773_41D0_38CB68C4928A",
                                          "maps": [
                                           {
                                            "hfov": 4.31,
                                            "yaw": -40.22,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 47,
                                               "width": 46,
                                               "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_0_HS_0_0_0_map.gif",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -34.8
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "items": [
                                           {
                                            "yaw": -40.22,
                                            "hfov": 4.31,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 94,
                                               "width": 93,
                                               "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_0_HS_0_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -34.8
                                           }
                                          ]
                                         }
                                        ]
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 24.82,
                                        "panorama": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
                                        "yaw": -40.22,
                                        "class": "AdjacentPanorama",
                                        "distance": 1
                                       }
                                      ],
                                      "label": "33",
                                      "vfov": 180,
                                      "class": "Panorama",
                                      "thumbnailUrl": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_t.jpg"
                                     },
                                     "yaw": 24.82,
                                     "class": "AdjacentPanorama",
                                     "distance": 1
                                    }
                                   ],
                                   "label": "22",
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_t.jpg"
                                  },
                                  "yaw": 57.97,
                                  "class": "AdjacentPanorama",
                                  "distance": 1
                                 }
                                ],
                                "label": "11",
                                "vfov": 180,
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_t.jpg"
                               },
                               "yaw": -130.31,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              }
                             ],
                             "label": "3 FAMILY LOUNGE 1",
                             "vfov": 180,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_t.jpg"
                            },
                            "yaw": 146.1,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           },
                           {
                            "backwardYaw": 87,
                            "panorama": {
                             "id": "panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                             "partial": false,
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_t.jpg",
                               "stereoSphere": {
                                "levels": [
                                 {
                                  "height": 6434,
                                  "width": 6434,
                                  "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 4002,
                                  "width": 4002,
                                  "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52, this.camera_8EA1F057_9C6D_CF5B_41B8_1AE98E76892D); this.mainPlayList.set('selectedIndex', 7)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D809D392_C4FA_1DB7_41C2_781B7F372A85",
                                 "maps": [
                                  {
                                   "hfov": 4.75,
                                   "yaw": -72.92,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 56,
                                      "width": 51,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -34.63
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -72.92,
                                   "hfov": 4.75,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 112,
                                      "width": 103,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -34.63
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73, this.camera_8E83E077_9C6D_CF5B_41C6_77948FFAE591); this.mainPlayList.set('selectedIndex', 10)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_DAEF5E79_C4FE_0775_41D5_66AAACB71D24",
                                 "maps": [
                                  {
                                   "hfov": 4.71,
                                   "yaw": 17.1,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 50,
                                      "width": 48,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -28.96
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": 17.1,
                                   "hfov": 4.71,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 101,
                                      "width": 96,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -28.96
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_8EB1F067_9C6D_CF7B_41E3_17AE2EA28FFD); this.mainPlayList.set('selectedIndex', 14)",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D979F8FD_C4FA_0B6D_41E0_13F97F87ADEC",
                                 "maps": [
                                  {
                                   "hfov": 4.49,
                                   "yaw": 87,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 50,
                                      "width": 46,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -30.19
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": 87,
                                   "hfov": 4.49,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 101,
                                      "width": 92,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -30.19
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 28.93,
                               "panorama": {
                                "id": "panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
                                "partial": false,
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_t.jpg",
                                  "stereoSphere": {
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "width": 6434,
                                     "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 4002,
                                     "width": 4002,
                                     "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_8CD6CEC0_9C6D_B3B5_4190_B745191C671E); this.mainPlayList.set('selectedIndex', 9)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_D8D0A3ED_C4FA_3D6D_41E0_02E42DEBE6F0",
                                    "maps": [
                                     {
                                      "hfov": 4.91,
                                      "yaw": 28.93,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 72,
                                         "width": 59,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -42.36
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": 28.93,
                                      "hfov": 4.91,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 145,
                                         "width": 118,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -42.36
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F, this.camera_8CC7BEB5_9C6D_B3DF_41E0_3F39B372228E); this.mainPlayList.set('selectedIndex', 6)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_D9BD6694_C4FE_07B3_41E7_844B871DCBA3",
                                    "maps": [
                                     {
                                      "hfov": 5.51,
                                      "yaw": 107.06,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 57,
                                         "width": 60,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -35.6
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": 107.06,
                                      "hfov": 5.51,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 114,
                                         "width": 121,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -35.6
                                     }
                                    ]
                                   },
                                   {
                                    "areas": [
                                     {
                                      "click": "this.showWindow(this.window_8DB85D0E_9C2C_D253_41D2_36DA7126B1FF, null, false)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_8D950D1A_9C2D_7273_41E1_D61F3F0F6874",
                                    "maps": [
                                     {
                                      "hfov": 13.88,
                                      "yaw": 85.64,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 118,
                                         "width": 150,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_2_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -34.36
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": 85.64,
                                      "hfov": 13.88,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 236,
                                         "width": 300,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -34.36
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 68.7,
                                  "panorama": {
                                   "id": "panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
                                   "partial": false,
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_t.jpg",
                                     "stereoSphere": {
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "width": 6434,
                                        "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 4002,
                                        "width": 4002,
                                        "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52, this.camera_8C9D2EEA_9C6D_B375_41DD_38D480E8E782); this.mainPlayList.set('selectedIndex', 7)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_D8656E23_C4FE_0695_41D9_50041DC13143",
                                       "maps": [
                                        {
                                         "hfov": 4.46,
                                         "yaw": 68.7,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 54,
                                            "width": 47,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -33.05
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": 68.7,
                                         "hfov": 4.46,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 109,
                                            "width": 95,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -33.05
                                        }
                                       ]
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.showWindow(this.window_8C01A5B2_9C34_DDB3_41B0_0510C37DE06E, null, false)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_9373A37E_9C35_36B3_41C2_2424CF9636F4",
                                       "maps": [
                                        {
                                         "hfov": 11.37,
                                         "yaw": -18.26,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 130,
                                            "width": 124,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_1_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -35.51
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": -18.26,
                                         "hfov": 11.37,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 261,
                                            "width": 249,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -35.51
                                        }
                                       ]
                                      },
                                      {
                                       "areas": [
                                        {
                                         "click": "this.showWindow(this.window_8D3F53F7_9C34_D5B1_41E0_BF7D44DA2AE2, null, false)",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_88D7BFBF_9C35_6DB1_41AF_DAA8B7102773",
                                       "maps": [
                                        {
                                         "hfov": 19.06,
                                         "yaw": -160.99,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 118,
                                            "width": 200,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_2_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -41.57
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": -160.99,
                                         "hfov": 19.06,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 268,
                                            "width": 455,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_2_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -41.57
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 107.06,
                                     "panorama": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
                                     "yaw": 68.7,
                                     "class": "AdjacentPanorama",
                                     "distance": 1
                                    }
                                   ],
                                   "label": "1 FAMILY LOUNGE ( CENTER TABLE)",
                                   "vfov": 180,
                                   "class": "Panorama",
                                   "thumbnailUrl": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_t.jpg"
                                  },
                                  "yaw": 107.06,
                                  "class": "AdjacentPanorama",
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": -72.92,
                                  "panorama": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                                  "yaw": 28.93,
                                  "class": "AdjacentPanorama",
                                  "distance": 1
                                 }
                                ],
                                "label": "2 FAMILY LOUNGE ( FRONT OF TV 1)",
                                "vfov": 180,
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_t.jpg"
                               },
                               "yaw": -72.92,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "backwardYaw": -143.83,
                               "panorama": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                               "yaw": 87,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              },
                              {
                               "backwardYaw": -82.46,
                               "panorama": {
                                "id": "panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
                                "partial": false,
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_t.jpg",
                                  "stereoSphere": {
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "width": 6434,
                                     "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 4002,
                                     "width": 4002,
                                     "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_8E93E082_9C6D_CFB5_41D1_550D78F540F7); this.mainPlayList.set('selectedIndex', 9)",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DF354DCC_C4FA_0592_41E7_4D880DEC58A0",
                                    "maps": [
                                     {
                                      "hfov": 4.24,
                                      "yaw": -82.46,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 49,
                                         "width": 42,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -26.05
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -82.46,
                                      "hfov": 4.24,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 98,
                                         "width": 84,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -26.05
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_8D8C7168_9C2C_D2DF_41D7_2E8A1C3CB9F0",
                                    "maps": [
                                     {
                                      "hfov": 7.25,
                                      "yaw": -39.64,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 64,
                                         "width": 70,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 23.61
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -39.64,
                                      "hfov": 7.25,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 129,
                                         "width": 141,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 23.61
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_8E2F66E5_9C13_5FD1_41E2_3F58287B86A4",
                                    "maps": [
                                     {
                                      "hfov": 13.95,
                                      "yaw": -33.17,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 54,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_2_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 18.93
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -33.17,
                                      "hfov": 13.95,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 77,
                                         "width": 263,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 18.93
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Rs 25000"
                                    },
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay"
                                   }
                                  ]
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 17.1,
                                  "panorama": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                                  "yaw": -82.46,
                                  "class": "AdjacentPanorama",
                                  "distance": 1
                                 }
                                ],
                                "label": "5 INSIDE OF KITCHEN",
                                "vfov": 180,
                                "class": "Panorama",
                                "thumbnailUrl": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_t.jpg"
                               },
                               "yaw": 17.1,
                               "class": "AdjacentPanorama",
                               "distance": 1
                              }
                             ],
                             "label": "4 FAMILY LOUNGE AND KITCHEN INTRENCE",
                             "vfov": 180,
                             "class": "Panorama",
                             "thumbnailUrl": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_t.jpg"
                            },
                            "yaw": -143.83,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           }
                          ],
                          "label": "1 DINNING ENTRY",
                          "vfov": 180,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_t.jpg"
                         },
                         "yaw": 110.13,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "backwardYaw": 51.02,
                         "panorama": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                         "yaw": -100.16,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "label": "4 FRONT OF DINNING TABLE",
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_t.jpg"
                      },
                      "yaw": 51.02,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "backwardYaw": 17.05,
                      "panorama": {
                       "id": "panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
                       "partial": false,
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_t.jpg",
                         "stereoSphere": {
                          "levels": [
                           {
                            "height": 6434,
                            "width": 6434,
                            "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 4002,
                            "width": 4002,
                            "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5, this.camera_8E1BE004_9C6D_CEBD_41B1_D733B96A2629); this.mainPlayList.set('selectedIndex', 16)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D08DE6BA_C42E_07F7_41B5_065765A3A1F8",
                           "maps": [
                            {
                             "hfov": 4.79,
                             "yaw": -101.49,
                             "image": {
                              "levels": [
                               {
                                "height": 52,
                                "width": 50,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -32.38
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": -101.49,
                             "hfov": 4.79,
                             "image": {
                              "levels": [
                               {
                                "height": 105,
                                "width": 101,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -32.38
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_8E15C015_9C6D_CEDF_41E2_59E717B2CA0A); this.mainPlayList.set('selectedIndex', 15)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D10581FB_C42E_1D75_41DE_7CC6C1E75FF4",
                           "maps": [
                            {
                             "hfov": 4.77,
                             "yaw": 17.05,
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 48,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -28.83
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 17.05,
                             "hfov": 4.77,
                             "image": {
                              "levels": [
                               {
                                "height": 119,
                                "width": 97,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -28.83
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 94.53,
                         "panorama": {
                          "id": "panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
                          "partial": false,
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_t.jpg",
                            "stereoSphere": {
                             "levels": [
                              {
                               "height": 6434,
                               "width": 6434,
                               "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 4002,
                               "width": 4002,
                               "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D, this.camera_8EE5C020_9C6D_CEF5_41CF_67BE6F6C1A5B); this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D1EB9B1B_C42A_0EB5_41E5_BFE532BCE288",
                              "maps": [
                               {
                                "hfov": 4.82,
                                "yaw": 94.53,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 55,
                                   "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -39.11
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 94.53,
                                "hfov": 4.82,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 110,
                                   "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -39.11
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -101.49,
                            "panorama": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
                            "yaw": 94.53,
                            "class": "AdjacentPanorama",
                            "distance": 1
                           }
                          ],
                          "label": "2 DINNING ROOM FORNT OF TV",
                          "vfov": 180,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_t.jpg"
                         },
                         "yaw": -101.49,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "backwardYaw": -38.26,
                         "panorama": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                         "yaw": 17.05,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "label": "3 DINNING ROOM SIDE OF TV",
                       "vfov": 180,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_t.jpg"
                      },
                      "yaw": -38.26,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "backwardYaw": 124.86,
                      "panorama": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                      "yaw": -125.52,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "label": "2 DINNING ROOM AND ENTRANCE OF DRAWING ROOM",
                    "vfov": 180,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_t.jpg"
                   },
                   "yaw": 124.86,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "label": "2 DRAWING AND DINNING PIONT",
                 "vfov": 180,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_t.jpg"
                },
                "yaw": -148.14,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "backwardYaw": 142.17,
                "panorama": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
                "yaw": 119.77,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "label": "11 ENTERANCE LOBBY",
              "vfov": 180,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_t.jpg"
             },
             "yaw": 142.17,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "label": "1 ENTRY DOOR OF HOME",
           "vfov": 180,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_t.jpg"
          },
          "yaw": -19.75,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "label": "2 PORCH INDISE MAIN GATE",
        "vfov": 180,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_t.jpg"
       },
       "yaw": 0.77,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "backwardYaw": 93.64,
       "panorama": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
       "yaw": -62.01,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "label": "3 RIGHT SIDE ON ROAD",
     "vfov": 180,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_t.jpg"
    },
    "yaw": 93.64,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "label": "1 CENTER OF HOME ON ROAD",
  "vfov": 180,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_t.jpg"
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonMoveLeft": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37502"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD.png",
   "id": "IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD",
   "backgroundOpacity": 0,
   "data": {
    "name": "IconButton3682"
   },
   "paddingBottom": 0,
   "minWidth": 1,
   "transparencyActive": false,
   "minHeight": 1,
   "borderSize": 0
  },
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37501"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveRight": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37507"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveDown": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37506"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonRestart": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37500"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "gyroscopeVerticalDraggingEnabled": false,
  "buttonPause": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37505"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37508"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonZoomOut": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37499"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "buttonMoveUp": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37504"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomIn": {
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
   "class": "IconButton",
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button37510"
   },
   "paddingBottom": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "minHeight": 0,
   "borderSize": 0
  },
  "class": "PanoramaPlayer"
 },
 {
  "id": "panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_t.jpg",
    "stereoSphere": {
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_CBF8D05B_C46A_1AB5_419E_81FF5A5F0B3C",
      "maps": [
       {
        "hfov": 4.43,
        "yaw": 12.19,
        "image": {
         "levels": [
          {
           "height": 43,
           "width": 41,
           "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.08
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 12.19,
        "hfov": 4.43,
        "image": {
         "levels": [
          {
           "height": 87,
           "width": 83,
           "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.08
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_t.jpg",
  "hfov": 360,
  "hfovMin": 60,
  "label": "2 LEFT SIDE ON ROAD",
  "id": "panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2",
  "vfov": 180,
  "partial": false,
  "hfovMax": 120,
  "class": "Panorama",
  "pitch": 0
 },
 {
  "id": "panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
 {
  "id": "panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
 {
  "id": "panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
 {
  "id": "panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
 {
  "id": "panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
 {
  "id": "panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
 {
  "id": "panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
 {
  "id": "panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
 {
  "id": "panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
 {
  "id": "panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
 {
  "id": "panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
 {
  "id": "panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
 {
  "id": "panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
 {
  "id": "panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
 {
  "id": "panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
 {
  "id": "panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
 {
  "id": "panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
 {
  "id": "panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
 {
  "id": "panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
 {
  "id": "panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
 {
  "id": "panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
 {
  "id": "panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_camera",
    "media": "this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "85%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8FD9250C_9C75_5257_41E1_DBE564A75369.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C2F8E5D_9C6D_B34F_41E1_A07FF3C062C9_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6281"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "14%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/lively-home-leather-manual/p/itmfe57xbyzfsfzz?pid=RECFE4BGQPHR6FA3&amp;lid=LSTRECFE4BGQPHR6FA3JOTHHZ&amp;marketplace=FLIPKART&amp;srno=s_1_10&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=70326b04-64d6-411b-895b-a97d042c17fb.RECFE4BGQPHR6FA3.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=2rtnjks7dc0000001557398878070&amp;qH=cb7c816be0e7daf7\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 29,999</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C2F8E5D_9C6D_B34F_41E1_A07FF3C062C9",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6282"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8FD8F0FE_9C74_D3B3_41D3_AAC5168D5A2B",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window32765"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "83%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8871425F_9C35_56F1_41A8_29E90019B047.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C235E60_9C6D_B375_41E0_B1518B19CB57_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6283"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "16%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><B> </B></SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/timbertaste-saroj-sheesham-solid-wood-tv-entertainment-unit/p/itmewuemc3d5qctn?pid=TVUEWUEMRDHYN3TS&amp;lid=LSTTVUEWUEMRDHYN3TSZ6PBDF&amp;marketplace=FLIPKART&amp;srno=s_1_19&amp;otracker=AS_QueryStore_OrganicAutoSuggest_0_6&amp;otracker1=AS_QueryStore_OrganicAutoSuggest_0_6&amp;fm=SEARCH&amp;iid=5ccbf6c1-1e7f-4fc7-930f-7e3851cf2f6d.TVUEWUEMRDHYN3TS.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=kk55g64ukg0000001557397329833&amp;qH=07b1703ebf8b7474\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 18,139</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C235E60_9C6D_B375_41E0_B1518B19CB57",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6284"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8C01A5B2_9C34_DDB3_41B0_0510C37DE06E",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window12379"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "86%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C206E62_9C6D_B375_41D9_6981CBC46344_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6285"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "13%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/flipkart-perfect-homes-kotor-fabric-4-seater-sofa/p/itmf722fe9hgcepx?pid=SOFF6EJC3G8TDPPK&amp;lid=LSTSOFF6EJC3G8TDPPK3INRY3&amp;marketplace=FLIPKART&amp;srno=s_1_14&amp;otracker=search&amp;otracker1=search&amp;fm=organic&amp;iid=en_xqkQJRLv44pGo5ypzmv2j+zGXlR4Av0FKoe0ld0Q9x9ksUF8xNGpSQV/pVL/Uwo8Z35HV9TqfWdls2Kzhhh+Hw==&amp;ppt=SearchPage&amp;ppn=Search&amp;qH=fcc7d618697ba72c\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 19,690</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C206E62_9C6D_B375_41D9_6981CBC46344",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6286"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8D3F53F7_9C34_D5B1_41E0_BF7D44DA2AE2",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window15691"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "82%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C263E64_9C6D_B37D_41A0_2945C31B4720_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6287"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "17%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0099ff;font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/induscraft-glass-coffee-table/p/itmf85rxhbfg3cbf?pid=CFTF85RXQHZS6N6W&amp;lid=LSTCFTF85RXQHZS6N6WJBZQXA&amp;marketplace=FLIPKART&amp;srno=s_1_3&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=ad0478ad-d4ee-4cbe-8c90-00caf8d33cdd.CFTF85RXQHZS6N6W.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=n6dc5escb40000001557398655030&amp;qH=73df9e842ef70374\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 21,599</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C263E64_9C6D_B37D_41A0_2945C31B4720",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6288"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8DB85D0E_9C2C_D253_41D2_36DA7126B1FF",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window18266"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "82%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C3A6E67_9C6D_B37B_41D8_85EE54B5DFB0_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6289"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "17%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/zikrak-exim-classy-leatherette-3-2-1-cream-sofa-set/p/itmf35ygxa92cs5g?pid=SFSF34WKCSD3EPUG&amp;lid=LSTSFSF34WKCSD3EPUG4HOKKL&amp;marketplace=FLIPKART&amp;srno=s_1_9&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=ef052b09-c475-4623-a5d0-7fd7cfc2b48a.SFSF34WKCSD3EPUG.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=2rtnjks7dc0000001557398878070&amp;qH=cb7c816be0e7daf7\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 69,890</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C3A6E67_9C6D_B37B_41D8_85EE54B5DFB0",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6290"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8D9DADBF_9C15_2DB1_41CE_0A45DFD6D107",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window21694"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "89%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C3B4E69_9C6D_B377_41DC_CEF3C0C674AF_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6291"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "10%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/royaloak-wave-engineered-wood-coffee-table/p/itmeejfvbgqh6hqp?pid=CFTEEJFVGZ2C5RDU&amp;lid=LSTCFTEEJFVGZ2C5RDUWRZWUV&amp;marketplace=FLIPKART&amp;srno=s_6_211&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=7ef28f44-8a8e-4823-a948-9c415599ada3.CFTEEJFVGZ2C5RDU.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=3w19w4z70g0000001557399097393&amp;qH=460418248f829e90\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 14,990</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C3B4E69_9C6D_B377_41DC_CEF3C0C674AF",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6292"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8E4C3EAD_9C1F_2E51_41D9_1C1CD9951914",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window23532"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "89%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_881381D7_9C13_35F1_41E1_84B8F414F437.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C3FCE6C_9C6D_B34D_41D8_371885631F7F_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6293"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "10%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/royaloak-lovren-metal-6-seater-dining-set/p/itmezu3dfwkvkdzr?pid=DISEZU3DZPERAYVP&amp;lid=LSTDISEZU3DZPERAYVPDX1JYX&amp;marketplace=FLIPKART&amp;srno=s_1_32&amp;otracker=AS_QueryStore_OrganicAutoSuggest_0_7&amp;otracker1=AS_QueryStore_OrganicAutoSuggest_0_7&amp;fm=SEARCH&amp;iid=2226bcd6-f91f-430d-a628-15ba3083cc62.DISEZU3DZPERAYVP.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=uy26l06dkw0000001557399266691&amp;qH=3ef39dc89b87efed\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 37,000</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C3FCE6C_9C6D_B34D_41D8_371885631F7F",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6294"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8DF04D2E_9C1D_F253_41C0_72181FCF1270",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window25059"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "85%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C3D4E6F_9C6D_B34B_41AB_73F4D225B3C3_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6295"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "14%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/samsung-123cm-49-inch-full-hd-led-smart-tv-2018/p/itmf5g7dhumhqfgg?pid=TVSF5G7DK2R3ZG9B&amp;srno=s_1_2&amp;otracker=search&amp;otracker1=search&amp;lid=LSTTVSF5G7DK2R3ZG9BVIATDX&amp;fm=SEARCH&amp;iid=494547e3-4eb0-4434-b629-9bef571f9aea.TVSF5G7DK2R3ZG9B.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=lb5m31yeps0000001557399345339&amp;qH=b51f5e0215225e52\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 42,368</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C3D4E6F_9C6D_B34B_41AB_73F4D225B3C3",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6296"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8E4BEEB6_9C15_EFB3_41D9_22921C81E253",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window27080"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "84%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C334E71_9C6D_B357_41BB_D8D2EF6C3EED_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6297"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "15%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/spacewood-mayflower-engineered-wood-king-box-bed/p/itmesa3nfu6yfags?pid=BDDESA3MZ8JYRQUW&amp;lid=LSTBDDESA3MZ8JYRQUWJ1PFHE&amp;marketplace=FLIPKART&amp;srno=s_1_19&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=bded095d-757b-4afd-9665-c862c3a0e941.BDDESA3MZ8JYRQUW.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=thkorcekz40000001557399510771&amp;qH=d4054e7994adef0b\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 17,490</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C334E71_9C6D_B357_41BB_D8D2EF6C3EED",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6298"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8E702AAE_9C14_D653_41D1_5EBC506632A1",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window28641"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 10,
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "shadow": true,
  "shadowHorizontalLength": 3,
  "headerBackgroundOpacity": 1,
  "class": "Window",
  "horizontalAlign": "center",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "title": "",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "titlePaddingLeft": 5,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonBorderRadius": 11,
  "paddingBottom": 0,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "minHeight": 20,
  "layout": "vertical",
  "children": [
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "82%",
    "width": "100%",
    "paddingTop": 0,
    "borderRadius": 0,
    "url": "media/photo_89A9189D_9C6D_3271_41CA_4D2269405772.jpeg",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "class": "Image",
    "shadow": false,
    "id": "image_uid8C368E73_9C6D_B35B_41E1_39BBC668BEEE_0",
    "backgroundOpacity": 0,
    "data": {
     "name": "Image6299"
    },
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "borderSize": 0
   },
   {
    "paddingRight": 10,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "height": "17%",
    "width": "100%",
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/timbertaste-dyna-solid-wood-tv-entertainment-unit/p/itmf27myvzjt2hvk?pid=TVUFFPDRFY2UN66G&amp;lid=LSTTVUFFPDRFY2UN66GLCOCYU&amp;marketplace=FLIPKART&amp;srno=s_1_34&amp;otracker=AS_QueryStore_HistoryAutoSuggest_0_6&amp;otracker1=AS_QueryStore_HistoryAutoSuggest_0_6&amp;fm=SEARCH&amp;iid=en_UvRiF9QPcBkVBN2R03qNBEZHHH63bClxgO9SUCPnhJj0rNXoSqQ/pp4GP64TB5qD3UIdcKj7d48cqXHO3yuVaQ==&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=9evey9cvgw0000001557399626993&amp;qH=07b1703ebf8b7474\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 14,439</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uid8C368E73_9C6D_B35B_41E1_39BBC668BEEE",
    "backgroundOpacity": 0,
    "data": {
     "name": "HTMLText6300"
    },
    "paddingBottom": 10,
    "minWidth": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "borderSize": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "titleFontStyle": "normal",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "paddingLeft": 0,
  "height": 600,
  "width": 400,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerPaddingLeft": 10,
  "paddingTop": 0,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titlePaddingBottom": 5,
  "titlePaddingRight": 5,
  "headerPaddingBottom": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "footerHeight": 5,
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_8EE9A275_9C6C_D6B1_41C3_FEEEC0D3452F",
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "data": {
   "name": "Window30258"
  },
  "minWidth": 20,
  "titleFontWeight": "normal",
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 14,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "borderSize": 0
 },
 {
  "id": "camera_8CFA0E9E_9C6D_B3CD_41CB_228EB46CB1B4",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 25.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CF5FEAB_9C6D_B3CB_41C2_0CE2595EADC2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -37.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CC7BEB5_9C6D_B3DF_41E0_3F39B372228E",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -111.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CD6CEC0_9C6D_B3B5_4190_B745191C671E",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 107.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CA6BECB_9C6D_B34B_41DC_5BD271AACEAB",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 148.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8CB35ED5_9C6D_B35F_41CA_D12C331BF01A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 160.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8C83CEE0_9C6D_B375_41DA_BD57CEF0F77E",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -60.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8C9D2EEA_9C6D_B375_41DD_38D480E8E782",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -72.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D6DBEF5_9C6D_B35F_41DD_5539A3B3FBBE",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -155.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D7FDF00_9C6D_B2B5_41D8_9B4B75C885C4",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D4E4F0B_9C6D_B2CB_41A9_08643DCA716A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 163.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D5E3F16_9C6D_B2DD_41BC_FD9276ACD08F",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -122.03,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D28CF20_9C6D_B2F5_41DE_338139BFC492",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 139.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D38CF2B_9C6D_B2CB_41C5_86B008350E9F",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -15.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D0A0F35_9C6D_B2DF_41D2_1BCE630F93B5",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -86.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D1A9F40_9C6D_B2B5_419D_1C19A4BC5A88",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 49.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D14DF4A_9C6D_B2B5_41D3_4E518D8F793D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -150.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DE4BF55_9C6D_B15F_41DA_CC8B2D83DA39",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 112.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DF75F60_9C6D_B175_4193_3BB162955759",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 135.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DC6BF6A_9C6D_B175_41D8_61B632C6C184",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 79.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DD17F75_9C6D_B15F_41B4_AB688ADD23D2",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -162.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DA32F7F_9C6D_B14A_41D7_7199BA9D8669",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -55.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8DB33F8A_9C6D_B1B5_41D1_F23A7CDD5864",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -69.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D83EF95_9C6D_B1DF_4120_4A3C24F54598",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -78.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D9D1FA0_9C6D_B1F5_41C0_3977E63741D8",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E6D8FAA_9C6D_B1F5_41DC_2631E00A85B7",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 117.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E7F7FB5_9C6D_B1DF_41B8_E581F54D8FFC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 157.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E4FDFC0_9C6D_B1B5_41C0_D6C15F46FF9A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E591FCB_9C6D_B14B_41DE_BC8F72C21630",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -33.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E29BFDE_9C6D_B14D_41C8_C2A72C0937BF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 56.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E384FE9_9C6D_B177_41E3_81CC9CD199A1",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 131.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E0BBFF9_9C6D_B157_41D8_0FD44089FBF3",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -128.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E1BE004_9C6D_CEBD_41B1_D733B96A2629",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -85.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E15C015_9C6D_CEDF_41E2_59E717B2CA0A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 141.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EE5C020_9C6D_CEF5_41CF_67BE6F6C1A5B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 78.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EF7F030_9C6D_CED5_41CC_52E3B4A9B99B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 54.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EC7803B_9C6D_CECB_41D0_155BA4D5CB15",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 31.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8ED6004B_9C6D_CF4B_41D3_5A20BA2C2E6A",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 54.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EA1F057_9C6D_CF5B_41B8_1AE98E76892D",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -151.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8EB1F067_9C6D_CF7B_41E3_17AE2EA28FFD",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 36.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E83E077_9C6D_CF5B_41C6_77948FFAE591",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 97.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8E93E082_9C6D_CFB5_41D1_550D78F540F7",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -162.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "data": {
   "label": "Put a Smile On - no bubbles"
  },
  "id": "audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2.mp3",
   "oggUrl": "media/audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 },
 {
  "duration": 5000,
  "label": "rosewood-sheesham-saroj-tvc-tt-timbertaste-walnut-and-teak-draw-original-imaf5q3hentjgths",
  "thumbnailUrl": "media/photo_8871425F_9C35_56F1_41A8_29E90019B047_t.jpg",
  "width": 832,
  "id": "photo_8871425F_9C35_56F1_41A8_29E90019B047",
  "height": 832,
  "image": {
   "levels": [
    {
     "url": "media/photo_8871425F_9C35_56F1_41A8_29E90019B047.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "grey-polycotton-ul-sf-2l-8687-wells-sofa-grey-perfect-homes-by-original-imaf7ghhwbhrxmzk",
  "thumbnailUrl": "media/photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1_t.jpg",
  "width": 832,
  "id": "photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1",
  "height": 832,
  "image": {
   "levels": [
    {
     "url": "media/photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "rosewood-sheesham-inlct61-induscraft-brown-original-imafbv8rypnh4geg",
  "thumbnailUrl": "media/photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37_t.jpg",
  "width": 832,
  "id": "photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37",
  "height": 832,
  "image": {
   "levels": [
    {
     "url": "media/photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "cream-leatherette-zesfs-sofur-141-3-2-1-1-zikrak-exim-cream-original-imaf35f6ygzajsgm",
  "thumbnailUrl": "media/photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF_t.jpg",
  "width": 832,
  "id": "photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF",
  "height": 461,
  "image": {
   "levels": [
    {
     "url": "media/photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "mdf-wave-royaloak-honey-brown-original-imaff8psrhabd4pm",
  "thumbnailUrl": "media/photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0_t.jpg",
  "width": 832,
  "id": "photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0",
  "height": 602,
  "image": {
   "levels": [
    {
     "url": "media/photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "6-seater-black-mdf-dt6225-6-royaloak-black-original-imaf2jq8pbsbjnkv",
  "thumbnailUrl": "media/photo_881381D7_9C13_35F1_41E1_84B8F414F437_t.jpg",
  "width": 832,
  "id": "photo_881381D7_9C13_35F1_41E1_84B8F414F437",
  "height": 553,
  "image": {
   "levels": [
    {
     "url": "media/photo_881381D7_9C13_35F1_41E1_84B8F414F437.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "samsung-43n5100-original-imaf64ewtyhwx4gy",
  "thumbnailUrl": "media/photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011_t.jpg",
  "width": 832,
  "id": "photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011",
  "height": 509,
  "image": {
   "levels": [
    {
     "url": "media/photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "king-na-particle-board-mayflower-king-bed-spacewood-vermount-original-imaf5q3ff5wzqqhe",
  "thumbnailUrl": "media/photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770_t.jpg",
  "width": 832,
  "id": "photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770",
  "height": 832,
  "image": {
   "levels": [
    {
     "url": "media/photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "sheesham-wood-dyna-tvc-dw-timbertaste-natural-teak-original-imafcscy6cvkhe3t",
  "thumbnailUrl": "media/photo_89A9189D_9C6D_3271_41CA_4D2269405772_t.jpg",
  "width": 832,
  "id": "photo_89A9189D_9C6D_3271_41CA_4D2269405772",
  "height": 832,
  "image": {
   "levels": [
    {
     "url": "media/photo_89A9189D_9C6D_3271_41CA_4D2269405772.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 },
 {
  "duration": 5000,
  "label": "white-satinwood-bhirra-007-lively-home-original-imafdw7jfdgh9h4z",
  "thumbnailUrl": "media/photo_8FD9250C_9C75_5257_41E1_DBE564A75369_t.jpg",
  "width": 796,
  "id": "photo_8FD9250C_9C75_5257_41E1_DBE564A75369",
  "height": 832,
  "image": {
   "levels": [
    {
     "url": "media/photo_8FD9250C_9C75_5257_41E1_DBE564A75369.jpeg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo"
 }
], "children": [
 {
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "borderSize": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
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
  "class": "ViewerArea",
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
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
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarVisible": "rollOver",
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
      "class": "Container",
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
      "class": "IconButton",
      "shadow": false,
      "cursor": "hand",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button37509"
      },
      "paddingBottom": 0,
      "minWidth": 0,
      "transparencyActive": false,
      "minHeight": 0,
      "borderSize": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarVisible": "rollOver",
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
    "class": "Container",
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
   "this.IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD"
  ],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "height": 142,
  "width": "100%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "scrollBarWidth": 10,
  "gap": 10,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "class": "Container",
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
 "start": "this.playAudioList([this.audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
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
 "class": "Player",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
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