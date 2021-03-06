'use strict'

const Config = {
  appTitle: 'Nuxt Headless',
  appTitleShort: 'Nuxt-headless',
  appDescription: 'Nuxt Headless with Wordpress REST API',
  appThemeColor: '#ffffff ',
  appBgColor: '#00172c ',
  appIcon: 'assets/app-icon.png',
  wpDomain: 'https://api.wordpress_site.com/wp-json',
  client: 'https://api.wordpress_site.com',
  url: 'http://your-url.com',
  loadDbName: 'starter_wp',
  api: {
    homePage: '/wp/v2/pages/8/',
    projects: '/wp/v2/casestudies',
    caseStudy: '/wp/v2/casestudies?slug=',
    postFormContact: '/contact-form-7/v1/contact-forms/{your_id}/feedback'
  }
}

export default Config
