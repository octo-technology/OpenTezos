export default {
  "title": "OpenTezos",
  "tagline": "The full encyclopedia of Tezos",
  "url": "https://opentezos.com",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "OpenTezos",
  "projectName": "OpenTezos",
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "OpenTezos",
        "src": "img/logo.svg",
        "srcDark": "img/logo-dark.svg"
      },
      "items": [
        {
          "href": "https://github.com/octo-technology/OpenTezos/",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2021 OpenTezos.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIcon": "☀️",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
    },
    "prism": {
      "darkTheme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "theme": {
        "plain": {
          "color": "rgb(36, 41, 46)",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(106, 153, 85)"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "inserted-sign",
              "inserted"
            ],
            "style": {
              "backgroundColor": "rgb(240, 255, 244)",
              "color": "rgb(34, 134, 58)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "rgb(100, 102, 149)"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "rgb(156, 220, 254)"
            }
          },
          {
            "types": [
              "deleted-sign",
              "deleted"
            ],
            "style": {
              "backgroundColor": "rgb(255, 238, 240)",
              "color": "rgb(179, 29, 40)"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "rgb(215, 186, 125)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "rgb(36, 41, 46)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(0, 92, 197)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(0, 92, 197)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "rgb(111, 66, 193)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "known-class-name",
              "class-name"
            ],
            "style": {
              "color": "rgb(227, 98, 9)"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "rgb(209, 105, 105)"
            }
          },
          {
            "types": [
              "property-access"
            ],
            "style": {
              "color": "rgb(0, 92, 197)"
            }
          },
          {
            "types": [
              "method",
              "function",
              "property-access"
            ],
            "style": {
              "color": "rgb(111, 66, 193)"
            }
          },
          {
            "languages": [
              "json"
            ],
            "types": [
              "property"
            ],
            "style": {
              "color": "rgb(3, 47, 98)"
            }
          },
          {
            "languages": [
              "json"
            ],
            "types": [
              "string"
            ],
            "style": {
              "color": "rgb(3, 47, 98)"
            }
          },
          {
            "languages": [
              "json"
            ],
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(0, 92, 197)"
            }
          },
          {
            "languages": [
              "json"
            ],
            "types": [
              "comment"
            ],
            "style": {
              "backgroundColor": "rgb(179, 29, 40)",
              "color": "rgb(250, 251, 252)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "sidebarCollapsible": true,
    "siteID": "developers",
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/lol/apps/work/opentezos-docusaurus/opentezos/src/sidebar/sidebar.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/octo-technology/OpenTezos/tree/main/"
        },
        "theme": {
          "customCss": "/Users/lol/apps/work/opentezos-docusaurus/opentezos/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    "/Users/lol/apps/work/opentezos-docusaurus/opentezos/plugins/webpack/index.js",
    "plugin-image-zoom"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};