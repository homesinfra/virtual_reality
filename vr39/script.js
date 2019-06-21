TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6434,
       "width": 6434,
       "url": "media/panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4002,
       "width": 4002,
       "url": "media/panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_69D53877_79AC_4B93_41B2_F64D2037EF87",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3, this.camera_650B64AB_7A16_2505_41DD_BEE2A127392D); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 4.07,
        "yaw": -14.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "width": 37,
           "url": "media/panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.31
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -14.06,
        "hfov": 4.07,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 78,
           "width": 74,
           "url": "media/panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -13.31
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_t.jpg"
   }
  ],
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "stereoSphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 6434,
          "width": 6434,
          "url": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 4002,
          "width": 4002,
          "url": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_68DD4922_79AC_CDAC_41D7_177E5684074B",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_735C57B7_7995_C493_41B4_7029EF95CC7A, this.camera_657D852F_7A16_271D_41D1_E8C0F68C1E0B); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 4.74,
           "yaw": -12.28,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 52,
              "width": 45,
              "url": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -12.28,
           "hfov": 4.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 104,
              "width": 91,
              "url": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_6AAED5C7_79AF_C4F3_41A5_C9514C59E1F5",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E, this.camera_658CA539_7A16_2705_41A3_500034FAB227); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 4.26,
           "yaw": -175.56,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 48,
              "width": 39,
              "url": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -15.47
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -175.56,
           "hfov": 4.26,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "width": 78,
              "url": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -15.47
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_t.jpg"
      }
     ],
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 6434,
             "width": 6434,
             "url": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 4002,
             "width": 4002,
             "url": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_68059B08_79AC_4D7C_41B3_8BB9FFD58973",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3, this.camera_65CAB564_7A16_2703_41D9_6FBD0FCF40D4); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "hfov": 3.86,
              "yaw": 134.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "width": 35,
                 "url": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -13.34
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 134.07,
              "hfov": 3.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 79,
                 "width": 70,
                 "url": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -13.34
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_680B4FB9_79AC_449F_41D3_CFFEDB044841",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_73556678_7995_C79D_41C8_613213525FFB, this.camera_65BA7559_7A16_2705_41D9_6AF886C04D69); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "hfov": 6.09,
              "yaw": 8.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 58,
                 "width": 58,
                 "url": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -21.56
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 8.5,
              "hfov": 6.09,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 117,
                 "width": 117,
                 "url": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -21.56
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_t.jpg"
         }
        ],
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": {
           "frames": [
            {
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 4002,
                "width": 4002,
                "url": "media/panorama_73556678_7995_C79D_41C8_613213525FFB.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_680593E6_79AC_FCB5_41C5_FAFDB907094E",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_735C57B7_7995_C493_41B4_7029EF95CC7A, this.camera_65F1958E_7A16_271F_41C9_8A0F237CC977); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "hfov": 6.33,
                 "yaw": 161.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 65,
                    "width": 59,
                    "url": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -18.88
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 161.72,
                 "hfov": 6.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 130,
                    "width": 119,
                    "url": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -18.88
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_685D7DD3_79AB_C493_41D6_63D37D1C01CB",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_7364E645_7994_47F7_41BF_B101CEA9F286, this.camera_5A00D599_7A16_2705_41D9_242C66C0B2F7); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "hfov": 3.67,
                 "yaw": 15.18,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 32,
                    "width": 33,
                    "url": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.22
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 15.18,
                 "hfov": 3.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 64,
                    "width": 66,
                    "url": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -11.22
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_t.jpg"
            }
           ],
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_735C57B7_7995_C493_41B4_7029EF95CC7A",
             "distance": 1,
             "yaw": 161.72,
             "class": "AdjacentPanorama",
             "backwardYaw": 8.5
            },
            {
             "panorama": {
              "frames": [
               {
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6434,
                   "width": 6434,
                   "url": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 4002,
                   "width": 4002,
                   "url": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_6BA7978A_79B4_457C_41CA_6206472FE01B",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_73556678_7995_C79D_41C8_613213525FFB, this.camera_6435237C_7A16_2303_4198_3B4937BB450D); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "hfov": 3.13,
                    "yaw": 176.19,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 31,
                       "width": 28,
                       "url": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -10.5
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 176.19,
                    "hfov": 3.13,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 62,
                       "width": 56,
                       "url": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -10.5
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_6A377AAA_79B5_CCBC_41D9_32A5C50E9467",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_737DE50C_7994_4574_41C6_7AC368E80551, this.camera_6442F391_7A16_2305_41C7_586F9CAE7609); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "hfov": 5.56,
                    "yaw": -76.83,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 53,
                       "width": 54,
                       "url": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -24.31
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -76.83,
                    "hfov": 5.56,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 107,
                       "width": 108,
                       "url": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -24.31
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_t.jpg"
               }
              ],
              "hfov": 360,
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_73556678_7995_C79D_41C8_613213525FFB",
                "distance": 1,
                "yaw": 176.19,
                "class": "AdjacentPanorama",
                "backwardYaw": 15.18
               },
               {
                "panorama": {
                 "frames": [
                  {
                   "stereoSphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 6434,
                      "width": 6434,
                      "url": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 4002,
                      "width": 4002,
                      "url": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_6BCC23D1_79B4_DCEC_41BE_4D06E5461985",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_7364E645_7994_47F7_41BF_B101CEA9F286, this.camera_652764E6_7A16_250F_41CE_C966304FFBEF); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "hfov": 4.09,
                       "yaw": -163.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 48,
                          "width": 38,
                          "url": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -18.66
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -163.78,
                       "hfov": 4.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 96,
                          "width": 77,
                          "url": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -18.66
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_6B5661E9_79B4_7CBF_41CC_B6D88485D1DC",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33, this.camera_651444D6_7A16_250F_41B6_AD55AFC958B1); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "hfov": 5.92,
                       "yaw": -17.51,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 71,
                          "width": 53,
                          "url": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -10.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -17.51,
                       "hfov": 5.92,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 142,
                          "width": 107,
                          "url": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -10.58
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_t.jpg"
                  }
                 ],
                 "hfov": 360,
                 "hfovMin": 60,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "frames": [
                     {
                      "stereoSphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 6434,
                         "width": 6434,
                         "url": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 4002,
                         "width": 4002,
                         "url": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_6B313DFE_79B4_4494_41C8_C3BE49989F54",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_737DE50C_7994_4574_41C6_7AC368E80551, this.camera_6456A3B7_7A16_230D_41DD_E93C54BD3994); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "hfov": 5.75,
                          "yaw": 169.09,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 74,
                             "width": 60,
                             "url": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -32.05
                         }
                        ],
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 169.09,
                          "hfov": 5.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 148,
                             "width": 121,
                             "url": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -32.05
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_768E5D55_79F6_670D_41D9_885B0F784B71",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC, this.camera_645873A7_7A16_230D_41DD_F2054970113E); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "hfov": 6.29,
                          "yaw": 115.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 57,
                             "width": 56,
                             "url": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -4.73
                         }
                        ],
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 115.47,
                          "hfov": 6.29,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 114,
                             "width": 112,
                             "url": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -4.73
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_t.jpg"
                     }
                    ],
                    "hfov": 360,
                    "hfovMin": 60,
                    "vfov": 180,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "frames": [
                        {
                         "stereoSphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 6434,
                            "width": 6434,
                            "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 4002,
                            "width": 4002,
                            "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_766A8FE7_79F2_230D_41C7_9823BE174433",
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_7205CC80_79F2_2503_41B9_8789A6425C63, this.camera_64847409_7A16_2505_41C2_5CBA39DEB98F); this.mainPlayList.set('selectedIndex', 17)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 3.53,
                             "yaw": -24.89,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 51,
                                "width": 40,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -39.72
                            }
                           ],
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -24.89,
                             "hfov": 3.53,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 103,
                                "width": 81,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -39.72
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_695F077C_79FE_2303_41D8_8E8A1CAA61DF",
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F, this.camera_6479C3E2_7A16_2304_41DC_A6BC65DB6289); this.mainPlayList.set('selectedIndex', 10)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 4.56,
                             "yaw": 31.39,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 48,
                                "width": 46,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.8
                            }
                           ],
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 31.39,
                             "hfov": 4.56,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 97,
                                "width": 93,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.8
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_6299ACD2_7A1E_E504_41C7_E0F7ACD35724",
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D, this.camera_646D13CD_7A16_231D_4193_50CD2C8687A7); this.mainPlayList.set('selectedIndex', 8)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 5.32,
                             "yaw": 64.61,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 59,
                                "width": 49,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -16.12
                            }
                           ],
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 64.61,
                             "hfov": 5.32,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 119,
                                "width": 98,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -16.12
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_613A98CF_7A15_ED17_41D8_8E68451820A3",
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33, this.camera_647543F8_7A16_2304_41D9_DCD1F9B190F7); this.mainPlayList.set('selectedIndex', 6)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "hfov": 7.2,
                             "yaw": -168.9,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 73,
                                "width": 66,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_3_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -15.74
                            }
                           ],
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -168.9,
                             "hfov": 7.2,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 146,
                                "width": 133,
                                "url": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -15.74
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_t.jpg"
                        }
                       ],
                       "hfov": 360,
                       "hfovMin": 60,
                       "vfov": 180,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "frames": [
                           {
                            "stereoSphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 6434,
                               "width": 6434,
                               "url": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 4002,
                               "width": 4002,
                               "url": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_62CFC9B7_7A1E_6F0D_41CF_7C7AAE2CC8EF",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_728B8657_79EE_E50C_41C0_D09B63D017E9, this.camera_65E63583_7A16_2705_41BC_04590CA030E1); this.mainPlayList.set('selectedIndex', 7)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 5.23,
                                "yaw": 7.07,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 57,
                                   "width": 56,
                                   "url": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -33.85
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 7.07,
                                "hfov": 5.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 115,
                                   "width": 112,
                                   "url": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -33.85
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_634A3402_7A1E_6507_41D2_EDA28063A7C0",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC, this.camera_65D7E578_7A16_2703_41D0_2AEC600E1AC2); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 7.85,
                                "yaw": 158.27,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 70,
                                   "url": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -7.58
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 158.27,
                                "hfov": 7.85,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 149,
                                   "width": 141,
                                   "url": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -7.58
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_t.jpg"
                           }
                          ],
                          "hfov": 360,
                          "hfovMin": 60,
                          "vfov": 180,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC",
                            "distance": 1,
                            "yaw": 158.27,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 64.61
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "stereoSphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 6434,
                                  "width": 6434,
                                  "url": "media/panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 4002,
                                  "width": 4002,
                                  "url": "media/panorama_728B8657_79EE_E50C_41C0_D09B63D017E9.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_630D1203_7A1E_1D05_41DB_648897E3A042",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D, this.camera_5A12E5A4_7A16_2703_41D8_A20C787D7CF7); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 4,
                                   "yaw": 168.2,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 40,
                                      "width": 40,
                                      "url": "media/panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -29.33
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 168.2,
                                   "hfov": 4,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 80,
                                      "width": 81,
                                      "url": "media/panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -29.33
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_t.jpg"
                              }
                             ],
                             "hfov": 360,
                             "hfovMin": 60,
                             "vfov": 180,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D",
                               "distance": 1,
                               "yaw": 168.2,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 7.07
                              }
                             ],
                             "partial": false,
                             "id": "panorama_728B8657_79EE_E50C_41C0_D09B63D017E9",
                             "thumbnailUrl": "media/panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_t.jpg",
                             "pitch": 0,
                             "label": "br22",
                             "hfovMax": 120,
                             "class": "Panorama"
                            },
                            "distance": 1,
                            "yaw": 7.07,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 168.2
                           }
                          ],
                          "partial": false,
                          "id": "panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D",
                          "thumbnailUrl": "media/panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_t.jpg",
                          "pitch": 0,
                          "label": "brbr",
                          "hfovMax": 120,
                          "class": "Panorama"
                         },
                         "distance": 1,
                         "yaw": 64.61,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 158.27
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "stereoSphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 6434,
                               "width": 6434,
                               "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 4002,
                               "width": 4002,
                               "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_697D177D_79FE_23FD_41DD_49BD86EB7A92",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC, this.camera_64FEC49A_7A16_2507_416B_D92025EDAAD4); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 3.98,
                                "yaw": 174.81,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 51,
                                   "width": 39,
                                   "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -25.67
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 174.81,
                                "hfov": 3.98,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 102,
                                   "width": 78,
                                   "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -25.67
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_692EAFFC_79FE_2303_41D3_374CAF0AE264",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D, this.camera_64EFD484_7A16_2503_41DD_F78E9C9D1360); this.mainPlayList.set('selectedIndex', 11)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 5.71,
                                "yaw": 71.21,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 70,
                                   "width": 59,
                                   "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -30.34
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 71.21,
                                "hfov": 5.71,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 141,
                                   "width": 118,
                                   "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -30.34
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_6BD6423B_79F2_1D04_419C_D7D2362EB3E3",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B, this.camera_64DD746F_7A16_251C_41D8_2AE15D31C612); this.mainPlayList.set('selectedIndex', 12)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 4.45,
                                "yaw": 7.94,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 54,
                                   "width": 51,
                                   "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_0_HS_2_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -38.78
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 7.94,
                                "hfov": 4.45,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 109,
                                   "width": 102,
                                   "url": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -38.78
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_t.jpg"
                           }
                          ],
                          "hfov": 360,
                          "hfovMin": 60,
                          "vfov": 180,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "frames": [
                              {
                               "stereoSphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 6434,
                                  "width": 6434,
                                  "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 4002,
                                  "width": 4002,
                                  "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_682D5AD4_79F2_2D03_41DB_0595588AB9F6",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF, this.camera_6496341F_7A16_253D_41D5_FDFA21AE28F8); this.mainPlayList.set('selectedIndex', 18)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 6.06,
                                   "yaw": 45,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 71,
                                      "width": 65,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -33.95
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 45,
                                   "hfov": 6.06,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 142,
                                      "width": 130,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -33.95
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_6B0254C3_79F6_2504_41DB_3EE66AE64935",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE, this.camera_64A13434_7A16_2503_41CF_7566892BE113); this.mainPlayList.set('selectedIndex', 13)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 6.11,
                                   "yaw": 0.73,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 68,
                                      "width": 59,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_1_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -24.03
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 0.73,
                                   "hfov": 6.11,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 137,
                                      "width": 119,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -24.03
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_6CA92DCA_7A16_6707_41DA_9784EC299D3B",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_72035E26_79F2_250F_41D5_20362BE1B387, this.camera_64B3944A_7A16_2507_41DB_7BD780EAAAC8); this.mainPlayList.set('selectedIndex', 15)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 4.01,
                                   "yaw": 24.34,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 45,
                                      "width": 36,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -13.87
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 24.34,
                                   "hfov": 4.01,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 90,
                                      "width": 73,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -13.87
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_6279D710_7A12_6303_4178_3C130D9B3710",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F, this.camera_64C2B45A_7A16_2507_41CC_3E37648704D0); this.mainPlayList.set('selectedIndex', 10)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 4.53,
                                   "yaw": -170.5,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 43,
                                      "width": 44,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_3_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -25.12
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -170.5,
                                   "hfov": 4.53,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 87,
                                      "width": 89,
                                      "url": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_0_HS_3_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -25.12
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_t.jpg"
                              }
                             ],
                             "hfov": 360,
                             "hfovMin": 60,
                             "vfov": 180,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "stereoSphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "width": 6434,
                                     "url": "media/panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 4002,
                                     "width": 4002,
                                     "url": "media/panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_6BBEBC56_79F2_250C_41D7_0B346D7C0FD2",
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B, this.camera_643F136B_7A16_2305_41C6_1ED5702AF64D); this.mainPlayList.set('selectedIndex', 12)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "hfov": 4.68,
                                      "yaw": -175.55,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 59,
                                         "width": 47,
                                         "url": "media/panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -28.05
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -175.55,
                                      "hfov": 4.68,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 118,
                                         "width": 94,
                                         "url": "media/panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -28.05
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_t.jpg"
                                 }
                                ],
                                "hfov": 360,
                                "hfovMin": 60,
                                "vfov": 180,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B",
                                  "distance": 1,
                                  "yaw": -175.55,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 45
                                 }
                                ],
                                "partial": false,
                                "id": "panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF",
                                "thumbnailUrl": "media/panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_t.jpg",
                                "pitch": 0,
                                "label": "janki_1010 - Panorama",
                                "hfovMax": 120,
                                "class": "Panorama"
                               },
                               "distance": 1,
                               "yaw": 45,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -175.55
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "stereoSphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "width": 6434,
                                     "url": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 4002,
                                     "width": 4002,
                                     "url": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_6CFDC5A9_79F2_2705_41DB_9DB68864F470",
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B, this.camera_6537A4FB_7A16_2505_41C6_96AF459BF141); this.mainPlayList.set('selectedIndex', 12)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "hfov": 11.76,
                                      "yaw": 168.24,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 106,
                                         "width": 109,
                                         "url": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -16.64
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 168.24,
                                      "hfov": 11.76,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 213,
                                         "width": 219,
                                         "url": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -16.64
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_6A46485F_79F2_ED3D_41D8_A2A506173442",
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_7210FED8_79F2_6503_41C1_54C426308C41, this.camera_6541850E_7A16_271F_4165_94AE9C7A4076); this.mainPlayList.set('selectedIndex', 14)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "hfov": 5.13,
                                      "yaw": -1.76,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 55,
                                         "width": 49,
                                         "url": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -21.91
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -1.76,
                                      "hfov": 5.13,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 110,
                                         "width": 98,
                                         "url": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -21.91
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_t.jpg"
                                 }
                                ],
                                "hfov": 360,
                                "hfovMin": 60,
                                "vfov": 180,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B",
                                  "distance": 1,
                                  "yaw": 168.24,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 0.73
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "stereoSphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "width": 6434,
                                        "url": "media/panorama_7210FED8_79F2_6503_41C1_54C426308C41_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 4002,
                                        "width": 4002,
                                        "url": "media/panorama_7210FED8_79F2_6503_41C1_54C426308C41.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_6A137F5C_79F2_6303_41DB_C37CD7E902BE",
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE, this.camera_659E8544_7A16_2703_41B7_DE9D8AF77749); this.mainPlayList.set('selectedIndex', 13)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "hfov": 4.35,
                                         "yaw": 153.09,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 53,
                                            "width": 44,
                                            "url": "media/panorama_7210FED8_79F2_6503_41C1_54C426308C41_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -28.36
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 153.09,
                                         "hfov": 4.35,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 106,
                                            "width": 88,
                                            "url": "media/panorama_7210FED8_79F2_6503_41C1_54C426308C41_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -28.36
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_7210FED8_79F2_6503_41C1_54C426308C41_t.jpg"
                                    }
                                   ],
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "vfov": 180,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE",
                                     "distance": 1,
                                     "yaw": 153.09,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -1.76
                                    }
                                   ],
                                   "partial": false,
                                   "id": "panorama_7210FED8_79F2_6503_41C1_54C426308C41",
                                   "thumbnailUrl": "media/panorama_7210FED8_79F2_6503_41C1_54C426308C41_t.jpg",
                                   "pitch": 0,
                                   "label": "janki_66 - Panorama",
                                   "hfovMax": 120,
                                   "class": "Panorama"
                                  },
                                  "distance": 1,
                                  "yaw": -1.76,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 153.09
                                 }
                                ],
                                "partial": false,
                                "id": "panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE",
                                "thumbnailUrl": "media/panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_t.jpg",
                                "pitch": 0,
                                "label": "janki_55 - Panorama",
                                "hfovMax": 120,
                                "class": "Panorama"
                               },
                               "distance": 1,
                               "yaw": 0.73,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 168.24
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "stereoSphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 6434,
                                     "width": 6434,
                                     "url": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 4002,
                                     "width": 4002,
                                     "url": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_6DCB03F1_79F2_6304_41C8_A1A6B11D9BC7",
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB, this.camera_656D6524_7A16_2703_41C5_0FA78C6C141F); this.mainPlayList.set('selectedIndex', 16)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "hfov": 4.19,
                                      "yaw": -78.75,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 42,
                                         "width": 42,
                                         "url": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -26.9
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -78.75,
                                      "hfov": 4.19,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 84,
                                         "width": 84,
                                         "url": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -26.9
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_6D7DA031_79EE_1D05_41C0_5A58DECF835A",
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B, this.camera_65509519_7A16_2705_41D4_9406BB3073C7); this.mainPlayList.set('selectedIndex', 12)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "hfov": 8.98,
                                      "yaw": -176.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 93,
                                         "width": 82,
                                         "url": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -14.63
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -176.38,
                                      "hfov": 8.98,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 187,
                                         "width": 165,
                                         "url": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -14.63
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_t.jpg"
                                 }
                                ],
                                "hfov": 360,
                                "hfovMin": 60,
                                "vfov": 180,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B",
                                  "distance": 1,
                                  "yaw": -176.38,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 24.34
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "stereoSphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 6434,
                                        "width": 6434,
                                        "url": "media/panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 4002,
                                        "width": 4002,
                                        "url": "media/panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_6D9D40B7_79F2_1D0D_41D3_00236234201B",
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_72035E26_79F2_250F_41D5_20362BE1B387, this.camera_65C4956E_7A16_271F_41D0_EF961E877CF4); this.mainPlayList.set('selectedIndex', 15)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "hfov": 5.87,
                                         "yaw": -170.1,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 66,
                                            "width": 57,
                                            "url": "media/panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -24.2
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -170.1,
                                         "hfov": 5.87,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 133,
                                            "width": 115,
                                            "url": "media/panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -24.2
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_t.jpg"
                                    }
                                   ],
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "vfov": 180,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_72035E26_79F2_250F_41D5_20362BE1B387",
                                     "distance": 1,
                                     "yaw": -170.1,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -78.75
                                    }
                                   ],
                                   "partial": false,
                                   "id": "panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB",
                                   "thumbnailUrl": "media/panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_t.jpg",
                                   "pitch": 0,
                                   "label": "janki_88 - Panorama",
                                   "hfovMax": 120,
                                   "class": "Panorama"
                                  },
                                  "distance": 1,
                                  "yaw": -78.75,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -170.1
                                 }
                                ],
                                "partial": false,
                                "id": "panorama_72035E26_79F2_250F_41D5_20362BE1B387",
                                "thumbnailUrl": "media/panorama_72035E26_79F2_250F_41D5_20362BE1B387_t.jpg",
                                "pitch": 0,
                                "label": "janki_77 - Panorama",
                                "hfovMax": 120,
                                "class": "Panorama"
                               },
                               "distance": 1,
                               "yaw": 24.34,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -176.38
                              },
                              {
                               "panorama": "this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F",
                               "distance": 1,
                               "yaw": -170.5,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 7.94
                              }
                             ],
                             "partial": false,
                             "id": "panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B",
                             "thumbnailUrl": "media/panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_t.jpg",
                             "pitch": 0,
                             "label": "janki_44 - Panorama",
                             "hfovMax": 120,
                             "class": "Panorama"
                            },
                            "distance": 1,
                            "yaw": 7.94,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -170.5
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "stereoSphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 6434,
                                  "width": 6434,
                                  "url": "media/panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 4002,
                                  "width": 4002,
                                  "url": "media/panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_689FE355_79FE_230D_41D5_C5EF03170612",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F, this.camera_65A8654E_7A16_271F_41D3_ED86E077B7D6); this.mainPlayList.set('selectedIndex', 10)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "hfov": 3.79,
                                   "yaw": 148.05,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 40,
                                      "width": 39,
                                      "url": "media/panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -32.04
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 148.05,
                                   "hfov": 3.79,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 81,
                                      "width": 79,
                                      "url": "media/panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -32.04
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_t.jpg"
                              }
                             ],
                             "hfov": 360,
                             "hfovMin": 60,
                             "vfov": 180,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F",
                               "distance": 1,
                               "yaw": 148.05,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 71.21
                              }
                             ],
                             "partial": false,
                             "id": "panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D",
                             "thumbnailUrl": "media/panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_t.jpg",
                             "pitch": 0,
                             "label": "janki_33 - Panorama",
                             "hfovMax": 120,
                             "class": "Panorama"
                            },
                            "distance": 1,
                            "yaw": 71.21,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 148.05
                           },
                           {
                            "panorama": "this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC",
                            "distance": 1,
                            "yaw": 174.81,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 31.39
                           }
                          ],
                          "partial": false,
                          "id": "panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F",
                          "thumbnailUrl": "media/panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_t.jpg",
                          "pitch": 0,
                          "label": "janki_22 - Panorama",
                          "hfovMax": 120,
                          "class": "Panorama"
                         },
                         "distance": 1,
                         "yaw": 31.39,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 174.81
                        },
                        {
                         "panorama": "this.panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33",
                         "distance": 1,
                         "yaw": -168.9,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 115.47
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "stereoSphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 6434,
                               "width": 6434,
                               "url": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 4002,
                               "width": 4002,
                               "url": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_6B662AE7_79F6_2D0D_41D3_B36B6B5EA791",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "rollOver": "this.mainPlayList.set('selectedIndex', 10)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 6.67,
                                "yaw": 116.01,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 73,
                                   "width": 70,
                                   "url": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -32.25
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 116.01,
                                "hfov": 6.67,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 146,
                                   "width": 141,
                                   "url": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -32.25
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_6B7BB622_79F6_2507_41C2_1BAD9AFA8EFA",
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC, this.camera_651B04C1_7A16_2505_41D3_3AC0E8D89B88); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "hfov": 4.76,
                                "yaw": -169.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 54,
                                   "width": 52,
                                   "url": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_0_HS_1_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -35.74
                               }
                              ],
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -169.23,
                                "hfov": 4.76,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 109,
                                   "width": 104,
                                   "url": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -35.74
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_t.jpg"
                           }
                          ],
                          "hfov": 360,
                          "hfovMin": 60,
                          "vfov": 180,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC",
                            "distance": 1,
                            "yaw": -169.23,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -24.89
                           }
                          ],
                          "partial": false,
                          "id": "panorama_7205CC80_79F2_2503_41B9_8789A6425C63",
                          "thumbnailUrl": "media/panorama_7205CC80_79F2_2503_41B9_8789A6425C63_t.jpg",
                          "pitch": 0,
                          "label": "janki_99 - Panorama",
                          "hfovMax": 120,
                          "class": "Panorama"
                         },
                         "distance": 1,
                         "yaw": -24.89,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -169.23
                        }
                       ],
                       "partial": false,
                       "id": "panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC",
                       "thumbnailUrl": "media/panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_t.jpg",
                       "pitch": 0,
                       "label": "janki_11 - Panorama",
                       "hfovMax": 120,
                       "class": "Panorama"
                      },
                      "distance": 1,
                      "yaw": 115.47,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -168.9
                     },
                     {
                      "panorama": "this.panorama_737DE50C_7994_4574_41C6_7AC368E80551",
                      "distance": 1,
                      "yaw": 169.09,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -17.51
                     }
                    ],
                    "partial": false,
                    "id": "panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33",
                    "thumbnailUrl": "media/panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_t.jpg",
                    "pitch": 0,
                    "label": "srs_88 - Panorama",
                    "hfovMax": 120,
                    "class": "Panorama"
                   },
                   "distance": 1,
                   "yaw": -17.51,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 169.09
                  },
                  {
                   "panorama": "this.panorama_7364E645_7994_47F7_41BF_B101CEA9F286",
                   "distance": 1,
                   "yaw": -163.78,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -76.83
                  }
                 ],
                 "partial": false,
                 "id": "panorama_737DE50C_7994_4574_41C6_7AC368E80551",
                 "thumbnailUrl": "media/panorama_737DE50C_7994_4574_41C6_7AC368E80551_t.jpg",
                 "pitch": 0,
                 "label": "srs_66 - Panorama",
                 "hfovMax": 120,
                 "class": "Panorama"
                },
                "distance": 1,
                "yaw": -76.83,
                "class": "AdjacentPanorama",
                "backwardYaw": -163.78
               }
              ],
              "partial": false,
              "id": "panorama_7364E645_7994_47F7_41BF_B101CEA9F286",
              "thumbnailUrl": "media/panorama_7364E645_7994_47F7_41BF_B101CEA9F286_t.jpg",
              "pitch": 0,
              "label": "srs_55 - Panorama",
              "hfovMax": 120,
              "class": "Panorama"
             },
             "distance": 1,
             "yaw": 15.18,
             "class": "AdjacentPanorama",
             "backwardYaw": 176.19
            }
           ],
           "partial": false,
           "id": "panorama_73556678_7995_C79D_41C8_613213525FFB",
           "thumbnailUrl": "media/panorama_73556678_7995_C79D_41C8_613213525FFB_t.jpg",
           "pitch": 0,
           "label": "srs_44 - Panorama",
           "hfovMax": 120,
           "class": "Panorama"
          },
          "distance": 1,
          "yaw": 8.5,
          "class": "AdjacentPanorama",
          "backwardYaw": 161.72
         },
         {
          "panorama": "this.panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3",
          "distance": 1,
          "yaw": 134.07,
          "class": "AdjacentPanorama",
          "backwardYaw": -12.28
         }
        ],
        "partial": false,
        "id": "panorama_735C57B7_7995_C493_41B4_7029EF95CC7A",
        "thumbnailUrl": "media/panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_t.jpg",
        "pitch": 0,
        "label": "srs_33 - Panorama",
        "hfovMax": 120,
        "class": "Panorama"
       },
       "distance": 1,
       "yaw": -12.28,
       "class": "AdjacentPanorama",
       "backwardYaw": 134.07
      },
      {
       "panorama": "this.panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E",
       "distance": 1,
       "yaw": -175.56,
       "class": "AdjacentPanorama",
       "backwardYaw": -14.06
      }
     ],
     "partial": false,
     "id": "panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3",
     "thumbnailUrl": "media/panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_t.jpg",
     "pitch": 0,
     "label": "srs_22 - Panorama",
     "hfovMax": 120,
     "class": "Panorama"
    },
    "distance": 1,
    "yaw": -14.06,
    "class": "AdjacentPanorama",
    "backwardYaw": -175.56
   }
  ],
  "partial": false,
  "id": "panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E",
  "thumbnailUrl": "media/panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_t.jpg",
  "pitch": 0,
  "label": "srs_11 - Panorama",
  "hfovMax": 120,
  "class": "Panorama"
 },
 {
  "buttonPause": {
   "borderSize": 0,
   "mode": "toggle",
   "width": 40,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "height": 40,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "data": {
    "name": "Button37505"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "buttonMoveUp": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "mode": "push",
   "width": 32,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "height": 32,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "data": {
    "name": "Button37504"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonMoveDown": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "mode": "push",
   "width": 32,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "height": 32,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "data": {
    "name": "Button37506"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "buttonPlayLeft": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "mode": "push",
   "width": 40,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "height": 40,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "data": {
    "name": "Button37501"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "buttonMoveLeft": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "mode": "push",
   "width": 32,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "height": 32,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "data": {
    "name": "Button37502"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "mode": "push",
   "width": 32,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "height": 32,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "data": {
    "name": "Button37499"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "buttonRestart": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "mode": "push",
   "width": 40,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "height": 40,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "data": {
    "name": "Button37500"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeEnabled": true,
  "gyroscopeVerticalDraggingEnabled": false,
  "buttonMoveRight": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "mode": "push",
   "width": 32,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "height": 32,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "data": {
    "name": "Button37507"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "buttonZoomIn": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "mode": "push",
   "width": 32,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "height": 32,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "data": {
    "name": "Button37510"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  },
  "preloadEnabled": false,
  "buttonPlayRight": {
   "borderSize": 0,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "mode": "push",
   "width": 40,
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "height": 40,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "paddingLeft": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "minHeight": 0,
   "paddingRight": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "cursor": "hand",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "data": {
    "name": "Button37508"
   },
   "paddingBottom": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_735C57B7_7995_C493_41B4_7029EF95CC7A",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_73556678_7995_C79D_41C8_613213525FFB",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_73556678_7995_C79D_41C8_613213525FFB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7364E645_7994_47F7_41BF_B101CEA9F286",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7364E645_7994_47F7_41BF_B101CEA9F286_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_737DE50C_7994_4574_41C6_7AC368E80551",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_737DE50C_7994_4574_41C6_7AC368E80551_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_728B8657_79EE_E50C_41C0_D09B63D017E9",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7210FED8_79F2_6503_41C1_54C426308C41",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7210FED8_79F2_6503_41C1_54C426308C41_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_72035E26_79F2_250F_41D5_20362BE1B387",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_72035E26_79F2_250F_41D5_20362BE1B387_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7205CC80_79F2_2503_41B9_8789A6425C63",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7205CC80_79F2_2503_41B9_8789A6425C63_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF",
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_camera",
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_730078C7_7994_4CF3_41D4_28823DDA7D2E_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_72EA78F7_7994_4C94_41A1_42AEB1ED62D3_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_735C57B7_7995_C493_41B4_7029EF95CC7A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_735C57B7_7995_C493_41B4_7029EF95CC7A_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_73556678_7995_C79D_41C8_613213525FFB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_73556678_7995_C79D_41C8_613213525FFB_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7364E645_7994_47F7_41BF_B101CEA9F286",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_7364E645_7994_47F7_41BF_B101CEA9F286_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_737DE50C_7994_4574_41C6_7AC368E80551",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_737DE50C_7994_4574_41C6_7AC368E80551_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_737EF3FD_7994_BC94_41C6_D6134DAF0E33_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_728B8657_79EE_E50C_41C0_D09B63D017E9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_728B8657_79EE_E50C_41C0_D09B63D017E9_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_75B78565_79EE_270D_41B8_AFC18F8DCC0D_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_7254B3D4_79EE_630C_41CE_FAA9D0545EBC_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_720ED2D5_79EE_1D0D_41DC_9D9E0286305F_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_721B11F6_79EE_1F0F_41AD_5B6BEEB3F11D_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_723480C9_79F2_1D05_41DC_CAFFDBD40F3B_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_7238EFB5_79F2_230D_41DB_B392E572E9DE_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7210FED8_79F2_6503_41C1_54C426308C41",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_7210FED8_79F2_6503_41C1_54C426308C41_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_72035E26_79F2_250F_41D5_20362BE1B387",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_72035E26_79F2_250F_41D5_20362BE1B387_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_7221CD6B_79F2_E705_41B4_D5D472B771BB_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7205CC80_79F2_2503_41B9_8789A6425C63",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_7205CC80_79F2_2503_41B9_8789A6425C63_camera",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
    "camera": "this.panorama_726D7B38_79F2_6303_41B1_3C2EC7CFE4FF_camera",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_643F136B_7A16_2305_41C6_1ED5702AF64D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -135,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6435237C_7A16_2303_4198_3B4937BB450D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -164.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6442F391_7A16_2305_41C7_586F9CAE7609",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 16.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_645873A7_7A16_230D_41DD_F2054970113E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 11.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6456A3B7_7A16_230D_41DD_E93C54BD3994",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 162.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_646D13CD_7A16_231D_4193_50CD2C8687A7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -21.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6479C3E2_7A16_2304_41DC_A6BC65DB6289",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -5.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_647543F8_7A16_2304_41D9_DCD1F9B190F7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -64.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64847409_7A16_2505_41C2_5CBA39DEB98F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 10.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6496341F_7A16_253D_41D5_FDFA21AE28F8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 4.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64A13434_7A16_2503_41CF_7566892BE113",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -11.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64B3944A_7A16_2507_41DB_7BD780EAAAC8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 3.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64C2B45A_7A16_2507_41CC_3E37648704D0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -172.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64DD746F_7A16_251C_41D8_2AE15D31C612",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 9.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64EFD484_7A16_2503_41DD_F78E9C9D1360",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -31.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_64FEC49A_7A16_2507_416B_D92025EDAAD4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -148.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_650B64AB_7A16_2505_41DD_BEE2A127392D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 4.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_651B04C1_7A16_2505_41D3_3AC0E8D89B88",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 155.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_651444D6_7A16_250F_41B6_AD55AFC958B1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -10.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_652764E6_7A16_250F_41CE_C966304FFBEF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 103.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6537A4FB_7A16_2505_41C6_96AF459BF141",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_6541850E_7A16_271F_4165_94AE9C7A4076",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -26.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65509519_7A16_2705_41D4_9406BB3073C7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -155.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_656D6524_7A16_2703_41C5_0FA78C6C141F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 9.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_657D852F_7A16_271D_41D1_E8C0F68C1E0B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -45.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_658CA539_7A16_2705_41A3_500034FAB227",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 165.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_659E8544_7A16_2703_41B7_DE9D8AF77749",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 178.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65A8654E_7A16_271F_41D3_ED86E077B7D6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -108.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65BA7559_7A16_2705_41D9_6AF886C04D69",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -18.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65CAB564_7A16_2703_41D9_6FBD0FCF40D4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 167.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65C4956E_7A16_271F_41D0_EF961E877CF4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 101.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65D7E578_7A16_2703_41D0_2AEC600E1AC2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -115.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65E63583_7A16_2705_41BC_04590CA030E1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -11.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_65F1958E_7A16_271F_41C9_8A0F237CC977",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -171.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_5A00D599_7A16_2705_41D9_242C66C0B2F7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -3.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_5A12E5A4_7A16_2703_41D8_A20C787D7CF7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -172.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "data": {
   "label": "Depard - You Make Me Smile"
  },
  "id": "audio_6DE2DD09_79ED_C57C_41D3_1DF615517E03",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_6DE2DD09_79ED_C57C_41D3_1DF615517E03.mp3",
   "oggUrl": "media/audio_6DE2DD09_79ED_C57C_41D3_1DF615517E03.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "progressBarBorderRadius": 4,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderSize": 0,
  "progressRight": 10,
  "playbackBarHeadWidth": 6,
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderSize": 2,
  "playbackBarHeadBorderColor": "#000000",
  "transitionMode": "blending",
  "toolTipFontSize": 12,
  "playbackBarRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipShadowSpread": 0,
  "shadow": false,
  "playbackBarHeadBorderSize": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontColor": "#606060",
  "toolTipTextShadowBlurRadius": 3,
  "paddingBottom": 0,
  "progressOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "borderRadius": 0,
  "progressLeft": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderRadius": 4,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipDisplayTime": 600,
  "height": "100%",
  "width": "100%",
  "progressBottom": 1,
  "toolTipPaddingRight": 6,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "toolTipOpacity": 1,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "minWidth": 100,
  "playbackBarLeft": 0,
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBorderSize": 2,
  "playbackBarOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "top": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "toolTipShadowColor": "#333333",
  "playbackBarBottom": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingBottom": 4,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBorderRadius": 4,
  "progressBarBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressHeight": 20,
  "playbackBarHeight": 20,
  "playbackBarHeadOpacity": 1,
  "left": 0,
  "progressBarBorderSize": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "transitionDuration": 500,
  "playbackBarProgressBorderSize": 0
 },
 {
  "creationPolicy": "delayed",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "scrollBarMargin": 2,
  "width": "100%",
  "height": 142,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "layout": "horizontal",
  "paddingTop": 0,
  "minWidth": 1,
  "minHeight": 1,
  "paddingRight": 0,
  "class": "Container",
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "scrollBarColor": "#000000",
  "left": "0%",
  "data": {
   "name": "Container44746"
  },
  "paddingBottom": 0,
  "borderRadius": 0,
  "children": [
   {
    "creationPolicy": "delayed",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarMargin": 2,
    "width": 360,
    "verticalAlign": "middle",
    "height": "95.07%",
    "paddingLeft": 0,
    "minHeight": 20,
    "paddingTop": 0,
    "minWidth": 360,
    "layout": "horizontal",
    "paddingRight": 0,
    "class": "Container",
    "gap": 4,
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "shadow": false,
    "scrollBarOpacity": 0.5,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "scrollBarColor": "#000000",
    "data": {
     "name": "Container37498"
    },
    "paddingBottom": 0,
    "borderRadius": 0,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "creationPolicy": "delayed",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "scrollBarMargin": 2,
      "width": 40,
      "verticalAlign": "middle",
      "height": "100%",
      "paddingLeft": 0,
      "minHeight": 20,
      "layout": "vertical",
      "paddingTop": 0,
      "minWidth": 20,
      "paddingRight": 0,
      "class": "Container",
      "gap": 4,
      "scrollBarVisible": "rollOver",
      "horizontalAlign": "center",
      "shadow": false,
      "scrollBarOpacity": 0.5,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "scrollBarColor": "#000000",
      "data": {
       "name": "Container37503"
      },
      "paddingBottom": 0,
      "borderRadius": 0,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "contentOpaque": false,
      "overflow": "hidden",
      "backgroundOpacity": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "borderSize": 0,
      "mode": "toggle",
      "width": 40,
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "height": 40,
      "transparencyActive": false,
      "verticalAlign": "middle",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 0,
      "minHeight": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "shadow": false,
      "cursor": "hand",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "data": {
       "name": "Button37509"
      },
      "paddingBottom": 0,
      "borderRadius": 0,
      "backgroundOpacity": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "contentOpaque": false,
    "overflow": "hidden",
    "backgroundOpacity": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "backgroundOpacity": 0
 }
], 
 "start": "this.playAudioList([this.audio_6DE2DD09_79ED_C57C_41D3_1DF615517E03]); this.mainPlayList.set('selectedIndex', 0)",
 "creationPolicy": "delayed",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "verticalAlign": "top",
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "paddingRight": 0,
 "minHeight": 20,
 "class": "Player",
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player43899"
 },
 "paddingBottom": 0,
 "borderRadius": 0
})