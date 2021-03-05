const darkCodeTheme = require('prism-react-renderer/themes/palenight')
const lightCodeTheme = require('prism-react-renderer/themes/github')

module.exports = {
  title: 'OpenTezos',
  tagline: 'The full encyclopedia of Tezos',
  url: 'https://opentezos.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OpenTezos', // Usually your GitHub org/user name.
  projectName: 'OpenTezos', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'OpenTezos',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          href: 'https://github.com/octo-technology/OpenTezos/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} OpenTezos.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '☀️',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
    },
    sidebarCollapsible: true,
    siteID: 'developers',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./src/sidebar/sidebar.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/octo-technology/OpenTezos/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('./plugins/webpack'), 'plugin-image-zoom'],
}
