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
      "title": "OpenTezos",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "href": "https://github.com/octo-technology/opentezos",
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
          "sidebarPath": "/Users/lol/apps/work/opentezos-docusaurus/my-website/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/octo-technology/opentezos"
        },
        "theme": {
          "customCss": "/Users/lol/apps/work/opentezos-docusaurus/my-website/src/css/custom.css"
        }
      }
    ]
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
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};