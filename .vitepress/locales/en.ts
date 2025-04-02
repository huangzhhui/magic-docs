export default {
  label: 'English',
  lang: 'en',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'Development', link: '/development/' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Magic Introduction',
          collapsed: false,
          items: [
            { text: 'What is Magic', link: '/tutorial/magic-info/index' },
            { text: 'Terminology', link: '/tutorial/magic-info/names' },
          ]
        },
        {
          text: 'Quick Start',
          collapsed: false,
          items: [
            { text: 'Quick Introduction', link: '/tutorial/quick-start/quick-introduction' },
          ]
        },
        {
          text: 'Basics',
          collapsed: false,
          items: [
            { text: 'Start Node', link: '/tutorial/basic/start-node' },
            { text: 'Reply Node', link: '/tutorial/basic/reply-node' },
            { text: 'Wait Node', link: '/tutorial/basic/wait-node' },
            { text: 'End Node', link: '/tutorial/basic/end-node' },
          ]
        }
      ],
      '/development/': [
        {
          text: 'Development Guide',
          items: [
            { text: 'Quick Introduction', link: '/development/quick-introduction' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Magic Docs'
    }
  }
} 