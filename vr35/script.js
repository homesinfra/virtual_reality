TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "id": "panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "id": "panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF",
       "yaw": -62.01,
       "backwardYaw": 93.64,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975",
          "yaw": 164.22,
          "backwardYaw": 0.77,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF",
             "yaw": -16.06,
             "backwardYaw": -19.75,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                      "yaw": -125.52,
                      "backwardYaw": 124.86,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                         "yaw": 17.05,
                         "backwardYaw": -38.26,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5",
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D",
                            "yaw": 94.53,
                            "backwardYaw": -101.49,
                            "distance": 1
                           }
                          ],
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_t.jpg",
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
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D, this.camera_93896E6B_9C82_D536_41A1_3A80DBF37FD0); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "id": "overlay_D1EB9B1B_C42A_0EB5_41E5_BFE532BCE288",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 4.82,
                                "yaw": 94.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 61,
                                   "class": "ImageResourceLevel",
                                   "width": 55,
                                   "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -39.11
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
                                "yaw": 94.53,
                                "hfov": 4.82,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 122,
                                   "class": "ImageResourceLevel",
                                   "width": 110,
                                   "url": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -39.11
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "partial": false,
                          "label": "2 DINNING ROOM FORNT OF TV",
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5_t.jpg"
                         },
                         "yaw": -101.49,
                         "backwardYaw": 94.53,
                         "distance": 1
                        }
                       ],
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_t.jpg",
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
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CEB43D09_C47A_0A95_41D6_23BCAFDFFDA5, this.camera_921CBDB3_9C82_D717_41DB_5DD1DB9A0847); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "id": "overlay_D08DE6BA_C42E_07F7_41B5_065765A3A1F8",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.79,
                             "yaw": -101.49,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 52,
                                "class": "ImageResourceLevel",
                                "width": 50,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -32.38
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
                             "yaw": -101.49,
                             "hfov": 4.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 105,
                                "class": "ImageResourceLevel",
                                "width": 101,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -32.38
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
                             "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_920C0DA8_9C82_D731_4172_62EB148E12EA); this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "id": "overlay_D10581FB_C42E_1D75_41DE_7CC6C1E75FF4",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.77,
                             "yaw": 17.05,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 48,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -28.83
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
                             "yaw": 17.05,
                             "hfov": 4.77,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 119,
                                "class": "ImageResourceLevel",
                                "width": 97,
                                "url": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -28.83
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "partial": false,
                       "label": "3 DINNING ROOM SIDE OF TV",
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D_t.jpg"
                      },
                      "yaw": -38.26,
                      "backwardYaw": 17.05,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0",
                         "yaw": -100.16,
                         "backwardYaw": 51.02,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "id": "panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "id": "panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F",
                                      "pitch": 0,
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "hfovMin": 60,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C",
                                        "yaw": -40.22,
                                        "backwardYaw": 24.82,
                                        "distance": 1
                                       }
                                      ],
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_t.jpg",
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
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C, this.camera_91E13C9F_9C82_D50F_41E0_BED21C37F91E); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "id": "overlay_DF8F5674_C4F6_0773_41D0_38CB68C4928A",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 4.31,
                                            "yaw": -40.22,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 47,
                                               "class": "ImageResourceLevel",
                                               "width": 46,
                                               "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -34.8
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
                                            "yaw": -40.22,
                                            "hfov": 4.31,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 94,
                                               "class": "ImageResourceLevel",
                                               "width": 93,
                                               "url": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -34.8
                                           }
                                          ]
                                         }
                                        ]
                                       }
                                      ],
                                      "partial": false,
                                      "label": "33",
                                      "vfov": 180,
                                      "thumbnailUrl": "media/panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F_t.jpg"
                                     },
                                     "yaw": 24.82,
                                     "backwardYaw": -40.22,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                     "yaw": -67.29,
                                     "backwardYaw": 57.97,
                                     "distance": 1
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_t.jpg",
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
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_9253EE09_9C82_D4F2_41E2_3A0B1EE38A51); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "id": "overlay_DD57D166_C4EB_FA9F_41E5_AB2D424F3646",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 4.26,
                                         "yaw": -67.29,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 49,
                                            "class": "ImageResourceLevel",
                                            "width": 41,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -21.99
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
                                         "yaw": -67.29,
                                         "hfov": 4.26,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 98,
                                            "class": "ImageResourceLevel",
                                            "width": 82,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -21.99
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
                                         "click": "this.startPanoramaWithCamera(this.panorama_CF7F623F_C47E_3EEE_41D7_1513CE9C223F, this.camera_9243ADEE_9C82_D70E_419C_E1F9789E4D7F); this.mainPlayList.set('selectedIndex', 21)"
                                        }
                                       ],
                                       "id": "overlay_DF1D5115_C4EA_1AB2_41E3_0BFF2FA0ED8A",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 3.51,
                                         "yaw": 24.82,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 45,
                                            "class": "ImageResourceLevel",
                                            "width": 39,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -36.49
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
                                         "yaw": 24.82,
                                         "hfov": 3.51,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 91,
                                            "class": "ImageResourceLevel",
                                            "width": 78,
                                            "url": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -36.49
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "partial": false,
                                   "label": "22",
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C_t.jpg"
                                  },
                                  "yaw": 57.97,
                                  "backwardYaw": -67.29,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527",
                                  "yaw": -123.53,
                                  "backwardYaw": -130.31,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "id": "panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415",
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F",
                                     "yaw": 29.15,
                                     "backwardYaw": -31.76,
                                     "distance": 1
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_t.jpg",
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
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_9175CD2F_9C82_D70F_41AA_57FF2211E0C5); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "id": "overlay_DD079184_C4EA_1D93_41BA_C0E46DA04358",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 3.71,
                                         "yaw": 29.15,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 49,
                                            "class": "ImageResourceLevel",
                                            "width": 46,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -44.1
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
                                         "yaw": 29.15,
                                         "hfov": 3.71,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 99,
                                            "class": "ImageResourceLevel",
                                            "width": 92,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -44.1
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.showWindow(this.window_8EE9A275_9C6C_D6B1_41C3_FEEEC0D3452F, null, false)"
                                        }
                                       ],
                                       "id": "overlay_8E4F6425_9C13_5251_41D5_F27941D44C94",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.71,
                                         "yaw": 5.68,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 96,
                                            "class": "ImageResourceLevel",
                                            "width": 105,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -25.09
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
                                         "yaw": 5.68,
                                         "hfov": 10.71,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 192,
                                            "class": "ImageResourceLevel",
                                            "width": 211,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -25.09
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "id": "overlay_8F7E5FB2_9C6F_6DB3_4170_D1E08CFCFC78",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.7,
                                         "yaw": -74.03,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 54,
                                            "class": "ImageResourceLevel",
                                            "width": 60,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 9.59
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
                                         "yaw": -74.03,
                                         "hfov": 6.7,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 108,
                                            "class": "ImageResourceLevel",
                                            "width": 121,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 9.59
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "id": "overlay_8F4BA4FD_9C6F_F3B1_4194_424F1EC8140B",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 14.49,
                                         "yaw": -64.58,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "class": "ImageResourceLevel",
                                            "width": 55,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 11.11
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Rs 24000"
                                       },
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -64.58,
                                         "hfov": 14.49,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 76,
                                            "class": "ImageResourceLevel",
                                            "width": 263,
                                            "url": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 11.11
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "partial": false,
                                   "label": "44",
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415_t.jpg"
                                  },
                                  "yaw": -31.76,
                                  "backwardYaw": 29.15,
                                  "distance": 1
                                 }
                                ],
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_t.jpg",
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
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527, this.camera_9274FE3A_9C82_D516_41D5_0B136E02C02B); this.mainPlayList.set('selectedIndex', 8)"
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
                                      "yaw": -123.53,
                                      "hfov": 4.09,
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF488BE6_C47E_0D9E_41DF_9B3CE88D8415, this.camera_93871E55_9C82_D512_41D0_A271B14F8E65); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "id": "overlay_DDCE8C7D_C4EA_0B6D_41DF_65D4D9B54FF0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 3.51,
                                      "yaw": -31.76,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 40,
                                         "class": "ImageResourceLevel",
                                         "width": 37,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -33.3
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
                                      "yaw": -31.76,
                                      "hfov": 3.51,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 81,
                                         "class": "ImageResourceLevel",
                                         "width": 74,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -33.3
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_CF8008E8_C47E_0B93_41DA_BA08E452269C, this.camera_9265DE1F_9C82_D50E_41C7_17F953CD6C93); this.mainPlayList.set('selectedIndex', 20)"
                                     }
                                    ],
                                    "id": "overlay_DE6893B5_C4EA_1DFD_41D2_E8844ABFD486",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 3.57,
                                      "yaw": 57.97,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 37,
                                         "class": "ImageResourceLevel",
                                         "width": 34,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -23.02
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
                                      "yaw": 57.97,
                                      "hfov": 3.57,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 75,
                                         "class": "ImageResourceLevel",
                                         "width": 69,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -23.02
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.showWindow(this.window_8E702AAE_9C14_D653_41D1_5EBC506632A1, null, false)"
                                     }
                                    ],
                                    "id": "overlay_8E694019_9C17_5271_41CA_25B45E952094",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 17.29,
                                      "yaw": 9.27,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 109,
                                         "class": "ImageResourceLevel",
                                         "width": 166,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_3_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -21.62
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
                                      "yaw": 9.27,
                                      "hfov": 17.29,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 219,
                                         "class": "ImageResourceLevel",
                                         "width": 332,
                                         "url": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -21.62
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "partial": false,
                                "label": "11",
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_CE801F3F_C47E_06ED_41C0_360D7697530F_t.jpg"
                               },
                               "yaw": -130.31,
                               "backwardYaw": -123.53,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                               "yaw": 101.77,
                               "backwardYaw": 146.1,
                               "distance": 1
                              }
                             ],
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_t.jpg",
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
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_92FD7D9D_9C82_D713_41CA_B27184D63DCE); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "id": "overlay_DA1F5AD1_C4FA_0FB5_41DC_13E4B8C76CE8",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.5,
                                   "yaw": 101.77,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 55,
                                      "class": "ImageResourceLevel",
                                      "width": 52,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -40.38
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
                                   "yaw": 101.77,
                                   "hfov": 4.5,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 110,
                                      "class": "ImageResourceLevel",
                                      "width": 105,
                                      "url": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -40.38
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_CE801F3F_C47E_06ED_41C0_360D7697530F, this.camera_92EB4D92_9C82_D711_41C3_FF5540035FD6); this.mainPlayList.set('selectedIndex', 19)"
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
                                   "yaw": -130.31,
                                   "hfov": 3.9,
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
                               ]
                              }
                             ],
                             "partial": false,
                             "label": "3 FAMILY LOUNGE 1",
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527_t.jpg"
                            },
                            "yaw": 146.1,
                            "backwardYaw": 101.77,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                                  "yaw": 28.93,
                                  "backwardYaw": -72.92,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "id": "panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F",
                                   "pitch": 0,
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52",
                                     "yaw": 68.7,
                                     "backwardYaw": 107.06,
                                     "distance": 1
                                    }
                                   ],
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_t.jpg",
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
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52, this.camera_91232CE2_9C82_D531_41D8_80EAA6F0A5D0); this.mainPlayList.set('selectedIndex', 7)"
                                        }
                                       ],
                                       "id": "overlay_D8656E23_C4FE_0695_41D9_50041DC13143",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 4.46,
                                         "yaw": 68.7,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 54,
                                            "class": "ImageResourceLevel",
                                            "width": 47,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -33.05
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
                                         "yaw": 68.7,
                                         "hfov": 4.46,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 109,
                                            "class": "ImageResourceLevel",
                                            "width": 95,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -33.05
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.showWindow(this.window_8C01A5B2_9C34_DDB3_41B0_0510C37DE06E, null, false)"
                                        }
                                       ],
                                       "id": "overlay_9373A37E_9C35_36B3_41C2_2424CF9636F4",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.37,
                                         "yaw": -18.26,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 130,
                                            "class": "ImageResourceLevel",
                                            "width": 124,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -35.51
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
                                         "yaw": -18.26,
                                         "hfov": 11.37,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 261,
                                            "class": "ImageResourceLevel",
                                            "width": 249,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -35.51
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.showWindow(this.window_8D3F53F7_9C34_D5B1_41E0_BF7D44DA2AE2, null, false)"
                                        }
                                       ],
                                       "id": "overlay_88D7BFBF_9C35_6DB1_41AF_DAA8B7102773",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 19.06,
                                         "yaw": -160.99,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 118,
                                            "class": "ImageResourceLevel",
                                            "width": 200,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -41.57
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
                                         "yaw": -160.99,
                                         "hfov": 19.06,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 268,
                                            "class": "ImageResourceLevel",
                                            "width": 455,
                                            "url": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -41.57
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "partial": false,
                                   "label": "1 FAMILY LOUNGE ( CENTER TABLE)",
                                   "vfov": 180,
                                   "thumbnailUrl": "media/panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F_t.jpg"
                                  },
                                  "yaw": 107.06,
                                  "backwardYaw": 68.7,
                                  "distance": 1
                                 }
                                ],
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_t.jpg",
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
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_91F44CAB_9C82_D537_41D1_AB916C916138); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "id": "overlay_D8D0A3ED_C4FA_3D6D_41E0_02E42DEBE6F0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.91,
                                      "yaw": 28.93,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 72,
                                         "class": "ImageResourceLevel",
                                         "width": 59,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -42.36
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
                                      "yaw": 28.93,
                                      "hfov": 4.91,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 145,
                                         "class": "ImageResourceLevel",
                                         "width": 118,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -42.36
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
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEF217EF_C476_056D_41E5_D89FAC060E6F, this.camera_91FD1CB6_9C82_D511_41CA_3A99A05B4966); this.mainPlayList.set('selectedIndex', 6)"
                                     }
                                    ],
                                    "id": "overlay_D9BD6694_C4FE_07B3_41E7_844B871DCBA3",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.51,
                                      "yaw": 107.06,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 60,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -35.6
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
                                      "yaw": 107.06,
                                      "hfov": 5.51,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 114,
                                         "class": "ImageResourceLevel",
                                         "width": 121,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -35.6
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.showWindow(this.window_8DB85D0E_9C2C_D253_41D2_36DA7126B1FF, null, false)"
                                     }
                                    ],
                                    "id": "overlay_8D950D1A_9C2D_7273_41E1_D61F3F0F6874",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 13.88,
                                      "yaw": 85.64,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 118,
                                         "class": "ImageResourceLevel",
                                         "width": 150,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -34.36
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
                                      "yaw": 85.64,
                                      "hfov": 13.88,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 236,
                                         "class": "ImageResourceLevel",
                                         "width": 300,
                                         "url": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -34.36
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "partial": false,
                                "label": "2 FAMILY LOUNGE ( FRONT OF TV 1)",
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52_t.jpg"
                               },
                               "yaw": -72.92,
                               "backwardYaw": 28.93,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73",
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0",
                                  "yaw": -82.46,
                                  "backwardYaw": 17.1,
                                  "distance": 1
                                 }
                                ],
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_t.jpg",
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
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_9161BD24_9C82_D731_41D4_2EA192CCDEB3); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "id": "overlay_DF354DCC_C4FA_0592_41E7_4D880DEC58A0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 4.24,
                                      "yaw": -82.46,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 49,
                                         "class": "ImageResourceLevel",
                                         "width": 42,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -26.05
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
                                      "yaw": -82.46,
                                      "hfov": 4.24,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 98,
                                         "class": "ImageResourceLevel",
                                         "width": 84,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -26.05
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "id": "overlay_8D8C7168_9C2C_D2DF_41D7_2E8A1C3CB9F0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.25,
                                      "yaw": -39.64,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 64,
                                         "class": "ImageResourceLevel",
                                         "width": 70,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 23.61
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
                                      "yaw": -39.64,
                                      "hfov": 7.25,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 129,
                                         "class": "ImageResourceLevel",
                                         "width": 141,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 23.61
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "id": "overlay_8E2F66E5_9C13_5FD1_41E2_3F58287B86A4",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 13.95,
                                      "yaw": -33.17,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "class": "ImageResourceLevel",
                                         "width": 54,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_2_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 18.93
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Rs 25000"
                                    },
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -33.17,
                                      "hfov": 13.95,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 77,
                                         "class": "ImageResourceLevel",
                                         "width": 263,
                                         "url": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 18.93
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "partial": false,
                                "label": "5 INSIDE OF KITCHEN",
                                "vfov": 180,
                                "thumbnailUrl": "media/panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73_t.jpg"
                               },
                               "yaw": 17.1,
                               "backwardYaw": -82.46,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3",
                               "yaw": 87,
                               "backwardYaw": -143.83,
                               "distance": 1
                              }
                             ],
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_t.jpg",
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
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CF89E1A6_C476_1D9E_41B6_A667959B6A52, this.camera_9399DE78_9C82_D512_4185_A6874E0363A7); this.mainPlayList.set('selectedIndex', 7)"
                                  }
                                 ],
                                 "id": "overlay_D809D392_C4FA_1DB7_41C2_781B7F372A85",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.75,
                                   "yaw": -72.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 56,
                                      "class": "ImageResourceLevel",
                                      "width": 51,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -34.63
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
                                   "yaw": -72.92,
                                   "hfov": 4.75,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 112,
                                      "class": "ImageResourceLevel",
                                      "width": 103,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -34.63
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_CF5A2EC4_C476_0793_41D9_8E96102ADF73, this.camera_93ABCE84_9C82_D5F2_41CB_99D61D1A50FD); this.mainPlayList.set('selectedIndex', 10)"
                                  }
                                 ],
                                 "id": "overlay_DAEF5E79_C4FE_0775_41D5_66AAACB71D24",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.71,
                                   "yaw": 17.1,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 50,
                                      "class": "ImageResourceLevel",
                                      "width": 48,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -28.96
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
                                   "yaw": 17.1,
                                   "hfov": 4.71,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 101,
                                      "class": "ImageResourceLevel",
                                      "width": 96,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -28.96
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
                                   "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_93BABE8E_9C82_D50E_41AE_134082EAB9C0); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "id": "overlay_D979F8FD_C4FA_0B6D_41E0_13F97F87ADEC",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.49,
                                   "yaw": 87,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 50,
                                      "class": "ImageResourceLevel",
                                      "width": 46,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -30.19
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
                                   "yaw": 87,
                                   "hfov": 4.49,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 101,
                                      "class": "ImageResourceLevel",
                                      "width": 92,
                                      "url": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -30.19
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "partial": false,
                             "label": "4 FAMILY LOUNGE AND KITCHEN INTRENCE",
                             "vfov": 180,
                             "thumbnailUrl": "media/panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0_t.jpg"
                            },
                            "yaw": -143.83,
                            "backwardYaw": 87,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF",
                            "yaw": -48.94,
                            "backwardYaw": 110.13,
                            "distance": 1
                           }
                          ],
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_t.jpg",
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
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF, this.camera_93002EC5_9C82_D572_41D5_707F7CC6897A); this.mainPlayList.set('selectedIndex', 18)"
                               }
                              ],
                              "id": "overlay_D34E2028_C43A_1A93_41DF_E0DEE009F334",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 4.53,
                                "yaw": -48.94,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 51,
                                   "class": "ImageResourceLevel",
                                   "width": 47,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -30.89
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
                                "yaw": -48.94,
                                "hfov": 4.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 103,
                                   "class": "ImageResourceLevel",
                                   "width": 94,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -30.89
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
                                "click": "this.startPanoramaWithCamera(this.panorama_CF78EB7E_C476_0D6F_41E5_D6922E2A8527, this.camera_93EFAEAF_9C82_D50E_41E0_3179DE2122F5); this.mainPlayList.set('selectedIndex', 8)"
                               }
                              ],
                              "id": "overlay_D91C4FBE_C4FA_05EE_41D6_63FF68F589E6",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 3.84,
                                "yaw": 146.1,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 60,
                                   "class": "ImageResourceLevel",
                                   "width": 51,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -47.91
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
                                "yaw": 146.1,
                                "hfov": 3.84,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 120,
                                   "class": "ImageResourceLevel",
                                   "width": 102,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -47.91
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
                                "click": "this.startPanoramaWithCamera(this.panorama_CEB8A4F0_C476_7B73_41D2_0FF912060AA0, this.camera_93F1EEBA_9C82_D516_41E2_FBA5F2018911); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "id": "overlay_E4EE35CF_C4DA_05AD_41D7_A24AD1E6566C",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 3.5,
                                "yaw": -143.83,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 40,
                                   "class": "ImageResourceLevel",
                                   "width": 35,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -27.37
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
                                "yaw": -143.83,
                                "hfov": 3.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 80,
                                   "class": "ImageResourceLevel",
                                   "width": 70,
                                   "url": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -27.37
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "partial": false,
                          "label": "1 DINNING ENTRY",
                          "vfov": 180,
                          "thumbnailUrl": "media/panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3_t.jpg"
                         },
                         "yaw": 110.13,
                         "backwardYaw": -48.94,
                         "distance": 1
                        }
                       ],
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_t.jpg",
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
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_93CC9E99_9C82_D512_41CE_8EAAFB00D476); this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "id": "overlay_D21833C6_C43B_FD9E_41A5_DDAB3D2BC6A2",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.06,
                             "yaw": -100.16,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 62,
                                "class": "ImageResourceLevel",
                                "width": 56,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -37.06
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
                             "yaw": -100.16,
                             "hfov": 5.06,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 124,
                                "class": "ImageResourceLevel",
                                "width": 113,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -37.06
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
                             "click": "this.startPanoramaWithCamera(this.panorama_CEFC4AAE_C47A_0FEF_41E0_058ADBC882A3, this.camera_93DF7EA4_9C82_D532_41C4_712C79D96392); this.mainPlayList.set('selectedIndex', 14)"
                            }
                           ],
                           "id": "overlay_D2B252C0_C43A_3F92_41DD_987502A9BADE",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.04,
                             "yaw": 110.13,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 60,
                                "class": "ImageResourceLevel",
                                "width": 56,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -37.31
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
                             "yaw": 110.13,
                             "hfov": 5.04,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 121,
                                "class": "ImageResourceLevel",
                                "width": 113,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -37.31
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.showWindow(this.window_8E4BEEB6_9C15_EFB3_41D9_22921C81E253, null, false)"
                            }
                           ],
                           "id": "overlay_8E68F412_9C15_7273_41B7_27720D9E416F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 20.66,
                             "yaw": 7.05,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 73,
                                "class": "ImageResourceLevel",
                                "width": 186,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -9.05
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
                             "yaw": 7.05,
                             "hfov": 20.66,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 147,
                                "class": "ImageResourceLevel",
                                "width": 373,
                                "url": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -9.05
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "partial": false,
                       "label": "4 FRONT OF DINNING TABLE",
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF_t.jpg"
                      },
                      "yaw": 51.02,
                      "backwardYaw": -100.16,
                      "distance": 1
                     }
                    ],
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_t.jpg",
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
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_CF6CB68F_C47A_07AD_41D8_65DC1A8FF29D, this.camera_92A37D5B_9C82_D717_41B3_95C562E9546B); this.mainPlayList.set('selectedIndex', 17)"
                         }
                        ],
                        "id": "overlay_D1253A93_C42A_0FB5_41E6_17CB3E5C542A",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.8,
                          "yaw": -38.26,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 48,
                             "class": "ImageResourceLevel",
                             "width": 46,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -21.37
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
                          "yaw": -38.26,
                          "hfov": 4.8,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 97,
                             "class": "ImageResourceLevel",
                             "width": 92,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -21.37
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
                          "click": "this.startPanoramaWithCamera(this.panorama_CF1BD038_C47A_FAF3_41DF_660D13C698FF, this.camera_92B2FD66_9C82_D731_41A5_7782D2BBDFCF); this.mainPlayList.set('selectedIndex', 18)"
                         }
                        ],
                        "id": "overlay_D26B7D5E_C436_0AAE_41D5_EE21179DDE28",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 3.97,
                          "yaw": 51.02,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 56,
                             "class": "ImageResourceLevel",
                             "width": 49,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -43.85
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
                          "yaw": 51.02,
                          "hfov": 3.97,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 113,
                             "class": "ImageResourceLevel",
                             "width": 98,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -43.85
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
                          "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_9291CD50_9C82_D711_41D2_1B49BAD6D6A9); this.mainPlayList.set('selectedIndex', 12)"
                         }
                        ],
                        "id": "overlay_DC4DF38D_C42B_FDAD_4198_C86C91934CB6",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.82,
                          "yaw": -125.52,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 58,
                             "class": "ImageResourceLevel",
                             "width": 53,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_2_0_0_map.gif"
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
                          "yaw": -125.52,
                          "hfov": 4.82,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 116,
                             "class": "ImageResourceLevel",
                             "width": 106,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -35.66
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.showWindow(this.window_8DF04D2E_9C1D_F253_41C0_72181FCF1270, null, false)"
                         }
                        ],
                        "id": "overlay_8DEA1493_9C1D_3271_41D2_61F83A7FBE7F",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 19.04,
                          "yaw": -11.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 121,
                             "class": "ImageResourceLevel",
                             "width": 177,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -16.65
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
                          "yaw": -11.64,
                          "hfov": 19.04,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 243,
                             "class": "ImageResourceLevel",
                             "width": 355,
                             "url": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -16.65
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "partial": false,
                    "label": "2 DINNING ROOM AND ENTRANCE OF DRAWING ROOM",
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0_t.jpg"
                   },
                   "yaw": 124.86,
                   "backwardYaw": -125.52,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09",
                   "yaw": -154.74,
                   "backwardYaw": -148.14,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95",
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA",
                         "yaw": 0.69,
                         "backwardYaw": -44.07,
                         "distance": 1
                        }
                       ],
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_t.jpg",
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
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA, this.camera_92D89D87_9C82_D7FF_41C0_2406C1F03517); this.mainPlayList.set('selectedIndex', 11)"
                            }
                           ],
                           "id": "overlay_D782CC98_C456_0BB2_41E1_670FB9031B62",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.53,
                             "yaw": 0.69,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 51,
                                "class": "ImageResourceLevel",
                                "width": 46,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -29.35
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
                             "yaw": 0.69,
                             "hfov": 4.53,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 103,
                                "class": "ImageResourceLevel",
                                "width": 92,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -29.35
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
                             "click": "this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "id": "overlay_D1B15F0C_C456_0692_41E6_48F756CB395F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.21,
                             "yaw": 59.97,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 42,
                                "class": "ImageResourceLevel",
                                "width": 38,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -13.4
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
                             "yaw": 59.97,
                             "hfov": 4.21,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 85,
                                "class": "ImageResourceLevel",
                                "width": 77,
                                "url": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -13.4
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "partial": false,
                       "label": "3 OUTER WINDOW SIDE",
                       "vfov": 180,
                       "thumbnailUrl": "media/panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95_t.jpg"
                      },
                      "yaw": -44.07,
                      "backwardYaw": 0.69,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F",
                      "yaw": -125.56,
                      "backwardYaw": -22.24,
                      "distance": 1
                     }
                    ],
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_t.jpg",
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
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_CE8D440D_C47A_FA92_41C3_EB13433ECC95, this.camera_917B8D3A_9C82_D711_41C5_326FEC746F73); this.mainPlayList.set('selectedIndex', 13)"
                         }
                        ],
                        "id": "overlay_D6884557_C45E_7ABE_41D7_AB46B5BDF5DF",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.79,
                          "yaw": -44.07,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 49,
                             "class": "ImageResourceLevel",
                             "width": 49,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -29.93
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
                          "yaw": -44.07,
                          "hfov": 4.79,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 98,
                             "class": "ImageResourceLevel",
                             "width": 98,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -29.93
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
                          "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_928F5D45_9C82_D773_41DF_CE3D3192C122); this.mainPlayList.set('selectedIndex', 12)"
                         }
                        ],
                        "id": "overlay_D70FB7DD_C45A_05AD_41E3_68A1F39BF30B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 4.7,
                          "yaw": -125.56,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 61,
                             "class": "ImageResourceLevel",
                             "width": 56,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -41.63
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
                          "yaw": -125.56,
                          "hfov": 4.7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 123,
                             "class": "ImageResourceLevel",
                             "width": 112,
                             "url": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -41.63
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "partial": false,
                    "label": "1 CENTER OF DRAWING ROOM",
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA_t.jpg"
                   },
                   "yaw": -22.24,
                   "backwardYaw": -125.56,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_t.jpg",
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
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09, this.camera_91576D0E_9C82_D4F1_41BD_6C63B42CFD73); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "id": "overlay_D59B0E04_C45E_0693_41C8_9EFE0826501F",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.8,
                       "yaw": -154.74,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 65,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -21.91
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
                       "yaw": -154.74,
                       "hfov": 6.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 130,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -21.91
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
                       "click": "this.startPanoramaWithCamera(this.panorama_CEE231A5_C47A_1D9D_417A_75FE5AD30BFA, this.camera_915D7D19_9C82_D713_41DE_7F992950C028); this.mainPlayList.set('selectedIndex', 11)"
                      }
                     ],
                     "id": "overlay_D697E876_C45A_0B7E_41BD_7CD15D881871",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 3.91,
                       "yaw": -22.24,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 47,
                          "class": "ImageResourceLevel",
                          "width": 41,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -33.59
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
                       "yaw": -22.24,
                       "hfov": 3.91,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 94,
                          "class": "ImageResourceLevel",
                          "width": 83,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -33.59
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
                       "click": "this.startPanoramaWithCamera(this.panorama_CFF51416_C47A_1ABE_41BB_5E0C109B06C0, this.camera_9140CD03_9C82_D4F7_41E2_B93141246375); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "id": "overlay_E462DEF0_C4D6_0772_41BC_D3D11D8001A5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 5.06,
                       "yaw": 124.86,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 53,
                          "class": "ImageResourceLevel",
                          "width": 50,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -27.34
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
                       "yaw": 124.86,
                       "hfov": 5.06,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 106,
                          "class": "ImageResourceLevel",
                          "width": 101,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -27.34
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showWindow(this.window_8D9DADBF_9C15_2DB1_41CE_0A45DFD6D107, null, false)"
                      }
                     ],
                     "id": "overlay_8DBF81F5_9C15_55B1_41DB_1DEF35EBB5E7",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 15.76,
                       "yaw": -7.95,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 90,
                          "class": "ImageResourceLevel",
                          "width": 161,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -29.6
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
                       "yaw": -7.95,
                       "hfov": 15.76,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 181,
                          "class": "ImageResourceLevel",
                          "width": 323,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -29.6
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showWindow(this.window_8E4C3EAD_9C1F_2E51_41D9_1C1CD9951914, null, false)"
                      }
                     ],
                     "id": "overlay_8EBDEF4B_9C13_2ED1_41E3_7CD5EBF4BB2F",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.5,
                       "yaw": -54.43,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 117,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -26.31
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
                       "yaw": -54.43,
                       "hfov": 14.5,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 234,
                          "class": "ImageResourceLevel",
                          "width": 289,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -26.31
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_885AD8E4_9C74_F3D7_41A4_A9E61B3505A8",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.4,
                       "yaw": -134.72,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 68,
                          "class": "ImageResourceLevel",
                          "width": 92,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 24.4
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
                       "yaw": -134.72,
                       "hfov": 9.4,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 136,
                          "class": "ImageResourceLevel",
                          "width": 184,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": 24.4
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "id": "overlay_8FDEBB84_9C75_3657_41C4_225E046025D8",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 15.82,
                       "yaw": -124.42,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 15,
                          "class": "ImageResourceLevel",
                          "width": 44,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_6_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 18.2
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Rs 27000"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -124.42,
                       "hfov": 15.82,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 107,
                          "class": "ImageResourceLevel",
                          "width": 297,
                          "url": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_0_HS_6_0.png"
                         }
                        ]
                       },
                       "pitch": 18.2
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "partial": false,
                 "label": "2 DRAWING AND DINNING PIONT",
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F_t.jpg"
                },
                "yaw": -148.14,
                "backwardYaw": -154.74,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B",
                "yaw": 119.77,
                "backwardYaw": 142.17,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_t.jpg",
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
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B, this.camera_911C4CD7_9C82_D51F_41E0_300CF9A322B0); this.mainPlayList.set('selectedIndex', 3)"
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
                    "yaw": 119.77,
                    "hfov": 5.99,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_CF94CB01_C47A_0E95_41D3_F560F76B068F, this.camera_9109BCCC_9C82_D571_41B6_04172D5A68EA); this.mainPlayList.set('selectedIndex', 12)"
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
                    "yaw": -148.14,
                    "hfov": 4.36,
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
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_8EB037B5_9C6D_3DB1_41C4_B347B5A681C3",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 19.84,
                    "yaw": 161.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 131,
                       "class": "ImageResourceLevel",
                       "width": 200,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 29.85
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
                    "yaw": 161.37,
                    "hfov": 19.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 269,
                       "class": "ImageResourceLevel",
                       "width": 408,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 29.85
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "id": "overlay_8E8DE775_9C6D_7EB1_41E1_D0ED98E6FC34",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 17.59,
                    "yaw": 174.83,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 51,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_3_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 23.54
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Rs 18000"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 174.83,
                    "hfov": 17.59,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 106,
                       "class": "ImageResourceLevel",
                       "width": 342,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": 23.54
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showWindow(this.window_8FD8F0FE_9C74_D3B3_41D3_AAC5168D5A2B, null, false)"
                   }
                  ],
                  "id": "overlay_88FFB7E2_9C73_DDD3_41E0_42236B0AFEF0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.11,
                    "yaw": -76.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 131,
                       "class": "ImageResourceLevel",
                       "width": 137,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -48.82
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
                    "yaw": -76.32,
                    "hfov": 10.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 262,
                       "class": "ImageResourceLevel",
                       "width": 274,
                       "url": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -48.82
                   }
                  ]
                 }
                ]
               }
              ],
              "partial": false,
              "label": "11 ENTERANCE LOBBY",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09_t.jpg"
             },
             "yaw": 142.17,
             "backwardYaw": 119.77,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_t.jpg",
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
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF, this.camera_92C7AD71_9C82_D713_41DE_7CA8F45C4617); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_D5033642_C46A_0697_4181_7826BC339FA1",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3,
                 "yaw": -16.06,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 30,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -29.24
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
                 "yaw": -16.06,
                 "hfov": 3,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 79,
                    "class": "ImageResourceLevel",
                    "width": 61,
                    "url": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -29.24
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
                 "click": "this.startPanoramaWithCamera(this.panorama_CED244FB_C476_1B75_41E0_95D48D5A0D09, this.camera_92D69D7C_9C82_D711_41E1_549740760315); this.mainPlayList.set('selectedIndex', 5)"
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
                 "yaw": 142.17,
                 "hfov": 4.08,
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
             ]
            }
           ],
           "partial": false,
           "label": "1 ENTRY DOOR OF HOME",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B_t.jpg"
          },
          "yaw": -19.75,
          "backwardYaw": -16.06,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_t.jpg",
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
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975, this.camera_922EBDBE_9C82_D711_41B2_9B3EFC945C3C); this.mainPlayList.set('selectedIndex', 2)"
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
              "yaw": 164.22,
              "hfov": 3.73,
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
              "click": "this.startPanoramaWithCamera(this.panorama_CED2765C_C46A_06B2_41D0_50800FA62A1B, this.camera_9231BDD3_9C82_D717_41D6_614F0F6F3585); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "id": "overlay_D5486891_C46A_0BB5_41E8_37AC4A9B30F6",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.42,
              "yaw": -19.75,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.97
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
              "yaw": -19.75,
              "hfov": 5.42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 108,
                 "class": "ImageResourceLevel",
                 "width": 99,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -13.97
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_8FF5C2D2_9C77_57F0_41C7_01C1A2A9D79F",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.92,
              "yaw": 0.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 57,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": 22.78
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
              "yaw": 0.65,
              "hfov": 5.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 78,
                 "class": "ImageResourceLevel",
                 "width": 114,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 22.78
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "id": "overlay_8F369BED_9C77_D5D1_41D2_31276DD2DF7B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 14.97,
              "yaw": 6,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 52,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_3_0_map.gif"
                }
               ]
              },
              "pitch": 19.81
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Rs 32000"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 6,
              "hfov": 14.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 284,
                 "url": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_0_HS_3_0.png"
                }
               ]
              },
              "pitch": 19.81
             }
            ]
           }
          ]
         }
        ],
        "partial": false,
        "label": "2 PORCH INDISE MAIN GATE",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF_t.jpg"
       },
       "yaw": 0.77,
       "backwardYaw": 164.22,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_t.jpg",
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
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF, this.camera_9136FCED_9C82_D533_41D2_B8697A31B844); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_CB21F4A6_C46A_1B9E_41E1_189D16D77A55",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.53,
           "yaw": -62.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 41,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -11.77
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
           "yaw": -62.01,
           "hfov": 4.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 78,
              "class": "ImageResourceLevel",
              "width": 82,
              "url": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -11.77
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
           "click": "this.startPanoramaWithCamera(this.panorama_CE7DC05C_C46A_1AB2_41C4_FF348572E6CF, this.camera_913D0CF8_9C82_D511_41CB_8E997039FACE); this.mainPlayList.set('selectedIndex', 4)"
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
           "yaw": 0.77,
           "hfov": 3.55,
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
       ]
      }
     ],
     "partial": false,
     "label": "3 RIGHT SIDE ON ROAD",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_CF6C47CE_C46A_05AF_41E7_512B40260975_t.jpg"
    },
    "yaw": 93.64,
    "backwardYaw": -62.01,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_t.jpg",
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
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_CF6C47CE_C46A_05AF_41E7_512B40260975, this.camera_9100ACC1_9C82_D573_41B8_0E5294E64EC6); this.mainPlayList.set('selectedIndex', 2)"
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
        "yaw": 93.64,
        "hfov": 2.91,
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
        "click": "this.mainPlayList.set('selectedIndex', 1)"
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
        "yaw": -92.35,
        "hfov": 3.98,
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
    ]
   }
  ],
  "partial": false,
  "label": "1 CENTER OF HOME ON ROAD",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_CF7FE097_C46A_1BBD_41E0_BE3F4BA5D4AF_t.jpg"
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
  "touchControlMode": "drag_rotation",
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
  "gyroscopeVerticalDraggingEnabled": false,
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
   "id": "IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD",
   "data": {
    "name": "IconButton3682"
   },
   "maxWidth": 35,
   "minWidth": 1,
   "paddingBottom": 0,
   "transparencyActive": false,
   "maxHeight": 23,
   "iconURL": "skin/IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD.png",
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
  "thumbnailUrl": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_t.jpg",
  "hfov": 360,
  "hfovMin": 60,
  "label": "2 LEFT SIDE ON ROAD",
  "id": "panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_t.jpg",
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
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_CBF8D05B_C46A_1AB5_419E_81FF5A5F0B3C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.43,
        "yaw": 12.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -19.08
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
        "yaw": 12.19,
        "hfov": 4.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 83,
           "url": "media/panorama_CF4C1DEB_C46A_0596_41E0_4440292861A2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -19.08
       }
      ]
     }
    ]
   }
  ],
  "partial": false,
  "hfovMax": 120,
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
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "85%",
    "paddingTop": 0,
    "url": "media/photo_8FD9250C_9C75_5257_41E1_DBE564A75369.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91B2EC5B_9C82_D517_41D1_73F2BAA801AD_0",
    "data": {
     "name": "Image2750"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "14%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/lively-home-leather-manual/p/itmfe57xbyzfsfzz?pid=RECFE4BGQPHR6FA3&amp;lid=LSTRECFE4BGQPHR6FA3JOTHHZ&amp;marketplace=FLIPKART&amp;srno=s_1_10&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=70326b04-64d6-411b-895b-a97d042c17fb.RECFE4BGQPHR6FA3.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=2rtnjks7dc0000001557398878070&amp;qH=cb7c816be0e7daf7\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 29,999</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91B2EC5B_9C82_D517_41D1_73F2BAA801AD",
    "data": {
     "name": "HTMLText2751"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8FD8F0FE_9C74_D3B3_41D3_AAC5168D5A2B",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window32765"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "83%",
    "paddingTop": 0,
    "url": "media/photo_8871425F_9C35_56F1_41A8_29E90019B047.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91BA9C60_9C82_D531_41D6_3DABB017A725_0",
    "data": {
     "name": "Image2752"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "16%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><B> </B></SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/timbertaste-saroj-sheesham-solid-wood-tv-entertainment-unit/p/itmewuemc3d5qctn?pid=TVUEWUEMRDHYN3TS&amp;lid=LSTTVUEWUEMRDHYN3TSZ6PBDF&amp;marketplace=FLIPKART&amp;srno=s_1_19&amp;otracker=AS_QueryStore_OrganicAutoSuggest_0_6&amp;otracker1=AS_QueryStore_OrganicAutoSuggest_0_6&amp;fm=SEARCH&amp;iid=5ccbf6c1-1e7f-4fc7-930f-7e3851cf2f6d.TVUEWUEMRDHYN3TS.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=kk55g64ukg0000001557397329833&amp;qH=07b1703ebf8b7474\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 18,139</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91BA9C60_9C82_D531_41D6_3DABB017A725",
    "data": {
     "name": "HTMLText2753"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8C01A5B2_9C34_DDB3_41B0_0510C37DE06E",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window12379"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "86%",
    "paddingTop": 0,
    "url": "media/photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91BA5C62_9C82_D531_41C6_AEDD373F9DAD_0",
    "data": {
     "name": "Image2754"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "13%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/flipkart-perfect-homes-kotor-fabric-4-seater-sofa/p/itmf722fe9hgcepx?pid=SOFF6EJC3G8TDPPK&amp;lid=LSTSOFF6EJC3G8TDPPK3INRY3&amp;marketplace=FLIPKART&amp;srno=s_1_14&amp;otracker=search&amp;otracker1=search&amp;fm=organic&amp;iid=en_xqkQJRLv44pGo5ypzmv2j+zGXlR4Av0FKoe0ld0Q9x9ksUF8xNGpSQV/pVL/Uwo8Z35HV9TqfWdls2Kzhhh+Hw==&amp;ppt=SearchPage&amp;ppn=Search&amp;qH=fcc7d618697ba72c\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 19,690</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91BA5C62_9C82_D531_41C6_AEDD373F9DAD",
    "data": {
     "name": "HTMLText2755"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8D3F53F7_9C34_D5B1_41E0_BF7D44DA2AE2",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window15691"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "82%",
    "paddingTop": 0,
    "url": "media/photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91BA3C64_9C82_D531_41BB_930CF8B790D4_0",
    "data": {
     "name": "Image2756"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "17%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0099ff;font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/induscraft-glass-coffee-table/p/itmf85rxhbfg3cbf?pid=CFTF85RXQHZS6N6W&amp;lid=LSTCFTF85RXQHZS6N6WJBZQXA&amp;marketplace=FLIPKART&amp;srno=s_1_3&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=ad0478ad-d4ee-4cbe-8c90-00caf8d33cdd.CFTF85RXQHZS6N6W.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=n6dc5escb40000001557398655030&amp;qH=73df9e842ef70374\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 21,599</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91BA3C64_9C82_D531_41BB_930CF8B790D4",
    "data": {
     "name": "HTMLText2757"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8DB85D0E_9C2C_D253_41D2_36DA7126B1FF",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window18266"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "82%",
    "paddingTop": 0,
    "url": "media/photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91B88C67_9C82_D53F_4189_454AC8B13949_0",
    "data": {
     "name": "Image2758"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "17%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/zikrak-exim-classy-leatherette-3-2-1-cream-sofa-set/p/itmf35ygxa92cs5g?pid=SFSF34WKCSD3EPUG&amp;lid=LSTSFSF34WKCSD3EPUG4HOKKL&amp;marketplace=FLIPKART&amp;srno=s_1_9&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=ef052b09-c475-4623-a5d0-7fd7cfc2b48a.SFSF34WKCSD3EPUG.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=2rtnjks7dc0000001557398878070&amp;qH=cb7c816be0e7daf7\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 69,890</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91B88C67_9C82_D53F_4189_454AC8B13949",
    "data": {
     "name": "HTMLText2759"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8D9DADBF_9C15_2DB1_41CE_0A45DFD6D107",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window21694"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "89%",
    "paddingTop": 0,
    "url": "media/photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91B85C69_9C82_D533_41AE_E77B1805C509_0",
    "data": {
     "name": "Image2760"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "10%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/royaloak-wave-engineered-wood-coffee-table/p/itmeejfvbgqh6hqp?pid=CFTEEJFVGZ2C5RDU&amp;lid=LSTCFTEEJFVGZ2C5RDUWRZWUV&amp;marketplace=FLIPKART&amp;srno=s_6_211&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=7ef28f44-8a8e-4823-a948-9c415599ada3.CFTEEJFVGZ2C5RDU.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=3w19w4z70g0000001557399097393&amp;qH=460418248f829e90\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 14,990</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91B85C69_9C82_D533_41AE_E77B1805C509",
    "data": {
     "name": "HTMLText2761"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8E4C3EAD_9C1F_2E51_41D9_1C1CD9951914",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window23532"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "89%",
    "paddingTop": 0,
    "url": "media/photo_881381D7_9C13_35F1_41E1_84B8F414F437.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91B96C6C_9C82_D531_41DC_471499C5CC2F_0",
    "data": {
     "name": "Image2762"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "10%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/royaloak-lovren-metal-6-seater-dining-set/p/itmezu3dfwkvkdzr?pid=DISEZU3DZPERAYVP&amp;lid=LSTDISEZU3DZPERAYVPDX1JYX&amp;marketplace=FLIPKART&amp;srno=s_1_32&amp;otracker=AS_QueryStore_OrganicAutoSuggest_0_7&amp;otracker1=AS_QueryStore_OrganicAutoSuggest_0_7&amp;fm=SEARCH&amp;iid=2226bcd6-f91f-430d-a628-15ba3083cc62.DISEZU3DZPERAYVP.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=uy26l06dkw0000001557399266691&amp;qH=3ef39dc89b87efed\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 37,000</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91B96C6C_9C82_D531_41DC_471499C5CC2F",
    "data": {
     "name": "HTMLText2763"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8DF04D2E_9C1D_F253_41C0_72181FCF1270",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window25059"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "85%",
    "paddingTop": 0,
    "url": "media/photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91C65C6E_9C82_D531_41DC_4C1A1E05C6EC_0",
    "data": {
     "name": "Image2764"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "14%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/samsung-123cm-49-inch-full-hd-led-smart-tv-2018/p/itmf5g7dhumhqfgg?pid=TVSF5G7DK2R3ZG9B&amp;srno=s_1_2&amp;otracker=search&amp;otracker1=search&amp;lid=LSTTVSF5G7DK2R3ZG9BVIATDX&amp;fm=SEARCH&amp;iid=494547e3-4eb0-4434-b629-9bef571f9aea.TVSF5G7DK2R3ZG9B.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=lb5m31yeps0000001557399345339&amp;qH=b51f5e0215225e52\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 42,368</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91C65C6E_9C82_D531_41DC_4C1A1E05C6EC",
    "data": {
     "name": "HTMLText2765"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8E4BEEB6_9C15_EFB3_41D9_22921C81E253",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window27080"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "84%",
    "paddingTop": 0,
    "url": "media/photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91C7EC70_9C82_D511_41BE_1AC3520E388C_0",
    "data": {
     "name": "Image2766"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "15%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/spacewood-mayflower-engineered-wood-king-box-bed/p/itmesa3nfu6yfags?pid=BDDESA3MZ8JYRQUW&amp;lid=LSTBDDESA3MZ8JYRQUWJ1PFHE&amp;marketplace=FLIPKART&amp;srno=s_1_19&amp;otracker=search&amp;otracker1=search&amp;fm=SEARCH&amp;iid=bded095d-757b-4afd-9665-c862c3a0e941.BDDESA3MZ8JYRQUW.SEARCH&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=thkorcekz40000001557399510771&amp;qH=d4054e7994adef0b\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 17,490</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91C7EC70_9C82_D511_41BE_1AC3520E388C",
    "data": {
     "name": "HTMLText2767"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8E702AAE_9C14_D653_41D1_5EBC506632A1",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window28641"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "Window",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "verticalAlign": "middle",
  "backgroundColor": [],
  "shadow": true,
  "closeButtonIconColor": "#000000",
  "headerBorderColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "paddingLeft": 0,
  "bodyPaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "veilOpacity": 0.4,
  "borderRadius": 5,
  "gap": 10,
  "closeButtonBackgroundColor": [],
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingRight": 10,
  "shadowOpacity": 0.5,
  "backgroundColorRatios": [],
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "horizontalAlign": "center",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 1,
  "layout": "vertical",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "height": "82%",
    "paddingTop": 0,
    "url": "media/photo_89A9189D_9C6D_3271_41CA_4D2269405772.jpeg",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "width": "100%",
    "backgroundOpacity": 0,
    "id": "image_uid91C77C73_9C82_D517_41C5_9860A040836D_0",
    "data": {
     "name": "Image2768"
    },
    "minWidth": 0,
    "paddingBottom": 0,
    "shadow": false
   },
   {
    "class": "HTMLText",
    "scrollBarVisible": "rollOver",
    "minHeight": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "height": "17%",
    "paddingTop": 10,
    "borderRadius": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "width": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;\"> </SPAN><SPAN STYLE=\"color:#0000ff;\"><A HREF=\"https://www.flipkart.com/timbertaste-dyna-solid-wood-tv-entertainment-unit/p/itmf27myvzjt2hvk?pid=TVUFFPDRFY2UN66G&amp;lid=LSTTVUFFPDRFY2UN66GLCOCYU&amp;marketplace=FLIPKART&amp;srno=s_1_34&amp;otracker=AS_QueryStore_HistoryAutoSuggest_0_6&amp;otracker1=AS_QueryStore_HistoryAutoSuggest_0_6&amp;fm=SEARCH&amp;iid=en_UvRiF9QPcBkVBN2R03qNBEZHHH63bClxgO9SUCPnhJj0rNXoSqQ/pp4GP64TB5qD3UIdcKj7d48cqXHO3yuVaQ==&amp;ppt=SearchPage&amp;ppn=Search&amp;ssid=9evey9cvgw0000001557399626993&amp;qH=07b1703ebf8b7474\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\"><U>Rs 14,439</U></SPAN></A></SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uid91C77C73_9C82_D517_41C5_9860A040836D",
    "data": {
     "name": "HTMLText2769"
    },
    "minWidth": 0,
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "shadow": false
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
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 400,
  "height": 600,
  "titleFontColor": "#000000",
  "paddingTop": 0,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "id": "window_8EE9A275_9C6C_D6B1_41C3_FEEEC0D3452F",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "shadowVerticalLength": 0,
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "data": {
   "name": "Window30258"
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91E13C9F_9C82_D50F_41E0_BED21C37F91E",
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
   "yaw": -155.18,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91F44CAB_9C82_D537_41D1_AB916C916138",
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
   "yaw": 107.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91FD1CB6_9C82_D511_41CA_3A99A05B4966",
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
   "yaw": -111.3,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9100ACC1_9C82_D573_41B8_0E5294E64EC6",
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
   "yaw": 117.99,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9109BCCC_9C82_D571_41B6_04172D5A68EA",
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
   "yaw": 25.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_911C4CD7_9C82_D51F_41E0_300CF9A322B0",
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
  "id": "camera_91232CE2_9C82_D531_41D8_80EAA6F0A5D0",
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
   "yaw": -72.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9136FCED_9C82_D533_41D2_B8697A31B844",
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
  "id": "camera_913D0CF8_9C82_D511_41CB_8E997039FACE",
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
  "id": "camera_9140CD03_9C82_D4F7_41E2_B93141246375",
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
   "yaw": 54.48,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_91576D0E_9C82_D4F1_41BD_6C63B42CFD73",
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
  "id": "camera_915D7D19_9C82_D713_41DE_7F992950C028",
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
   "yaw": 54.44,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9161BD24_9C82_D731_41D4_2EA192CCDEB3",
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
   "yaw": -162.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9175CD2F_9C82_D70F_41AA_57FF2211E0C5",
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
   "yaw": 148.24,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_917B8D3A_9C82_D711_41C5_326FEC746F73",
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
   "yaw": -179.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_928F5D45_9C82_D773_41DF_CE3D3192C122",
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
   "yaw": 157.76,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9291CD50_9C82_D711_41D2_1B49BAD6D6A9",
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
   "yaw": -55.14,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92A37D5B_9C82_D717_41B3_95C562E9546B",
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
   "yaw": -162.95,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92B2FD66_9C82_D731_41A5_7782D2BBDFCF",
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
   "yaw": 79.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92C7AD71_9C82_D713_41DE_7CA8F45C4617",
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
   "yaw": 160.25,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92D69D7C_9C82_D711_41E1_549740760315",
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
  "id": "camera_92D89D87_9C82_D7FF_41C0_2406C1F03517",
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
   "yaw": 135.93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_92EB4D92_9C82_D711_41C3_FF5540035FD6",
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
  "id": "camera_92FD7D9D_9C82_D713_41CA_B27184D63DCE",
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
   "yaw": -33.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_920C0DA8_9C82_D731_4172_62EB148E12EA",
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
   "yaw": 141.74,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_921CBDB3_9C82_D717_41DB_5DD1DB9A0847",
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
   "yaw": -85.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_922EBDBE_9C82_D711_41B2_9B3EFC945C3C",
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
  "id": "camera_9231BDD3_9C82_D717_41D6_614F0F6F3585",
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
   "yaw": 163.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9243ADEE_9C82_D70E_419C_E1F9789E4D7F",
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
   "yaw": 139.78,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9253EE09_9C82_D4F2_41E2_3A0B1EE38A51",
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
   "yaw": -122.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9265DE1F_9C82_D50E_41C7_17F953CD6C93",
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
   "yaw": 112.71,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9274FE3A_9C82_D516_41D5_0B136E02C02B",
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
  "id": "camera_93871E55_9C82_D512_41D0_A271B14F8E65",
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
   "yaw": -150.85,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93896E6B_9C82_D536_41A1_3A80DBF37FD0",
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
   "yaw": 78.51,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9399DE78_9C82_D512_4185_A6874E0363A7",
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
   "yaw": -151.07,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93ABCE84_9C82_D5F2_41CB_99D61D1A50FD",
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
   "yaw": 97.54,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93BABE8E_9C82_D50E_41AE_134082EAB9C0",
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
   "yaw": 36.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93CC9E99_9C82_D512_41CE_8EAAFB00D476",
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
   "yaw": -128.98,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93DF7EA4_9C82_D532_41C4_712C79D96392",
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
   "yaw": 131.06,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93EFAEAF_9C82_D50E_41E0_3179DE2122F5",
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
   "yaw": -78.23,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93F1EEBA_9C82_D516_41E2_FBA5F2018911",
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
   "yaw": -93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_93002EC5_9C82_D572_41D5_707F7CC6897A",
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
   "yaw": -69.87,
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
   "mp3Url": "media/audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2.mp3",
   "oggUrl": "media/audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2.ogg"
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "rosewood-sheesham-saroj-tvc-tt-timbertaste-walnut-and-teak-draw-original-imaf5q3hentjgths",
  "thumbnailUrl": "media/photo_8871425F_9C35_56F1_41A8_29E90019B047_t.jpg",
  "width": 832,
  "id": "photo_8871425F_9C35_56F1_41A8_29E90019B047",
  "height": 832,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8871425F_9C35_56F1_41A8_29E90019B047.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "grey-polycotton-ul-sf-2l-8687-wells-sofa-grey-perfect-homes-by-original-imaf7ghhwbhrxmzk",
  "thumbnailUrl": "media/photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1_t.jpg",
  "width": 832,
  "id": "photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1",
  "height": 832,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8DB2878F_9C33_3E51_41C7_1E0CB0790FE1.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "rosewood-sheesham-inlct61-induscraft-brown-original-imafbv8rypnh4geg",
  "thumbnailUrl": "media/photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37_t.jpg",
  "width": 832,
  "id": "photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37",
  "height": 832,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8DDB6FC1_9C2D_6DD1_41AB_ABCA77D94B37.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "cream-leatherette-zesfs-sofur-141-3-2-1-1-zikrak-exim-cream-original-imaf35f6ygzajsgm",
  "thumbnailUrl": "media/photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF_t.jpg",
  "width": 832,
  "id": "photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF",
  "height": 461,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8EEB13F7_9C13_35B1_41BC_6B11CF44FDFF.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "mdf-wave-royaloak-honey-brown-original-imaff8psrhabd4pm",
  "thumbnailUrl": "media/photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0_t.jpg",
  "width": 832,
  "id": "photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0",
  "height": 602,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8E6DB07D_9C1F_32B1_41A6_1D4381440BC0.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "6-seater-black-mdf-dt6225-6-royaloak-black-original-imaf2jq8pbsbjnkv",
  "thumbnailUrl": "media/photo_881381D7_9C13_35F1_41E1_84B8F414F437_t.jpg",
  "width": 832,
  "id": "photo_881381D7_9C13_35F1_41E1_84B8F414F437",
  "height": 553,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_881381D7_9C13_35F1_41E1_84B8F414F437.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "samsung-43n5100-original-imaf64ewtyhwx4gy",
  "thumbnailUrl": "media/photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011_t.jpg",
  "width": 832,
  "id": "photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011",
  "height": 509,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8E8B26E1_9C17_5FD1_41A8_A109C65EB011.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "king-na-particle-board-mayflower-king-bed-spacewood-vermount-original-imaf5q3ff5wzqqhe",
  "thumbnailUrl": "media/photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770_t.jpg",
  "width": 832,
  "id": "photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770",
  "height": 832,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8F202E40_9C13_6ECF_41D7_66B6CFE94770.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "sheesham-wood-dyna-tvc-dw-timbertaste-natural-teak-original-imafcscy6cvkhe3t",
  "thumbnailUrl": "media/photo_89A9189D_9C6D_3271_41CA_4D2269405772_t.jpg",
  "width": 832,
  "id": "photo_89A9189D_9C6D_3271_41CA_4D2269405772",
  "height": 832,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_89A9189D_9C6D_3271_41CA_4D2269405772.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "class": "Photo",
  "duration": 5000,
  "label": "white-satinwood-bhirra-007-lively-home-original-imafdw7jfdgh9h4z",
  "thumbnailUrl": "media/photo_8FD9250C_9C75_5257_41E1_DBE564A75369_t.jpg",
  "width": 796,
  "id": "photo_8FD9250C_9C75_5257_41E1_DBE564A75369",
  "height": 832,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_8FD9250C_9C75_5257_41E1_DBE564A75369.jpeg",
     "class": "ImageResourceLevel"
    }
   ]
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
  "paddingRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
   "this.IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD"
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
 }
], 
 "start": "this.playAudioList([this.audio_CBC2B299_C7EC_8879_41BD_C78C47FFD5E2]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E6D59CC6_C4D6_0B9F_41D0_85361D50ECFD], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
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
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
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