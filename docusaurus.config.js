module.exports = {
  title: 'Gamelet',
  tagline: 'Online game making platform',
  url: 'https://doc.gamelet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Gamelet', // Usually your GitHub org/user name.
  projectName: 'doc.gamelet.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Gamelet',
      logo: {
        alt: 'Gamelet',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://code.gamelet.com',
          label: 'Code',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://gamelet.online',
          label: 'Gamelet Online',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sites',
          items: [
            {
              label: 'Doc',
              to: 'docs/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
            {
              label: 'Code Gamelet',
              to: 'https://code.gamelet.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gamelet Online',
              href: 'https://gamelet.online',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/haskasu',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/gamelet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Gamelet_Online',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Players Blog',
              href: 'https://blog.gamelet.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/haskasu/doc.gamelet.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gamelet, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
