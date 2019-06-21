module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // base: '/docs/dist/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com' },
      {
        text: 'Dropdown',
        items: [
          { text: 'Item 1', link: '/dropdown/item1' },
          { text: 'Item 2', link: '/dropdown/item2' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'frontend',
        'backend'
      ]
    },
    lastUpdated: 'Last Updated', // string | boolean
  },
  plugins: [
    'vuepress-plugin-container'
  ]
}
