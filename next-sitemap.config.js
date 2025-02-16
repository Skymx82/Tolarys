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
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
    ],
    additionalPaths: async (config) => {
      return [{
        loc: '/Logo.png',
        changefreq: 'never',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }]
    },
  },
}
