/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tolarys-toulouse.fr',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.tolarys-toulouse.fr/sitemap.xml',
    ],
  },
}
