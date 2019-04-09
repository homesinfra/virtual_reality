TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF",
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
        "click": "this.startPanoramaWithCamera(this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A, this.camera_E6FA1E68_F2BF_D36F_41D1_4401BE1D57FB)"
       }
      ],
      "id": "overlay_FC4F7472_F287_5763_41D6_CEC40157B37E",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.98,
        "yaw": 14.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -18.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 3.98,
        "yaw": 14.06,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -18.47
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
       "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_hq.jpeg"
      },
      {
       "height": 4002,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_t.jpg"
   }
  ],
  "label": "360 outside1",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 14.06,
    "panorama": {
     "id": "panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
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
           "click": "this.startPanoramaWithCamera(this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9, this.camera_E6D0EE7D_F2BF_D361_41C9_DE839F6E1CED)"
          }
         ],
         "id": "overlay_E27896E7_F287_5361_41E3_DF581EF73DC5",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 2.46,
           "yaw": -7.26,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "class": "ImageResourceLevel",
              "width": 22,
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 1.82
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "hfov": 2.46,
           "yaw": -7.26,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 44,
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 1.82
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
           "click": "this.startPanoramaWithCamera(this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF, this.camera_E6DAAE88_F2BF_D3AF_41D0_7B0FCD8C34CE)"
          }
         ],
         "id": "overlay_E23EC227_F285_72E1_41E5_4407478BCE22",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.58,
           "yaw": -175.98,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 50,
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -11.45
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "hfov": 5.58,
           "yaw": -175.98,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 86,
              "class": "ImageResourceLevel",
              "width": 101,
              "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -11.45
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
          "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_hq.jpeg"
         },
         {
          "height": 4002,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_t.jpg"
      }
     ],
     "label": "360 outside 22",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -7.26,
       "panorama": {
        "id": "panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
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
              "rollOver": "this.mainPlayList.set('selectedIndex', 1)",
              "click": "this.startPanoramaWithCamera(this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A, this.camera_E6F1AE5D_F2BF_D2A1_41EA_DEA3B8CC5C7C)"
             }
            ],
            "id": "overlay_E7C7DACF_F26E_39F8_41D2_C87F1FB62A58",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.29,
              "yaw": -151.05,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 38,
                 "class": "ImageResourceLevel",
                 "width": 30,
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -15.46
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "hfov": 3.29,
              "yaw": -151.05,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 77,
                 "class": "ImageResourceLevel",
                 "width": 60,
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -15.46
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
              "click": "this.startPanoramaWithCamera(this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE, this.camera_E6E74E52_F2BF_D2A3_41E6_E680E92E7B3F)"
             }
            ],
            "id": "overlay_E763AFFF_F26E_3798_41D8_37FBE3FC1650",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.41,
              "yaw": 3.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 31,
                 "class": "ImageResourceLevel",
                 "width": 31,
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -17.46
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "hfov": 3.41,
              "yaw": 3.97,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 63,
                 "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -17.46
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
             "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_hq.jpeg"
            },
            {
             "height": 4002,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_t.jpg"
         }
        ],
        "label": "360 gallery 11",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 3.97,
          "panorama": {
           "id": "panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688, this.camera_E69DEE48_F2BF_D2AF_41C5_BC0A91B5DB51)"
                }
               ],
               "id": "overlay_E72A173C_F26A_6898_41D6_23AAEA560AA0",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 3.78,
                 "yaw": 23.09,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 45,
                    "class": "ImageResourceLevel",
                    "width": 35,
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.09
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "hfov": 3.78,
                 "yaw": 23.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 91,
                    "class": "ImageResourceLevel",
                    "width": 71,
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -19.09
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
                 "click": "this.startPanoramaWithCamera(this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9, this.camera_E6932E3D_F2BF_D2E1_41BF_0B7E3F3F48DE)"
                }
               ],
               "id": "overlay_E751D923_F26A_38A8_41EA_9F2045B5C6A0",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.2,
                 "yaw": 176.44,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 47,
                    "class": "ImageResourceLevel",
                    "width": 38,
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -14.09
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "hfov": 4.2,
                 "yaw": 176.44,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 95,
                    "class": "ImageResourceLevel",
                    "width": 77,
                    "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -14.09
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
                "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_hq.jpeg"
               },
               {
                "height": 4002,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_t.jpg"
            }
           ],
           "label": "360 gallery 22",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "yaw": 176.44,
             "panorama": "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
             "backwardYaw": 3.97,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "yaw": 23.09,
             "panorama": {
              "id": "panorama_314DFC27_37AB_BE58_41B2_E76F792BC688",
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
                    "rollOver": "this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "id": "overlay_3DFE45E5_37D4_49DB_41A5_A09330A0FE1E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.74,
                    "yaw": 1.02,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 52,
                       "class": "ImageResourceLevel",
                       "width": 60,
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -22.84
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "hfov": 6.74,
                    "yaw": 1.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 105,
                       "class": "ImageResourceLevel",
                       "width": 121,
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -22.84
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
                    "click": "this.startPanoramaWithCamera(this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE, this.camera_E6C47E72_F2BF_D360_41E1_CD4B5D4658F8)"
                   }
                  ],
                  "id": "overlay_E47DD1AE_F216_6BB8_41C3_AEB6DE2339B6",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.44,
                    "yaw": 155.68,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 65,
                       "class": "ImageResourceLevel",
                       "width": 61,
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -30.08
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "hfov": 6.44,
                    "yaw": 155.68,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 131,
                       "class": "ImageResourceLevel",
                       "width": 123,
                       "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -30.08
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "stereoSphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 6000,
                   "class": "ImageResourceLevel",
                   "width": 6000,
                   "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_hq.jpeg"
                  },
                  {
                   "height": 3217,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_t.jpg"
               }
              ],
              "label": "Entry Door11",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "yaw": 155.68,
                "panorama": "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
                "backwardYaw": 23.09,
                "distance": 1
               }
              ],
              "hfovMin": 60,
              "vfov": 180,
              "thumbnailUrl": "media/panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_t.jpg"
             },
             "backwardYaw": 155.68,
             "distance": 1
            }
           ],
           "hfovMin": 60,
           "vfov": 180,
           "thumbnailUrl": "media/panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_t.jpg"
          },
          "backwardYaw": 176.44,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "yaw": -151.05,
          "panorama": "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
          "backwardYaw": -7.26,
          "distance": 1
         }
        ],
        "hfovMin": 60,
        "vfov": 180,
        "thumbnailUrl": "media/panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_t.jpg"
       },
       "backwardYaw": -151.05,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -175.98,
       "panorama": "this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF",
       "backwardYaw": 14.06,
       "distance": 1
      }
     ],
     "hfovMin": 60,
     "vfov": 180,
     "thumbnailUrl": "media/panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_t.jpg"
    },
    "backwardYaw": -175.98,
    "distance": 1
   }
  ],
  "hfovMin": 60,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_t.jpg"
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonMoveLeft": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
   "data": {
    "name": "Button31987"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "buttonRestart": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
   "data": {
    "name": "Button31985"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
   "data": {
    "name": "Button31986"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
   "data": {
    "name": "Button31991"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
   "data": {
    "name": "Button31993"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
   "data": {
    "name": "Button31992"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "buttonMoveUp": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
   "data": {
    "name": "Button31989"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "buttonPause": {
   "borderSize": 0,
   "mode": "toggle",
   "paddingBottom": 0,
   "height": 40,
   "width": 40,
   "verticalAlign": "middle",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
   "data": {
    "name": "Button31990"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "mouseControlMode": "drag_acceleration",
  "buttonZoomOut": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
   "data": {
    "name": "Button31984"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "buttonZoomIn": {
   "borderSize": 0,
   "mode": "push",
   "paddingBottom": 0,
   "height": 32,
   "width": 32,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
   "paddingRight": 0,
   "minHeight": 0,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
   "data": {
    "name": "Button31995"
   },
   "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
   "transparencyActive": true,
   "minWidth": 0,
   "shadow": false
  },
  "buttonCardboardView": {
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
   "class": "IconButton",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "minHeight": 1,
   "cursor": "hand",
   "backgroundOpacity": 0,
   "id": "IconButton_34079587_391C_6733_41B9_CE99BD676CF8",
   "data": {
    "name": "IconButton6710"
   },
   "maxHeight": 23,
   "iconURL": "skin/IconButton_34079587_391C_6733_41B9_CE99BD676CF8.png",
   "transparencyActive": false,
   "minWidth": 1,
   "shadow": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_camera",
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
 "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_camera",
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
 "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_camera",
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
 "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_t.jpg",
  "label": "Bedroom11",
  "vfov": 180,
  "class": "Panorama",
  "partial": false,
  "id": "panorama_302B9125_37B4_C65B_414A_73DA2D222D75",
  "hfovMin": 60,
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_3EF790F9_37D7_C7A8_41C6_74BF90CC0CE2",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.99,
        "yaw": 140.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -31.82
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 5.99,
        "yaw": 140.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 145,
           "class": "ImageResourceLevel",
           "width": 117,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -31.82
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_3218127A_38FC_7DDD_4199_18DAE36EBF88, null, false)"
       }
      ],
      "id": "overlay_32CE6B8F_38FC_E334_41C8_6DA3673CB37A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16,
        "yaw": -93.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 142,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 16,
        "yaw": -93.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 231,
           "class": "ImageResourceLevel",
           "width": 285,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -20.75
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_34DE85A4_38FC_6775_41C7_0F3B843C084E, null, false)"
       }
      ],
      "id": "overlay_3364CC73_38FC_25D3_41C0_11844EE3BBAD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.76,
        "yaw": -4.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 132,
           "class": "ImageResourceLevel",
           "width": 193,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -36.29
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 18.76,
        "yaw": -4.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 387,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -36.29
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_3380AC95_38F4_2557_41BB_12A55B85E8F3, null, false)"
       }
      ],
      "id": "overlay_346A953C_38F4_2754_41BF_55BC5328CDAD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.17,
        "yaw": -64.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 152,
           "class": "ImageResourceLevel",
           "width": 113,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -41.55
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.17,
        "yaw": -64.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 305,
           "class": "ImageResourceLevel",
           "width": 226,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -41.55
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_35A9A494_38F4_2555_4188_808D0EE50F06, null, false)"
       }
      ],
      "id": "overlay_3422F6F3_38F4_22D2_41C9_645DA2AE4CBC",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.26,
        "yaw": 55.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "class": "ImageResourceLevel",
           "width": 171,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -27.73
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 18.26,
        "yaw": 55.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 228,
           "class": "ImageResourceLevel",
           "width": 343,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -27.73
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
      "id": "overlay_E67E444E_F21A_68F8_41C8_C6B539A09E65",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.11,
        "yaw": -55.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": 27.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 5.11,
        "yaw": -55.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 27.13
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
      "id": "overlay_E7AC6518_F21A_E898_41EA_9F6B18D6F9FD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.74,
        "yaw": -54.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 29,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_6_0_map.gif"
          }
         ]
        },
        "pitch": 22.33
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Rs 14000"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 11.74,
        "yaw": -54.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 116,
           "class": "ImageResourceLevel",
           "width": 211,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_6_0.png"
          }
         ]
        },
        "pitch": 22.33
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
      "id": "overlay_E1C89DBF_F27B_FB98_41CE_4F6D1F9B4744",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.83,
        "yaw": 2.53,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 32,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_7_0_map.gif"
          }
         ]
        },
        "pitch": 31.9
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Fall Ceiling\u000dRs 11900"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.83,
        "yaw": 2.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 212,
           "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_0_HS_7_0.png"
          }
         ]
        },
        "pitch": 31.9
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_302B9125_37B4_C65B_414A_73DA2D222D75_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_302B9125_37B4_C65B_414A_73DA2D222D75_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_t.jpg",
  "label": "Bedroom22",
  "vfov": 180,
  "class": "Panorama",
  "partial": false,
  "id": "panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2",
  "hfovMin": 60,
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_3E64E6B6_37D4_CBB8_41B4_62F17F6BFB64",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.65,
        "yaw": 163.25,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 81,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -33.24
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 6.65,
        "yaw": 163.25,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 163,
           "class": "ImageResourceLevel",
           "width": 132,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -33.24
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_34E7CE51_38EC_BAFB_41B9_1B878F65F7FD, null, false)"
       }
      ],
      "id": "overlay_343DCD20_38EC_5E58_41BA_657865797EB4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.83,
        "yaw": -9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -37.14
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 25.83,
        "yaw": -9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 344,
           "class": "ImageResourceLevel",
           "width": 540,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -37.14
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_36B34A64_39DC_7AD8_41C2_FE24EB968BBB, null, false)"
       }
      ],
      "id": "overlay_36C535FB_39DC_C9AF_41BB_41A0B013BB19",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.34,
        "yaw": -42.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 135,
           "class": "ImageResourceLevel",
           "width": 99,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.7
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 11.34,
        "yaw": -42.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 271,
           "class": "ImageResourceLevel",
           "width": 198,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -17.7
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_36A29F14_39D5_BA78_41AF_6A6CD84EA0FB, null, false)"
       }
      ],
      "id": "overlay_37834B03_39D4_5A58_41C5_FF0F6BBAC6C7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.8,
        "yaw": 22.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 104,
           "class": "ImageResourceLevel",
           "width": 86,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -31.45
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 8.8,
        "yaw": 22.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 209,
           "class": "ImageResourceLevel",
           "width": 172,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -31.45
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_36331B24_39EC_7A58_41CB_C046C9CD4AAB, null, false)"
       }
      ],
      "id": "overlay_286AF0D3_39ED_C7FF_41CB_8403D16C7195",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.44,
        "yaw": 115.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 113,
           "class": "ImageResourceLevel",
           "width": 120,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -49.19
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 9.44,
        "yaw": 115.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 227,
           "class": "ImageResourceLevel",
           "width": 240,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -49.19
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
      "id": "overlay_E3432A95_F21E_5868_41E6_79BD143D4BA6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.37,
        "yaw": -76.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 49,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": 25.63
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 5.37,
        "yaw": -76.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 99,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 25.63
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
      "id": "overlay_E700035F_F21E_2898_41E7_5B7EC3370F86",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.06,
        "yaw": -76.72,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_6_0_map.gif"
          }
         ]
        },
        "pitch": 21.5
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Rs 12000"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.06,
        "yaw": -76.72,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 64,
           "class": "ImageResourceLevel",
           "width": 180,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_6_0.png"
          }
         ]
        },
        "pitch": 21.5
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
      "id": "overlay_FD84FA4B_F27E_78FF_41D8_F4102334634B",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.99,
        "yaw": -5.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 31,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_7_0_map.gif"
          }
         ]
        },
        "pitch": 31.56
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Fall Ceiling \u000dRs 10500"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 11.99,
        "yaw": -5.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 118,
           "class": "ImageResourceLevel",
           "width": 234,
           "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_0_HS_7_0.png"
          }
         ]
        },
        "pitch": 31.56
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_t.jpg",
  "label": "DD11",
  "vfov": 180,
  "class": "Panorama",
  "partial": false,
  "id": "panorama_314D2BE5_37B4_B9DB_41B6_12F542295845",
  "hfovMin": 60,
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_3DD9D25E_37DC_4AE8_41C8_CA3205583B61",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.84,
        "yaw": 14.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -32.79
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 4.84,
        "yaw": 14.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -32.79
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "id": "overlay_3DFAF66E_37DC_4AA8_4183_F686FC2D1B71",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.49,
        "yaw": -134.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 70,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.42
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.49,
        "yaw": -134.91,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 141,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -28.42
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_358C657D_393C_27D7_41AA_A3870A574844, null, false)"
       }
      ],
      "id": "overlay_35F02B54_3914_23D4_41AC_CD1C755A6B6D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.84,
        "yaw": -48.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "class": "ImageResourceLevel",
           "width": 116,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -39.08
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.84,
        "yaw": -48.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 177,
           "class": "ImageResourceLevel",
           "width": 232,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -39.08
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_3561A08D_3934_1D37_41C6_73ADA086A6F9, null, false)"
       }
      ],
      "id": "overlay_34C873FC_3914_62D4_41B2_1E1B41BD8CA4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.35,
        "yaw": 60.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 107,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.82
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 11.35,
        "yaw": 60.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 199,
           "class": "ImageResourceLevel",
           "width": 215,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -28.82
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_35B15315_390C_6357_41AC_38D3CCBC5D5C, null, false)"
       }
      ],
      "id": "overlay_35EE9B0C_3937_E335_41C6_FA24FAC06D9D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.61,
        "yaw": -124.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 117,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -47.25
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 9.61,
        "yaw": -124.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 197,
           "class": "ImageResourceLevel",
           "width": 235,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -47.25
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
      "id": "overlay_E0D120E8_F27F_E9B8_41CB_086AF7A68F19",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.1,
        "yaw": 0.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_5_0_map.gif"
          }
         ]
        },
        "pitch": 20.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Fall Ceiling \u000dRs 17500\u000d"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 17.1,
        "yaw": 0.44,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 112,
           "class": "ImageResourceLevel",
           "width": 304,
           "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 20.72
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_t.jpg",
  "label": "DD22",
  "vfov": 180,
  "class": "Panorama",
  "partial": false,
  "id": "panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6",
  "hfovMin": 60,
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_3E3A3EE5_37DC_5BD8_41C8_33CFFC8F7890",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.52,
        "yaw": 29.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -34.85
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 6.52,
        "yaw": 29.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 132,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -34.85
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "id": "overlay_3D38FD86_37EF_FE58_41B7_AFC0521E4566",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.34,
        "yaw": -60.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "class": "ImageResourceLevel",
           "width": 77,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -37.49
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.34,
        "yaw": -60.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 140,
           "class": "ImageResourceLevel",
           "width": 154,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -37.49
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_3468A33C_390C_2355_41C4_B9528E363B84, null, false)"
       }
      ],
      "id": "overlay_35AFC63C_3917_E555_41B4_E238C7413F27",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.73,
        "yaw": 74.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 124,
           "class": "ImageResourceLevel",
           "width": 161,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -35.62
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 15.73,
        "yaw": 74.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 249,
           "class": "ImageResourceLevel",
           "width": 322,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -35.62
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "rollOver": "this.showWindow(this.window_340F3722_393C_236D_41A5_B400B09E816E, null, false)"
       }
      ],
      "id": "overlay_35A8204C_393C_3D35_41C7_CCB9CB0E717C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.05,
        "yaw": -90.62,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 99,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -47.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 8.05,
        "yaw": -90.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 174,
           "class": "ImageResourceLevel",
           "width": 198,
           "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -47.53
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_t.jpg",
  "label": "DD33",
  "vfov": 180,
  "class": "Panorama",
  "partial": false,
  "id": "panorama_314DF7C7_37B4_49E7_4192_0FC64264992A",
  "hfovMin": 60,
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_3E6A5D25_37DB_DE5B_41BE_AABE6A9CAF26",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.39,
        "yaw": -134.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 39,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.52
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 4.39,
        "yaw": -134.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 78,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -20.52
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_3E3CBC35_37DC_FEBB_41A4_385DED64F6B9",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.16,
        "yaw": -173.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 38,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -24.95
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 4.16,
        "yaw": -173.15,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 76,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -24.95
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_3DDAB81D_37DD_C66B_41B0_995DAB4326F1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6,
        "yaw": -26.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -30.71
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 6,
        "yaw": -26.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 116,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -30.71
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "id": "overlay_3D9C0676_37D5_CAB8_41C9_90216F0821DF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.95,
        "yaw": 48.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 57,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -44.27
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 4.95,
        "yaw": 48.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 115,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -44.27
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
      "id": "overlay_E286AD1C_F21A_5898_41B2_412675516644",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.65,
        "yaw": 31.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "class": "ImageResourceLevel",
           "width": 48,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": 14.29
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 5.65,
        "yaw": 31.39,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 64,
           "class": "ImageResourceLevel",
           "width": 97,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_4_0.png"
          }
         ]
        },
        "pitch": 14.29
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
      "id": "overlay_E682F585_F219_E868_41E0_26CAA7822D9C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.47,
        "yaw": 31.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 39,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_5_0_map.gif"
          }
         ]
        },
        "pitch": 11.1
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Rs 20000"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.47,
        "yaw": 31.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 177,
           "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 11.1
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_camera",
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
 "this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688",
 {
  "class": "PanoramaCamera",
  "id": "panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_camera",
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
  "hfov": 360,
  "thumbnailUrl": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_t.jpg",
  "label": "Kitchen11",
  "vfov": 180,
  "class": "Panorama",
  "partial": false,
  "id": "panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E",
  "hfovMin": 60,
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
        "rollOver": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_3D92699E_37D4_C668_4192_63DF4F545BBE",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.54,
        "yaw": 0.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 64,
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -44.7
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 5.54,
        "yaw": 0.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 129,
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -44.7
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
      "id": "overlay_E0426CD2_F216_59E8_41ED_3B93288FA3BC",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.87,
        "yaw": 91.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 107,
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 32.7
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.87,
        "yaw": 91.54,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 215,
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 32.7
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
      "id": "overlay_E24FFA6A_F21A_78B8_4195_0830AB91418B",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.35,
        "yaw": 91.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_2_0_map.gif"
          }
         ]
        },
        "pitch": 28.34
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Rs 10000\u000d"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 9.35,
        "yaw": 91.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 177,
           "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 28.34
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "stereoSphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 6000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_hq.jpeg"
      },
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_camera",
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
    "media": "this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E1C6FC0F_F26A_F878_41E8_DEDD5FE37FDF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FC12FE2E_F285_D2E3_41EA_047A0E08808A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E1F23093_F26A_2868_41BC_FC6BED120DDE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E2929580_F26A_6868_41E9_E754DA6BB8C9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_302B9125_37B4_C65B_414A_73DA2D222D75",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_302B9125_37B4_C65B_414A_73DA2D222D75_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_31434700_37B4_CA58_41C4_B7BC2BF0C7A2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_314D2BE5_37B4_B9DB_41B6_12F542295845",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_314D2BE5_37B4_B9DB_41B6_12F542295845_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_314DD2D1_37B4_4BF8_41BC_AD053A9E7BC6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_314DF7C7_37B4_49E7_4192_0FC64264992A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_314DF7C7_37B4_49E7_4192_0FC64264992A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_314DFC27_37AB_BE58_41B2_E76F792BC688_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E",
    "camera": "this.panorama_314DB171_37AB_C6BB_41CB_CE4D09F7B20E_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)"
   }
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "81%",
    "verticalAlign": "middle",
    "url": "media/photo_3213B343_38FF_E333_41C7_634F0A3E87A7.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6BDEE16_F2BF_D2A3_41E5_77BE45274AE5_0",
    "data": {
     "name": "Image8534"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "18%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6BDEE16_F2BF_D2A3_41E5_77BE45274AE5",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099cc;font-size:30px;\">Rs 13600</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText8535"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_3218127A_38FC_7DDD_4199_18DAE36EBF88",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window3834"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "74%",
    "verticalAlign": "middle",
    "url": "media/photo_3443C664_38FC_25F5_41C9_3B834E79310F.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6815E18_F2BF_D2AF_41C0_2E05C106126D_0",
    "data": {
     "name": "Image8536"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "25%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6815E18_F2BF_D2AF_41C0_2E05C106126D",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003366;font-size:30px;\">Rs 19550</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8537"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_34DE85A4_38FC_6775_41C7_0F3B843C084E",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window5295"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "83%",
    "verticalAlign": "middle",
    "url": "media/photo_331227F0_38F4_22ED_41C3_5CB441770B81.jpg",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6816E19_F2BF_D2A1_41B7_9C55AD2E7158_0",
    "data": {
     "name": "Image8538"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "16%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6816E19_F2BF_D2A1_41B7_9C55AD2E7158",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 3250</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8539"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_3380AC95_38F4_2557_41BB_12A55B85E8F3",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window6802"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "85%",
    "verticalAlign": "middle",
    "url": "media/photo_351D55D1_38F4_E72C_41BB_CABD4F489D30.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE680DE1A_F2BF_D2A3_41D1_5B03C90FFEFE_0",
    "data": {
     "name": "Image8540"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "14%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE680DE1A_F2BF_D2A3_41D1_5B03C90FFEFE",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 46000</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8541"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_35A9A494_38F4_2555_4188_808D0EE50F06",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window8272"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "83%",
    "verticalAlign": "middle",
    "url": "media/photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81.jpg",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6838E1C_F2BF_D2A7_41EC_264500EF2715_0",
    "data": {
     "name": "Image8542"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "16%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6838E1C_F2BF_D2A7_41EC_264500EF2715",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 14000</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8543"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
  "titlePaddingRight": 5,
  "footerHeight": 5,
  "titlePaddingBottom": 5,
  "headerPaddingBottom": 10,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconLineWidth": 2,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#0066CC",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_34E7CE51_38EC_BAFB_41B9_1B878F65F7FD",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window20862"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "78%",
    "verticalAlign": "middle",
    "url": "media/photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE683FE1D_F2BF_D2A1_41D5_525AB77C2904_0",
    "data": {
     "name": "Image8544"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "21%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE683FE1D_F2BF_D2A1_41D5_525AB77C2904",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 17000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText8545"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_36B34A64_39DC_7AD8_41C2_FE24EB968BBB",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window24066"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "81%",
    "verticalAlign": "middle",
    "url": "media/photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6832E1E_F2BF_D2A3_41D9_788250B8750A_0",
    "data": {
     "name": "Image8546"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "18%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6832E1E_F2BF_D2A3_41D9_788250B8750A",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\">Rs 5000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText8547"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_36A29F14_39D5_BA78_41AF_6A6CD84EA0FB",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window25758"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "78%",
    "verticalAlign": "middle",
    "url": "media/photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE682BE20_F2BF_D29F_41E3_26E7D440922B_0",
    "data": {
     "name": "Image8548"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "21%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE682BE20_F2BF_D29F_41E3_26E7D440922B",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\">Rs 6000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText8549"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_36331B24_39EC_7A58_41CB_C046C9CD4AAB",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window27801"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "82%",
    "verticalAlign": "middle",
    "url": "media/photo_34263BE9_393C_62FF_419D_F50F60188A51.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6826E22_F2BF_D2E3_41EB_388D6FE01489_0",
    "data": {
     "name": "Image8550"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "17%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6826E22_F2BF_D2E3_41EB_388D6FE01489",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:30px;\">Rs 18000</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8551"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_358C657D_393C_27D7_41AA_A3870A574844",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window19610"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "78%",
    "verticalAlign": "middle",
    "url": "media/photo_35DB7867_3934_6DF3_4183_B864755D89F2.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE685FE23_F2BF_D2E1_41E6_5BDAFBBA0D97_0",
    "data": {
     "name": "Image8552"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "21%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE685FE23_F2BF_D2E1_41E6_5BDAFBBA0D97",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 32000</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8553"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_3561A08D_3934_1D37_41C6_73ADA086A6F9",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window17921"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "81%",
    "verticalAlign": "middle",
    "url": "media/photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6853E24_F2BF_D2E7_41EA_F96A9BCDB3C0_0",
    "data": {
     "name": "Image8554"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "18%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6853E24_F2BF_D2E7_41EA_F96A9BCDB3C0",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 7000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText8555"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_35B15315_390C_6357_41AC_38D3CCBC5D5C",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window24141"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "83%",
    "verticalAlign": "middle",
    "url": "media/photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68.jpg",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE684BE26_F2BF_D2E3_41B8_34A4912980CA_0",
    "data": {
     "name": "Image8556"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "16%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE684BE26_F2BF_D2E3_41B8_34A4912980CA",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 35000</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "HTMLText8557"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_3468A33C_390C_2355_41C4_B9528E363B84",
  "headerBackgroundColorDirection": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window16874"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "headerBorderColor": "#000000",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "backgroundColor": [],
  "shadow": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "closeButtonIconColor": "#000000",
  "bodyBorderSize": 0,
  "shadowSpread": 1,
  "verticalAlign": "middle",
  "bodyPaddingRight": 5,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
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
  "paddingRight": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilColorDirection": "horizontal",
  "minHeight": 20,
  "bodyPaddingLeft": 5,
  "closeButtonBackgroundColor": [],
  "title": "",
  "closeButtonIconHeight": 12,
  "titlePaddingLeft": 5,
  "layout": "vertical",
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "headerPaddingTop": 10,
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontFamily": "Arial",
  "creationPolicy": "delayed",
  "minWidth": 20,
  "children": [
   {
    "borderSize": 0,
    "paddingBottom": 0,
    "height": "82%",
    "verticalAlign": "middle",
    "url": "media/photo_35FCF895_3934_2D57_41C9_4B001F2EF118.JPG",
    "paddingLeft": 0,
    "paddingTop": 0,
    "borderRadius": 0,
    "class": "Image",
    "scaleMode": "fit_inside",
    "horizontalAlign": "center",
    "width": "100%",
    "paddingRight": 0,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "image_uidE6841E27_F2BF_D2E1_41EB_6DE0A873223F_0",
    "data": {
     "name": "Image8558"
    },
    "minWidth": 0,
    "shadow": false
   },
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "height": "17%",
    "borderRadius": 0,
    "paddingLeft": 10,
    "paddingTop": 10,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "width": "100%",
    "paddingRight": 10,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "id": "htmlText_uidE6841E27_F2BF_D2E1_41EB_6DE0A873223F",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:30px;\">Rs 4200</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "data": {
     "name": "HTMLText8559"
    },
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
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
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "paddingBottom": 0,
  "height": 600,
  "bodyPaddingTop": 5,
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
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Window",
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
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "id": "window_340F3722_393C_236D_41A5_B400B09E816E",
  "headerBackgroundColorDirection": "horizontal",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerBorderSize": 0,
  "data": {
   "name": "Window22269"
  },
  "headerVerticalAlign": "middle",
  "titleTextDecoration": "none",
  "titleFontColor": "#000000",
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "veilColorRatios": [
   0,
   1
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6932E3D_F2BF_D2E1_41BF_0B7E3F3F48DE",
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
   "yaw": -176.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E69DEE48_F2BF_D2AF_41C5_BC0A91B5DB51",
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
   "yaw": -24.32,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6E74E52_F2BF_D2A3_41E6_E680E92E7B3F",
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
   "yaw": -3.56,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6F1AE5D_F2BF_D2A1_41EA_DEA3B8CC5C7C",
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
   "yaw": 172.74,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6FA1E68_F2BF_D36F_41D1_4401BE1D57FB",
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
   "yaw": 4.02,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6C47E72_F2BF_D360_41E1_CD4B5D4658F8",
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
   "yaw": -156.91,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6D0EE7D_F2BF_D361_41C9_DE839F6E1CED",
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
   "yaw": 28.95,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E6DAAE88_F2BF_D3AF_41D0_7B0FCD8C34CE",
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
   "yaw": -165.94,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Bright Shining Love (vocal mix)"
  },
  "class": "MediaAudio",
  "id": "audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD.ogg",
   "mp3Url": "media/audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD.mp3"
  }
 },
 {
  "label": "Bed Rate 11",
  "class": "Photo",
  "width": 500,
  "id": "photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_357FB158_38EC_C6E9_41B6_2A6DAE2BEE81_t.jpg"
 },
 {
  "label": "Wardrobe Rate88",
  "class": "Photo",
  "width": 500,
  "id": "photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_361AC447_39DD_CED8_41C3_47A0E26FCBD3_t.jpg"
 },
 {
  "label": "Side table Rate66",
  "class": "Photo",
  "width": 500,
  "id": "photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_3615C4C4_39D4_4FD9_41B3_BC0161F2D743_t.jpg"
 },
 {
  "label": "Drawer Rack Rate77",
  "class": "Photo",
  "width": 500,
  "id": "photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_379C9ED6_39EF_DBF8_41C6_3091A82A08BB_t.jpg"
 },
 {
  "label": "Wardrobe Rate11",
  "class": "Photo",
  "width": 500,
  "id": "photo_3213B343_38FF_E333_41C7_634F0A3E87A7",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_3213B343_38FF_E333_41C7_634F0A3E87A7.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_3213B343_38FF_E333_41C7_634F0A3E87A7_t.jpg"
 },
 {
  "label": "Bed Rate44",
  "class": "Photo",
  "width": 500,
  "id": "photo_3443C664_38FC_25F5_41C9_3B834E79310F",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_3443C664_38FC_25F5_41C9_3B834E79310F.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_3443C664_38FC_25F5_41C9_3B834E79310F_t.jpg"
 },
 {
  "label": "Side table Rate66",
  "class": "Photo",
  "width": 500,
  "id": "photo_331227F0_38F4_22ED_41C3_5CB441770B81",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_331227F0_38F4_22ED_41C3_5CB441770B81.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_331227F0_38F4_22ED_41C3_5CB441770B81_t.jpg"
 },
 {
  "label": "Tv Panel Rate55",
  "class": "Photo",
  "width": 500,
  "id": "photo_351D55D1_38F4_E72C_41BB_CABD4F489D30",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_351D55D1_38F4_E72C_41BB_CABD4F489D30.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_351D55D1_38F4_E72C_41BB_CABD4F489D30_t.jpg"
 },
 {
  "label": "Tv panel Rate66",
  "class": "Photo",
  "width": 500,
  "id": "photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_359BDC9C_390C_E555_41C4_CDF38C8B9C68_t.jpg"
 },
 {
  "label": "Sofa Rate22",
  "class": "Photo",
  "width": 500,
  "id": "photo_35DB7867_3934_6DF3_4183_B864755D89F2",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_35DB7867_3934_6DF3_4183_B864755D89F2.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_35DB7867_3934_6DF3_4183_B864755D89F2_t.jpg"
 },
 {
  "label": "Dining Table Rate11",
  "class": "Photo",
  "width": 500,
  "id": "photo_34263BE9_393C_62FF_419D_F50F60188A51",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_34263BE9_393C_62FF_419D_F50F60188A51.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_34263BE9_393C_62FF_419D_F50F60188A51_t.jpg"
 },
 {
  "label": "Coffee Table Rate88",
  "class": "Photo",
  "width": 500,
  "id": "photo_35FCF895_3934_2D57_41C9_4B001F2EF118",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_35FCF895_3934_2D57_41C9_4B001F2EF118.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_35FCF895_3934_2D57_41C9_4B001F2EF118_t.jpg"
 },
 {
  "label": "Shoe Rack Rate1010",
  "class": "Photo",
  "width": 500,
  "id": "photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9",
  "height": 500,
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9.JPG",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "thumbnailUrl": "media/photo_3413B17D_390C_7FD7_41B4_A3AE0A6B67B9_t.jpg"
 }
], "children": [
 {
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "class": "ViewerArea",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBorderColor": "#000000",
  "progressRight": 10,
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
  "children": [
   {
    "children": [
     "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
     "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
     "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
     "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
     {
      "children": [
       "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
       "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
       "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
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
      "class": "Container",
      "gap": 4,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "layout": "vertical",
      "scrollBarMargin": 2,
      "minHeight": 20,
      "backgroundOpacity": 0,
      "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
      "data": {
       "name": "Container31988"
      },
      "scrollBarOpacity": 0.5,
      "creationPolicy": "delayed",
      "minWidth": 20,
      "shadow": false,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
     "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
     {
      "borderSize": 0,
      "mode": "toggle",
      "paddingBottom": 0,
      "height": 40,
      "width": 40,
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingLeft": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
      "paddingRight": 0,
      "minHeight": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
      "data": {
       "name": "Button31994"
      },
      "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
      "transparencyActive": true,
      "minWidth": 0,
      "shadow": false
     },
     "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "height": "96.479%",
    "width": 360,
    "verticalAlign": "middle",
    "borderRadius": 0,
    "paddingLeft": 0,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "gap": 4,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minHeight": 20,
    "backgroundOpacity": 0,
    "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
    "data": {
     "name": "Container31983"
    },
    "scrollBarOpacity": 0.5,
    "creationPolicy": "delayed",
    "minWidth": 360,
    "shadow": false,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   "this.IconButton_34079587_391C_6733_41B9_CE99BD676CF8"
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
  "class": "Container",
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
 "start": "this.playAudioList([this.audio_3BB48FD6_37D4_D9F8_41CB_D2117E40EAAD]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_34079587_391C_6733_41B9_CE99BD676CF8], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
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
 "buttonToggleMute": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "horizontalAlign": "left",
 "class": "Player",
 "paddingRight": 0,
 "layout": "absolute",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } }
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