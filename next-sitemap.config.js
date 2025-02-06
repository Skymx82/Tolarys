/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tolarys.fr',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://tolarys.fr/sitemap.xml',
    ],
  },
}
