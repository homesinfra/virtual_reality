TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "id": "panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF",
  "pitch": 0,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "yaw": 14.06,
    "distance": 1,
    "panorama": {
     "partial": false,
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "id": "panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
     "pitch": 0,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "yaw": -7.26,
       "distance": 1,
       "panorama": {
        "partial": false,
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "id": "panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
        "pitch": 0,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "yaw": 3.97,
          "distance": 1,
          "panorama": {
           "partial": false,
           "class": "Panorama",
           "hfovMin": 60,
           "vfov": 180,
           "id": "panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
           "pitch": 0,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "yaw": 176.44,
             "distance": 1,
             "panorama": "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
             "backwardYaw": 3.97,
             "class": "AdjacentPanorama"
            },
            {
             "yaw": 23.09,
             "distance": 1,
             "panorama": {
              "partial": false,
              "class": "Panorama",
              "hfovMin": 60,
              "vfov": 180,
              "id": "panorama_314DFC27_37AB_BE58_41B2_E76F792BC688",
              "pitch": 0,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "yaw": 155.68,
                "distance": 1,
                "panorama": "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
                "backwardYaw": 23.09,
                "class": "AdjacentPanorama"
               }
              ],
              "label": "Entry Door11",
              "hfovMax": 120,
              "thumbnailUrl": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_t.jpg",
              "frames": [
               {
                "overlays": [
                 {
                  "maps": [
                   {
                    "yaw": 1.02,
                    "hfov": 6.74,
                    "pitch": -22.84,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_0_0_0_map.gif",
                       "width": 60,
                       "class": "ImageResourceLevel",
                       "height": 52
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_3DFE45E5_37D4_49DB_41A5_A09330A0FE1E",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "pitch": -22.84,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_0_0.png",
                       "width": 121,
                       "class": "ImageResourceLevel",
                       "height": 105
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 1.02,
                    "hfov": 6.74
                   }
                  ],
                  "rollOverDisplay": false
                 },
                 {
                  "maps": [
                   {
                    "yaw": 155.68,
                    "hfov": 6.44,
                    "pitch": -30.08,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_1_0_0_map.gif",
                       "width": 61,
                       "class": "ImageResourceLevel",
                       "height": 65
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE, this.camera_1C080BB9_0C13_9DEB_4195_E2C2C4D12F22)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_E47DD1AE_F216_6BB8_41C3_AEB6DE2339B6",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "pitch": -30.08,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_1_0.png",
                       "width": 123,
                       "class": "ImageResourceLevel",
                       "height": 131
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 155.68,
                    "hfov": 6.44
                   }
                  ],
                  "rollOverDisplay": false
                 }
                ],
                "stereoSphere": {
                 "levels": [
                  {
                   "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_hq.jpeg",
                   "width": 6000,
                   "class": "ImageResourceLevel",
                   "height": 6000
                  },
                  {
                   "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 3217
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_t.jpg"
               }
              ]
             },
             "backwardYaw": 155.68,
             "class": "AdjacentPanorama"
            }
           ],
           "label": "360 gallery 22",
           "hfovMax": 120,
           "thumbnailUrl": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_t.jpg",
           "frames": [
            {
             "overlays": [
              {
               "maps": [
                {
                 "yaw": 23.09,
                 "hfov": 3.78,
                 "pitch": -19.09,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_0_0_0_map.gif",
                    "width": 35,
                    "class": "ImageResourceLevel",
                    "height": 45
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688, this.camera_1C52DBDB_0C13_9DAF_419D_C71DF5C0D46A)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_E72A173C_F26A_6898_41D6_23AAEA560AA0",
               "enabledInCardboard": true,
               "items": [
                {
                 "pitch": -19.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_0_0.png",
                    "width": 71,
                    "class": "ImageResourceLevel",
                    "height": 91
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 23.09,
                 "hfov": 3.78
                }
               ],
               "rollOverDisplay": false
              },
              {
               "maps": [
                {
                 "yaw": 176.44,
                 "hfov": 4.2,
                 "pitch": -14.09,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_1_0_0_map.gif",
                    "width": 38,
                    "class": "ImageResourceLevel",
                    "height": 47
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9, this.camera_1C273BD0_0C13_9DB9_419E_8F672DC12DCE)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_E751D923_F26A_38A8_41EA_9F2045B5C6A0",
               "enabledInCardboard": true,
               "items": [
                {
                 "pitch": -14.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_1_0.png",
                    "width": 77,
                    "class": "ImageResourceLevel",
                    "height": 95
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 176.44,
                 "hfov": 4.2
                }
               ],
               "rollOverDisplay": false
              }
             ],
             "stereoSphere": {
              "levels": [
               {
                "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_hq.jpeg",
                "width": 6434,
                "class": "ImageResourceLevel",
                "height": 6434
               },
               {
                "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 4002
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_t.jpg"
            }
           ]
          },
          "backwardYaw": 176.44,
          "class": "AdjacentPanorama"
         },
         {
          "yaw": -151.05,
          "distance": 1,
          "panorama": "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
          "backwardYaw": -7.26,
          "class": "AdjacentPanorama"
         }
        ],
        "label": "360 gallery 11",
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_t.jpg",
        "frames": [
         {
          "overlays": [
           {
            "maps": [
             {
              "yaw": -151.05,
              "hfov": 3.29,
              "pitch": -15.46,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_0_0_0_map.gif",
                 "width": 30,
                 "class": "ImageResourceLevel",
                 "height": 38
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A, this.camera_03E11B96_0C13_9DA6_4173_C84FC09D40AE)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_E7C7DACF_F26E_39F8_41D2_C87F1FB62A58",
            "enabledInCardboard": true,
            "items": [
             {
              "pitch": -15.46,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_0_0.png",
                 "width": 60,
                 "class": "ImageResourceLevel",
                 "height": 77
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -151.05,
              "hfov": 3.29
             }
            ],
            "rollOverDisplay": false
           },
           {
            "maps": [
             {
              "yaw": 3.97,
              "hfov": 3.41,
              "pitch": -17.46,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_1_0_0_map.gif",
                 "width": 31,
                 "class": "ImageResourceLevel",
                 "height": 31
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE, this.camera_03F40B8B_0C13_9DAF_4187_C012C825BD72)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "rollOver": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_E763AFFF_F26E_3798_41D8_37FBE3FC1650",
            "enabledInCardboard": true,
            "items": [
             {
              "pitch": -17.46,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_1_0.png",
                 "width": 63,
                 "class": "ImageResourceLevel",
                 "height": 63
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 3.97,
              "hfov": 3.41
             }
            ],
            "rollOverDisplay": false
           }
          ],
          "stereoSphere": {
           "levels": [
            {
             "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_hq.jpeg",
             "width": 6434,
             "class": "ImageResourceLevel",
             "height": 6434
            },
            {
             "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 4002
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_t.jpg"
         }
        ]
       },
       "backwardYaw": -151.05,
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -175.98,
       "distance": 1,
       "panorama": "this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF",
       "backwardYaw": 14.06,
       "class": "AdjacentPanorama"
      }
     ],
     "label": "360 outside 22",
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_t.jpg",
     "frames": [
      {
       "overlays": [
        {
         "maps": [
          {
           "yaw": -7.26,
           "hfov": 2.46,
           "pitch": 1.82,
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_0_0_0_map.gif",
              "width": 22,
              "class": "ImageResourceLevel",
              "height": 28
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9, this.camera_03EC0BA2_0C13_9D99_4179_C214E402FAB1)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "rollOver": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E27896E7_F287_5361_41E3_DF581EF73DC5",
         "enabledInCardboard": true,
         "items": [
          {
           "pitch": 1.82,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_0_0.png",
              "width": 44,
              "class": "ImageResourceLevel",
              "height": 57
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -7.26,
           "hfov": 2.46
          }
         ],
         "rollOverDisplay": false
        },
        {
         "maps": [
          {
           "yaw": -175.98,
           "hfov": 5.58,
           "pitch": -11.45,
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_1_0_0_map.gif",
              "width": 50,
              "class": "ImageResourceLevel",
              "height": 43
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF, this.camera_1C1B8BAD_0C13_9DEB_41A6_53BC5F5CCFC1)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "rollOver": "this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_E23EC227_F285_72E1_41E5_4407478BCE22",
         "enabledInCardboard": true,
         "items": [
          {
           "pitch": -11.45,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_1_0.png",
              "width": 101,
              "class": "ImageResourceLevel",
              "height": 86
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -175.98,
           "hfov": 5.58
          }
         ],
         "rollOverDisplay": false
        }
       ],
       "stereoSphere": {
        "levels": [
         {
          "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_hq.jpeg",
          "width": 6434,
          "class": "ImageResourceLevel",
          "height": 6434
         },
         {
          "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 4002
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_t.jpg"
      }
     ]
    },
    "backwardYaw": -175.98,
    "class": "AdjacentPanorama"
   }
  ],
  "label": "360 outside1",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": 14.06,
        "hfov": 3.98,
        "pitch": -18.47,
        "image": {
         "levels": [
          {
           "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_0_HS_1_0_0_map.gif",
           "width": 37,
           "class": "ImageResourceLevel",
           "height": 42
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A, this.camera_1C37FBC4_0C13_9D99_4191_2423733C6AD8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FC4F7472_F287_5763_41D6_CEC40157B37E",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -18.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_0_HS_1_0.png",
           "width": 75,
           "class": "ImageResourceLevel",
           "height": 84
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 14.06,
        "hfov": 3.98
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "VideoPanoramaOverlay",
      "click": "this.overlay_004328C5_0C0F_FB9A_4172_C58EA6B455AE.play()",
      "chromaThreshold": 0.17,
      "blending": 0,
      "id": "overlay_004328C5_0C0F_FB9A_4172_C58EA6B455AE",
      "vfov": 49.86,
      "loop": false,
      "rotationX": 31.15,
      "roll": -2.54,
      "rotationY": -3.96,
      "pitch": -29.89,
      "video": {
       "width": 1322,
       "mp4Url": "media/video_0086BFB8_0C0F_B5E9_419D_7BD1DDF5326C.mp4",
       "class": "VideoResource",
       "height": 698
      },
      "chromaSmoothing": 0.28,
      "yaw": -20.58,
      "hfov": 64.66,
      "autoplay": false,
      "data": {
       "label": "Video"
      },
      "image": {
       "levels": [
        {
         "url": "media/overlay_004328C5_0C0F_FB9A_4172_C58EA6B455AE_t.png",
         "width": 2048,
         "class": "ImageResourceLevel",
         "height": 1080
        }
       ],
       "class": "ImageResource"
      },
      "useHandCursor": true,
      "videoVisibleOnStop": false,
      "chromaColor": "#28C034",
      "enabledInCardboard": true
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_hq.jpeg",
       "width": 6434,
       "class": "ImageResourceLevel",
       "height": 6434
      },
      {
       "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 4002
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_t.jpg"
   }
  ]
 },
 {
  "buttonZoomIn": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 32,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png",
   "height": 32,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31995"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "displayPlaybackBar": true,
  "buttonRestart": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 40,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png",
   "height": 40,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31985"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "buttonMoveDown": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 32,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png",
   "height": 32,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31991"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "class": "PanoramaPlayer",
  "buttonPlayLeft": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 40,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png",
   "height": 40,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31986"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "touchControlMode": "drag_rotation",
  "buttonMoveLeft": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 32,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png",
   "height": 32,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31987"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "buttonMoveUp": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 32,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png",
   "height": 32,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31989"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "preloadEnabled": false,
  "buttonPlayRight": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 40,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png",
   "height": 40,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31993"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "buttonZoomOut": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 32,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png",
   "height": 32,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31984"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "buttonMoveRight": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 32,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png",
   "height": 32,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31992"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonPause": {
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "toggle",
   "width": 40,
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
   "paddingTop": 0,
   "height": 40,
   "paddingRight": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 0,
   "data": {
    "name": "Button31990"
   },
   "borderRadius": 0,
   "transparencyActive": true,
   "backgroundOpacity": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "maxWidth": 35,
   "class": "IconButton",
   "horizontalAlign": "center",
   "minHeight": 1,
   "paddingLeft": 0,
   "borderSize": 0,
   "mode": "push",
   "width": 35,
   "iconURL": "skin/IconButton_34079587_391C_6733_41B9_CE99BD676CF8.png",
   "paddingTop": 0,
   "height": 23,
   "paddingRight": 0,
   "shadow": false,
   "maxHeight": 23,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_34079587_391C_6733_41B9_CE99BD676CF8",
   "propagateClick": false,
   "verticalAlign": "middle",
   "minWidth": 1,
   "data": {
    "name": "IconButton6710"
   },
   "borderRadius": 0,
   "transparencyActive": false,
   "backgroundOpacity": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "Bedroom11",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_302B9125_37B4_C65B_414A_73DA2D222D75",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": 140.5,
        "hfov": 5.99,
        "pitch": -31.82,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_0_0_0_map.gif",
           "width": 58,
           "class": "ImageResourceLevel",
           "height": 72
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3EF790F9_37D7_C7A8_41C6_74BF90CC0CE2",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -31.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_0_0.png",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 145
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 140.5,
        "hfov": 5.99
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -93.75,
        "hfov": 16,
        "pitch": -20.75,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_4_0_0_map.gif",
           "width": 142,
           "class": "ImageResourceLevel",
           "height": 115
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_3218127A_38FC_7DDD_4199_18DAE36EBF88, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_32CE6B8F_38FC_E334_41C8_6DA3673CB37A",
      "items": [
       {
        "pitch": -20.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_4_0.png",
           "width": 285,
           "class": "ImageResourceLevel",
           "height": 231
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -93.75,
        "hfov": 16
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -4.83,
        "hfov": 18.76,
        "pitch": -36.29,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_3_0_0_map.gif",
           "width": 193,
           "class": "ImageResourceLevel",
           "height": 132
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_34DE85A4_38FC_6775_41C7_0F3B843C084E, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3364CC73_38FC_25D3_41C0_11844EE3BBAD",
      "items": [
       {
        "pitch": -36.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_3_0.png",
           "width": 387,
           "class": "ImageResourceLevel",
           "height": 265
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -4.83,
        "hfov": 18.76
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -64.67,
        "hfov": 10.17,
        "pitch": -41.55,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_2_0_0_map.gif",
           "width": 113,
           "class": "ImageResourceLevel",
           "height": 152
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_3380AC95_38F4_2557_41BB_12A55B85E8F3, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_346A953C_38F4_2754_41BF_55BC5328CDAD",
      "items": [
       {
        "pitch": -41.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_2_0.png",
           "width": 226,
           "class": "ImageResourceLevel",
           "height": 305
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -64.67,
        "hfov": 10.17
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 55.81,
        "hfov": 18.26,
        "pitch": -27.73,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_1_0_0_map.gif",
           "width": 171,
           "class": "ImageResourceLevel",
           "height": 114
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_35A9A494_38F4_2555_4188_808D0EE50F06, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3422F6F3_38F4_22D2_41C9_645DA2AE4CBC",
      "items": [
       {
        "pitch": -27.73,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_1_0.png",
           "width": 343,
           "class": "ImageResourceLevel",
           "height": 228
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 55.81,
        "hfov": 18.26
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -55.66,
        "hfov": 5.11,
        "pitch": 27.13,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_5_0_0_map.gif",
           "width": 47,
           "class": "ImageResourceLevel",
           "height": 42
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E67E444E_F21A_68F8_41C8_C6B539A09E65",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 27.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_5_0.png",
           "width": 95,
           "class": "ImageResourceLevel",
           "height": 85
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -55.66,
        "hfov": 5.11
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -54.19,
        "hfov": 11.74,
        "pitch": 22.33,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_6_0_map.gif",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Rs 14000"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E7AC6518_F21A_E898_41EA_9F6B18D6F9FD",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 22.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_6_0.png",
           "width": 211,
           "class": "ImageResourceLevel",
           "height": 116
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -54.19,
        "hfov": 11.74
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 2.53,
        "hfov": 10.83,
        "pitch": 31.9,
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_7_0_map.gif",
           "width": 32,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Fall Ceiling\u000dRs 11900"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E1C89DBF_F27B_FB98_41CE_4F6D1F9B4744",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 31.9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_7_0.png",
           "width": 212,
           "class": "ImageResourceLevel",
           "height": 106
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 2.53,
        "hfov": 10.83
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_hq.jpeg",
       "width": 6000,
       "class": "ImageResourceLevel",
       "height": 6000
      },
      {
       "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_302B9125_37B4_C65B_414A_73DA2D222D75_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "Bedroom22",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": 163.25,
        "hfov": 6.65,
        "pitch": -33.24,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_0_0_0_map.gif",
           "width": 66,
           "class": "ImageResourceLevel",
           "height": 81
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E64E6B6_37D4_CBB8_41B4_62F17F6BFB64",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -33.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_0_0.png",
           "width": 132,
           "class": "ImageResourceLevel",
           "height": 163
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 163.25,
        "hfov": 6.65
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -9,
        "hfov": 25.83,
        "pitch": -37.14,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_1_0_0_map.gif",
           "width": 200,
           "class": "ImageResourceLevel",
           "height": 127
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_34E7CE51_38EC_BAFB_41B9_1B878F65F7FD, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_343DCD20_38EC_5E58_41BA_657865797EB4",
      "items": [
       {
        "pitch": -37.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_1_0.png",
           "width": 540,
           "class": "ImageResourceLevel",
           "height": 344
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -9,
        "hfov": 25.83
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -42.83,
        "hfov": 11.34,
        "pitch": -17.7,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_2_0_0_map.gif",
           "width": 99,
           "class": "ImageResourceLevel",
           "height": 135
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_36B34A64_39DC_7AD8_41C2_FE24EB968BBB, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_36C535FB_39DC_C9AF_41BB_41A0B013BB19",
      "items": [
       {
        "pitch": -17.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_2_0.png",
           "width": 198,
           "class": "ImageResourceLevel",
           "height": 271
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -42.83,
        "hfov": 11.34
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 22.83,
        "hfov": 8.8,
        "pitch": -31.45,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_4_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel",
           "height": 104
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_36A29F14_39D5_BA78_41AF_6A6CD84EA0FB, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_37834B03_39D4_5A58_41C5_FF0F6BBAC6C7",
      "items": [
       {
        "pitch": -31.45,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_4_0.png",
           "width": 172,
           "class": "ImageResourceLevel",
           "height": 209
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 22.83,
        "hfov": 8.8
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 115.58,
        "hfov": 9.44,
        "pitch": -49.19,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_3_0_0_map.gif",
           "width": 120,
           "class": "ImageResourceLevel",
           "height": 113
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_36331B24_39EC_7A58_41CB_C046C9CD4AAB, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_286AF0D3_39ED_C7FF_41CB_8403D16C7195",
      "items": [
       {
        "pitch": -49.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_3_0.png",
           "width": 240,
           "class": "ImageResourceLevel",
           "height": 227
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 115.58,
        "hfov": 9.44
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -76.47,
        "hfov": 5.37,
        "pitch": 25.63,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_5_0_0_map.gif",
           "width": 49,
           "class": "ImageResourceLevel",
           "height": 40
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E3432A95_F21E_5868_41E6_79BD143D4BA6",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 25.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_5_0.png",
           "width": 99,
           "class": "ImageResourceLevel",
           "height": 80
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -76.47,
        "hfov": 5.37
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -76.72,
        "hfov": 10.06,
        "pitch": 21.5,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_6_0_map.gif",
           "width": 45,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Rs 12000"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E700035F_F21E_2898_41E7_5B7EC3370F86",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 21.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_6_0.png",
           "width": 180,
           "class": "ImageResourceLevel",
           "height": 64
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -76.72,
        "hfov": 10.06
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -5.48,
        "hfov": 11.99,
        "pitch": 31.56,
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_7_0_map.gif",
           "width": 31,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Fall Ceiling \u000dRs 10500"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FD84FA4B_F27E_78FF_41D8_F4102334634B",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 31.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_7_0.png",
           "width": 234,
           "class": "ImageResourceLevel",
           "height": 118
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -5.48,
        "hfov": 11.99
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_hq.jpeg",
       "width": 6000,
       "class": "ImageResourceLevel",
       "height": 6000
      },
      {
       "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "DD11",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_314D2BE5_37B4_B9DB_41B6_12F542295845",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": 14.28,
        "hfov": 4.84,
        "pitch": -32.79,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_1_0_0_map.gif",
           "width": 47,
           "class": "ImageResourceLevel",
           "height": 42
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3DD9D25E_37DC_4AE8_41C8_CA3205583B61",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -32.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_1_0.png",
           "width": 95,
           "class": "ImageResourceLevel",
           "height": 84
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 14.28,
        "hfov": 4.84
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -134.91,
        "hfov": 7.49,
        "pitch": -28.42,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_0_0_0_map.gif",
           "width": 70,
           "class": "ImageResourceLevel",
           "height": 60
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3DFAF66E_37DC_4AA8_4183_F686FC2D1B71",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -28.42,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_0_0.png",
           "width": 141,
           "class": "ImageResourceLevel",
           "height": 120
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -134.91,
        "hfov": 7.49
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -48.67,
        "hfov": 10.84,
        "pitch": -39.08,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_4_0_0_map.gif",
           "width": 116,
           "class": "ImageResourceLevel",
           "height": 88
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_358C657D_393C_27D7_41AA_A3870A574844, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_35F02B54_3914_23D4_41AC_CD1C755A6B6D",
      "items": [
       {
        "pitch": -39.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_4_0.png",
           "width": 232,
           "class": "ImageResourceLevel",
           "height": 177
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -48.67,
        "hfov": 10.84
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 60.13,
        "hfov": 11.35,
        "pitch": -28.82,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_3_0_0_map.gif",
           "width": 107,
           "class": "ImageResourceLevel",
           "height": 99
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_3561A08D_3934_1D37_41C6_73ADA086A6F9, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_34C873FC_3914_62D4_41B2_1E1B41BD8CA4",
      "items": [
       {
        "pitch": -28.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_3_0.png",
           "width": 215,
           "class": "ImageResourceLevel",
           "height": 199
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 60.13,
        "hfov": 11.35
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -124.56,
        "hfov": 9.61,
        "pitch": -47.25,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_2_0_0_map.gif",
           "width": 117,
           "class": "ImageResourceLevel",
           "height": 98
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_35B15315_390C_6357_41AC_38D3CCBC5D5C, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_35EE9B0C_3937_E335_41C6_FA24FAC06D9D",
      "items": [
       {
        "pitch": -47.25,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_2_0.png",
           "width": 235,
           "class": "ImageResourceLevel",
           "height": 197
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -124.56,
        "hfov": 9.61
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 0.44,
        "hfov": 17.1,
        "pitch": 20.72,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_5_0_map.gif",
           "width": 43,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Fall Ceiling \u000dRs 17500\u000d"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E0D120E8_F27F_E9B8_41CB_086AF7A68F19",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 20.72,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_5_0.png",
           "width": 304,
           "class": "ImageResourceLevel",
           "height": 112
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 0.44,
        "hfov": 17.1
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_hq.jpeg",
       "width": 6000,
       "class": "ImageResourceLevel",
       "height": 6000
      },
      {
       "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "DD22",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": 29.63,
        "hfov": 6.52,
        "pitch": -34.85,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_0_0_0_map.gif",
           "width": 66,
           "class": "ImageResourceLevel",
           "height": 60
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E3A3EE5_37DC_5BD8_41C8_33CFFC8F7890",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -34.85,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_0_0.png",
           "width": 132,
           "class": "ImageResourceLevel",
           "height": 120
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 29.63,
        "hfov": 6.52
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -60.19,
        "hfov": 7.34,
        "pitch": -37.49,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_1_0_0_map.gif",
           "width": 77,
           "class": "ImageResourceLevel",
           "height": 70
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3D38FD86_37EF_FE58_41B7_AFC0521E4566",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -37.49,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_1_0.png",
           "width": 154,
           "class": "ImageResourceLevel",
           "height": 140
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -60.19,
        "hfov": 7.34
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 74.98,
        "hfov": 15.73,
        "pitch": -35.62,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_3_0_0_map.gif",
           "width": 161,
           "class": "ImageResourceLevel",
           "height": 124
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_3468A33C_390C_2355_41C4_B9528E363B84, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_35AFC63C_3917_E555_41B4_E238C7413F27",
      "items": [
       {
        "pitch": -35.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_3_0.png",
           "width": 322,
           "class": "ImageResourceLevel",
           "height": 249
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 74.98,
        "hfov": 15.73
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -90.62,
        "hfov": 8.05,
        "pitch": -47.53,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_2_0_0_map.gif",
           "width": 99,
           "class": "ImageResourceLevel",
           "height": 87
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_340F3722_393C_236D_41A5_B400B09E816E, null, false)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_35A8204C_393C_3D35_41C7_CCB9CB0E717C",
      "items": [
       {
        "pitch": -47.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_2_0.png",
           "width": 198,
           "class": "ImageResourceLevel",
           "height": 174
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -90.62,
        "hfov": 8.05
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_hq.jpeg",
       "width": 6000,
       "class": "ImageResourceLevel",
       "height": 6000
      },
      {
       "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "DD33",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_314DF7C7_37B4_49E7_4192_0FC64264992A",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": -134.87,
        "hfov": 4.39,
        "pitch": -20.52,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_3_0_0_map.gif",
           "width": 39,
           "class": "ImageResourceLevel",
           "height": 43
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E6A5D25_37DB_DE5B_41BE_AABE6A9CAF26",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -20.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_3_0.png",
           "width": 78,
           "class": "ImageResourceLevel",
           "height": 87
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -134.87,
        "hfov": 4.39
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -173.15,
        "hfov": 4.16,
        "pitch": -24.95,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_2_0_0_map.gif",
           "width": 38,
           "class": "ImageResourceLevel",
           "height": 50
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E3CBC35_37DC_FEBB_41A4_385DED64F6B9",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -24.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_2_0.png",
           "width": 76,
           "class": "ImageResourceLevel",
           "height": 100
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -173.15,
        "hfov": 4.16
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": -26.68,
        "hfov": 6,
        "pitch": -30.71,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_1_0_0_map.gif",
           "width": 58,
           "class": "ImageResourceLevel",
           "height": 50
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3DDAB81D_37DD_C66B_41B0_995DAB4326F1",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -30.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_1_0.png",
           "width": 116,
           "class": "ImageResourceLevel",
           "height": 100
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -26.68,
        "hfov": 6
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 48.66,
        "hfov": 4.95,
        "pitch": -44.27,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_0_0_0_map.gif",
           "width": 57,
           "class": "ImageResourceLevel",
           "height": 59
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3D9C0676_37D5_CAB8_41C9_90216F0821DF",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -44.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_0_0.png",
           "width": 115,
           "class": "ImageResourceLevel",
           "height": 119
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 48.66,
        "hfov": 4.95
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 31.39,
        "hfov": 5.65,
        "pitch": 14.29,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_4_0_0_map.gif",
           "width": 48,
           "class": "ImageResourceLevel",
           "height": 32
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E286AD1C_F21A_5898_41B2_412675516644",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 14.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_4_0.png",
           "width": 97,
           "class": "ImageResourceLevel",
           "height": 64
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 31.39,
        "hfov": 5.65
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 31.13,
        "hfov": 10.47,
        "pitch": 11.1,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_5_0_map.gif",
           "width": 39,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Rs 20000"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E682F585_F219_E868_41E0_26CAA7822D9C",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 11.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_5_0.png",
           "width": 177,
           "class": "ImageResourceLevel",
           "height": 72
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 31.13,
        "hfov": 10.47
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_hq.jpeg",
       "width": 6000,
       "class": "ImageResourceLevel",
       "height": 6000
      },
      {
       "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "Kitchen11",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E",
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_t.jpg",
  "frames": [
   {
    "overlays": [
     {
      "maps": [
       {
        "yaw": 0.43,
        "hfov": 5.54,
        "pitch": -44.7,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_0_0_0_map.gif",
           "width": 64,
           "class": "ImageResourceLevel",
           "height": 67
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3D92699E_37D4_C668_4192_63DF4F545BBE",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -44.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_0_0.png",
           "width": 129,
           "class": "ImageResourceLevel",
           "height": 134
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 0.43,
        "hfov": 5.54
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 91.54,
        "hfov": 10.87,
        "pitch": 32.7,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_1_0_0_map.gif",
           "width": 107,
           "class": "ImageResourceLevel",
           "height": 67
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E0426CD2_F216_59E8_41ED_3B93288FA3BC",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 32.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_1_0.png",
           "width": 215,
           "class": "ImageResourceLevel",
           "height": 134
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 91.54,
        "hfov": 10.87
       }
      ],
      "rollOverDisplay": false
     },
     {
      "maps": [
       {
        "yaw": 91.96,
        "hfov": 9.35,
        "pitch": 28.34,
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_2_0_map.gif",
           "width": 43,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "data": {
       "label": "Rs 10000\u000d"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E24FFA6A_F21A_78B8_4195_0830AB91418B",
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": 28.34,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_2_0.png",
           "width": 177,
           "class": "ImageResourceLevel",
           "height": 65
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 91.96,
        "hfov": 9.35
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "stereoSphere": {
     "levels": [
      {
       "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_hq.jpeg",
       "width": 6000,
       "class": "ImageResourceLevel",
       "height": 6000
      },
      {
       "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel",
       "height": 3217
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_t.jpg"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "camera": "this.panorama_302B9125_37B4_C65B_414A_73DA2D222D75_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_302B9125_37B4_C65B_414A_73DA2D222D75",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "camera": "this.panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "camera": "this.panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_314D2BE5_37B4_B9DB_41B6_12F542295845",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "camera": "this.panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "camera": "this.panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_314DF7C7_37B4_49E7_4192_0FC64264992A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "camera": "this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "camera": "this.panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "video_0086BFB8_0C0F_B5E9_419D_7BD1DDF5326C",
  "width": 2048,
  "class": "Video",
  "height": 1080,
  "label": "171003D_002_2K",
  "video": {
   "width": 1322,
   "mp4Url": "media/video_0086BFB8_0C0F_B5E9_419D_7BD1DDF5326C.mp4",
   "class": "VideoResource",
   "height": 698
  },
  "scaleMode": "fit_inside",
  "loop": false,
  "thumbnailUrl": "media/video_0086BFB8_0C0F_B5E9_419D_7BD1DDF5326C_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "buttonPause": "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "buttonRestart": "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76"
 },
 {
  "id": "playList_03DFEB78_0C13_9D69_41A5_8811921A81F2",
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_03DFEB78_0C13_9D69_41A5_8811921A81F2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_03DFEB78_0C13_9D69_41A5_8811921A81F2, 0, this.video_0086BFB8_0C0F_B5E9_419D_7BD1DDF5326C)",
    "media": "this.video_0086BFB8_0C0F_B5E9_419D_7BD1DDF5326C",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"
   }
  ],
  "class": "PlayList"
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "81%",
    "url": "media/photo_3213B343_38FF_E333_41C7_634F0A3E87A7.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03A8DB64_0C13_9E99_4197_B0CD52C8F31F_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2464"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "18%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099cc;font-size:30px;\">Rs 13600</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03A8DB64_0C13_9E99_4197_B0CD52C8F31F",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2465"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_3218127A_38FC_7DDD_4199_18DAE36EBF88",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window3834"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "74%",
    "url": "media/photo_3443C664_38FC_25F5_41C9_3B834E79310F.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D34B66_0C13_9E99_4175_55CCC475C82F_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2466"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "25%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003366;font-size:30px;\">Rs 19550</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D34B66_0C13_9E99_4175_55CCC475C82F",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2467"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_34DE85A4_38FC_6775_41C7_0F3B843C084E",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window5295"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "83%",
    "url": "media/photo_331227F0_38F4_22ED_41C3_5CB441770B81.jpg",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D3DB67_0C13_9D67_41A0_24B100DA61BF_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2468"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "16%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 3250</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D3DB67_0C13_9D67_41A0_24B100DA61BF",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2469"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_3380AC95_38F4_2557_41BB_12A55B85E8F3",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window6802"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "85%",
    "url": "media/photo_351D55D1_38F4_E72C_41BB_CABD4F489D30.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D28B69_0C13_9D6B_41A0_97A5136B28BA_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2470"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "14%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 46000</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D28B69_0C13_9D6B_41A0_97A5136B28BA",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2471"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_35A9A494_38F4_2555_4188_808D0EE50F06",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window8272"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#0066CC",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "83%",
    "url": "media/photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81.jpg",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D5CB6A_0C13_9D69_4185_2CDE3EEA53F8_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2472"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "16%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 14000</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D5CB6A_0C13_9D69_4185_2CDE3EEA53F8",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2473"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_34E7CE51_38EC_BAFB_41B9_1B878F65F7FD",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window20862"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "78%",
    "url": "media/photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D4BB6B_0C13_9D6F_4142_4EA37B84BD0F_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2474"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "21%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 17000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D4BB6B_0C13_9D6F_4142_4EA37B84BD0F",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2475"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_36B34A64_39DC_7AD8_41C2_FE24EB968BBB",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window24066"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "81%",
    "url": "media/photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D76B6D_0C13_9D6B_41A6_66F8454305AA_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2476"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "18%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\">Rs 5000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D76B6D_0C13_9D6B_41A6_66F8454305AA",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2477"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_36A29F14_39D5_BA78_41AF_6A6CD84EA0FB",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window25758"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "78%",
    "url": "media/photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D7CB6E_0C13_9D69_41A0_DB570673315E_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2478"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "21%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\">Rs 6000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D7CB6E_0C13_9D69_41A0_DB570673315E",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2479"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_36331B24_39EC_7A58_41CB_C046C9CD4AAB",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window27801"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "82%",
    "url": "media/photo_34263BE9_393C_62FF_419D_F50F60188A51.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D9AB70_0C13_9D79_41A3_0BF1E4AF8190_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2480"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "17%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\">Rs 18000</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D9AB70_0C13_9D79_41A3_0BF1E4AF8190",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2481"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_358C657D_393C_27D7_41AA_A3870A574844",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window19610"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "78%",
    "url": "media/photo_35DB7867_3934_6DF3_4183_B864755D89F2.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D80B71_0C13_9D7B_4199_60DB3DE15126_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2482"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "21%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 32000</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D80B71_0C13_9D7B_4199_60DB3DE15126",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2483"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_3561A08D_3934_1D37_41C6_73ADA086A6F9",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window17921"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "81%",
    "url": "media/photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03D8EB72_0C13_9D79_41A3_9C98E58139EE_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2484"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "18%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 7000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03D8EB72_0C13_9D79_41A3_9C98E58139EE",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2485"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_35B15315_390C_6357_41AC_38D3CCBC5D5C",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window24141"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "83%",
    "url": "media/photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68.jpg",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03DA0B74_0C13_9D79_4196_F78F581ADD45_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2486"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "16%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 35000</SPAN></SPAN></DIV></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03DA0B74_0C13_9D79_4196_F78F581ADD45",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2487"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_3468A33C_390C_2355_41C4_B9528E363B84",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window16874"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "backgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "class": "Window",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "backgroundColor": [],
  "creationPolicy": "delayed",
  "minHeight": 20,
  "modal": true,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorDirection": "horizontal",
  "scrollBarOpacity": 0.5,
  "bodyPaddingTop": 5,
  "closeButtonIconHeight": 12,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "veilColorDirection": "horizontal",
  "headerBackgroundOpacity": 1,
  "backgroundColorRatios": [],
  "footerHeight": 5,
  "titleFontFamily": "Arial",
  "paddingRight": 0,
  "bodyPaddingLeft": 5,
  "shadow": true,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "title": "",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontColor": "#000000",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "bodyPaddingBottom": 5,
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowVerticalLength": 0,
  "bodyBorderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titlePaddingTop": 5,
  "titleFontWeight": "normal",
  "children": [
   {
    "class": "Image",
    "minHeight": 0,
    "paddingLeft": 0,
    "borderSize": 0,
    "width": "100%",
    "paddingTop": 0,
    "height": "82%",
    "url": "media/photo_35FCF895_3934_2D57_41C9_4B001F2EF118.JPG",
    "scaleMode": "fit_inside",
    "paddingRight": 0,
    "shadow": false,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "image_uid03DAEB75_0C13_9D7B_4196_2FD4CEA2CF4D_0",
    "verticalAlign": "middle",
    "minWidth": 0,
    "data": {
     "name": "Image2488"
    },
    "borderRadius": 0,
    "horizontalAlign": "center",
    "backgroundOpacity": 0
   },
   {
    "class": "HTMLText",
    "minHeight": 0,
    "paddingLeft": 10,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 10,
    "width": "100%",
    "scrollBarColor": "#000000",
    "height": "17%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "propagateClick": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 4200</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "paddingBottom": 10,
    "id": "htmlText_uid03DAEB75_0C13_9D7B_4196_2FD4CEA2CF4D",
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "HTMLText2489"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   }
  ],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "borderSize": 0,
  "headerVerticalAlign": "middle",
  "width": 400,
  "scrollBarWidth": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "titlePaddingLeft": 5,
  "closeButtonIconLineWidth": 2,
  "headerPaddingTop": 10,
  "height": 600,
  "gap": 10,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonBackgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 11,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titlePaddingRight": 5,
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "closeButtonIconWidth": 12,
  "titleFontStyle": "normal",
  "headerBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "headerPaddingRight": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "propagateClick": false,
  "headerBorderSize": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "id": "window_340F3722_393C_236D_41A5_B400B09E816E",
  "footerBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "minWidth": 20,
  "headerPaddingLeft": 10,
  "headerPaddingBottom": 10,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "data": {
   "name": "Window22269"
  },
  "titleTextDecoration": "none",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "closeButtonIconColor": "#000000",
  "titlePaddingBottom": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_03F40B8B_0C13_9DAF_4187_C012C825BD72",
  "initialPosition": {
   "yaw": -3.56,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_03E11B96_0C13_9DA6_4173_C84FC09D40AE",
  "initialPosition": {
   "yaw": 172.74,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_03EC0BA2_0C13_9D99_4179_C214E402FAB1",
  "initialPosition": {
   "yaw": 28.95,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_1C1B8BAD_0C13_9DEB_41A6_53BC5F5CCFC1",
  "initialPosition": {
   "yaw": -165.94,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_1C080BB9_0C13_9DEB_4195_E2C2C4D12F22",
  "initialPosition": {
   "yaw": -156.91,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_1C37FBC4_0C13_9D99_4191_2423733C6AD8",
  "initialPosition": {
   "yaw": 4.02,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_1C273BD0_0C13_9DB9_419E_8F672DC12DCE",
  "initialPosition": {
   "yaw": -176.03,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "class": "PanoramaCamera",
  "id": "camera_1C52DBDB_0C13_9DAF_419D_C71DF5C0D46A",
  "initialPosition": {
   "yaw": -24.32,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "data": {
   "label": "Bright Shining Love (vocal mix)"
  },
  "class": "MediaAudio",
  "id": "audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD",
  "audio": {
   "oggUrl": "media/audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD.mp3"
  },
  "autoplay": true
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Bed Rate 11",
  "id": "photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81",
  "thumbnailUrl": "media/photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Wardrobe Rate88",
  "id": "photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3",
  "thumbnailUrl": "media/photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Side table Rate66",
  "id": "photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743",
  "thumbnailUrl": "media/photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Drawer Rack Rate77",
  "id": "photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB",
  "thumbnailUrl": "media/photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3213B343_38FF_E333_41C7_634F0A3E87A7.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Wardrobe Rate11",
  "id": "photo_3213B343_38FF_E333_41C7_634F0A3E87A7",
  "thumbnailUrl": "media/photo_3213B343_38FF_E333_41C7_634F0A3E87A7_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3443C664_38FC_25F5_41C9_3B834E79310F.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Bed Rate44",
  "id": "photo_3443C664_38FC_25F5_41C9_3B834E79310F",
  "thumbnailUrl": "media/photo_3443C664_38FC_25F5_41C9_3B834E79310F_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_331227F0_38F4_22ED_41C3_5CB441770B81.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Side table Rate66",
  "id": "photo_331227F0_38F4_22ED_41C3_5CB441770B81",
  "thumbnailUrl": "media/photo_331227F0_38F4_22ED_41C3_5CB441770B81_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_351D55D1_38F4_E72C_41BB_CABD4F489D30.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Tv Panel Rate55",
  "id": "photo_351D55D1_38F4_E72C_41BB_CABD4F489D30",
  "thumbnailUrl": "media/photo_351D55D1_38F4_E72C_41BB_CABD4F489D30_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Tv panel Rate66",
  "id": "photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68",
  "thumbnailUrl": "media/photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_35DB7867_3934_6DF3_4183_B864755D89F2.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Sofa Rate22",
  "id": "photo_35DB7867_3934_6DF3_4183_B864755D89F2",
  "thumbnailUrl": "media/photo_35DB7867_3934_6DF3_4183_B864755D89F2_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_34263BE9_393C_62FF_419D_F50F60188A51.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Dining Table Rate11",
  "id": "photo_34263BE9_393C_62FF_419D_F50F60188A51",
  "thumbnailUrl": "media/photo_34263BE9_393C_62FF_419D_F50F60188A51_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_35FCF895_3934_2D57_41C9_4B001F2EF118.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Coffee Table Rate88",
  "id": "photo_35FCF895_3934_2D57_41C9_4B001F2EF118",
  "thumbnailUrl": "media/photo_35FCF895_3934_2D57_41C9_4B001F2EF118_t.jpg"
 },
 {
  "width": 500,
  "height": 500,
  "duration": 5000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9.JPG",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "Photo",
  "label": "Shoe Rack Rate1010",
  "id": "photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9",
  "thumbnailUrl": "media/photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9_t.jpg"
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBottom": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "minHeight": 50,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarOpacity": 1,
  "playbackBarHeight": 20,
  "progressBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressHeight": 20,
  "progressBorderSize": 2,
  "playbackBarHeadWidth": 6,
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "shadow": false,
  "progressBorderRadius": 4,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressLeft": 10,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBorderRadius": 3,
  "transitionDuration": 500,
  "paddingLeft": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "borderSize": 0,
  "width": "100%",
  "toolTipBorderSize": 1,
  "paddingTop": 0,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarHeadHeight": 30,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontColor": "#606060",
  "toolTipDisplayTime": 600,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 4,
  "toolTipFontFamily": "Arial",
  "top": 0,
  "playbackBarBottom": 10,
  "propagateClick": false,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 10,
  "paddingBottom": 0,
  "id": "MainViewer",
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadOpacity": 1,
  "toolTipShadowOpacity": 1,
  "progressOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadow": true,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "left": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowHorizontalLength": 0
 },
 {
  "class": "Container",
  "horizontalAlign": "center",
  "minHeight": 1,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "borderSize": 0,
  "creationPolicy": "delayed",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "width": "100%",
  "overflow": "scroll",
  "height": 142,
  "gap": 10,
  "children": [
   {
    "class": "Container",
    "horizontalAlign": "center",
    "minHeight": 20,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "creationPolicy": "delayed",
    "width": 360,
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "overflow": "hidden",
    "height": "96.479%",
    "gap": 4,
    "children": [
     "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
     "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
     "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
     "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
     {
      "class": "Container",
      "horizontalAlign": "center",
      "minHeight": 20,
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "borderSize": 0,
      "creationPolicy": "delayed",
      "width": 40,
      "scrollBarOpacity": 0.5,
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "overflow": "hidden",
      "height": "100%",
      "gap": 4,
      "children": [
       "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
       "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
       "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
      ],
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "shadow": false,
      "contentOpaque": false,
      "propagateClick": false,
      "paddingBottom": 0,
      "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
      "verticalAlign": "middle",
      "minWidth": 20,
      "layout": "vertical",
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "Container31988"
      },
      "borderRadius": 0,
      "backgroundOpacity": 0
     },
     "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
     "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
     {
      "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
      "class": "IconButton",
      "horizontalAlign": "center",
      "minHeight": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "mode": "toggle",
      "width": 40,
      "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
      "paddingTop": 0,
      "height": 40,
      "paddingRight": 0,
      "shadow": false,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
      "propagateClick": false,
      "verticalAlign": "middle",
      "minWidth": 0,
      "data": {
       "name": "Button31994"
      },
      "borderRadius": 0,
      "transparencyActive": true,
      "backgroundOpacity": 0
     },
     "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
    ],
    "paddingRight": 0,
    "shadow": false,
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "paddingBottom": 0,
    "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
    "verticalAlign": "middle",
    "minWidth": 360,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container31983"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0
   },
   "this.IconButton_34079587_391C_6733_41B9_CE99BD676CF8"
  ],
  "paddingRight": 0,
  "shadow": false,
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "propagateClick": false,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minWidth": 1,
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "Container44746"
  },
  "borderRadius": 0,
  "left": "0%",
  "backgroundOpacity": 0
 }
], 
 "mouseWheelEnabled": true,
 "class": "Player",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "paddingLeft": 0,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } }
 },
 "minHeight": 20,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "overflow": "visible",
 "height": "100%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "shadow": false,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "delayed",
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player43899"
 },
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "start": "this.playAudioList([this.audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_34079587_391C_6733_41B9_CE99BD676CF8], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)"
})