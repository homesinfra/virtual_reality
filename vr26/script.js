TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "id": "panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
        "click": "this.startPanoramaWithCamera(this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975, this.camera_D765F6FC_C7FC_89B8_41E5_23E4CF68FF49)"
       }
      ],
      "id": "overlay_C9B51996_C476_0DBF_41E6_2D42395ABD4A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 2.91,
        "yaw": 93.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 34,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -9.03
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
        "hfov": 2.91,
        "yaw": 93.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 68,
           "class": "ImageResourceLevel",
           "width": 52,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -9.03
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_CA9B2F80_C46A_0592_41BC_BA122097AD89",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.98,
        "yaw": -92.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -12.73
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
        "hfov": 3.98,
        "yaw": -92.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 79,
           "class": "ImageResourceLevel",
           "width": 72,
           "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -12.73
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_t.jpg"
   }
  ],
  "label": "1 CENTER OF HOME ON ROAD",
  "hfovMax": 120,
  "partial": false,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 93.64,
    "panorama": {
     "class": "Panorama",
     "id": "panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
     "pitch": 0,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)",
           "click": "this.startPanoramaWithCamera(this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF, this.camera_D7D0868F_C7FC_8857_41DC_311A663A085D)"
          }
         ],
         "id": "overlay_CB21F4A6_C46A_1B9E_41E1_189D16D77A55",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.02,
           "yaw": -62.26,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 35,
              "class": "ImageResourceLevel",
              "width": 36,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -11.98
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
           "hfov": 4.02,
           "yaw": -62.26,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 70,
              "class": "ImageResourceLevel",
              "width": 73,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -11.98
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
           "click": "this.startPanoramaWithCamera(this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF, this.camera_D7E5C685_C7FC_8848_41CC_E3D6D57F4DB9)"
          }
         ],
         "id": "overlay_CBA1E13F_C46E_1AED_41CB_F109E86A7A02",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 3.55,
           "yaw": 0.77,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 32,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -14.21
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
           "hfov": 3.55,
           "yaw": 0.77,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 65,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -14.21
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_t.jpg"
      }
     ],
     "label": "3 RIGHT SIDE ON ROAD",
     "hfovMax": 120,
     "partial": false,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": 0.77,
       "panorama": {
        "class": "Panorama",
        "id": "panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)",
              "click": "this.startPanoramaWithCamera(this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975, this.camera_C816F64D_C7FC_88D8_41E1_B0D52F33213A)"
             }
            ],
            "id": "overlay_D4681828_C46E_0A92_41B1_00633FE3138A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.73,
              "yaw": 164.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -31.31
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
              "hfov": 3.73,
              "yaw": 164.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 105,
                 "class": "ImageResourceLevel",
                 "width": 77,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -31.31
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
              "click": "this.startPanoramaWithCamera(this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B, this.camera_C81E3658_C7FC_88F8_41E5_7EBFCA54A9D5)"
             }
            ],
            "id": "overlay_D5486891_C46A_0BB5_41E8_37AC4A9B30F6",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.37,
              "yaw": -20.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -14.46
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
              "hfov": 4.37,
              "yaw": -20.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 91,
                 "class": "ImageResourceLevel",
                 "width": 80,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -14.46
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_t.jpg"
         }
        ],
        "label": "2 PORCH INDISE MAIN GATE",
        "hfovMax": 120,
        "partial": false,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 164.22,
          "panorama": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
          "backwardYaw": 0.77,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "yaw": -20.29,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
           "pitch": 0,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 4)",
                 "click": "this.startPanoramaWithCamera(this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF, this.camera_C84B260A_C7FC_885B_41E2_EC095C2D6B0D)"
                }
               ],
               "id": "overlay_D5033642_C46A_0697_4181_7826BC339FA1",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 2.47,
                 "yaw": -16.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 35,
                    "class": "ImageResourceLevel",
                    "width": 25,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -29.47
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
                 "hfov": 2.47,
                 "yaw": -16.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 71,
                    "class": "ImageResourceLevel",
                    "width": 50,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -29.47
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
                 "click": "this.startPanoramaWithCamera(this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09, this.camera_C84D0615_C7FC_8849_41DB_B4F2F1D53623)"
                }
               ],
               "id": "overlay_D5AFDD0D_C46A_0A92_41AB_005421A94FB8",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.08,
                 "yaw": 142.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.14
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
                 "hfov": 4.08,
                 "yaw": 142.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "class": "ImageResourceLevel",
                    "width": 82,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -28.14
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_t.jpg"
            }
           ],
           "label": "1 ENTRY DOOR OF HOME",
           "hfovMax": 120,
           "partial": false,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "yaw": -16.36,
             "panorama": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
             "backwardYaw": -20.29,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "yaw": 142.17,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
              "pitch": 0,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 3)",
                    "click": "this.startPanoramaWithCamera(this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B, this.camera_D61755C8_C7FC_8BC7_41E1_2043BCAE3F52)"
                   }
                  ],
                  "id": "overlay_D58142AA_C46A_FF97_41BA_4E8B067823A7",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.99,
                    "yaw": 119.77,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 82,
                       "class": "ImageResourceLevel",
                       "width": 67,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -37.91
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
                    "hfov": 5.99,
                    "yaw": 119.77,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 164,
                       "class": "ImageResourceLevel",
                       "width": 135,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -37.91
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
                    "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_D628C5BD_C7FC_8BB9_41E8_36A958FF7CE4)"
                   }
                  ],
                  "id": "overlay_D58EC272_C456_FF77_41BD_6332CF3EE1F4",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.36,
                    "yaw": -148.14,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 46,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -32.97
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
                    "hfov": 4.36,
                    "yaw": -148.14,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 93,
                       "class": "ImageResourceLevel",
                       "width": 92,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -32.97
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_hq.jpeg"
                  },
                  {
                   "height": 4002,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_t.jpg"
               }
              ],
              "label": "11 ENTERANCE LOBBY",
              "hfovMax": 120,
              "partial": false,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "yaw": -148.14,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                 "pitch": 0,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "rollOver": "this.mainPlayList.set('selectedIndex', 5)",
                       "click": "this.startPanoramaWithCamera(this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09, this.camera_D6F7F753_C7FC_88C9_41DB_B1F9A64FD702)"
                      }
                     ],
                     "id": "overlay_D59B0E04_C45E_0693_41C8_9EFE0826501F",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.56,
                       "yaw": -154.86,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 56,
                          "class": "ImageResourceLevel",
                          "width": 63,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -22.1
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
                       "hfov": 6.56,
                       "yaw": -154.86,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 112,
                          "class": "ImageResourceLevel",
                          "width": 126,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -22.1
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
                       "click": "this.startPanoramaWithCamera(this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA, this.camera_D7053748_C7FC_88C7_41D0_A0A818EF0CBF)"
                      }
                     ],
                     "id": "overlay_D697E876_C45A_0B7E_41BD_7CD15D881871",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.17,
                       "yaw": -22.67,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 40,
                          "class": "ImageResourceLevel",
                          "width": 34,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -33.97
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
                       "hfov": 3.17,
                       "yaw": -22.67,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 81,
                          "class": "ImageResourceLevel",
                          "width": 68,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -33.97
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
                       "rollOver": "this.mainPlayList.set('selectedIndex', 15)",
                       "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_D6E1375E_C7FC_88FB_41A5_764B3D2582F2)"
                      }
                     ],
                     "id": "overlay_E462DEF0_C4D6_0772_41BC_D3D11D8001A5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.44,
                       "yaw": 124.53,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 43,
                          "class": "ImageResourceLevel",
                          "width": 44,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -27.89
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
                       "hfov": 4.44,
                       "yaw": 124.53,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 87,
                          "class": "ImageResourceLevel",
                          "width": 89,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -27.89
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "stereoSphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 6434,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_hq.jpeg"
                     },
                     {
                      "height": 4002,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F.jpeg"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_t.jpg"
                  }
                 ],
                 "label": "2 DRAWING AND DINNING PIONT",
                 "hfovMax": 120,
                 "partial": false,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "yaw": -22.67,
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
                    "pitch": 0,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "rollOver": "this.mainPlayList.set('selectedIndex', 13)",
                          "click": "this.startPanoramaWithCamera(this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95, this.camera_D740A712_C7FC_884B_41B2_D2520ADDF7FE)"
                         }
                        ],
                        "id": "overlay_D6884557_C45E_7ABE_41D7_AB46B5BDF5DF",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.18,
                          "yaw": -44.41,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 42,
                             "class": "ImageResourceLevel",
                             "width": 43,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -30.34
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
                          "hfov": 4.18,
                          "yaw": -44.41,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 84,
                             "class": "ImageResourceLevel",
                             "width": 86,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -30.34
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
                          "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_D756C707_C7FC_8848_41BC_9C162A8095CF)"
                         }
                        ],
                        "id": "overlay_D70FB7DD_C45A_05AD_41E3_68A1F39BF30B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.99,
                          "yaw": -126.01,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 55,
                             "class": "ImageResourceLevel",
                             "width": 47,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -41.98
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
                          "hfov": 3.99,
                          "yaw": -126.01,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 111,
                             "class": "ImageResourceLevel",
                             "width": 95,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -41.98
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "stereoSphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 6434,
                         "class": "ImageResourceLevel",
                         "width": 6434,
                         "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_hq.jpeg"
                        },
                        {
                         "height": 4002,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_t.jpg"
                     }
                    ],
                    "label": "1 CENTER OF DRAWING ROOM",
                    "hfovMax": 120,
                    "partial": false,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -126.01,
                      "panorama": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                      "backwardYaw": -22.67,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -44.41,
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
                       "pitch": 0,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "rollOver": "this.mainPlayList.set('selectedIndex', 11)",
                             "click": "this.startPanoramaWithCamera(this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA, this.camera_D7B1D6B0_C7FC_8848_41B5_60A6193FB172)"
                            }
                           ],
                           "id": "overlay_D782CC98_C456_0BB2_41E1_670FB9031B62",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 3.9,
                             "yaw": 0.35,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 39,
                                "class": "ImageResourceLevel",
                                "width": 40,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -30.05
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
                             "hfov": 3.9,
                             "yaw": 0.35,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 78,
                                "class": "ImageResourceLevel",
                                "width": 80,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -30.05
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
                             "rollOver": "this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "id": "overlay_D1B15F0C_C456_0692_41E6_48F756CB395F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 3.87,
                             "yaw": 59.8,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 40,
                                "class": "ImageResourceLevel",
                                "width": 35,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -13.52
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
                             "hfov": 3.87,
                             "yaw": 59.8,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 81,
                                "class": "ImageResourceLevel",
                                "width": 71,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -13.52
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "stereoSphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 6434,
                            "class": "ImageResourceLevel",
                            "width": 6434,
                            "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_hq.jpeg"
                           },
                           {
                            "height": 4002,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_t.jpg"
                        }
                       ],
                       "label": "3 OUTER WINDOW SIDE",
                       "hfovMax": 120,
                       "partial": false,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 0.35,
                         "panorama": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
                         "backwardYaw": -44.41,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_t.jpg"
                      },
                      "backwardYaw": 0.35,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_t.jpg"
                   },
                   "backwardYaw": -126.01,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "yaw": -154.86,
                   "panorama": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
                   "backwardYaw": -148.14,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "yaw": 124.53,
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                    "pitch": 0,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "rollOver": "this.mainPlayList.set('selectedIndex', 17)",
                          "click": "this.startPanoramaWithCamera(this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D, this.camera_D7F3566F_C7FC_88D8_41DD_BF514CC08CC6)"
                         }
                        ],
                        "id": "overlay_D1253A93_C42A_0FB5_41E6_17CB3E5C542A",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.01,
                          "yaw": -38.68,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 42,
                             "class": "ImageResourceLevel",
                             "width": 38,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -21.72
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
                          "hfov": 4.01,
                          "yaw": -38.68,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 85,
                             "class": "ImageResourceLevel",
                             "width": 77,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -21.72
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
                          "rollOver": "this.mainPlayList.set('selectedIndex', 18)",
                          "click": "this.startPanoramaWithCamera(this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF, this.camera_C80AD663_C7FC_88C8_41CF_185F229C0503)"
                         }
                        ],
                        "id": "overlay_D26B7D5E_C436_0AAE_41D5_EE21179DDE28",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.12,
                          "yaw": 50.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 43,
                             "class": "ImageResourceLevel",
                             "width": 39,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -44.58
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
                          "hfov": 3.12,
                          "yaw": 50.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 87,
                             "class": "ImageResourceLevel",
                             "width": 78,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -44.58
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
                          "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_D7FE267A_C7FC_88B8_41D5_0BCE6CD69F4F)"
                         }
                        ],
                        "id": "overlay_DC4DF38D_C42B_FDAD_4198_C86C91934CB6",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.52,
                          "yaw": -126.3,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 43,
                             "class": "ImageResourceLevel",
                             "width": 39,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -36.5
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
                          "hfov": 3.52,
                          "yaw": -126.3,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 86,
                             "class": "ImageResourceLevel",
                             "width": 78,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -36.5
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "stereoSphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 6434,
                         "class": "ImageResourceLevel",
                         "width": 6434,
                         "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_hq.jpeg"
                        },
                        {
                         "height": 4002,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_t.jpg"
                     }
                    ],
                    "label": "2 DINNING ROOM AND ENTRANCE OF DRAWING ROOM",
                    "hfovMax": 120,
                    "partial": false,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "yaw": 50.47,
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
                       "pitch": 0,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "rollOver": "this.mainPlayList.set('selectedIndex', 15)",
                             "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_C82BB642_C7FC_88CB_41D4_ADBBE440D7D2)"
                            }
                           ],
                           "id": "overlay_D21833C6_C43B_FD9E_41A5_DDAB3D2BC6A2",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.1,
                             "yaw": -100.73,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "class": "ImageResourceLevel",
                                "width": 46,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -37.93
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
                             "hfov": 4.1,
                             "yaw": -100.73,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 93,
                                "class": "ImageResourceLevel",
                                "width": 92,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -37.93
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
                             "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_C83DE637_C7FC_8849_41D9_8EBCDE33F592)"
                            }
                           ],
                           "id": "overlay_D2B252C0_C43A_3F92_41DD_987502A9BADE",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.09,
                             "yaw": 109.56,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "class": "ImageResourceLevel",
                                "width": 46,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -38.1
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
                             "hfov": 4.09,
                             "yaw": 109.56,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 93,
                                "class": "ImageResourceLevel",
                                "width": 92,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -38.1
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "stereoSphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 6434,
                            "class": "ImageResourceLevel",
                            "width": 6434,
                            "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_hq.jpeg"
                           },
                           {
                            "height": 4002,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_t.jpg"
                        }
                       ],
                       "label": "4 FRONT OF DINNING TABLE",
                       "hfovMax": 120,
                       "partial": false,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 109.56,
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                          "pitch": 0,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "rollOver": "this.mainPlayList.set('selectedIndex', 18)",
                                "click": "this.startPanoramaWithCamera(this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF, this.camera_D78FC6E6_C7FC_89C8_41CF_0C28395EFCC9)"
                               }
                              ],
                              "id": "overlay_D34E2028_C43A_1A93_41DF_E0DEE009F334",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 3.99,
                                "yaw": -49.24,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 45,
                                   "class": "ImageResourceLevel",
                                   "width": 41,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -31.26
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
                                "hfov": 3.99,
                                "yaw": -49.24,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 90,
                                   "class": "ImageResourceLevel",
                                   "width": 83,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -31.26
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
                                "click": "this.startPanoramaWithCamera(this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527, this.camera_D79D06DB_C7FC_89F8_41D6_A58722C135E8)"
                               }
                              ],
                              "id": "overlay_D91C4FBE_C4FA_05EE_41D6_63FF68F589E6",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 2.88,
                                "yaw": 145.44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 41,
                                   "class": "ImageResourceLevel",
                                   "width": 39,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -48.95
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
                                "hfov": 2.88,
                                "yaw": 145.44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 83,
                                   "class": "ImageResourceLevel",
                                   "width": 78,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -48.95
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
                                "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_D77A26F1_C7FC_89C8_41E7_31088D9B1170)"
                               }
                              ],
                              "id": "overlay_E4EE35CF_C4DA_05AD_41D7_A24AD1E6566C",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 2.41,
                                "yaw": -144.43,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 28,
                                   "class": "ImageResourceLevel",
                                   "width": 24,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -28.04
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
                                "hfov": 2.41,
                                "yaw": -144.43,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 56,
                                   "class": "ImageResourceLevel",
                                   "width": 48,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -28.04
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "stereoSphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 6434,
                               "class": "ImageResourceLevel",
                               "width": 6434,
                               "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_hq.jpeg"
                              },
                              {
                               "height": 4002,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_t.jpg"
                           }
                          ],
                          "label": "1 DINNING ENTRY",
                          "hfovMax": 120,
                          "partial": false,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "yaw": 145.44,
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
                             "pitch": 0,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "rollOver": "this.mainPlayList.set('selectedIndex', 14)",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_D73F2728_C7FC_8847_41C0_5DF1F2CA9F66)"
                                  }
                                 ],
                                 "id": "overlay_DA1F5AD1_C4FA_0FB5_41DC_13E4B8C76CE8",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 3.79,
                                   "yaw": 101.34,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 45,
                                      "class": "ImageResourceLevel",
                                      "width": 44,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -40.95
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
                                   "hfov": 3.79,
                                   "yaw": 101.34,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 90,
                                      "class": "ImageResourceLevel",
                                      "width": 89,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -40.95
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
                                   "rollOver": "this.mainPlayList.set('selectedIndex', 19)",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_D72E4733_C7FC_8849_41E2_A49503F83502)"
                                  }
                                 ],
                                 "id": "overlay_DA3AE9AA_C4F6_0D97_41B9_33887DB625B8",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 3.9,
                                   "yaw": -130.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 52,
                                      "class": "ImageResourceLevel",
                                      "width": 40,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -29.91
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
                                   "hfov": 3.9,
                                   "yaw": -130.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 105,
                                      "class": "ImageResourceLevel",
                                      "width": 80,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -29.91
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "stereoSphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 6434,
                                  "class": "ImageResourceLevel",
                                  "width": 6434,
                                  "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_hq.jpeg"
                                 },
                                 {
                                  "height": 4002,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_t.jpg"
                              }
                             ],
                             "label": "3 FAMILY LOUNGE 1",
                             "hfovMax": 120,
                             "partial": false,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "yaw": 101.34,
                               "panorama": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                               "backwardYaw": 145.44,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "yaw": -130.31,
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                "pitch": 0,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "rollOver": "this.mainPlayList.set('selectedIndex', 8)",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527, this.camera_D63735A8_C7FC_8847_41E1_442561357DD0)"
                                     }
                                    ],
                                    "id": "overlay_DDFDA466_C4EE_1A9E_41D9_C2CDAD963DFF",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.09,
                                      "yaw": -123.53,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 83,
                                         "class": "ImageResourceLevel",
                                         "width": 48,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -40.92
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
                                      "hfov": 4.09,
                                      "yaw": -123.53,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 167,
                                         "class": "ImageResourceLevel",
                                         "width": 96,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -40.92
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
                                      "rollOver": "this.mainPlayList.set('selectedIndex', 22)",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415, this.camera_D63CA5B2_C7FC_884B_41E6_FE28CDB3834A)"
                                     }
                                    ],
                                    "id": "overlay_DDCE8C7D_C4EA_0B6D_41DF_65D4D9B54FF0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 2.7,
                                      "yaw": -32.23,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 32,
                                         "class": "ImageResourceLevel",
                                         "width": 28,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -33.77
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
                                      "hfov": 2.7,
                                      "yaw": -32.23,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 64,
                                         "class": "ImageResourceLevel",
                                         "width": 57,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -33.77
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
                                      "rollOver": "this.mainPlayList.set('selectedIndex', 20)",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C, this.camera_D649359D_C7FC_8879_41C9_E3B18A6D3304)"
                                     }
                                    ],
                                    "id": "overlay_DE6893B5_C4EA_1DFD_41D2_E8844ABFD486",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 2.63,
                                      "yaw": 57.47,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 29,
                                         "class": "ImageResourceLevel",
                                         "width": 25,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -23.46
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
                                      "hfov": 2.63,
                                      "yaw": 57.47,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 51,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -23.46
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "stereoSphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "class": "ImageResourceLevel",
                                     "width": 6434,
                                     "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_hq.jpeg"
                                    },
                                    {
                                     "height": 4002,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_t.jpg"
                                 }
                                ],
                                "label": "11",
                                "hfovMax": 120,
                                "partial": false,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": 57.47,
                                  "panorama": {
                                   "class": "Panorama",
                                   "id": "panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
                                   "pitch": 0,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "rollOver": "this.mainPlayList.set('selectedIndex', 19)",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_D6C07780_C7FC_8847_41DF_55AE9D161337)"
                                        }
                                       ],
                                       "id": "overlay_DD57D166_C4EB_FA9F_41E5_AB2D424F3646",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 3.69,
                                         "yaw": -67.59,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 44,
                                            "class": "ImageResourceLevel",
                                            "width": 35,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -22.26
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
                                         "hfov": 3.69,
                                         "yaw": -67.59,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 88,
                                            "class": "ImageResourceLevel",
                                            "width": 71,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -22.26
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
                                         "rollOver": "this.mainPlayList.set('selectedIndex', 21)",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F, this.camera_D6D02769_C7FC_88D9_41D9_C14CB09B4D68)"
                                        }
                                       ],
                                       "id": "overlay_DF1D5115_C4EA_1AB2_41E3_0BFF2FA0ED8A",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 2.81,
                                         "yaw": 24.4,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 37,
                                            "class": "ImageResourceLevel",
                                            "width": 31,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -36.95
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
                                         "hfov": 2.81,
                                         "yaw": 24.4,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 75,
                                            "class": "ImageResourceLevel",
                                            "width": 62,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -36.95
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "stereoSphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "class": "ImageResourceLevel",
                                        "width": 6434,
                                        "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_hq.jpeg"
                                       },
                                       {
                                        "height": 4002,
                                        "class": "ImageResourceLevel",
                                        "width": 4002,
                                        "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_t.jpg"
                                    }
                                   ],
                                   "label": "22",
                                   "hfovMax": 120,
                                   "partial": false,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "yaw": 24.4,
                                     "panorama": {
                                      "class": "Panorama",
                                      "id": "panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
                                      "pitch": 0,
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "rollOver": "this.mainPlayList.set('selectedIndex', 20)",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C, this.camera_C84735FF_C7FC_8BB9_41D6_4186525EE929)"
                                           }
                                          ],
                                          "id": "overlay_DF8F5674_C4F6_0773_41D0_38CB68C4928A",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 3.04,
                                            "yaw": -40.97,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 35,
                                               "class": "ImageResourceLevel",
                                               "width": 33,
                                               "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -35.49
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
                                            "hfov": 3.04,
                                            "yaw": -40.97,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 70,
                                               "class": "ImageResourceLevel",
                                               "width": 66,
                                               "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -35.49
                                           }
                                          ]
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame",
                                        "stereoSphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 6434,
                                           "class": "ImageResourceLevel",
                                           "width": 6434,
                                           "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_hq.jpeg"
                                          },
                                          {
                                           "height": 4002,
                                           "class": "ImageResourceLevel",
                                           "width": 4002,
                                           "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F.jpeg"
                                          }
                                         ]
                                        },
                                        "thumbnailUrl": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_t.jpg"
                                       }
                                      ],
                                      "label": "33",
                                      "hfovMax": 120,
                                      "partial": false,
                                      "hfovMin": 60,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "yaw": -40.97,
                                        "panorama": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
                                        "backwardYaw": 24.4,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_t.jpg"
                                     },
                                     "backwardYaw": -40.97,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "yaw": -67.59,
                                     "panorama": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                     "backwardYaw": 57.47,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_t.jpg"
                                  },
                                  "backwardYaw": -67.59,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": -123.53,
                                  "panorama": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
                                  "backwardYaw": -130.31,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": -32.23,
                                  "panorama": {
                                   "class": "Panorama",
                                   "id": "panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
                                   "pitch": 0,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "rollOver": "this.mainPlayList.set('selectedIndex', 19)",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_D71B673E_C7FC_88BB_41E8_5B97373D7AFB)"
                                        }
                                       ],
                                       "id": "overlay_DD079184_C4EA_1D93_41BA_C0E46DA04358",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 2.96,
                                         "yaw": 28.65,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 39,
                                            "class": "ImageResourceLevel",
                                            "width": 37,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -44.66
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
                                         "hfov": 2.96,
                                         "yaw": 28.65,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 79,
                                            "class": "ImageResourceLevel",
                                            "width": 74,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -44.66
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "stereoSphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "class": "ImageResourceLevel",
                                        "width": 6434,
                                        "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_hq.jpeg"
                                       },
                                       {
                                        "height": 4002,
                                        "class": "ImageResourceLevel",
                                        "width": 4002,
                                        "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_t.jpg"
                                    }
                                   ],
                                   "label": "44",
                                   "hfovMax": 120,
                                   "partial": false,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "yaw": 28.65,
                                     "panorama": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                     "backwardYaw": -32.23,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_t.jpg"
                                  },
                                  "backwardYaw": 28.65,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_t.jpg"
                               },
                               "backwardYaw": -123.53,
                               "distance": 1
                              }
                             ],
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_t.jpg"
                            },
                            "backwardYaw": 101.34,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "yaw": -49.24,
                            "panorama": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
                            "backwardYaw": 109.56,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "yaw": -144.43,
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                             "pitch": 0,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52, this.camera_D7BE36BB_C7FC_89B8_41B3_352AC8716DA7)"
                                  }
                                 ],
                                 "id": "overlay_D809D392_C4FA_1DB7_41C2_781B7F372A85",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 2.68,
                                   "yaw": -74.16,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 33,
                                      "class": "ImageResourceLevel",
                                      "width": 29,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -35.87
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
                                   "hfov": 2.68,
                                   "yaw": -74.16,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 67,
                                      "class": "ImageResourceLevel",
                                      "width": 59,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -35.87
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
                                   "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73, this.camera_D79076D1_C7FC_89C8_41CE_A0F8D0C9288E)"
                                  }
                                 ],
                                 "id": "overlay_DAEF5E79_C4FE_0775_41D5_66AAACB71D24",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 3.42,
                                   "yaw": 16.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 40,
                                      "class": "ImageResourceLevel",
                                      "width": 35,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -29.54
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
                                   "hfov": 3.42,
                                   "yaw": 16.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 80,
                                      "class": "ImageResourceLevel",
                                      "width": 70,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -29.54
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_D7AA56C6_C7FC_89C8_41D9_6F3CDEA4006E)"
                                  }
                                 ],
                                 "id": "overlay_D979F8FD_C4FA_0B6D_41E0_13F97F87ADEC",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 3.72,
                                   "yaw": 86.57,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 41,
                                      "class": "ImageResourceLevel",
                                      "width": 38,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -30.7
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
                                   "hfov": 3.72,
                                   "yaw": 86.57,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 83,
                                      "class": "ImageResourceLevel",
                                      "width": 77,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -30.7
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "stereoSphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 6434,
                                  "class": "ImageResourceLevel",
                                  "width": 6434,
                                  "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_hq.jpeg"
                                 },
                                 {
                                  "height": 4002,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_t.jpg"
                              }
                             ],
                             "label": "4 FAMILY LOUNGE AND KITCHEN INTRENCE",
                             "hfovMax": 120,
                             "partial": false,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "yaw": -74.16,
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
                                "pitch": 0,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_C838C62B_C7FC_8859_41B6_AE8360A586C4)"
                                     }
                                    ],
                                    "id": "overlay_D8D0A3ED_C4FA_3D6D_41E0_02E42DEBE6F0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.03,
                                      "yaw": 28.36,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 65,
                                         "class": "ImageResourceLevel",
                                         "width": 49,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -42.79
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
                                      "hfov": 4.03,
                                      "yaw": 28.36,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 130,
                                         "class": "ImageResourceLevel",
                                         "width": 98,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -42.79
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F, this.camera_C836D620_C7FC_8847_41DA_90B54C571013)"
                                     }
                                    ],
                                    "id": "overlay_D9BD6694_C4FE_07B3_41E7_844B871DCBA3",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.17,
                                      "yaw": 106.27,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 40,
                                         "class": "ImageResourceLevel",
                                         "width": 46,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -36.54
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
                                      "hfov": 4.17,
                                      "yaw": 106.27,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 81,
                                         "class": "ImageResourceLevel",
                                         "width": 92,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -36.54
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "stereoSphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "class": "ImageResourceLevel",
                                     "width": 6434,
                                     "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_hq.jpeg"
                                    },
                                    {
                                     "height": 4002,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_t.jpg"
                                 }
                                ],
                                "label": "2 FAMILY LOUNGE ( FRONT OF TV 1)",
                                "hfovMax": 120,
                                "partial": false,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": 106.27,
                                  "panorama": {
                                   "class": "Panorama",
                                   "id": "panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
                                   "pitch": 0,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "rollOver": "this.mainPlayList.set('selectedIndex', 7)",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52, this.camera_C843B5F4_C7FC_8BCF_41E3_32E631EC594E)"
                                        }
                                       ],
                                       "id": "overlay_D8656E23_C4FE_0695_41D9_50041DC13143",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 3.89,
                                         "yaw": 68.38,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 44,
                                            "class": "ImageResourceLevel",
                                            "width": 41,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -33.64
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
                                         "hfov": 3.89,
                                         "yaw": 68.38,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 88,
                                            "class": "ImageResourceLevel",
                                            "width": 83,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -33.64
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "stereoSphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "class": "ImageResourceLevel",
                                        "width": 6434,
                                        "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_hq.jpeg"
                                       },
                                       {
                                        "height": 4002,
                                        "class": "ImageResourceLevel",
                                        "width": 4002,
                                        "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_t.jpg"
                                    }
                                   ],
                                   "label": "1 FAMILY LOUNGE ( CENTER TABLE)",
                                   "hfovMax": 120,
                                   "partial": false,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "yaw": 68.38,
                                     "panorama": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
                                     "backwardYaw": 106.27,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_t.jpg"
                                  },
                                  "backwardYaw": 68.38,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": 28.36,
                                  "panorama": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                                  "backwardYaw": -74.16,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_t.jpg"
                               },
                               "backwardYaw": 28.36,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "yaw": 86.57,
                               "panorama": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                               "backwardYaw": -144.43,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "yaw": 16.37,
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
                                "pitch": 0,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "rollOver": "this.mainPlayList.set('selectedIndex', 9)",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_D6B37795_C7FC_8849_41BA_63296755AE68)"
                                     }
                                    ],
                                    "id": "overlay_DF354DCC_C4FA_0592_41E7_4D880DEC58A0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 3.44,
                                      "yaw": -82.89,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 39,
                                         "class": "ImageResourceLevel",
                                         "width": 34,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -26.63
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
                                      "hfov": 3.44,
                                      "yaw": -82.89,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 78,
                                         "class": "ImageResourceLevel",
                                         "width": 68,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -26.63
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "stereoSphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "class": "ImageResourceLevel",
                                     "width": 6434,
                                     "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_hq.jpeg"
                                    },
                                    {
                                     "height": 4002,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_t.jpg"
                                 }
                                ],
                                "label": "5 INSIDE OF KITCHEN",
                                "hfovMax": 120,
                                "partial": false,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "yaw": -82.89,
                                  "panorama": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                                  "backwardYaw": 16.37,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_t.jpg"
                               },
                               "backwardYaw": -82.89,
                               "distance": 1
                              }
                             ],
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_t.jpg"
                            },
                            "backwardYaw": 86.57,
                            "distance": 1
                           }
                          ],
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_t.jpg"
                         },
                         "backwardYaw": -49.24,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": -100.73,
                         "panorama": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                         "backwardYaw": 50.47,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_t.jpg"
                      },
                      "backwardYaw": -100.73,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -38.68,
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
                       "pitch": 0,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "rollOver": "this.mainPlayList.set('selectedIndex', 16)",
                             "click": "this.startPanoramaWithCamera(this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5, this.camera_D7DF969B_C7FC_8879_41CA_C99E76A0162E)"
                            }
                           ],
                           "id": "overlay_D08DE6BA_C42E_07F7_41B5_065765A3A1F8",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 3.74,
                             "yaw": -102.09,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 37,
                                "class": "ImageResourceLevel",
                                "width": 39,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -33.26
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
                             "hfov": 3.74,
                             "yaw": -102.09,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 74,
                                "class": "ImageResourceLevel",
                                "width": 79,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -33.26
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
                             "rollOver": "this.mainPlayList.set('selectedIndex', 15)",
                             "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_D7C566A5_C7FC_8848_41DB_07882BF9594F)"
                            }
                           ],
                           "id": "overlay_D10581FB_C42E_1D75_41DE_7CC6C1E75FF4",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 3.44,
                             "yaw": 16.31,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 39,
                                "class": "ImageResourceLevel",
                                "width": 35,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -29.96
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
                             "hfov": 3.44,
                             "yaw": 16.31,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 79,
                                "class": "ImageResourceLevel",
                                "width": 71,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -29.96
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "stereoSphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 6434,
                            "class": "ImageResourceLevel",
                            "width": 6434,
                            "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_hq.jpeg"
                           },
                           {
                            "height": 4002,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_t.jpg"
                        }
                       ],
                       "label": "3 DINNING ROOM SIDE OF TV",
                       "hfovMax": 120,
                       "partial": false,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "yaw": -102.09,
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
                          "pitch": 0,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "rollOver": "this.mainPlayList.set('selectedIndex', 17)",
                                "click": "this.startPanoramaWithCamera(this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D, this.camera_D732071D_C7FC_8879_41E5_8269EF2404C4)"
                               }
                              ],
                              "id": "overlay_D1EB9B1B_C42A_0EB5_41E5_BFE532BCE288",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 4.27,
                                "yaw": 94.2,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 52,
                                   "class": "ImageResourceLevel",
                                   "width": 49,
                                   "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -39.64
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
                                "hfov": 4.27,
                                "yaw": 94.2,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 104,
                                   "class": "ImageResourceLevel",
                                   "width": 99,
                                   "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -39.64
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "stereoSphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 6434,
                               "class": "ImageResourceLevel",
                               "width": 6434,
                               "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_hq.jpeg"
                              },
                              {
                               "height": 4002,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_t.jpg"
                           }
                          ],
                          "label": "2 DINNING ROOM FORNT OF TV",
                          "hfovMax": 120,
                          "partial": false,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "yaw": 94.2,
                            "panorama": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
                            "backwardYaw": -102.09,
                            "distance": 1
                           }
                          ],
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_t.jpg"
                         },
                         "backwardYaw": 94.2,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 16.31,
                         "panorama": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                         "backwardYaw": -38.68,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_t.jpg"
                      },
                      "backwardYaw": 16.31,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -126.3,
                      "panorama": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                      "backwardYaw": 124.53,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_t.jpg"
                   },
                   "backwardYaw": -126.3,
                   "distance": 1
                  }
                 ],
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_t.jpg"
                },
                "backwardYaw": -154.86,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "yaw": 119.77,
                "panorama": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
                "backwardYaw": 142.17,
                "distance": 1
               }
              ],
              "vfov": 180,
              "thumbnailUrl": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_t.jpg"
             },
             "backwardYaw": 119.77,
             "distance": 1
            }
           ],
           "vfov": 180,
           "thumbnailUrl": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_t.jpg"
          },
          "backwardYaw": -16.36,
          "distance": 1
         }
        ],
        "vfov": 180,
        "thumbnailUrl": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_t.jpg"
       },
       "backwardYaw": 164.22,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -62.26,
       "panorama": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
       "backwardYaw": 93.64,
       "distance": 1
      }
     ],
     "vfov": 180,
     "thumbnailUrl": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_t.jpg"
    },
    "backwardYaw": -62.26,
    "distance": 1
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonRestart": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonPlayLeft": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "gyroscopeVerticalDraggingEnabled": false,
  "buttonPause": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "toggle",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "transparencyActive": false,
   "minWidth": 0,
   "shadow": false
  },
  "buttonCardboardView": {
   "class": "IconButton",
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 23,
   "width": 35,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "maxWidth": 35,
   "borderRadius": 0,
   "paddingTop": 0,
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 1,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD",
   "data": {
    "name": "IconButton3682"
   },
   "maxHeight": 23,
   "iconURL": "skin/IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD.png",
   "transparencyActive": false,
   "minWidth": 1,
   "shadow": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_t.jpg",
  "label": "2 LEFT SIDE ON ROAD",
  "vfov": 180,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2",
  "hfovMax": 120,
  "frames": [
   {
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
      "id": "overlay_CBF8D05B_C46A_1AB5_419E_81FF5A5F0B3C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.47,
        "yaw": 11.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 32,
           "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -19.37
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
        "hfov": 3.47,
        "yaw": 11.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 76,
           "class": "ImageResourceLevel",
           "width": 65,
           "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -19.37
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_camera",
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
 "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_camera",
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
 "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_camera",
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
 "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_camera",
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
 "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_camera",
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
 "this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_camera",
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
 "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_camera",
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
 "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_camera",
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
 "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_camera",
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
 "this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_camera",
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
 "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_camera",
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
 "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_camera",
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
 "this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_camera",
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
 "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_camera",
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
 "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_camera",
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
 "this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_camera",
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
 "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_camera",
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
 "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_camera",
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
 "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_camera",
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
 "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_camera",
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
 "this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_camera",
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
 "this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_camera",
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
    "media": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
    "camera": "this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D649359D_C7FC_8879_41C9_E3B18A6D3304",
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
   "yaw": 112.41,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D63735A8_C7FC_8847_41E1_442561357DD0",
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
   "yaw": 49.69,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D63CA5B2_C7FC_884B_41E6_FE28CDB3834A",
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
   "yaw": -151.35,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D628C5BD_C7FC_8BB9_41E8_36A958FF7CE4",
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
   "yaw": 25.14,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D61755C8_C7FC_8BC7_41E1_2043BCAE3F52",
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
   "yaw": -37.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C843B5F4_C7FC_8BCF_41E3_32E631EC594E",
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
   "yaw": -73.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C84735FF_C7FC_8BB9_41D6_4186525EE929",
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
   "yaw": -155.6,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C84B260A_C7FC_885B_41E2_EC095C2D6B0D",
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
   "yaw": 159.71,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C84D0615_C7FC_8849_41DB_B4F2F1D53623",
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
   "yaw": -60.23,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C836D620_C7FC_8847_41DA_90B54C571013",
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
   "yaw": -111.62,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C838C62B_C7FC_8859_41B6_AE8360A586C4",
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
   "yaw": 105.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C83DE637_C7FC_8849_41D9_8EBCDE33F592",
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
   "yaw": 130.76,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C82BB642_C7FC_88CB_41D4_ADBBE440D7D2",
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
   "yaw": -129.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C816F64D_C7FC_88D8_41E1_B0D52F33213A",
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
   "yaw": -179.23,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C81E3658_C7FC_88F8_41E5_7EBFCA54A9D5",
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
   "yaw": 163.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C80AD663_C7FC_88C8_41CF_185F229C0503",
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
   "yaw": 79.27,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7F3566F_C7FC_88D8_41DD_BF514CC08CC6",
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
   "yaw": -163.69,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7FE267A_C7FC_88B8_41D5_0BCE6CD69F4F",
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
   "yaw": -55.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7E5C685_C7FC_8848_41CC_E3D6D57F4DB9",
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
   "yaw": -15.78,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7D0868F_C7FC_8857_41DC_311A663A085D",
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
   "yaw": -86.36,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7DF969B_C7FC_8879_41CA_C99E76A0162E",
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
   "yaw": -85.8,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7C566A5_C7FC_8848_41DB_07882BF9594F",
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
   "yaw": 141.32,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7B1D6B0_C7FC_8848_41B5_60A6193FB172",
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
   "yaw": 135.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7BE36BB_C7FC_89B8_41B3_352AC8716DA7",
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
   "yaw": -151.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7AA56C6_C7FC_89C8_41D9_6F3CDEA4006E",
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
   "yaw": 35.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D79076D1_C7FC_89C8_41CE_A0F8D0C9288E",
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
   "yaw": 97.11,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D79D06DB_C7FC_89F8_41D6_A58722C135E8",
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
   "yaw": -78.66,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D78FC6E6_C7FC_89C8_41CF_0C28395EFCC9",
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
   "yaw": -70.44,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D77A26F1_C7FC_89C8_41E7_31088D9B1170",
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
   "yaw": -93.43,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D765F6FC_C7FC_89B8_41E5_23E4CF68FF49",
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
   "yaw": 117.74,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D756C707_C7FC_8848_41BC_9C162A8095CF",
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
   "yaw": 157.33,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D740A712_C7FC_884B_41B2_D2520ADDF7FE",
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
   "yaw": -179.65,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D732071D_C7FC_8879_41E5_8269EF2404C4",
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
   "yaw": 77.91,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D73F2728_C7FC_8847_41C0_5DF1F2CA9F66",
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
   "yaw": -34.56,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D72E4733_C7FC_8849_41E2_A49503F83502",
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
   "yaw": 56.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D71B673E_C7FC_88BB_41E8_5B97373D7AFB",
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
   "yaw": 147.77,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D7053748_C7FC_88C7_41D0_A0A818EF0CBF",
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
   "yaw": 53.99,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D6F7F753_C7FC_88C9_41DB_B1F9A64FD702",
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
   "yaw": 31.86,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D6E1375E_C7FC_88FB_41A5_764B3D2582F2",
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
   "yaw": 53.7,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D6D02769_C7FC_88D9_41D9_C14CB09B4D68",
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
   "yaw": 139.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D6C07780_C7FC_8847_41DF_55AE9D161337",
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
   "yaw": -122.53,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D6B37795_C7FC_8849_41BA_63296755AE68",
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
   "yaw": -163.63,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Put a Smile On - no bubbles"
  },
  "class": "MediaAudio",
  "id": "audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2.ogg",
   "mp3Url": "media/audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2.mp3"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressHeight": 20,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "shadow": false,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "toolTipFontColor": "#606060",
  "progressBorderSize": 2,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "minHeight": 50,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "progressBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingBottom": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "progressBarBorderRadius": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadow": true,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 30,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 10,
  "progressBorderColor": "#AAAAAA",
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
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
      "borderSize": 0,
      "scrollBarColor": "#000000",
      "paddingBottom": 0,
      "height": "100%",
      "width": 40,
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "gap": 4,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "layout": "vertical",
      "scrollBarMargin": 2,
      "minHeight": 20,
      "backgroundOpacity": 0,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "data": {
       "name": "Container37503"
      },
      "scrollBarOpacity": 0.5,
      "creationPolicy": "delayed",
      "minWidth": 20,
      "shadow": false,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "class": "IconButton",
      "borderSize": 0,
      "mode": "toggle",
      "paddingBottom": 0,
      "height": 40,
      "width": 40,
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "horizontalAlign": "center",
      "paddingRight": 0,
      "minHeight": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "transparencyActive": false,
      "minWidth": 0,
      "shadow": false
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "height": "95.07%",
    "width": 360,
    "verticalAlign": "middle",
    "borderRadius": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "gap": 4,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minHeight": 20,
    "backgroundOpacity": 0,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "data": {
     "name": "Container37498"
    },
    "scrollBarOpacity": 0.5,
    "creationPolicy": "delayed",
    "minWidth": 360,
    "shadow": false,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD"
  ],
  "scrollBarVisible": "rollOver",
  "creationPolicy": "delayed",
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "height": 142,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "borderRadius": 0,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "center",
  "width": "100%",
  "paddingRight": 0,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "shadow": false,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.playAudioList([this.audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "horizontalAlign": "left",
 "width": "100%",
 "paddingRight": 0,
 "layout": "absolute",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "shadow": false,
 "contentOpaque": false,
 "overflow": "visible"
})