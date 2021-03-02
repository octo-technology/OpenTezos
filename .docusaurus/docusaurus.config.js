export default {
  "title": "My Site",
  "tagline": "The tagline of my site",
  "url": "https://opentezos.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "OpenTezos",
  "projectName": "OpenTezos",
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
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
      "copyright": "Copyright © 2021 My Project, Inc. Built with Docusaurus.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/lol/apps/work/opentezos-docusaurus/opentezos/sidebars.js",
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